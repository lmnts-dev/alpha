// Core
import React from "react";

// Styles
import { FourOhFourStyle } from "./styles.scss";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name FourOhFour
 * @description A generic wrapper to make sure our content has consistent padding & gutters.
 * @param startBelowNav : boolean ? : Add padding to compensate for our Navigation Bar. Defaults to false.
 * @param children : ReactChildren : The elements to wrap element around.
 *
 */
export const FourOhFour: React.FunctionComponent = () => {
  return (
    <FourOhFourStyle>
      <h1>Aw, shucks.</h1>
      <p>We done goofed.</p>
      <Link href="/">
        <a className="btn __theme-btn-covered-green">Go back home</a>
      </Link>
    </FourOhFourStyle>
  );
};

// End Component
// __________________________________________________________________________________________
