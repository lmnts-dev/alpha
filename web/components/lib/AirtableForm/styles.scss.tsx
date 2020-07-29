// CardListings Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { hexToRGB } from "../../../utils/hexToRGB";
import { Theme } from "../../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name AirtableFormStyle
 * @description Default styles for forms.
 *
 */
export const AirtableFormStyle = styled.div`
  --formDisplayFormWidth: 450px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;

  .btn {
    font-size: var(--formFontSize);
    width: 100%;
    height: var(--formHeight);
  }

  .__btn-previous {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    width: ${Root.Size};
    height: ${Root.Size};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};
    cursor: pointer;
    outline: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .ico {
      opacity: 0.5;
    }

    &:hover {
      background: ${Theme.Color.White};

      .ico {
        opacity: 1;
      }
    }

    &:active {
      border: 3px solid ${hexToRGB(Theme.Color.Black, 0.08)};
    }
  }
`;
