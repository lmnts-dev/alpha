// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Utils
import { hexToRGB } from "../../utils/hexToRGB";
import { CssUtils } from "../../constants/styles/CssUtils";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name ContactFormStyle
 *
 */
export const ContactFormStyle = styled.section`
  /* ___________________________________ */
  /* Core styles */
  margin: 0;
  background-color: ${Theme.Color.White};
  position: relative;
  border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};

  /* ___________________________________ */
  /* The background color */
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${Theme.Color.Background};

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      display: none;
    }
  }

  /* ___________________________________ */
  /* The content */
  .inner {
    position: relative;
    z-index: 5;
    background: none;

    &.__contact_form {
      display: flex;
      flex-wrap: nowrap;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        flex-direction: column-reverse;
      }

      /* ___________________________________ */
      /* Columns */
      .section-col {
        width: 50%;
        padding: calc(${Root.Size} * 2) ${Root.Size};

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left, true)};
          padding-top: calc(${Root.Size} * 2);
          padding-bottom: calc(${Root.Size} * 2);
        }

        /* ___________________________________ */
        /* Common Classes */
        h3 {
          font-size: 1.85rem;
        }

        /* ___________________________________ */
        /* The Form Column */
        &.__form {
          padding-left: ${Root.Size};
        }

        /* ___________________________________ */
        /* The Content Column */
        &.__content {
          color: ${Theme.Color.Text};

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            background-color: ${Theme.Color.Background};
          }

          /* ___________________________________ */
          /* The Contact Info Container */
          .section-contact-info {
            border-left: 1px solid ${Theme.Color.Primary};
            margin-top: ${Root.Size};
            padding-left: calc(${Root.Size} / 2);
            font-size: 1.35rem;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              font-size: 1rem;
            }

            a {
              color: ${Theme.Color.Primary};
              font-weight: bold;
              position: relative;

              &:before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -4px;
                width: 100%;
                height: 1px;
                background: ${Theme.Color.Primary};
                transform: scaleX(0);
                transform-origin: bottom left;
                will-change: transform;
                transition: transform 1s ease;
              }

              &:hover {
                color: ${Theme.Color.Primary};
                text-decoration: none;

                &:before {
                  transform: scaleX(1);
                }
              }
            }

            /* ___________________________________ */
            /* The Contact Info Itself */
            .contact-info {
              .contact-info-row {
                padding-top: calc(${Root.Size} / 2);

                &:first-child {
                  padding-top: 0;
                }

                &.__address-line {
                  + .__address-line {
                    padding-top: calc(${Root.Size} / 6);
                  }
                }

                &.__social {
                  a {
                    &:before {
                      display: none;
                    }
                  }

                  li {
                    margin-right: 3px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /* ___________________________________ */
  /* Layouts */
  &.__layout-media-left {
    .inner {
      &.__contact_form {
        flex-direction: row-reverse;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-direction: column-reverse;
        }

        .section-col {
          &.__form {
            padding-left: 0;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-left: ${Root.Grid.Gutter.Left};
            }
          }
        }
      }
    }
  }

  /* ___________________________________ */
  /* Section Kerning */
  + .__resource_card_listings {
    background: ${Theme.Color.White};
  }
`;
