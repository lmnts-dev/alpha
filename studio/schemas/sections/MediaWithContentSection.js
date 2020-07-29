/**
 *
 * @name MediaWithContentSection Section
 * @author Peter Laxalt
 * @description Simple MediaWithContentSection Schema
 * @requires /web/sections/MediaWithContentSection
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeLayoutDropdown, ThemeDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const MediaWithContentSectionRegistry = {
  title: "Media With Content Section",
  name: "media_with_content_section",
  type: "object",
};

export const MediaWithContentSection = {
  ...MediaWithContentSectionRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "section_content",
      title: "Section Content",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "subheadline",
          title: "Subheadline",
          type: "string",
        },
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
        ...DefaultCTA(),
      ],
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
    ...ThemeLayoutDropdown,
  ],
};
