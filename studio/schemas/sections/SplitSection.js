/**
 *
 * @name SplitSection Section
 * @author Peter Laxalt
 * @description Simple SplitSection Schema
 * @requires /web/sections/SplitSection
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeLayoutDropdown, ThemeDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const SplitSectionRegistry = {
  title: "Split Section",
  name: "split_section",
  type: "object",
};

export const SplitSection = {
  ...SplitSectionRegistry,
  fields: [
    ... DefaultSection,
    {
      name: "section_content",
      title: "Section Content",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "body",
          title: "(Optional) Body copy.",
          type: "array",
          of: [{ type: "block" }],
        },
        ... DefaultCTA(),
      ]
    },
    {
      name: "section_featured_image",
      title: "Section Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    ...ThemeDropdown,
    ...ThemeLayoutDropdown
  ],
};
