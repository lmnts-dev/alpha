/**
 *
 * @name StickyTimelineSection Section
 * @author Peter Laxalt
 * @description
 * Simple StickyTimelineSection Schema
 * @requires /web/sections/StickyTimelineSection
 *
 */

import { ThemeLayoutDropdown, ThemeDropdown } from "../scaffold/Theme";
import { DefaultCTA } from "../scaffold/DefaultCTA";

// __________________________________________________________________________________________

export const StickyTimelineSectionRegistry = {
  title: "Sticky Timeline Section",
  name: "sticky_timeline_section",
  type: "object",
};

export const StickyTimelineSection = {
  ...StickyTimelineSectionRegistry,
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      type: "string",
    },
    {
      name: "timeline_points",
      title: "Timeline Points",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          name: "point",
          title: "Point",
          type: "object",
          fields: [
            {
              name: "featured_image",
              title: "Featured Image",
              type: "image",
              validation: (Rule) => Rule.required(),
              of: [{ type: "image" }],
            },
            {
              name: "headline",
              title: "Headline",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "body",
              title: "Body",
              type: "array",
              validation: (Rule) => Rule.required(),
              of: [{ type: "block" }],
            },
            ...DefaultCTA(),
          ],
        },
      ],
    },
    ...ThemeDropdown,
    ...ThemeLayoutDropdown,
  ],
};
