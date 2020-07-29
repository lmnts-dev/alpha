/**
 *
 * @name PressListings Section
 * @author Peter Laxalt
 * @description Simple PressListings Schema
 * @requires /web/sections/PressListings
 *
 */

import { ThemeDropdown } from "../scaffold/Theme";
import { DefaultSection } from "../scaffold/DefaultSection";
import { PressRegistry } from "../content/Press";

// __________________________________________________________________________________________

export const PressListingsRegistry = {
  title: "Press Listings",
  name: "press_listings",
  type: "object",
};

export const PressListings = {
  ...PressListingsRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "add_press_to_top",
      title: "Add press to top of list",
      description:
        "You can utilize this to sort your press listings. The press listings selected here will display first in your desired order, and the remaining press listings will be listed after rearranging here. If you wish to not display the remaining press listings after your items are added to the top, you can disable that behavior below.",
      type: "array",
      of: [
        { type: "reference", weak: true, to: [{ type: PressRegistry.name }] },
      ],
    },
    {
      name: "continue_loop",
      title:
        "Continue the press listings loop after your press listings are added to the top of the list?",
      description:
        "The normal behavior will display the remaining press listings excluding the press listings you added to the top of the list above. To disable this behavior, check this box.",
      type: "boolean",
    },
    ...ThemeDropdown,
  ],
};
