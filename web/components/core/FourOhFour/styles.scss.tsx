// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import {} from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name FourOhFour
 * @author Peter Laxalt
 *
 */
export const FourOhFourStyle = styled.div`
  min-height: 650px;
  padding-top: ${Root.Nav.Size};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  p {
    padding-bottom: calc(${Root.Size} / 2);
  }
`;
