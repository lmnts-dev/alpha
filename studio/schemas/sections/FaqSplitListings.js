/**
 *
 * @name FaqListings Section
 * @author Peter Laxalt
 * @description Simple FaqSplitListings Schema
 * @requires /web/sections/FaqSplitListings
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";
import { DefaultCTA } from "../scaffold/DefaultCTA";
import { ThemeDropdown } from "../scaffold/Theme";
import { FaqRegistry } from "../content/Faq";

// __________________________________________________________________________________________

export const FaqSplitListingsRegistry = {
  title: "FAQ Split Listings",
  name: "faq_split_listings",
  type: "object",
};

export const FaqSplitListings = {
  ...FaqSplitListingsRegistry,
  fields: [
    ...DefaultSection,
    ...DefaultCTA(),
    {
      name: "headline",
      title: "Headline",
      validation: (Rule) => Rule.required(),
      type: "string",
    },
    {
      name: "body",
      title: "Paragraph",
      description: "Displayed under the headline.",
      rows: 4,
      type: "text",
    },
    {
      name: "featured_image",
      title: "Featured Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "add_faq_to_top",
      title: "Add faq to top of list",
      description:
        "You can utilize this to sort your faq listings. The faq listings selected here will display first in your desired order, and the remaining faq listings will be listed after rearranging here. If you wish to not display the remaining faq listings after your items are added to the top, you can disable that behavior below.",
      type: "array",
      of: [{ type: "reference", weak: true, to: [{ type: FaqRegistry.name }] }],
    },
    {
      name: "continue_loop",
      title:
        "Continue the faq listing loop after your faq listings are added to the top of the list?",
      description:
        "The normal behavior will display the remaining faq listings excluding the faq listings you added to the top of the list above. To disable this behavior, check this box.",
      type: "boolean",
    },
    ...ThemeDropdown,
  ],
};
