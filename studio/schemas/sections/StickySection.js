/**
 *
 * @name StickySection Section
 * @author Peter Laxalt
 * @description
 * Simple StickySection Schema
 * @requires /web/sections/StickySection
 *
 */

import { ThemeLayoutDropdown, ThemeDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const StickySectionRegistry = {
  title: "Sticky Section",
  name: "sticky_section",
  type: "object",
};

export const StickySection = {
  ...StickySectionRegistry,
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "subheadline",
      title: "Subheadline",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "body",
      title: "(Optional) Body copy.",
      type: "array",
      of: [{ type: "block" }],
      validation: (validate) => validate.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (validate) => validate.required(),
      of: [{ type: "image" }],
    },
    {
      name: "doodad_toggle",
      title: "Show the background embellishment?",
      description:
        "Show or hide a subtle background element behind the section.",
      type: "boolean",
    },
    ...ThemeLayoutDropdown,
    ...ThemeDropdown,
  ],
};
