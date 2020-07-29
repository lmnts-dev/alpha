// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
// __________________________________________________________________________________________

type LMNTS_InnerGridStyle = {
  startBelowNav?: boolean;
};

/**
 *
 * @name InnerGrid
 * @author Peter Laxalt
 *
 */
export const InnerGridStyle = styled.div<LMNTS_InnerGridStyle>`
  max-width: ${Theme.Base.Grid.SiteWidth};
  width: 100%;
  margin: ${(props) =>
    props.startBelowNav !== true
      ? "0 auto"
      : "calc(" +
        Root.Nav.Size +
        " + " +
        Theme.Base.Grid.SiteFrameWidth +
        ")" +
        " auto 0 auto"};
`;
