// Core
import React from "react";
import App, { AppProps } from "next/app";

// Queries
import { QueryUtils, Queries } from "../constants/Queries";

// Components
import { Layout } from "../components/core/Layout";
import { LMNTS_App_Data } from "../constants/types";

// Vendor
import "react-day-picker/lib/style.css";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_CustomAppState = {};

type LMNTS_CustomAppData = AppProps & {
  __data: LMNTS_App_Data
};

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */
class MyApp extends App<LMNTS_CustomAppData, LMNTS_CustomAppState> {
  render() {
    const { Component, pageProps, __data } = this.props;

    // console.log("👀 this.props from _app: ", this.props);

    // Render our App
    return (
      <Layout __data={__data} {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  // Set our Sanity Client
  let SanityClient = QueryUtils.getSanityClient(false);

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    __data: {
      __nav: await SanityClient.fetch(Queries.NavigationData()),
      __footer: await SanityClient.fetch(Queries.FooterData()),
    }
  };
};

export default MyApp;
