// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { hexToRGB } from "../../utils/hexToRGB";
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name NumbersHighlightRowStyle
 *
 */
export const NumbersHighlightRowStyle = styled.section`
  /* _________________________________ */
  /* Settings */
  --sectionNumbersHighlightRowBorderStyle: 1px solid
    ${hexToRGB(Theme.Color.Black, 0.08)};
  --sectionNumbersHighlightRowSpacing: calc(${Root.Size} * 2);

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionNumbersHighlightRowSpacing: calc(${Root.Size} / 4);
  }

  /* _________________________________ */
  /* Core Elements */
  .__numbers_row {
    padding: calc(${Root.Size} * 2) 0;

    /* _________________________________ */
    /* Header */
    .numbers-highlight-row-header {
      .__subheadline {
        color: ${Theme.Color.Primary};
        text-align: center;
        display: block;
      }

      h3 {
        text-align: center;
        display: block;
        margin-bottom: calc(${Root.Size});
        font-weight: 600;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          margin-bottom: calc(${Root.Size} / 2);
        }
      }
    }

    /* _________________________________ */
    /* Columns */
    .numbers-highlight-row-columns {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
      }

      /* _________________________________ */
      /* Individual Columns */
      .numbers-highlight-col {
        width: 33.33333%;
        padding: ${Root.Size};
        border-right: var(--sectionNumbersHighlightRowBorderStyle);

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          padding: calc(${Root.Size} / 4);
        }

        &:last-child {
          border-right: 0;
        }

        .counter,
        p {
          display: block;
          text-align: center;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 0.8rem;
          }
        }

        .counter {
          font-size: 3.5rem;
          color: ${Theme.Color.Primary};
          font-weight: 600;
          font-family: ${Theme.Font.Header};
          margin-bottom: calc(${Root.Size} / 4);

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
