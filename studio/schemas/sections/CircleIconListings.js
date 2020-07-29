/**
 *
 * @name CircleIconListings Section
 * @author Peter Laxalt
 * @description Simple CircleIconListings Schema
 * @requires /web/sections/CircleIconListings
 *
 */

 // Scaffold
import { DefaultCTA } from "../scaffold/DefaultCTA";
import { ThemeDropdown, ThemeIconIllustrationDropdown } from "../scaffold/Theme";
import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const CircleIconListingsRegistry = {
  title: "Circle Icon Listings",
  name: "circle_icon_listings",
  type: "object",
};

export const CircleIconListings = {
  ...CircleIconListingsRegistry,
  fields: [
    ... DefaultSection,
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
              name: "header",
              title: "Header text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "body",
              title: "Header body",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            ... DefaultCTA(),
            ... ThemeIconIllustrationDropdown,
            ... ThemeDropdown,
          ]
        }
      ]
    }
  ],
};
