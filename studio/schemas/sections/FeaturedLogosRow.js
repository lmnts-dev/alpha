/**
 *
 * @name FeaturedLogosRow Section
 * @author Peter Laxalt
 * @description Simple FeaturedLogosRow Schema
 * @requires /web/sections/FeaturedLogosRow
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const FeaturedLogosRowRegistry = {
  title: "Featured Logos Row",
  name: "featured_logos_row",
  type: "object",
};

export const FeaturedLogosRow = {
  ...FeaturedLogosRowRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "headline",
      title: "Headline",
      description: "Optional.",
      type: "string",
    },
    {
      name: "featured_logos",
      title: "Featured Logos",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "logo",
          title: "Logo",
          type: "object",
          fields: [
            {
              name: "company_name",
              title: "Company Name",
              description: "Does not display anywhere, used for SEO & fallback.",
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
    },
  ],
};
