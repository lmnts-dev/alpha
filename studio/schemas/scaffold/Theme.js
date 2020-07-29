/**
 *
 * @name Theme
 * @author Peter Laxalt
 * @description
 * The default Theme scaffold.
 *
 */

// __________________________________________________________________________________________

export const ThemeStyleGuideLink = () => {
  return (
    <>
      Reference the{" "}
      <a
        href="https://www.dropbox.com/preview/Clients/Covered/Identity/Style%20Guide/proof/Covered%20Brand%20Style%20Guide.pdf?role=work"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Style Guide
      </a>{" "}
      for examples
    </>
  );
};

export const Theme = [
  {
    name: "theme",
    title: "Create a Theme",
    description:
      "(Advanced) If you selected a custom theme above, you can set a custom universal color theme for your sections to inherit.",
    type: "object",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      { name: "foreground", title: "Foreground", type: "color" },
      { name: "background", title: "Background", type: "color" },
      { name: "selection", title: "Selection", type: "color" },
    ],
  },
];

export const ThemeDropdown = [
  {
    name: "theme_type",
    title: "Choose a Theme",
    type: "string",
    description: "(Optional) Reference the style guide for examples.",
    options: {
      list: [
        { title: "Auto", value: "auto" },
        { title: "Covered Green", value: "covered-green" },
        { title: "Aqua", value: "aqua" },
        { title: "Carrot", value: "carrot" },
        { title: "Coral", value: "coral" },
        { title: "Slate", value: "slate" },
        { title: "Pine", value: "pine" },
        { title: "Deep Ocean", value: "deep-ocean" },
        { title: "Ember", value: "ember" },
        { title: "Mustard", value: "mustard" },
        { title: "Ice", value: "ice" },
        { title: "White", value: "white" },
        { title: "Custom (Advanced)", value: "custom" },
      ],
    },
  },
];

export const PageTheme = [
  {
    name: "page_theme",
    title: "Page Theme",
    description:
      "(Optional) Set a universal color theme for all of your sections to inherit.",
    type: "object",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [...ThemeDropdown, ...Theme],
  },
];

export const PageLayout = [
  {
    name: "page_layout",
    title: "Page Layout",
    description:
      "(Optional) Override existings layouts to best suit your content.",
    type: "object",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        name: "layout",
        title: "Choose Layout",
        type: "string",
        description: "Select a layout override.",
        options: {
          list: [
            { title: "Default", value: "__layout-default" },
            { title: "Focused", value: "__layout-focus" },
          ],
        },
      },
    ],
  },
];

export const ThemeLayoutDropdown = [
  {
    name: "layout",
    title: "Choose Layout",
    type: "string",
    description: "Adjust the layout of the section",
    options: {
      list: [
        { title: "Media left, text right", value: "__layout-media-left" },
        { title: "Media right, text left", value: "__layout-media-right" },
      ],
    },
  },
];

export const ThemeImageLayoutDropdown = [
  {
    name: "layout",
    title: "Choose Layout",
    type: "string",
    description: "Adjust how your image is displayed.",
    options: {
      list: [
        { title: "Fullwidth Image", value: "__layout-media-fullwidth" },
        { title: "Centered Image", value: "__layout-media-centered" },
      ],
    },
  },
];

export const ThemeIconIllustrationDropdown = [
  {
    name: "theme_icon_illustration",
    title: "Choose Icon",
    type: "string",
    description: "Reference the style guide for examples.",
    options: {
      list: [
        { title: "Umbrella", value: "umbrella" },
        { title: "Newspaper", value: "newspaper" },
        { title: "House Card", value: "house_card" },
        { title: "Note Papers", value: "note_papers" },
        { title: "Help Bubbles", value: "help_bubbles" },
        { title: "Covered Brandmark", value: "covered_brandmark" },
        { title: "Envelope", value: "envelope" },
      ],
    },
  },
];
