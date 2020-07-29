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
 * @name RepeatingColumnContentRowStyle
 *
 */
export const RepeatingColumnContentRowStyle = styled.section`
  --sectionRepeatingColumnContentRowBorderStyle: 1px solid
    ${hexToRGB(Theme.Color.Black, 0.08)};
  --sectionRepeatingColumnContentRowSpacing: calc(${Root.Size} * 2);
  --sectionRepeatingColumnsPadding: ${Root.Size};

  .__repeating_column_content_row {
    padding: var(--sectionRepeatingColumnContentRowSpacing) 0;

    .__subheadline {
      color: ${Theme.Color.CoveredGreen};
    }

    h3 {
      margin-bottom: calc(${Root.Size});
      font-weight: 600;
    }

    .repeating-column-row-columns {
      display: flex;
      flex-wrap: wrap;
      border-bottom: var(--sectionRepeatingColumnContentRowBorderStyle);
      ${CssUtils.ForceFullWidth("var(--sectionRepeatingColumnsPadding)")};

      .col {
        max-width: 45%;
        padding: 0 var(--sectionRepeatingColumnsPadding);
        border-left: var(--sectionRepeatingColumnContentRowBorderStyle);
        padding-bottom: var(--sectionRepeatingColumnsPadding);

        &:first-child {
          border-left: unset;
        }

        .col-inner {
          figure {
            position: relative;
            width: 75%;
            padding-bottom: 45%;
            border-radius: ${Root.Size};
            overflow: hidden;
            background: ${Theme.Color.Placeholder};

            img {
              ${CssUtils.ObjectFit()};
            }
          }

          h4 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: calc(${Root.Size} / 2);
          }

          p {
            width: 75%;
          }
        }
      }
    }
  }

  + .__numbers_row {
    margin-top: calc(${Root.Size} * -2);

    .inner {
      padding-top: 0;
    }
  }
`;
