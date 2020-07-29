/**
 *
 * @name Press Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Press Data Model
 *
 */

// __________________________________________________________________________________________

export const PressRegistry = {
  name: "press",
  title: "Press",
  type: "document",
};

export const Press = {
  ...PressRegistry,
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      description: "F.e. 'March 2020'",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publisher",
      title: "Publisher",
      description: "F.e. 'Forbes', 'HousingWire', etc.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link to Article",
      description: "Must start with https:// or http://",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};

// __________________________________________________________________________________________
