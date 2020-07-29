/**
 *
 * @name Channel Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Channel Data Model
 *
 */

import { DefaultPage, DefaultPageInitialValues } from "../scaffold/DefaultPage";

// __________________________________________________________________________________________

export const ChannelRegistry = {
  name: "channel",
  title: "Channel",
  type: "document",
};

export const Channel = {
  ...ChannelRegistry,
  fields: [...DefaultPage],
  ...DefaultPageInitialValues,
};

// __________________________________________________________________________________________
