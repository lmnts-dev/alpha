// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Utils
import { CssUtils } from "../../constants/styles/CssUtils";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { hexToRGB } from "../../utils/hexToRGB";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name CircleIconListingsStyle
 *
 */
export const CircleIconListingsStyle = styled.section`
  /**_________________________________________________________________ */
  /** Settings */
  --sectionCircleIconListingMaxWidth: 33.33333%;
  --sectionCircleIconListingPadding: calc(${Root.Size} / 2);
  --sectionCircleIconListingIconMaxWidth: calc(${Root.Size} * 3);
  --sectionCircleIconListingCtaCaratSize: var(
    --sectionCircleIconListingPadding
  );

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionCircleIconListingMaxWidth: 100%;
    --sectionCircleIconListingIconMaxWidth: 100%;
    --sectionCircleIconListingPadding: 0px;
  }

  .inner {
    padding-top: ${Root.Size};
    padding-bottom: ${Root.Size};

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-bottom: 0px;
    }

    &.__circle_icon_listings {
      ul {
        /**_________________________________________________________________ */
        /** Default Settings */
        --themeBackgroundColor: ${Theme.Color.Nightsky};

        /**_________________________________________________________________ */
        /** Core styles */

        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          ${CssUtils.ForceFullWidth(
            "var(--sectionCircleIconListingPadding)",
            false
          )};
          display: flex;
          justify-content: flex-start;
        }

        li {
          /**_________________________________________________________________ */
          /** Settings */
          --sectionCircleIconListingItemThemeColor: var(--themeBackgroundColor);

          /**_________________________________________________________________ */
          /** Core styles */
          max-width: var(--sectionCircleIconListingMaxWidth);
          padding: var(--sectionCircleIconListingPadding);

          .listing-inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            color: ${Theme.Color.Nightsky};
            /* filter: grayscale(); */

            figure {
              width: 50%;
              padding-bottom: 50%;
              background: ${Theme.Color.White};
              border-radius: 50%;
              transition: box-shadow 0.5s ease;
              box-shadow: ${Theme.Color.BoxShadow};
              position: relative;

              span {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 50%;
                height: 50%;
                border-radius: 50%;
              }
            }

            .listing-title {
              display: block;
              margin: calc(var(--sectionCircleIconListingPadding)) 0;
              font-size: 1.5rem;
              font-weight: 600;
              font-family: ${Theme.Font.Header};
            }

            .pseudo-cta {
              position: relative;
              font-size: 1.25rem;
              color: var(--sectionCircleIconListingItemThemeColor);
              padding-top: calc(var(--sectionCircleIconListingPadding) / 2);
              padding-bottom: calc(var(--sectionCircleIconListingPadding) / 2);
              padding-right: calc(
                var(--sectionCircleIconListingCtaCaratSize) +
                  var(--sectionCircleIconListingPadding)
              );

              &:before {
                content: "";
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: var(--sectionCircleIconListingCtaCaratSize);
                height: var(--sectionCircleIconListingCtaCaratSize);
                border-radius: 50%;
                border: 1px solid var(--themeBackgroundColor);
              }

              &:after {
                content: "";
                position: absolute;
                top: 50%;
                right: calc(var(--sectionCircleIconListingCtaCaratSize) / 3.5);
                transform: translateY(-50%) translateX(-50%) rotate(45deg);
                width: calc(var(--sectionCircleIconListingCtaCaratSize) / 4);
                height: calc(var(--sectionCircleIconListingCtaCaratSize) / 4);
                border-top: 1px solid var(--themeBackgroundColor);
                border-right: 1px solid var(--themeBackgroundColor);
              }
            }

            &:hover {
              filter: none;
              text-decoration: none;
              color: ${Theme.Color.Black};

              figure {
                box-shadow: ${Theme.Color.BoxShadowHover};
              }
            }

            /* ________________________________________ */
            /* Responsive */
            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              display: grid;
              padding-bottom: ${Root.Size};
              margin-bottom: ${Root.Size};
              position: relative;

              &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: calc(${Root.Grid.Gutter.Left} * -1);
                right: calc(${Root.Grid.Gutter.Right} * -1);
                height: 1px;
                background: ${hexToRGB(Theme.Color.Black, 0.04)};
              }

              /* ________________________________________ */
              /* Grid */
              grid-template-rows: auto auto auto;
              grid-template-columns:
                [icon-start] calc(${Root.Size} * 2)
                [icon-end content-start] 1fr
                [content-end] 0px;

              figure {
                grid-column-start: icon-start;
                grid-column-end: icon-end;
                grid-row-start: 1;
                grid-row-end: 3;
              }

              .listing-title,
              p,
              .pseudo-cta {
                grid-column-start: content-start;
                grid-column-end: content-end;
              }

              .listing-title {
                grid-row-start: 1;
              }

              p {
                grid-row-start: 2;
              }

              .pseudo-cta {
                grid-row-start: 3;
              }

              /* ________________________________________ */
              /* Icons */
              figure {
                width: calc(100% - (${Root.Size} / 2));
                padding-bottom: calc(100% - (${Root.Size} / 2));
              }

              /* ________________________________________ */
              /* Titles */
              .listing-title {
                font-size: 1.25rem;
                display: block;
                padding-bottom: calc(${Root.Size} / 4);
              }

              /* ________________________________________ */
              /* Descriptions */
              p {
                font-size: 1rem;
              }

              /* ________________________________________ */
              /* Pseudo CTAs */
              .pseudo-cta {
                --sectionCircleIconListingCtaCaratSize: calc(${Root.Size} / 2);

                font-weight: 500;
                font-size: 1rem;
                padding-left: calc(var(--sectionCircleIconListingCtaCaratSize) + calc(var(--sectionCircleIconListingCtaCaratSize) / 2));

                &:before {
                  top: 50%;
                  right: unset;
                  left: 0;
                }

                &:after {
                  top: 50%;
                  right: unset;
                  left: calc(
                    var(--sectionCircleIconListingCtaCaratSize) / 2
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  /* ________________________________________________ */
  /* Section Kerning */
  + .__video_with_benefits_row {
    .__video_with_benefits_row {
      padding-top: ${Root.Size};
    }
  }
`;
