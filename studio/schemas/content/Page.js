/**
 *
 * @name Page Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Page Data Model
 *
 */

import { DefaultPage, DefaultPageInitialValues } from "../scaffold/DefaultPage";

// __________________________________________________________________________________________

export const PageRegistry = {
  name: "page",
  title: "Page",
  type: "document",
};

export const Page = {
  ...PageRegistry,
  fields: [
    ...DefaultPage,
  ],
  ...DefaultPageInitialValues,
};

// __________________________________________________________________________________________
