/**
 *
 * Queries.tsx:
 * @author Peter Laxalt
 * @description
 * This file is primarily used to manage our site's queries and the
 * manipulation of data that comes with them.
 *
 */

import groq from "groq";
import { Sanity, SanityPreview } from "../clients";
import { LMNTS_App_Data } from "./types";
import { SectionLoopQuery } from "../components/core/SectionLoop";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name Queries
 * @description Our Site Queries.
 * @returns A plethora of useful GROQ queries to fetch data.
 *
 */

export class Queries {
  /**
   *
   * @name NavigationData
   *
   */

  static NavigationData = () => {
    return groq`*[_id == "navigationConfig"][0]`;
  };

  /**
   *
   * @name HomePage
   *
   */

  static HomePage = () => {
    return groq`*[_type == "page" && slug.current == "home-page"][0]${SectionLoopQuery}`;
  };

  /**
   *
   * @name ConfigData
   *
   */

  static ConfigData = () => {
    return groq`*[_type == "config"][0]`;
  };

  /**
   *
   * @name AllDynamicPages
   *
   */

  static AllDynamicPages = () => {
    return groq`*[_type == "page" && slug.current != "home-page"]${SectionLoopQuery}`;
  };

  /**
   *
   * @name DynamicPage
   *
   */

  static DynamicPage = (slug: string | string[]) => {
    if (Array.isArray(slug)) {
      let query = groq`*[_type == "page" && slug.current == "${slug[0]}"][0]${SectionLoopQuery}`;

      console.log(`👀 DynamicPage: Running query for '${slug}'.`);
      // console.log(`👀 DynamicPage: Running query '${query}'.`);
      console.log(`👀 DynamicPage: Running as {string}[].`);

      return query;
    } else {
      let query = groq`*[_type == "page" && slug.current == "${slug}"][0]${SectionLoopQuery}`;

      console.log(`👀 DynamicPage: Running query for '${slug}'.`);
      // console.log(`👀 DynamicPage: Running query '${query}'.`);
      console.log(`👀 DynamicPage: Running as {string}.`);

      return query;
    }
  };

  /**
   *
   * @name ChannelPage
   *
   */

  static ChannelPage = (slug: string | string[]) => {
    if (Array.isArray(slug)) {
      let query = groq`*[_type == "channel" && slug.current == "${slug[0]}"][0]${SectionLoopQuery}`;

      console.log(`👀 ChannelPage: Running query for '${slug}'.`);
      // console.log(`👀 ChannelPage: Running query '${query}'.`);
      console.log(`👀 ChannelPage: Running as {string}[].`);

      return query;
    } else {
      let query = groq`*[_type == "channel" && slug.current == "${slug}"][0]${SectionLoopQuery}`;

      console.log(`👀 ChannelPage: Running query for '${slug}'.`);
      // console.log(`👀 ChannelPage: Running query '${query}'.`);
      console.log(`👀 ChannelPage: Running as {string}.`);

      return query;
    }
  };

  /**
   *
   * @name AllChannelPages
   *
   */

  static AllChannelPages = () => {
    return groq`*[_type == "channel"]${SectionLoopQuery}`;
  };

  /**
   *
   * @name FooterData
   *
   */

  static FooterData = () => {
    return groq`*[_id == "footerConfig"][0]`;
  };

  /**
   *
   * @name AllArticles
   *
   */

  static AllArticles = () => {
    return groq`*[_type == "article"]{
      ..., 
      "author": author->,
      "featured_image": featured_image.asset->,
      "thumbnail_image": thumbnail_image.asset->
    }`;
  };

  static CurrentArticle = () => {
    return groq`*[_type == "article" && slug.current == $slug][0]{
      ..., 
      "author": author->,
      "featured_image": featured_image.asset->,
      "thumbnail_image": thumbnail_image.asset->,
      "content": content[]{ 
          ..., 
          "image": image.asset->,
          "images": images[].asset->, 
          "items": items[]{ 
            ..., "image" : image.asset-> 
          } 
       }
    }`;
  };

  /**
   *
   * @name Carriers
   *
   */

  static Carriers = () => {
    return groq`*[_type == "carrier"]{
      ...,
      "logo": logo.asset->,
      "ratings": ratings[]{
        ...,
        "logo": logo.asset->
      }
    }`;
  };

  /**
   *
   * @name FaqItems
   *
   */

  static FaqItems = () => {
    return groq`*[_type == "faq"]`;
  };

  /**
   *
   * @name PressItems
   *
   */

  static PressItems = () => {
    return groq`*[_type == "press"]`;
  };
}

// __________________________________________________________________________________________

/**
 *
 * @name QueryUtils
 * @description Our functions to manipulate data coming in.
 * @example
 * import { QueryUtils } from "../constants/QueryUtils"
 * QueryUtils.restructureProjectData(data);
 *
 */
export class QueryUtils {
  /**
   *
   * @name getSanityClient
   * @param {boolean} preview : Whether preview mode is true or not.
   * @returns Either a production Sanity Client or a preview mode Sanity Client.
   *
   */
  static getSanityClient = (preview: boolean) => {
    if (preview) {
      // Logs to the server.
      console.log("👀 Loading Preview Data");

      return SanityPreview;
    } else {
      // Logs to the server.
      console.log("⚡️ Loading Production Data");

      return Sanity;
    }
  };

  /**
   *
   * @name initAppData
   * @description Load all of our data.
   * @returns All of our available data.
   * @param {boolean} preview : A boolean if we are to load preview data or not.
   * @param {string?} documentQuery : An optional groq query to include specific data in the returned `__document` object.
   *
   */
  static initAppData = async (preview: boolean, documentQuery?: string) => {
    let SanityClient = QueryUtils.getSanityClient(preview);

    let __data: LMNTS_App_Data = {
      // allContent: await SanityClient.fetch(groq`*`),
      __nav: await SanityClient.fetch(Queries.NavigationData()),
      __footer: await SanityClient.fetch(Queries.FooterData()),
      __global: {
        carriers: await SanityClient.fetch(Queries.Carriers()),
        faq: await SanityClient.fetch(Queries.FaqItems()),
        press: await SanityClient.fetch(Queries.PressItems()),
        config: await SanityClient.fetch(Queries.ConfigData()),
      },
      __document: documentQuery ? await SanityClient.fetch(documentQuery) : {},
      previewMode: preview,
    };

    /**
     *
     * Return our Server Data
     *
     */
    return {
      props: {
        __data: __data,
      },
    };
  };
}
