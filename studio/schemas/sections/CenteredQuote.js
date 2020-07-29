/**
 *
 * @name CenteredQuote Section
 * @author Peter Laxalt
 * @description
 * Simple CenteredQuote Schema
 * @requires /web/sections/CenteredQuote
 *
 */

// __________________________________________________________________________________________

export const CenteredQuoteRegistry = {
  title: "Centered Quote",
  name: "centered_quote",
  type: "object",
};

export const CenteredQuote = {
  ...CenteredQuoteRegistry,
  fields: [
    {
      name: "content",
      title: "Body",
      type: "text",
      validation: (Rule) => Rule.required(),
      rows: 4
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
  ],
};
