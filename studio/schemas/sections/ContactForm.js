/**
 *
 * @name ContactForm Section
 * @author Peter Laxalt
 * @description Simple ContactForm Schema
 * @requires /web/sections/ContactForm
 *
 */

import { ThemeDropdown, ThemeLayoutDropdown } from "../scaffold/Theme";
import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const ContactFormRegistry = {
  title: "Contact Form",
  name: "contact_form",
  type: "object",
};

export const ContactForm = {
  ...ContactFormRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "form_reference",
      type: "reference",
      validation: (Rule) => Rule.required(),
      title:
        "Select a form or build one in the 'Forms' section and come back here to select it.",
      to: [{ type: "form" }],
    },
    {
      name: "form_column",
      title: "Form Column",
      type: "object",
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "headline",
          title: "Column Headline",
          description: "Displayed above the form.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Column Description",
          description: "Displayed above the form, below the headline.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "address_column",
      title: "Address Column",
      type: "object",
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "headline",
          title: "Column Headline",
          description: "Displayed above the form.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Column Description",
          description: "Displayed above the form, below the headline.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    ...ThemeLayoutDropdown,
    ...ThemeDropdown,
  ],
};
