// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * Layout.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Layout Styles.
 *
 */
export const LayoutStyle = styled.main`
  width: 100%;
  min-height: 80vh;
  padding: ${Root.Grid.Gutter.Top} ${Root.Grid.Gutter.Right} ${Root.Grid.Gutter.Bottom} ${Root.Grid.Gutter.Left};
  background-color: ${Theme.Color.White};
  position: relative;
`;
