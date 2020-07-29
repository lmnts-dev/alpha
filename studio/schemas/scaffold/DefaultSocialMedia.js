/**
 *
 * @name DefaultSocialMedia
 * @author Peter Laxalt
 * @description
 * Default SocialMedia settings.
 *
 */

// __________________________________________________________________________________________

export const DefaultSocialMedia = [
  {
    title: "Social Media",
    name: "social_media",
    type: "object",
    description: "Used sitewide where social media links are applicable.",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        title: "Twitter",
        name: "twitter",
        type: "url",
      },
      {
        title: "Instagram",
        name: "instagram",
        type: "url",
      },
      {
        title: "LinkedIn",
        name: "linked_in",
        type: "url",
      },
      {
        title: "Facebook",
        name: "facebook",
        type: "url",
      },
    ],
  },
];
