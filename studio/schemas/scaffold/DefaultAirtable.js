/**
 *
 * @name DefaultAirtable
 * @author Peter Laxalt
 * @description
 * Default Airtable settings.
 *
 */

// __________________________________________________________________________________________

export const DefaultAirtableSettings = [
  {
    name: "airtable",
    type: "object",
    title: "(Advanced) Airtable Integration Settings",
    description: "Integrate Airtable to unlock form functionality.",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        name: "base_id",
        title: "Base ID",
        description: "Click the 'Help' button in the top right of your Airtable base and go to the API Documentation to receive your Base ID.",
        type: "string",
      },
      {
        name: "api_key",
        title: "API Key",
        description: "Click the 'Help' button in the top right of your Airtable base and go to the API Documentation to receive your API Key. Do not share this key with anybody else.",
        type: "string",
      },
    ]
  }
];
