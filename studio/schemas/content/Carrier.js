/**
 *
 * @name Carrier Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Carrier Data Model
 *
 */

// __________________________________________________________________________________________

export const CarrierRegistry = {
  name: "carrier",
  title: "Carrier",
  type: "document",
};

export const Carrier = {
  ...CarrierRegistry,
  fields: [
    {
      name: "name",
      title: "Carrier Name",
      validation: (Rule) => Rule.required(),
      type: "string",
    },
    {
      name: "logo",
      title: "Carrier Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Carrier Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "array",
      of: [
        {
          type: "object",
          name: "listing",
          fields: [
            {
              title: "Rating Company",
              name: "company",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Rating Given",
              name: "rating",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "logo",
              title: "Logo",
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
    {
      name: "unique_customer_offerings",
      title: "Unique Customer Offerings",
      type: "array",
      of: [
        {
          type: "object",
          name: "offering",
          fields: [
            {
              title: "Offering Headline",
              name: "headline",
              validation: (Rule) => Rule.required(),
              type: "string",
            },
            {
              name: "description",
              title: "Offering Description",
              validation: (Rule) => Rule.required(),
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
};

// __________________________________________________________________________________________
