/**
 *
 * @name Theme Registry
 * @author Peter Laxalt
 * @description
 * This is where we register our Themes to show up
 * in the Sanity builder.
 *
 */

import { PageTheme, PageLayout } from "../scaffold/Theme";
import { Sections } from "../scaffold/Sections";
import { DefaultOpenGraph } from "./DefaultOpenGraph";

// __________________________________________________________________________________________

export const DefaultPage = [
  {
    name: "title",
    title: "Title",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    description:
      "This is how to find your page. F.e. 'www.yoursite.com/slug-goes-here'. You can autogenerate it from the title, or if you'd like to set it as your homepage, add 'home-page' here and make sure it's the only page with that slug.",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
  },
  ...PageTheme,
  ...PageLayout,
  Sections(),
  ...DefaultOpenGraph,
];

export const DefaultPageInitialValues = {
  initialValue: {
    page_theme: { _type: "object", theme_type: "auto" },
    page_layout: { _type: "object", layout: "__layout-default" },
  },
};
