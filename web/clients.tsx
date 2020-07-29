/**
 *
 * /client.ts
 * @author Peter Laxalt
 * @description The website Sanity Configuration.
 *
 */

// Imports
// __________________________________________________________________________________________

import sanityClient from "@sanity/client";
import airtableClient from "airtable";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name Sanity.io Settings
 * @description Our global Sanity.io settings.
 * @see https://www.sanity.io/
 *
 */

// General Settings

export const SanityOptions = {
  projectId: "0p0c88r6",
  dataset: "production",
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false to require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

// This is our main Sanity client to fetch Sanity data.
export const Sanity = sanityClient(SanityOptions);

// We have to pass a token to Sanity to authenticate us in retrieving
// draft data from Sanity for preview mode.
export const SanityPreview = sanityClient({
  ...SanityOptions,
  token: "skMMwzUYHWmYAZ5otqLXIEHBtqmNP43FDZ7D7q8vLDJreS2pbHisjUKgpOAiz4k1vAp0iIb5nj5dU17mKZXVo697dZbv0LBiF7kf15iGlwIZAdji6zDvhivTxTfGflX0687PcH14cDnoWlR21vo3PP9bW3bTw4S40kNhanCcEWcioBf7L1Y6",
});

// __________________________________________________________________________________________

/**
 *
 * @name Airtable Settings
 * @description Our global Airtable settings.
 * @returns Airtable variables
 * @see https://airtable.com/appRssYYB66bB4P6Q/api/docs
 *
 */

export const AirtableUtils = {
  baseUrl: "https://airtable.com/",
  apiKey: "keySE7sknWhmqvd7Q",
  baseId: "applni0nHipLFmoCE",
  maxRecords: 2000,
  RequestForm: {
    ViewName: "All Lead Submissions",
    TableName: "Request A Demo",
  },
};

/**
 *
 * @name Airtable
 * @returns Airtable Data
 * Our Airtable client to load data.
 *
 */
export const Airtable = new airtableClient({
  apiKey: AirtableUtils.apiKey,
}).base(AirtableUtils.baseId);
