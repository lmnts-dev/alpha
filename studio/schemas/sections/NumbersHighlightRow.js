/**
 *
 * @name NumbersHighlightRow Section
 * @author Peter Laxalt
 * @description Simple NumbersHighlightRow Schema
 * @requires /web/sections/NumbersHighlightRow
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const NumbersHighlightRowRegistry = {
  title: "Numbers Row",
  name: "numbers_row",
  type: "object",
};

export const NumbersHighlightRow = {
  ...NumbersHighlightRowRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "headline",
      title: "Headline",
      description: "Optional.",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      description: "Optional. Displayed above the headline.",
      type: "string",
    },
    {
      name: "numbers",
      title: "Numbers",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "number_highlight",
          title: "Number Highlight",
          type: "object",
          fields: [
            {
              name: "counter",
              title: "Number Count",
              description: "F.e. '25+', '90', '49', etc...",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              title: "Optional. Displayed below the counter.",
              type: "text",
              rows: 4,
            },
          ],
        },
      ],
    },
    ...ThemeDropdown,
  ],
};
