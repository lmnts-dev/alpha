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
 * @name CallToActionRowStyle
 *
 */
export const CallToActionRowStyle = styled.section`
  /* ____________________________________________ */
  /* Core Styles */
  position: relative;
  overflow: hidden;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left, true)};
  }

  /* ____________________________________________ */
  /* Background Image */
  figure {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${hexToRGB(Theme.Color.White, 1)};
    opacity: 0.2;

    img {
      ${CssUtils.ObjectFit()};
    }
  }

  /* ____________________________________________ */
  /* Inner Grid */
  .inner {
    &.__call_to_action_row {
      position: relative;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: calc(${Root.Size} * 4) 0;

      /* ____________________________________________ */
      /* Headline */
      h3 {
        font-size: 3.25rem;
        font-weight: 600;
        width: 100%;
        max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.85);

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 2rem;
        }
      }

      /* ____________________________________________ */
      /* Text alignment */
      h3,
      span,
      p {
        display: block;
        text-align: center;
      }

      /* ____________________________________________ */
      /* Body */
      p {
        font-size: 1.5rem;
        width: 100%;
        max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.65);

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 1rem;
          padding-bottom: calc(${Root.Size} / 2);
        }
      }
    }
  }
`;
