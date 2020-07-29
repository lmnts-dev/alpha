/**
 *
 * @name ResourceCardListings Section
 * @author Peter Laxalt
 * @description Simple ResourceCardListings Schema
 * @requires /web/sections/ResourceCardListings
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import {
  DefaultSection,
  DefaultSectionHeadlineWithSubheadine,
} from "../scaffold/DefaultSection";
import {
  ThemeIconIllustrationDropdown,
  ThemeDropdown,
} from "../scaffold/Theme";

// __________________________________________________________________________________________

export const ResourceCardListingsRegistry = {
  title: "Resource Card Listings",
  name: "resource_card_listings",
  type: "object",
};

export const ResourceCardListings = {
  ...ResourceCardListingsRegistry,
  fields: [
    ...DefaultSection,
    ...DefaultSectionHeadlineWithSubheadine,
    ...ThemeDropdown,
    {
      name: "listings",
      title: "Listings",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "item",
          title: "Listings",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Resource Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "body",
              title: "Resource Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            ...DefaultCTA(),
            // {
            //   name: "is_external",
            //   title: "Is this an external link?",
            //   type: "boolean",
            // },
            ...ThemeIconIllustrationDropdown,
          ],
        },
      ],
    },
  ],
};
