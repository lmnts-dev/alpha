// CardListings Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from "styled-components";
import { Root } from "../../constants/Root";
import { hexToRGB } from "../../utils/hexToRGB";
import { Theme } from "../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name FullscreenFormDisplayStyle
 * @description Styles for SignUpForm.
 *
 *
 */
export const FullscreenFormDisplayStyle = styled.div`
  --formDisplayFormWidth: 450px;
  --formDisplayOffset: 20vh;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --formDisplayOffset: 10vh;
  }

  height: calc(100vh - var(--formDisplayOffset));
  margin-top: var(--formDisplayOffset);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  max-width: var(--formDisplayFormWidth);
  width: 100%;

  .form-display-headline {
    font-size: 2.5rem;
    text-align: center;
    max-width: var(--formDisplayFormWidth);
    width: 100%;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      font-size: 2rem;
      padding-top: calc(${Root.Size} / 2);
      padding-bottom: calc(${Root.Size} / 2);
    }
  }

  .fs-form-display-inner {
    max-width: var(--formDisplayFormWidth);
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-top: calc(${Root.Size} / 2);

    .branding {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: ${Root.Size};

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        margin-bottom: calc(${Root.Size} * 2);
      }
    }

    .btn {
      font-size: var(--formFontSize);
      width: 100%;
      height: var(--formHeight);
      max-width: var(--formDisplayFormWidth);
      margin: 0 auto;
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
 * @name FullscreenFormDisplayGlobalStyles
 * @description Global style overrides for the sign up page.
 *
 */

export const FullscreenFormDisplayGlobalStyles = createGlobalStyle`
  body, main {
    background-color: ${Theme.Color.Ice} !important;
  }


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

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        font-size: .8rem;
      }
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
 * @name FullscreenFormDisplayConfirmationGlobalStyles
 * @description Styles for the confirmation page.
 *
 */
export const FullscreenFormDisplayConfirmationGlobalStyles = createGlobalStyle`
  body, main, html {
    background-color: ${Theme.Color.Primary} !important;
  }

  .__success-screen {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${Theme.Color.Primary} !important;
    z-index: 999;
    color: ${Theme.Color.White};
    max-width: unset;

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
