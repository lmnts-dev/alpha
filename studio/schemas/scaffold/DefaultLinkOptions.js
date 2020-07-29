// __________________________________________________________________________________________

/**
 *
 * @name DefaultLink
 * @author Peter Laxalt
 * @description
 * This is the scaffold for displaying a CTA field.
 *
 */
export const DefaultLinkOptions = [
  {
    title: "Label",
    name: "label",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
  {
    title: "Link Settings",
    name: "link",
    type: "object",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        name: "href",
        title: "Path",
        description:
          "I.e. '/request-a-demo'. If this is a server-rendered page such as a blog article, specify it's slug pattern i.e. /channels/[slug] and specify it's path on the 'As' field as '/blog/cool-post-name'.",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "as",
        title: "As (Advanced)",
        description:
          "See above. If you are linking to a dynamic content page such as a blog article, specify it's path here and it's slug above. If you don't know what it is, ignore this field.",
        type: "string",
      },
    ],
  },
];
