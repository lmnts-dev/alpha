/**
 *
 * @name CarrierMarquee Section
 * @author Peter Laxalt
 * @description Simple CarrierMarquee Schema
 * @requires /web/sections/CarrierMarquee
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const CarrierMarqueeRegistry = {
  title: "Carrier Marquee",
  name: "carrier_marquee",
  type: "object",
};

export const CarrierMarquee = {
  ...CarrierMarqueeRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "headline",
      title: "Headline",
      description: "You can edit all of the supported carriers from the sidebar item 'Carriers' in Sanity.",
      type: "string",
    },
    {
      name: "subheadline",
      title: "Subheadline",
      description: "Displayed above the headline.",
      type: "string",
    },
  ],
};
