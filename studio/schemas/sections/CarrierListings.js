/**
 *
 * @name CarrierListings Section
 * @author Peter Laxalt
 * @description Simple CarrierListings Schema
 * @requires /web/sections/CarrierListings
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";
import { CarrierRegistry } from "../content/Carrier";

// __________________________________________________________________________________________

export const CarrierListingsRegistry = {
  title: "Carrier Listings",
  name: "carrier_listings",
  type: "object",
};

export const CarrierListings = {
  ...CarrierListingsRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "headline",
      title: "Headline",
      description:
        "You can edit all of the supported carriers from the sidebar item 'Carriers' in Sanity.",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      description: "Displayed above the headline.",
      type: "string",
    },
    {
      name: "content",
      title: "Body",
      type: "text",
      rows: 4,
    },
    {
      name: "add_carriers_to_top",
      title: "Add carriers to top of list",
      description:
        "You can utilize this to sort your carriers. The carriers selected here will display first in your desired order, and the remaining carriers will be listed after rearranging here. If you wish to not display the remaining carriers after your items are added to the top, you can disable that behavior below.",
      type: "array",
      of: [
        { type: "reference", weak: true, to: [{ type: CarrierRegistry.name }] },
      ],
    },
    {
      name: "continue_loop",
      title:
        "Continue the carrier loop after your carriers are added to the top of the list?",
      description:
        "The normal behavior will display the remaining carriers excluding the carriers you added to the top of the list above. To disable this behavior, check this box.",
      type: "boolean",
    },
    {
      name: "doodad_toggle",
      title: "Show the background embellishment?",
      description:
        "Show or hide a subtle background element behind the section.",
      type: "boolean",
    },
  ],
};
