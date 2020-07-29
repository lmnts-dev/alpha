/**
 *
 * @name DefaultContactInfo
 * @author Peter Laxalt
 * @description
 * Default ContactInfo settings.
 *
 */

// __________________________________________________________________________________________

export const DefaultContactInfo = [
  {
    name: "contact",
    type: "object",
    title: "Contact Information",
    description: "Used sitewide where contact information is applicable.",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        title: "Contact Email",
        name: "email",
        type: "string",
      },
      {
        title: "Phone Number",
        name: "phone_number",
        type: "string",
      },
      {
        title: "Address Line 1",
        name: "address_line_1",
        type: "string",
      },
      {
        title: "Address Line 2",
        name: "address_line_2",
        type: "string",
      },
    ],
  },
];
