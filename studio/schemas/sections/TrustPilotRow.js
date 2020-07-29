/**
 *
 * @name TrustPilotRow Section
 * @author Peter Laxalt
 * @description Simple TrustPilotRow Schema
 * @requires /web/sections/TrustPilotRow
 *
 */

import { DefaultSection, DefaultSectionHeadlineWithSubheadine } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const TrustPilotRowRegistry = {
  title: "Trust Pilot Row",
  name: "trust_pilot_row",
  type: "object",
};

export const TrustPilotRow = {
  ...TrustPilotRowRegistry,
  fields: [
    ...DefaultSection,
    ...DefaultSectionHeadlineWithSubheadine,
  ],
};
