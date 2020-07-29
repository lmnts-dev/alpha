// Core
import React from "react";

// Components
import { SectionLoop } from "../components/core/SectionLoop";

// Types
import { GetStaticProps, NextPage } from "next";
import { LMNTS_App_Data } from "../constants/types";

// Utilities
import { QueryUtils, Queries } from "../constants/Queries";
import { SiteHead } from "../components/core/SiteHead";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_HomePage = {
  __data: LMNTS_App_Data;
};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const FrontPage: NextPage<LMNTS_HomePage> = (props) => {
  let { __data } = props;
  let { __document, previewMode, __global } = __data;
  let { title } = __global.config;

  return (
    <div className="__route-home-page">
      {/* _________________________________________ */}
      {/* Site head & meta tags */}
      <SiteHead title={`${previewMode ? "👀 Preview Mode: " : ""}${title}`} />

      {/* _________________________________________ */}
      {/* Run the loop */}
      {__document && __document.content && __document.content.length > 0 ? (
        <SectionLoop data={__data} content={__document.content} />
      ) : (
        false
      )}
    </div>
  );
};

export default FrontPage;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  return await QueryUtils.initAppData(
    context.preview ? true : false,
    Queries.HomePage()
  );
};
