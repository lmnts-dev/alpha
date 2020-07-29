// Core
import React from "react";

// Components
import { FourOhFour } from "../components/core/FourOhFour";
import { NextPage } from "next";
import { SiteHead } from "../components/core/SiteHead";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_HomePage = {};

/**
 *
 * pages/404.tsx
 * @author Peter Laxalt
 * @description The website 404 page.
 *
 */
const FourOhFourPage: NextPage<LMNTS_HomePage> = () => {
  return (
    <div className="__route-four-oh-four">
      {/* _________________________________________ */}
      {/* Site head & meta tags */}
      <SiteHead title={`🤦‍♀️ Uh oh!`} />

      {/* _________________________________________ */}
      {/* 404 Page */}
      <FourOhFour />
    </div>
  );
};

export default FourOhFourPage;
