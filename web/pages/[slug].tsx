// Core
import React from "react";

// Components
import { SectionLoop } from "../components/core/SectionLoop";

// Constants

// Types
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { LMNTS_App_Data, LMNTS_DynamicPage } from "../constants/types";

// Utilities
import { QueryUtils, Queries } from "../constants/Queries";
import { FourOhFour } from "../components/core/FourOhFour";
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
const DynamicPage: NextPage<LMNTS_HomePage> = (props) => {
  let { __data } = props;
  let { __document, previewMode, __global } = __data;
  let { title } = __global.config;

  if (__document) {
    return (
      <div className={`__route-dynamic-page __slug-${__document.slug.current}`}>
        {/* _________________________________________ */}
        {/* Site head & meta tags */}
        <SiteHead
          title={`${previewMode ? "👀 Preview Mode: " : ""}${title} | ${
            __document.title
          }`}
        />

        {/* _________________________________________ */}
        {/* Run the loop */}
        {__document && __document.content && __document.content.length > 0 ? (
          <SectionLoop data={__data} content={__document.content} />
        ) : (
          <FourOhFour />
        )}
      </div>
    );
  } else {
    return <FourOhFour />;
  }
};

export default DynamicPage;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 *
 */

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const allPages = await QueryUtils.getSanityClient(true).fetch(
    Queries.AllDynamicPages()
  );

  // console.log("➡️ allPages: ", allPages);

  const paths = allPages.map((page: LMNTS_DynamicPage) => {
    return {
      params: { slug: page.slug.current },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ preview, params }) => {
  // console.log("👀 getStaticProps: { params } = ", params);

  return await QueryUtils.initAppData(
    preview ? true : false,
    params
      ? params.slug
        ? Queries.DynamicPage(params.slug)
        : undefined
      : undefined
  );
};
