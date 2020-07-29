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
 * @name Debugger
 * @author Peter Laxalt
 *
 */
export const DebuggerStyle = styled.div`
  .__pinned {
    position: fixed;
    left: calc(${Root.Size} / 2);
    bottom: calc(${Root.Size} / 2);
    background: #001d27;
    color: ${Theme.Color.White};
    border: 1px solid ${hexToRGB(Theme.Color.Black, 0.04)};
    box-shadow: 0 6px 20px 0 ${hexToRGB(Theme.Color.Black, 0.07)};
    width: calc(${Root.Size});
    height: calc(${Root.Size});
    max-height: calc(100vh - ${Root.Size});
    max-width: calc(50vw - ${Root.Size});
    overflow-y: auto;
    overflow-x: auto;
    resize: both;
    z-index: 999;
    margin: 0;
    padding: calc(${Root.Size} / 2);

    &:before {
      content: "Schema";
      position: absolute;
      top: 2px;
      left: 4px;
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 1px;
      color: ${hexToRGB(Theme.Color.White, 0.75)};
    }

    &.__state {
      left: unset;
      right: calc(${Root.Size} / 2);
      background: snow;
      color: ${Theme.Color.Black};

      &:before {
        content: "State";
        color: ${hexToRGB(Theme.Color.Black, 0.75)};
      }
    }

    &.__opened {
      width: 350px;
      height: 50vh;
    }
  }
`;
