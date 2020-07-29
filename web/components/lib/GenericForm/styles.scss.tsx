// CardListings Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from "styled-components";
import { Root } from "../../../constants/Root";
import { hexToRGB } from "../../../utils/hexToRGB";
import { Theme } from "../../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name GenericFormDisplayStyle
 * @description Styles for SignUpForm.
 *
 *
 */
export const GenericFormDisplayStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;

  .form-display-headline {
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
  }

  .generic-form-display-inner {
    width: 100%;
    margin: 0 auto;
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

    p {
      text-align: center;

      &:not(.form-disclaimer) {
        margin-bottom: calc(${Root.Size} / 2);
      }
    }
  }
`;

/**
 *
 * @name GenericFormDisplayGlobalStyles
 * @description Global style overrides for the sign up page.
 *
 */

export const GenericFormDisplayGlobalStyles = createGlobalStyle`
  .form-disclaimer {
    text-align: center;
    margin-top: calc(${Root.Size} / 2);
    max-width: 450px;
    width: 100%;

    p,
    ol,
    ul,
    li,
    span,
    a {
      font-size: 1rem;
    }

    span,
    a {
      margin-right: 5px;
    }

    span {
      opacity: 0.5;
    }

    a {
      color: ${Theme.Color.Black};
      opacity: 1;
      text-decoration: none;

      &:hover {
        opacity: 1;
        text-decoration: none;
      }
    }
  }
`;

/**
 *
 * @name GenericFormDisplayConfirmationGlobalStyles
 * @description Styles for the confirmation page.
 *
 */
export const GenericFormDisplayConfirmationGlobalStyles = createGlobalStyle`  
  .__success-screen {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${Theme.Color.Primary} !important;
    z-index: 999;
    color: ${Theme.Color.White};

    .form-display-success-content {
      p {
        margin: 0;
        padding-bottom: calc(${Root.Size} / 2);
      }
    }

    .branding {
      svg {
        fill: ${Theme.Color.White};
      }
    }

    .btn {
      background: ${Theme.Color.White} !important;
      color: ${Theme.Color.Black} !important;
    }

    .form-disclaimer {
      a {
        color: ${Theme.Color.White} !important;
      }
    }
  }
`;
