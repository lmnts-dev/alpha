/**
 *
 * @name Faq Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Faq Data Model
 *
 */

// __________________________________________________________________________________________

export const FaqRegistry = {
  name: "faq",
  title: "FAQ",
  type: "document",
};

export const Faq = {
  ...FaqRegistry,
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};

// __________________________________________________________________________________________
