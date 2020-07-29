/**
 *
 * @name VideoWithBenefitsRow Section
 * @author Peter Laxalt
 * @description Simple VideoWithBenefitsRow Schema
 * @requires /web/sections/VideoWithBenefitsRow
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeDropdown, ThemeLayoutDropdown } from "../scaffold/Theme";

// __________________________________________________________________________________________

export const VideoWithBenefitsRowRegistry = {
  title: "Video With Benefits Row",
  name: "video_with_benefits_row",
  type: "object",
};

export const VideoWithBenefitsRow = {
  ...VideoWithBenefitsRowRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "headline",
      title: "Section Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "focus_headline",
      title: "Section Highlighted Headline",
      description:
        "(Optional) This is the same size as the section headline but provides focus to a string. F.e. Headline: 'Benefits for' & Focus Headline: 'Mortgage Servicers'",
      type: "string",
    },
    {
      name: "body",
      title: "(Optional) Body copy.",
      type: "array",
      of: [{ type: "block" }],
    },
    ...DefaultCTA(),
    {
      name: "benefits",
      title: "Benefits List",
      description: "Benefits to display in the section.",
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
      name: "video",
      title: "Video Settings",
      type: "object",
      fields: [
        {
          name: "cover_image",
          title: "Cover Image",
          description:
            "The first frame of the video is usually best here. This only shows when the video hasn't loaded entirely, and on iOS mobile devices where autoplay video is disabled.",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "video_source",
          title: "Vimeo URL",
          description: "Add the video embed URL here.",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "doodad_toggle",
      title: "Show the background embellishment?",
      description:
        "Show or hide a subtle background element behind the section.",
      type: "boolean",
    },
    ...ThemeLayoutDropdown,
    ...ThemeDropdown,
  ],
};
