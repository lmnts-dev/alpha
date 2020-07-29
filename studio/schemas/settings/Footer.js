/**
 *
 * @name Footer Schema
 * @author Peter Laxalt
 * @description Site Footer Data Model
 *
 */

import { DefaultLinkOptions } from "../scaffold/DefaultLinkOptions";
import { ThemeIconIllustrationDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const FooterRegistry = {
  name: "footer",
  title: "Footer",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  type: "document",
};

export const Footer = {
  ...FooterRegistry,
  fields: [
    {
      title: "Universal Call to Action",
      name: "footer_cta",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          title: "Large Call to Action Text",
          type: "string",
          name: "cta_headline",
        },
        {
          title: "Call to Action Subheadline",
          type: "string",
          name: "cta_subheadline",
        },
        {
          title: "Link Options",
          name: "link",
          type: "object",
          fields: [...DefaultLinkOptions],
        },
      ],
    },
    {
      title: "Link Lists",
      name: "link_lists",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          title: "Link List Columns",
          name: "columns",
          description:
            "Columns ordered from left to right according to list below.",
          type: "array",
          of: [
            {
              title: "Column",
              name: "column",
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Column Name",
                  description:
                    "Purely for organization - this does not display anywhere.",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: "Link List",
                  name: "link_list",
                  type: "array",
                  of: [
                    {
                      title: "Linklist Header",
                      name: "header",
                      type: "object",
                      fields: [
                        {
                          title: "Header Text",
                          name: "label",
                          type: "string",
                        },
                      ],
                    },
                    {
                      title: "Link",
                      name: "link",
                      type: "object",
                      fields: [...DefaultLinkOptions],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Minor Footer Disclaimer",
      type: "string",
      name: "minor_footer_text",
    },
  ],
};

// __________________________________________________________________________________________
