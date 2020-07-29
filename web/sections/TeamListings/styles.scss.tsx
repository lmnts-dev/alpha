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
 * @name TeamListingsStyle
 *
 */
export const TeamListingsStyle = styled.section`
  /* ____________________________________ */
  /* Settings */
  --sectionTeamListingsCardSize: 33.3333333%;
  --sectionTeamListingsCardSpacing: calc(${Root.Size} / 6);
  --sectionTeamListingsImageSize: 60%;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionTeamListingsCardSize: 50%;
    --sectionTeamListingsImageSize: 80%;
  }

  /* ____________________________________ */
  /* Global classes */
  margin: calc(${Root.Size} * 3) 0 calc(${Root.Size} * 2) 0;

  .inner {
    &.__team_listings {
      /* ____________________________________ */
      /* Core Classes */
      h3,
      .__subheadline,
      .team-listings-items {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.65);
      }

      .__subheadline {
        color: ${Theme.Color.Primary};
      }

      /* ____________________________________ */
      /* Team listings container */
      .team-listings-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        ${CssUtils.ForceFullWidth(`var(--sectionTeamListingsCardSpacing)`)};
        max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.85);
        margin: 0 auto;
        padding-top: ${Root.Size};

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          max-width: 100vw;
          ${CssUtils.ForceFullWidth(`var(--sectionTeamListingsCardSpacing)`)};
        }

        /* ____________________________________ */
        /* Team listings cards */
        .team-listing {
          width: var(--sectionTeamListingsCardSize);
          padding: var(--sectionTeamListingsCardSpacing)
            var(--sectionTeamListingsCardSpacing) ${Root.Size}
            var(--sectionTeamListingsCardSpacing);

          .team-listing-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .team-listing-row {
              .__name,
              .__position,
              .social-link-listings {
                text-align: center;
                justify-content: center;
              }

              &.__image {
                position: relative;
                width: var(--sectionTeamListingsImageSize);
                padding-bottom: var(--sectionTeamListingsImageSize);
                border-radius: 50%;
                overflow: hidden;

                img {
                  ${CssUtils.ObjectFit()};
                  border-radius: 50%;
                }
              }

              &.__name {
                font-weight: 600;
                font-family: ${Theme.Font.Header};
                display: block;
                font-size: 1.4rem;
                padding-top: calc(${Root.Size} / 2);
                padding-bottom: calc(${Root.Size} / 6);
              }

              &.__position {
                color: ${Theme.Color.Primary};
                font-size: 0.85rem;
                font-weight: 600;
                font-family: ${Theme.Font.Header};
                line-height: 1.4;
                max-width: 60%;
                display: block;
                padding-bottom: calc(${Root.Size} / 4);

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  max-width: 80%;
                }
              }

              &.__social {
                li {
                  background: ${Theme.Color.Primary};

                  span,
                  svg {
                    width: calc(var(--socialMediaIconSize) * 0.65);
                    height: calc(var(--socialMediaIconSize) * 0.65);
                  }

                  svg {
                    fill: ${Theme.Color.Background};
                  }

                  &:hover {
                    box-shadow: 0px 0px 0px 4px
                      ${hexToRGB(Theme.Color.CoveredGreen, 0.15)};
                  }

                  &:active {
                    box-shadow: 0px 0px 0px 4px
                      ${hexToRGB(Theme.Color.CoveredGreen, 0.25)};
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
