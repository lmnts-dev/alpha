/**
 *
 * @name FormDisplay Section
 * @author Peter Laxalt
 * @description Simple FormDisplay Schema
 * @requires /web/sections/FormDisplay
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";

// __________________________________________________________________________________________

export const FormDisplayRegistry = {
  title: "Fullscreen Form Display",
  name: "form_display",
  type: "object",
};

export const FormDisplay = {
  ...FormDisplayRegistry,
  fields: [
    ...DefaultSection,
    {
      name: "form_reference",
      type: "reference",
      title:
        "Select a form or build one in the 'Forms' section and come back here to select it.",
      to: [{ type: "form" }],
    },
  ],
};
