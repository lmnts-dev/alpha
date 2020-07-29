/**
 *
 * @name TeamListings Section
 * @author Peter Laxalt
 * @description Simple TeamListings Schema
 * @requires /web/sections/TeamListings
 *
 */

// Scaffolds
import {
  DefaultSection,
  DefaultSectionHeadlineWithSubheadine,
} from "../scaffold/DefaultSection";
import { ThemeDropdown } from "../scaffold/Theme";
import { DefaultSocialMedia } from "../scaffold/DefaultSocialMedia";

// __________________________________________________________________________________________

export const TeamListingsRegistry = {
  title: "Team Listings",
  name: "team_listings",
  type: "object",
};

export const TeamListings = {
  ...TeamListingsRegistry,
  fields: [
    ...DefaultSection,
    ...DefaultSectionHeadlineWithSubheadine,
    {
      name: "team_members",
      title: "Team Members",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "person",
          title: "Person",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            },
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "position",
              title: "Position",
              validation: (Rule) => Rule.required(),
              type: "string",
            },
            ...DefaultSocialMedia,
          ],
        },
      ],
    },
    ...ThemeDropdown,
  ],
};
