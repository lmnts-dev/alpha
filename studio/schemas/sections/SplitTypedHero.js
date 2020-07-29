/**
 *
 * @name SplitTypedHero Section
 * @author Peter Laxalt
 * @description Simple SplitTypedHero Schema
 * @requires /web/sections/SplitTypedHero
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeLayoutDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const SplitTypedHeroRegistry = {
  title: "Split Typed Hero",
  name: "split_typed_hero",
  type: "object",
};

export const SplitTypedHero = {
  ...SplitTypedHeroRegistry,
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
        ... DefaultCTA(),
      ]
    },
    {
      name: "hero_featured_image",
      title: "Hero Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    ...ThemeLayoutDropdown
  ],
};
