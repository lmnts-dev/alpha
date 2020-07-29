/**
 *
 * @name RepeatingColumnContentRow Section
 * @author Peter Laxalt
 * @description Simple RepeatingColumnContentRow Schema
 * @requires /web/sections/RepeatingColumnContentRow
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";
import { DefaultCTA } from "../scaffold/DefaultCTA";

// __________________________________________________________________________________________

export const RepeatingColumnContentRowRegistry = {
  title: "Repeating Column Content Row",
  name: "repeating_column_content_row",
  type: "object",
};

export const RepeatingColumnContentRow = {
  ...RepeatingColumnContentRowRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "headline",
      title: "Headline",
      description: "You can edit all of the supported carriers from the sidebar item 'Carriers' in Sanity.",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      description: "Displayed above the headline.",
      type: "string",
    },
    {
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        {
          name: "column",
          title: "Column",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "headline",
              title: "Headline",
              type: "string",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
              rows: 4,
            },
            ...DefaultCTA(),
          ]
        }
      ]
    }
  ],
};
