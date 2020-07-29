// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { hexToRGB } from "../../../utils/hexToRGB";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name SocialMediaLinksStyle
 *
 */
export const SocialMediaLinksStyle = styled.ul`
  /* ____________________________________ */
  /* Settings */
  --socialMediaIconSize: calc(${Root.Size} / 3);

  /* ____________________________________ */
  /* Core Styles */
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;

  /* ____________________________________ */
  /* Items */
  li {
    /* ____________________________________ */
    /* Core Styles */
    margin-right: calc(var(--socialMediaIconSize) * 1);
    background: ${hexToRGB(Theme.Color.Black, 0)};
    border-radius: 50%;
    padding: calc(var(--socialMediaIconSize) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background: ${hexToRGB(Theme.Color.Black, 0.04)};
    }

    &:active {
      background: ${hexToRGB(Theme.Color.Black, 0.09)};
    }

    /* ____________________________________ */
    /* Links */
    a {
      width: var(--socialMediaIconSize);
      height: var(--socialMediaIconSize);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }

    span,
    svg {
      width: var(--socialMediaIconSize);
      height: var(--socialMediaIconSize);
    }

    svg {
      fill: ${Theme.Color.Primary};
    }
  }
`;

export default SocialMediaLinksStyle;
