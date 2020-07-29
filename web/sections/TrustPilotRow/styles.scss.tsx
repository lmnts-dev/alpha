// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name TrustPilotRowStyle
 *
 */
export const TrustPilotRowStyle = styled.section`
  margin: 0;
  padding-top: calc(${Root.Size} * 2);
  padding-bottom: calc(${Root.Size} * 2);

  h3 {
    font-weight: 600;
  }

  h3, .__subheadline {
    width: 100%;
    text-align: center;
  }

  .__subheadline {
    color: ${Theme.Color.CoveredGreen};
  }

  .trustpilot-widget {
    margin-top: calc(${Root.Size} / 2);
    width: 100%;
  }
`;
