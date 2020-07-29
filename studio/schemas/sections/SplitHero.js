/**
 *
 * @name SplitHero Section
 * @author Peter Laxalt
 * @description Simple SplitHero Schema
 * @requires /web/sections/SplitHero
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeLayoutDropdown, ThemeDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const SplitHeroRegistry = {
  title: "Split Hero",
  name: "split_hero",
  type: "object",
};

export const SplitHero = {
  ...SplitHeroRegistry,
  fields: [
    ... DefaultSection,
    {
      name: "hero_content",
      title: "Hero Content",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "content",
          title: "Body",
          type: "text",
          rows: 4
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
    ...ThemeDropdown,
    ...ThemeLayoutDropdown
  ],
};
