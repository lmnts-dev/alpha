// Imports
//////////////////////////////////////////////////////////////////////

// Core
// import React from "react";
import { createGlobalStyle } from "styled-components";

// Styles
// import { Typography } from "./Font";
// import { Palette } from "./Color";
import { Theme } from "../Theme";
import { Root } from "../Root";
import { hexToRGB } from "../../utils/hexToRGB";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * Form Styles Component
 * @author Peter Laxalt
 * @description This is the global styles for forms throughout the app.
 *
 */
export const GlobalFormStyles = createGlobalStyle`

  :root {
    /* Form Settings */
    --formBorderRadius: 0px;
    --formFontSize: 1rem;
    --formBorderStyles: 1px solid ${hexToRGB(Theme.Color.Black, 0.05)};
    --formBoxShadow: 0px 5px 5px 0px ${hexToRGB(Theme.Color.Black, 0.09)};
    --formBackgroundColor: ${Theme.Color.White};
    --formPadding: calc(${Root.Size} / 4);
    --formMargin: 0 0 calc(${Root.Size} / 4) 0;
    --formHeight: calc(${Root.Size} * .95);
    --formTextColor: ${hexToRGB(Theme.Color.Black, 1)};

    @media(max-width: ${Theme.Base.Media.Width.Sm}) {
      --formBorderRadius: 0px;
      --formFontSize: 1rem;
      --formBorderStyles: 1px solid ${hexToRGB(Theme.Color.Black, 0.05)};
      --formBoxShadow: 0px 5px 5px 0px ${hexToRGB(Theme.Color.Black, 0.09)};
      --formBackgroundColor: ${Theme.Color.White};
      --formPadding: calc(${Root.Size} / 4);
      --formMargin: 0 0 calc(${Root.Size} / 4) 0;
      --formHeight: calc(${Root.Size} * 1.25);
      --formTextColor: ${hexToRGB(Theme.Color.Black, 1)};
    }
  }

  .form-group {
    /* Core Styles */
    background: var(--formBackgroundColor);
    border-radius: var(--formBorderRadius);
    border: var(--formBorderStyles);
    box-shadow: var(--formBoxShadow);
    font-size: var(--formFontSize);
    margin: var(--formMargin);
    width: 100%;
    /* overflow: hidden; */
    position: relative;

    /* Underlines */
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: ${Theme.Color.Primary};
      transition: all .25s ease;
      transform: scaleX(0);
      transform-origin: left bottom;
    }

    &:focus-within {
      &:after {
        transform: scaleX(1);
      }
    }

    /* Core Elements */
    input {
      width: 100%;
      border: 0;
      color: var(--formTextColor);
      outline: 0;
      padding: 5px var(--formPadding) 0px var(--formPadding);
      height: var(--formHeight);

      &:disabled,
      &[disabled] {
        background: var(--formBackgroundColor);
      }

      &:focus, &:valid {
        ~ label {
          transform: translate(var(--formPadding), -135%) scale(.69);
        }
      }
    }

    &.__form-group-dropdown {
      position: relative;

      .__input-dropdown {
        position: relative;
        cursor: pointer;

        ~ .__input-options {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          top: calc(var(--formHeight));
          display: none;
          box-shadow: var(--formBoxShadow);
          z-index: 666;
          background: var(--formBackgroundColor);

          &:active {
            li {
              animation: toHidden 0s ease;
              animation-delay: .5s;
            }
          }

          li {
            padding: 0 var(--formPadding);
            height: var(--formHeight);
            display: flex;
            align-items: center;
            cursor: pointer;
            justify-content: flex-start;
            background: var(--formBackgroundColor);
            border-top: 1px solid ${hexToRGB(Theme.Color.Black, 0.1)};
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:hover {
              background: ${Theme.Color.Primary};
              color: ${Theme.Color.White};
            }
          }
        }
      }

      &:hover {
        .__input-options {
          display: block;
        }
      }

      &.__selected {
        label {
          transform: translate(var(--formPadding), 0%) scale(.69);
          top: 7px;
        }
      }

      /* Dropdown Arrow */
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        right: var(--formPadding);
        transform: translateY(-50%);
        width: 0;
        height: 0;
        z-index: 10;
        border-left: calc(var(--formPadding) / 2) solid transparent;
        border-right: calc(var(--formPadding) / 2) solid transparent;
        border-top: calc(var(--formPadding) / 2) solid ${Theme.Color.Black};
      }
    }

    /* ______________________________________ */
    /* Date Pickers */
    &.__form-group-date-picker {
      .__input-dropdown {
        ~ .__input-options {
          border-top: 1px solid ${hexToRGB(Theme.Color.Black, 0.1)};
          text-align: center;
          padding: var(--formPadding);
        }
      }
    }

    /* ______________________________________ */
    /* Labels */
    label {
      position: absolute;
      left: 0;
      top: 50%;
      transform-origin: top left;
      transform: translate(var(--formPadding), -50%);
      opacity: .5;
      pointer-events: none;
      transition: all .25s ease;
    }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: var(--formBorderStyles);
      background: var(--formBackgroundColor);
      -webkit-text-fill-color: var(--formTextColor);
      -webkit-box-shadow: none;
      box-shadow: none;
      transition: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-animation: autofill 0s forwards;
      animation: autofill 0s forwards;
    }

    @keyframes autofill {
      100% {
        background: transparent;
        color: inherit;
        font-size: inherit;
      }
    }

    @-webkit-keyframes autofill {
      100% {
        background: transparent;
        color: inherit;
        font-size: inherit;
      }
    }

    @keyframes toHidden {
      100% {
        opacity: 0;
        pointer-events: none;
        visiblity: hidden;
        display: none;
      }
    }
  }

  /* DayPicker Library Overrides */
  /* ________________________________________________ */
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside),
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background: ${Theme.Color.Primary};
  }

  .DayPicker-Day--disabled {
    pointer-events: none !important;
    cursor: not-allowed !important;
  }

`;
