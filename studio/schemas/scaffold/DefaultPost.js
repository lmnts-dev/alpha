/**
 *
 * @name DefaultPost
 * @author Peter Laxalt
 * @description
 * This the base post scaffold.
 *
 */

import { Theme, PageTheme } from "../scaffold/Theme";
import { Sections } from "../scaffold/Sections";
import { DefaultOpenGraph } from "./DefaultOpenGraph";

// __________________________________________________________________________________________

export const DefaultPost = [
  {
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
    validation: (Rule) => Rule.required(),
  },
  {
    name: "author",
    title: "Author",
    type: "reference",
    to: [{ type: "author" }],
    validation: (Rule) => Rule.required(),
  },
  {
    name: "category",
    title: "Category",
    type: "array",
    of: [{ type: "string" }],
  },
  {
    name: "featured_image",
    title: "Featured Image",
    type: "image",
    options: {
      hotspot: true,
    },
  },
  Sections(),
  {
    name: "isFeatured",
    title: "(Optional) Feature this post?",
    type: "boolean",
  },
  {
    name: "thumbnail_image",
    title: "Thumbnail Image",
    type: "image",
    options: {
      hotspot: true,
    },
  },
  ...PageTheme,
  ...DefaultOpenGraph
];
