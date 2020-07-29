// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { hexToRGB } from "../../utils/hexToRGB";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name PressListingsStyle
 *
 */
export const PressListingsStyle = styled.section`
  margin: 0;

  /* ________________________________________________ */
  /* Inner Grid */
  .inner {
    padding: calc(${Root.Size}) 0 calc(${Root.Size} * 2) 0;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-top: calc(${Root.Size} / 2);
    }

    /* _________________________________________________ */
    /* Individual Listings */
    .press-listing {
      /* ________________________________________________ */
      /* Core Styles */
      display: block;
      max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.75);
      padding: calc(${Root.Size}) 0;
      margin-bottom: calc(${Root.Size} / 2);
      color: ${Theme.Color.Slate};
      border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        margin-bottom: 0;

        &:last-child {
          border-bottom: 0px;
        }
      }

      /* ________________________________________________ */
      /* Headline */
      h3 {
        padding: 0;
        margin: 0;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 1.3rem;
        }
      }

      &:hover {
        text-decoration: none;

        h3 {
          color: ${Theme.Color.CoveredGreen};
        }
      }

      /* ________________________________________________ */
      /* Date & Publisher */
      .press-listing-top {
        display: flex;
        margin-bottom: calc(${Root.Size} / 2);
        padding: 0;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          margin-bottom: calc(${Root.Size} / 4);
        }

        span {
          padding: 0;
          margin-bottom: 0;

          &:first-child {
            color: ${Theme.Color.CoveredGreen};
            margin-right: calc(${Root.Size} / 2);
          }
        }
      }
    }
  }
`;
