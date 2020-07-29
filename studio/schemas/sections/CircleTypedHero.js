/**
 *
 * @name CircleTypedHero Section
 * @author Peter Laxalt
 * @description Simple CircleTypedHero Schema
 * @requires /web/sections/CircleTypedHero
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const CircleTypedHeroRegistry = {
  title: "Circle Typed Hero",
  name: "circle_typed_hero",
  type: "object",
};

export const CircleTypedHero = {
  ...CircleTypedHeroRegistry,
  fields: [
    ... DefaultSection,
    {
      name: "hero_content",
      title: "Hero Content",
      type: "object",
      fields: [
        {
          name: "header_static_string",
          title: "Static Header String",
          description: "This is the static string paired with the looping strings. F.e. 'Be a Hero to your' ... 'customers, loan officers, etc.' will be supplied from the Looping Strings field.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "header_looping_strings",
          title: "Strings",
          description: "Strings to loop through with the typing animation.",
          validation: (Rule) => Rule.required(),
          type: "array",
          of: [
            {
              name: "string",
              title: "String",
              type: "string",
            },
          ],
        },
        {
          name: "header_sub_paragraph",
          title: "Header sub paragraph.",
          description: "This is the paragraph below the looping strings.",
          type: "string"
        },
        ... DefaultCTA(),
      ]
    },
    {
      name: "hero_background_image",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
