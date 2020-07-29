/**
 *
 * Queries.tsx:
 * @author Peter Laxalt
 * @description
 * This file is basically our mixins to return reusable & sitewide CSS.
 *
 */

// Core
import { css } from "styled-components";

// Constants
import { Theme } from "../Theme";
import { Root } from "../Root";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name CssUtils
 * @description CSS Utility functions. Just like SCSS mixins.
 * @returns A plethora of useful CSS.
 *
 */
export class CssUtils {
  static ObjectFit = (position: "contain" | "cover" = "cover") => {
    return css`
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      object-fit: ${position};
      width: 100%;
      height: 100%;
      object-position: center;
      max-width: 100%;
    `;
  };

  static ForceFullWidth = (
    spacing: string = "0",
    addGutter: boolean = false
  ) => {
    return css`
      width: calc(100% + (${spacing} * 2));
      margin-left: calc(${spacing} * -1);
      margin-right: calc(${spacing} * -1);
      max-width: 100vw;
      ${addGutter
        ? css`
            padding-left: ${spacing};
            padding-right: ${spacing};
          `
        : null}
    `;
  };

  static ShowLoadingIndicator = () => {
    return css`
      background: ${Theme.Color.Primary};

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%, -50%);
        width: calc(${Root.Size} / 3);
        height: calc(${Root.Size} / 3);
        border-radius: 50%;
        background: ${Theme.Color.Accent};
        transition: opacity ${Theme.Base.Transition.Duration}
          ${Theme.Base.Transition.CssEase};
        z-index: 10;
      }
    `;
  };

  static DisableUserSelect = () => {
    return css`
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `;
  };
}
