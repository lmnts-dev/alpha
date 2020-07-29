// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";
import { hexToRGB } from "../../utils/hexToRGB";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name FaqSplitListingsStyle
 *
 */
export const FaqSplitListingsStyle = styled.section`
  /* ________________________________________________ */
  /* Settings */
  --sectionFaqSplitListingsContentWidth: 60%;
  --sectionFaqSplitListingsCaratSize: calc(${Root.Size} / 4);
  --sectionFaqSplitListingIndent: calc(
    var(--sectionFaqSplitListingsCaratSize) + (${Root.Size} / 2)
  );

  /* ________________________________________________ */
  /* Core Styles */
  position: relative;

  /* ________________________________________________ */
  /* Desktop Pseudo Background Color */
  @media (min-width: ${Theme.Base.Media.Width.Md}) {
    background: ${Theme.Color.Background};
    padding-left: ${Root.Grid.Gutter.Left};

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      top: 0;
      left: calc((100% - var(--sectionFaqSplitListingsContentWidth)));
      background: ${Theme.Color.White};
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    background: ${Theme.Color.White};
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
  }

  /* ________________________________________________ */
  /* Inner Grid */
  .inner {
    position: relative;
    z-index: 5;

    /* ________________________________________________ */
    /* Desktop Content Flow */
    @media (min-width: ${Theme.Base.Media.Width.Md}) {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    /* ________________________________________________ */
    /* Columns */
    .faq-split-listings-col {
      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        padding-left: ${Root.Grid.Gutter.Left};
        padding-right: ${Root.Grid.Gutter.Right};
      }

      /* ________________________________________________ */
      /* Headline Column */
      &.__headline {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        background: ${Theme.Color.Background};
        color: ${Theme.Color.Text};

        h1 {
          font-weight: 400;
          font-size: 3rem;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 2rem;
            font-weight: 600;
          }
        }

        /* ________________________________________________ */
        /* Desktop Styles */
        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          width: calc((100% - var(--sectionFaqSplitListingsContentWidth)));
          flex-shrink: 0;
          padding-right: ${Root.Size};
          height: 100vh;
          position: sticky;
          top: 0;
        }

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          /* Inherited from .split_hero */
          padding-top: calc(${Root.Nav.Size} * 2.5);
          padding-bottom: ${Root.Grid.Gutter.Left};
          min-height: 250px;
        }
      }

      /* ________________________________________________ */
      /* Content Column */
      &.__content {
        flex: 1;

        /* ________________________________________________ */
        /* Content Featured Image */
        .faq-split-listings-featured-image {
          width: calc(100% + ${Root.Grid.Gutter.Right});
          padding-bottom: 60%;
          position: relative;
          background: ${Theme.Color.Placeholder};

          img {
            ${CssUtils.ObjectFit()};
          }

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};

            /* Inherited Sizing from .split-hero */
            padding-bottom: 250px;
          }
        }

        /* ________________________________________________ */
        /* FAQ Listings Wrapper */
        .faq-split-listings {
          padding: ${Root.Size} ${Root.Size} calc(${Root.Size} * 3) ${Root.Size};

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding: ${Root.Size} 0;
            ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
          }

          /* ________________________________________________ */
          /* Individual FAQ Listing */
          .faq-listing {
            padding: calc(${Root.Size} / 4);

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding: calc(${Root.Size} / 2) ${Root.Grid.Gutter.Left}
                calc(${Root.Size} / 2) 0;
              border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};

              &:last-child {
                border-bottom: unset;
              }
            }

            /* ________________________________________________ */
            /* Toggle buttons */
            .faq-listing-toggle {
              display: none;
              width: 0;
              height: 0;
              visibility: hidden;
            }

            /* ________________________________________________ */
            /* Labels */
            .faq-listing-label {
              cursor: pointer;
              position: relative;
              display: block;
              line-height: 1.5;
              padding-left: var(--sectionFaqSplitListingIndent);

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                padding-right: var(--sectionFaqSplitListingIndent);
              }

              .label-el {
                font-size: 1.5rem;
                opacity: 0.65;

                &:hover {
                  opacity: 1;
                }

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  font-size: 1.25rem;
                  font-weight: 500;
                }
              }

              /* ________________________________________________ */
              /* Icons */
              .ico-carat {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  left: unset;
                  right: 0;
                }

                figure {
                  position: relative;
                  width: var(--sectionFaqSplitListingsCaratSize);
                  height: var(--sectionFaqSplitListingsCaratSize);
                  transform: rotate(-45deg);

                  &:before,
                  &:after {
                    content: "";
                    position: absolute;
                    background: ${Theme.Color.CoveredGreen};
                  }

                  &:before {
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                  }

                  &:after {
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                  }
                }
              }

              &:hover {
                opacity: 1;
              }
            }

            /* ________________________________________________ */
            /* Content */
            .faq-block-content {
              display: none;
              padding: calc(${Root.Size} / 2) 0 ${Root.Size}
                var(--sectionFaqSplitListingIndent);

              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                padding-right: ${Root.Grid.Gutter.Right};
                padding-left: ${Root.Grid.Gutter.Left};
              }

              ol {
                list-style-type: decimal;
                font-size: 1.2rem;
                padding: 0;
                padding-left: calc(${Root.Size} / 3);

                li {
                  font-weight: bold;
                  padding-bottom: calc(${Root.Size} / 4);
                }
              }
            }

            /* ________________________________________________ */
            /* Toggle for showing / hiding FAQ item */
            .faq-listing-toggle {
              &:checked {
                + .faq-listing-label {
                  .label-el {
                    opacity: 1;
                  }

                  .ico-carat {
                    figure {
                      transform: translateY(-50%) rotate(45deg);
                    }
                  }

                  + .faq-block-content {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
