/**
 *
 * @name CallToActionRow Section
 * @author Peter Laxalt
 * @description
 * Simple CallToActionRow Schema
 * @requires /web/sections/CallToActionRow
 *
 */

import { DefaultCTA } from "../scaffold/DefaultCTA";
import { ThemeDropdown } from "../scaffold/Theme";
import { DefaultSectionHeadlineWithSubheadine } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const CallToActionRowRegistry = {
  title: "Call to Action Row",
  name: "call_to_action_row",
  type: "object",
};

export const CallToActionRow = {
  ...CallToActionRowRegistry,
  fields: [
    ...DefaultSectionHeadlineWithSubheadine,
    {
      name: "body",
      title: "Paragraph",
      description: "Displayed under the headline.",
      rows: 4,
      type: "text",
    },
    ...DefaultCTA(),
    {
      name: "background_image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    ...ThemeDropdown
  ],
};
