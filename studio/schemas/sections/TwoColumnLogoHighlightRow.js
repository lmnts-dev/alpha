/**
 *
 * @name TwoColumnLogoHighlightRow Section
 * @author Peter Laxalt
 * @description Simple TwoColumnLogoHighlightRow Schema
 * @requires /web/sections/TwoColumnLogoHighlightRow
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const TwoColumnLogoHighlightRowRegistry = {
  title: "Two Column Logo Highlight Row",
  name: "two_column_logo_highlight_row",
  type: "object",
};

export const TwoColumnLogoHighlightRow = {
  ...TwoColumnLogoHighlightRowRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "left_column",
      title: "Left Column",
      type: "object",
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "company_name",
          title: "Company Name",
          description: "Does not display anywhere, used for SEO & fallback.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "highlight_description",
          title: "Highlight Description",
          description: "Displayed to the right of the logo.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "right_column",
      title: "Right Column",
      type: "object",
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "company_name",
          title: "Company Name",
          description: "Does not display anywhere, used for SEO & fallback.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "highlight_description",
          title: "Highlight Description",
          description: "Displayed to the right of the logo.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
