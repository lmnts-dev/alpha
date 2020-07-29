/**
 *
 * @name CenteredContentRow Section
 * @author Peter Laxalt
 * @description
 * Simple CenteredContentRow Schema
 * @requires /web/sections/CenteredContentRow
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { ThemeDropdown, ThemeImageLayoutDropdown } from "../scaffold/Theme";
import { DefaultSectionHeadlineWithSubheadine } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const CenteredContentRowRegistry = {
  title: "Centered Content Row",
  name: "centered_content_row",
  type: "object",
};

export const CenteredContentRow = {
  ...CenteredContentRowRegistry,
  fields: [
    ...DefaultSectionHeadlineWithSubheadine,
    {
      name: "body",
      title: "Optional Body Content",
      type: "array",
      of: [{ type: "block" }],
    },
    ...DefaultCTA(),
    {
      name: "featured_image",
      title: "Featured Image",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Featured Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        ...ThemeImageLayoutDropdown,
      ],
    },
    ...ThemeDropdown,
  ],
};
