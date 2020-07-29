// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { LoaderDot } from "../../../constants/styles/Animation";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name Loader
 * @author Peter Laxalt
 *
 */
export const LoaderStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${Theme.Color.White};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .dot {
    min-width: 15px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #eee;
    margin: 4px;
  }

  .dot-1,
  .dot-2,
  .dot-3 {
    animation: ${LoaderDot} 1.4s infinite both;
  }

  .dot-2 {
    animation-delay: 0.2s;
  }

  .dot-3 {
    animation-delay: 0.4s;
  }
`;
