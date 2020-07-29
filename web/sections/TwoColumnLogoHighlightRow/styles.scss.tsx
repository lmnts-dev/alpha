// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Utils
import { CssUtils } from "../../constants/styles/CssUtils";
import { hexToRGB } from "../../utils/hexToRGB";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name TwoColumnLogoHighlightRowStyle
 *
 */
export const TwoColumnLogoHighlightRowStyle = styled.section`
  /* ________________________________________________ */
  /* Core Styles */
  margin: 0;
  padding: 0;

  /* ________________________________________________ */
  /* Desktop Borders */
  @media (min-width: ${Theme.Base.Media.Width.Md}) {
    border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};
  }

  /* ________________________________________________ */
  /* Mobile Fullwidth */
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
  }

  /* ________________________________________________ */
  /* Inner Grid */
  .inner {
    &.__two_column_logo_highlight_row {
      padding: 0;

      /* ________________________________________________ */
      /* Desktop Column Flow */
      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        display: flex;
        flex-wrap: nowrap;
      }

      /* ________________________________________________ */
      /* Column */
      .logo-highlight-col {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        /* ________________________________________________ */
        /* Mobile Borders */
        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};
        }

        /* ________________________________________________ */
        /* Desktop Column Sizing */
        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          flex: 1;
          width: 50%;

          &:first-child {
            border-right: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};
          }

          .logo-highlight-col-media,
          .logo-highlight-col-content {
            width: 50%;
            flex: 1;
          }
        }

        /* ________________________________________________ */
        /* Content */
        .logo-highlight-col-content {
          padding-left: calc(${Root.Size} / 4);
          padding-right: calc(${Root.Size} * 1.5);

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding-left: calc(${Root.Size} / 4);
            padding-right: ${Root.Grid.Gutter.Right};
            padding-top: ${Root.Grid.Gutter.Left};
            padding-bottom: ${Root.Grid.Gutter.Left};
          }

          /* ________________________________________________ */
          /* Description */
          p {
            margin: 0;
            padding: 0;
            font-size: 1rem;
            opacity: 0.75;
          }
        }

        /* ________________________________________________ */
        /* Logo */
        .logo-highlight-col-media {
          padding: calc(${Root.Size} / 2);

          figure {
            width: 100%;
            position: relative;
            padding-bottom: 30%;

            img {
              ${CssUtils.ObjectFit("contain")};
            }
          }

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding: 0 calc(${Root.Size} / 2);
            display: grid;
            place-items: center;

            figure {
              width: calc(${Root.Size} * 2);
              height: calc(${Root.Size} * 2);
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
      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        padding-top: 0;
      }
    }
  }
`;
