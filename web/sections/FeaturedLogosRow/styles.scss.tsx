// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name FeaturedLogosRowStyle
 *
 */
export const FeaturedLogosRowStyle = styled.section`
  /* ___________________________________________ */
  /* Core Styles */
  background: ${Theme.Color.Ice};

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
  }

  /* ___________________________________________ */
  /* Inner Grid */
  .inner {
    &.__featured_logos_row {
      padding: calc(${Root.Size} * 2) 0;

      /* ___________________________________________ */
      /* Header */
      h3 {
        text-align: center;
        font-size: 2rem;
        opacity: 0.75;
        font-weight: 600;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 1.8rem;
        }
      }

      /* ___________________________________________ */
      /* Listings */
      .featured-logos-row-listings {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        .featured-logo-listing {
          width: 20%;
          padding: calc(${Root.Size} / 4);

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            width: 50%;
            padding: ${Root.Size};
            padding-bottom: 0;
          }

          /* ___________________________________________ */
          /* Logo */
          figure {
            width: 100%;
            padding-bottom: 50%;
            position: relative;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-bottom: 30%;
            }

            img {
              ${CssUtils.ObjectFit("contain")};
            }
          }
        }
      }
    }
  }
`;
