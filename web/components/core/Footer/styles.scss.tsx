// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Constants

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name Footer
 * @author Peter Laxalt
 *
 */
export const FooterStyle = styled.footer`
  /**_________________________________________________________________ */
  /** Settings */
  --footerVerticalSpacing: calc(${Root.Size} * 3);
  --footerCtaArrowSize: ${Root.Size};

  /**_________________________________________________________________ */
  /** Theme */
  --themeBackgroundColor: ${Theme.Color.Primary};
  --themeTextColor: ${Theme.Color.White};

  /**_________________________________________________________________ */
  /** Core Styles */
  padding-top: 0;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-bottom: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding: 0;
  }

  .fullwidth {
    &.__footer-theme {
      /**_________________________________________________________________ */
      /** Core Styles */
      background: ${Theme.Color.Background};
      color: ${Theme.Color.Text};

      .__footer-grid {
        /**_________________________________________________________________ */
        /** Core Styles */
        color: ${Theme.Color.Text};
        padding-top: ${Root.Grid.Gutter.Top};
        padding-bottom: ${Root.Grid.Gutter.Right};
        padding-left: ${Root.Grid.Gutter.Left};
        padding-right: ${Root.Grid.Gutter.Right};
        font-family: ${Theme.Font.Header};

        /**_________________________________________________________________ */
        /** Core Classes */
        .footer-row {
          display: flex;

          &:last-child {
            padding-bottom: 0;
          }

          /* ____________________________________ */
          &.__footer-cta {
            padding-top: var(--footerVerticalSpacing);
            padding-bottom: calc(var(--footerVerticalSpacing) / 2);
            margin-bottom: calc(var(--footerVerticalSpacing) / 4);
            color: ${Theme.Color.Text};
            position: relative;
            align-items: flex-end;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding-bottom: calc(${Root.Size} * 2);
              padding-right: ${Root.Size};
            }

            &:before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              background: ${Theme.Color.Text};
              opacity: 0.45;
              height: 1px;
            }

            &:after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              background: ${Theme.Color.Text};
              opacity: 1;
              height: 1px;
              transform-origin: bottom left;
              transform: scaleX(0);
              will-change: transform;
              transition: transform 1s ease;
            }

            h3 {
              font-size: 4rem;
              font-weight: 300;
              max-width: 450px;
              margin: 0;
              padding: 0;
              transform-origin: bottom left;
              transform: scale(1);
              will-change: transform;
              transition: transform 0.5s ease;

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                font-size: 3rem;
                padding-bottom: ${Root.Size};
              }
            }

            /* ____________________________________ */
            .footer-cta-pseudo-button {
              --pseudoCtaArrowSize: calc(var(--footerCtaArrowSize) * 0.75);

              font-weight: 400;
              font-size: 2rem;
              padding-left: var(--footerVerticalSpacing);
              position: relative;
              padding-right: var(--footerCtaArrowSize);
              transform: translateX(0%);
              will-change: transform;
              transition: transform 0.5s ease;

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                font-size: 1.5rem;
                padding-left: 0;
              }

              &:before {
                content: "";
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                width: var(--pseudoCtaArrowSize);
                height: var(--pseudoCtaArrowSize);
                border-radius: 50%;
                border: 1px solid ${Theme.Color.Text};
              }

              &:after {
                content: "";
                position: absolute;
                right: calc(var(--pseudoCtaArrowSize) * 0.425);
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
                width: calc(var(--pseudoCtaArrowSize) * 0.25);
                height: calc(var(--pseudoCtaArrowSize) * 0.25);
                border-top: 1px solid ${Theme.Color.Text};
                border-right: 1px solid ${Theme.Color.Text};
              }
            }

            &:hover {
              text-decoration: none;
            }

            @media (min-width: ${Theme.Base.Media.Width.Md}) {
              &:hover {
                &:after {
                  transform: scaleX(1);
                }

                h3 {
                  transform: scale(1.075);
                }

                .footer-cta-pseudo-button {
                  transform: translateX(10%);

                  &:before {
                    background: ${Theme.Color.Text};
                  }

                  &:after {
                    border-top: 1px solid var(--themeBackgroundColor);
                    border-right: 1px solid var(--themeBackgroundColor);
                  }
                }
              }
            }
          }

          /* ____________________________________ */
          &.__link-lists {
            display: flex;
            justify-content: space-between;
            padding-bottom: calc(var(--footerVerticalSpacing) / 2);
            max-width: 80%;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              flex-wrap: wrap;
              max-width: 100%;
            }

            ul {
              padding-left: calc(${Root.Size} / 4);
              padding-right: calc(${Root.Size} / 4);

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                width: 50%;
                font-size: 0.9rem;
              }

              &:first-child {
                padding-left: 0;
              }

              &:last-child {
                padding-right: 0;

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  width: 100%;
                  padding-left: 0;
                  display: flex;
                  flex-wrap: nowrap;

                  li {
                    margin: 0;
                    width: 50%;
                    font-weight: 700;

                    &:first-child {
                      display: none;
                    }

                    &:last-child {
                      padding-left: calc(${Root.Size} / 4);
                    }
                  }
                }
              }

              li {
                padding-bottom: calc(${Root.Size} / 4);
                font-weight: 500;

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  padding-bottom: calc(${Root.Size} / 2);
                }

                &.__header {
                  font-weight: 700;
                }

                a {
                  color: ${Theme.Color.Text};
                  position: relative;

                  &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -4px;
                    width: 100%;
                    height: 1px;
                    background: ${Theme.Color.Text};
                    transform: scaleX(0);
                    transform-origin: bottom left;
                    will-change: transform;
                    transition: transform 1s ease;
                  }

                  &:hover {
                    color: ${Theme.Color.Text};
                    text-decoration: none;

                    &:before {
                      transform: scaleX(1);
                    }
                  }
                }
              }
            }
          }

          /* ____________________________________ */
          &.__disclaimer-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding-bottom: ${Root.Size};
            }

            .footer-branding,
            .footer-social-media,
            .footer-disclaimer {
              padding-left: calc(${Root.Size} / 4);
              padding-right: calc(${Root.Size} / 4);

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                padding: 0;
                padding-bottom: ${Root.Size};
              }
            }

            .footer-social-media {
              svg {
                fill: ${Theme.Color.Text};
              }
            }

            .footer-branding {
              padding-left: 0;

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                display: none;
              }
            }

            .footer-disclaimer {
              padding-right: 0;
            }
          }
        }
      }
    }
  }
`;
