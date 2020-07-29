/**
 *
 * @name Navigation Schema
 * @author Peter Laxalt
 * @description Site Navigation Data Model
 *
 */

import { DefaultLinkOptions } from "../scaffold/DefaultLinkOptions";
import { ThemeIconIllustrationDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const NavigationRegistry = {
  name: "navigation",
  title: "Navigation",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  type: "document",
};

export const Navigation = {
  ...NavigationRegistry,
  fields: [
    {
      title: "Link List",
      name: "link_list",
      type: "array",
      of: [
        {
          title: "Link",
          name: "link",
          type: "object",
          fields: [
            ...DefaultLinkOptions,
            {
              title: "Dropdown",
              name: "dropdown",
              type: "object",
              options: {
                collapsible: true,
                collapsed: true,
              },
              fields: [
                {
                  title: "Dropdown Link List",
                  name: "link_list",
                  type: "array",
                  of: [
                    {
                      title: "Link",
                      name: "link",
                      type: "object",
                      fields: [
                        ...DefaultLinkOptions,
                        ...ThemeIconIllustrationDropdown,
                        {
                          name: "description",
                          title: "Description",
                          type: "text",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: "Style as a call to action?",
              name: "is_cta",
              description:
                "Please note this will disable any dropdown functionality.",
              type: "boolean",
            },
          ],
        },
      ],
    },
  ],
};

// __________________________________________________________________________________________
