// Core
import React from "react";

// Styles
import { LoaderStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Loader = {};

/**
 *
 * @name Loader
 * @description A simple Loader component.
 *
 */
export const Loader: React.FunctionComponent<LMNTS_Loader> = ({}) => {
  return (
    <LoaderStyle>
      <div className="dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </LoaderStyle>
  );
};

// End Component
// __________________________________________________________________________________________
