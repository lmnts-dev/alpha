/**
 *
 * @name Config Schema
 * @author Peter Laxalt
 * @description Site Config Data Model
 *
 */

import { DefaultOpenGraph } from "../scaffold/DefaultOpenGraph";
import { DefaultSocialMedia } from "../scaffold/DefaultSocialMedia";
import { DefaultAirtableSettings } from "../scaffold/DefaultAirtable";
import { DefaultContactInfo } from "../scaffold/DefaultContactInfo";

// __________________________________________________________________________________________

export const ConfigRegistry = {
  name: "config",
  title: "Settings",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  type: "document",
};

export const Config = {
  ...ConfigRegistry,
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    ...DefaultContactInfo,
    ...DefaultSocialMedia,
    ...DefaultOpenGraph,
    ...DefaultAirtableSettings,
  ],
};

// __________________________________________________________________________________________
