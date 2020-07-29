/**
 *
 * @name DefaultSection
 * @author Peter Laxalt
 * @description
 * This the base post scaffold.
 *
 */

// __________________________________________________________________________________________

export const DefaultSection = [
  {
    name: "name",
    title: "Section Name",
    description: "Purely for organization - this does not display anywhere.",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
];

export const DefaultSectionHeadlineWithSubheadine = [
  {
    name: "headline",
    title: "Headline",
    description: "Optional.",
    type: "string",
  },
  {
    name: "subheadline",
    title: "Subheadline",
    description: "Optional. Displayed above the headline.",
    type: "string",
  },
];
