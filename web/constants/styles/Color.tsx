/* eslint-disable */
// @ts-nocheck
// Imports
// __________________________________________________________________________________________

import { createGlobalStyle } from "styled-components";
import { hexToRGB } from "../../utils/hexToRGB";
import { adjustHex } from "../../utils/adjustHex";

// Begin Component
// __________________________________________________________________________________________

export const CssVar = {
  Foreground: "--themeForegroundColor",
  Accent: "--themeAccentColor",
  Background: "--themeBackgroundColor",
  Text: "--themeTextColor",
};

/**
 *
 * @name Color
 * @description This is the sitewide palette.
 *
 */
export const Color = {
  // Core Colors
  Primary: `var(${CssVar.Foreground})`,
  Accent: `var(${CssVar.Accent})`,
  Background: `var(${CssVar.Background})`,
  Text: `var(${CssVar.Text})`,

  // Grayscale Palette
  Black: "#000000",
  Nightsky: "#424242",
  Warmsky: "#34281D",
  Gravel: "#4E4135",
  Tan: "#C4AC97",
  Gray: "#DAC9BA",
  Blush: "#F6E7D9",
  Cream: "#FFF6EE",

  // Primary Palette
  CoveredGreen: "#3DC8A6",
  Ocean: "#13BFF8",
  Carrot: "#E26E43",
  Coral: "#F98DAB",
  Aqua: "#13BFF8",
  Slate: "#424242",
  Pine: "#188D6D",
  DeepOcean: "#0079EA",
  Ember: "#F1A521",
  Mustard: "#DBCA00",
  Ice: "#F6F9FB",
  White: "#FFFFFF",

  // Warm Palette
  Clay: "#A33609",
  Nova: "#E24809",
  Sunlight: "#E9A200",
  Sunset: "#ED9158",

  // Cool Palette
  Galaxy: "#09004B",
  Deepsea: "#002F9E",
  Sky: "#7AC0E6",
  Dino: "#23023B",
  Eggplant: "#520589",
  Lilac: "#874BB4",

  // Functional Palette
  Placeholder: "#F6F9FB",
  Warning: "#FC6376",
  Success: "#40DA33",
  BoxShadow: `0 6px 20px 0 ${hexToRGB("#424242", 0.07)}`,
  BoxShadowHover: `0 10px 30px 0 ${hexToRGB("#424242", 0.15)}`,
};

export const Palette = createGlobalStyle`
  body {
    /* _______________________________________________________*/
    /** Default theme */
    ${CssVar.Foreground}: ${Color.CoveredGreen};
    ${CssVar.Accent}: ${Color.Ocean};
    ${CssVar.Background}: ${Color.White};
    ${CssVar.Text}: ${Color.Nightsky};

    /** Buttons */
    --themeButtonBackgroundColor: ${hexToRGB(Color.Black, 0.04)};
    --themeButtonTextColor: ${Color.Nightsky}

    /** Inputs */
    --themeInputBackgroundColor: ${Color.White};
    --themeInputBorderProperty: ${Color.Gray};
    --themeInputTextColor: ${Color.Text};
    --themeInputSpacing: var(--REM);

    /* _______________________________________________________*/
    /** Global Styles */
    color: ${Color.Text};
    background-color: ${Color.Background};
  }

  ::-moz-selection { background: ${Color.Coral}; color: ${Color.White} }
  ::selection { background: ${Color.Coral}; color: ${Color.White} }

  /* _______________________________________________________*/
  /** Theme Modifiers */

  /*_______________________________________________
  /* Generic */
  *&.__theme-covered-green {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.CoveredGreen};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-aqua {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Aqua};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-carrot {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Carrot};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-coral {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Coral};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-slate {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Slate};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-pine {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Pine};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-deep-ocean {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.DeepOcean};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-ember {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Ember};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-mustard {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.White};
    ${CssVar.Accent}: ${Color.White};
    ${CssVar.Background}: ${Color.Mustard};
    ${CssVar.Text}: ${Color.White};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Text};
      --themeButtonTextColor: ${Color.Background};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-ice {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.Slate};
    ${CssVar.Accent}: ${Color.Slate};
    ${CssVar.Background}: ${Color.Ice};
    ${CssVar.Text}: ${Color.Slate};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.Ocean};
      --themeButtonTextColor: ${Color.White};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  *&.__theme-white {
    /** Default theme */
    ${CssVar.Foreground}: ${Color.Nightsky};
    ${CssVar.Accent}: ${Color.Nightsky};
    ${CssVar.Background}: ${Color.White};
    ${CssVar.Text}: ${Color.Nightsky};

    button, .btn {
      /** Buttons */
      --themeButtonBackgroundColor: ${Color.CoveredGreen};
      --themeButtonTextColor: ${Color.White};

      &:hover {
        background: ${Color.Text};
      }

      &:active {
        background: ${Color.Text};
      }
    }
  }

  /*_________________________________________________
  /* Foregrounds */
  *&.__theme-fg-covered-green {
    ${CssVar.Foreground}: ${Color.CoveredGreen} !important;
  }

  *&.__theme-fg-ocean {
    ${CssVar.Foreground}: ${Color.Ocean} !important;
  }

  *&.__theme-fg-carrot {
    ${CssVar.Foreground}: ${Color.Carrot} !important;
  }

  *&.__theme-fg-coral {
    ${CssVar.Foreground}: ${Color.Coral} !important;
  }

  *&.__theme-fg-aqua {
    ${CssVar.Foreground}: ${Color.Aqua} !important;
  }

  *&.__theme-fg-slate {
    ${CssVar.Foreground}: ${Color.Slate} !important;
  }

  *&.__theme-fg-pine {
    ${CssVar.Foreground}: ${Color.Pine} !important;
  }

  *&.__theme-fg-deep-ocean {
    ${CssVar.Foreground}: ${Color.DeepOcean} !important;
  }

  *&.__theme-fg-ember {
    ${CssVar.Foreground}: ${Color.Ember} !important;
  }

  *&.__theme-fg-mustard {
    ${CssVar.Foreground}: ${Color.Mustard} !important;
  }

  *&.__theme-fg-ice {
    ${CssVar.Foreground}: ${Color.Ice} !important;
  }

  *&.__theme-fg-white {
    ${CssVar.Foreground}: ${Color.White} !important;
  }

  /*_________________________________________________
  /* Background */
  *&.__theme-bg-covered-green {
    ${CssVar.Background}: ${Color.CoveredGreen} !important;
  }

  *&.__theme-bg-ocean {
    ${CssVar.Background}: ${Color.Ocean} !important;
  }

  *&.__theme-bg-carrot {
    ${CssVar.Background}: ${Color.Carrot} !important;
  }

  *&.__theme-bg-coral {
    ${CssVar.Background}: ${Color.Coral} !important;
  }

  *&.__theme-bg-aqua {
    ${CssVar.Background}: ${Color.Aqua} !important;
  }

  *&.__theme-bg-slate {
    ${CssVar.Background}: ${Color.Slate} !important;
  }

  *&.__theme-bg-pine {
    ${CssVar.Background}: ${Color.Pine} !important;
  }

  *&.__theme-bg-deep-ocean {
    ${CssVar.Background}: ${Color.DeepOcean} !important;
  }

  *&.__theme-bg-ember {
    ${CssVar.Background}: ${Color.Ember} !important;
  }

  *&.__theme-bg-mustard {
    ${CssVar.Background}: ${Color.Mustard} !important;
  }

  *&.__theme-bg-ice {
    ${CssVar.Background}: ${Color.Ice} !important;
  }

  *&.__theme-bg-white {
    ${CssVar.Background}: ${Color.White} !important;
  }

  /*_________________________________________________
  /* Background */
  *&.__theme-txt-covered-green {
    ${CssVar.Text}: ${Color.CoveredGreen}
  }

  *&.__theme-txt-ocean {
    ${CssVar.Text}: ${Color.Ocean}
  }

  *&.__theme-txt-carrot {
    ${CssVar.Text}: ${Color.Carrot}
  }

  *&.__theme-txt-coral {
    ${CssVar.Text}: ${Color.Coral}
  }

  *&.__theme-txt-aqua {
    ${CssVar.Text}: ${Color.Aqua}
  }

  *&.__theme-txt-slate {
    ${CssVar.Text}: ${Color.Slate}
  }

  *&.__theme-txt-pine {
    ${CssVar.Text}: ${Color.Pine}
  }

  *&.__theme-txt-deep-ocean {
    ${CssVar.Text}: ${Color.DeepOcean}
  }

  *&.__theme-txt-ember {
    ${CssVar.Text}: ${Color.Ember}
  }

  *&.__theme-txt-mustard {
    ${CssVar.Text}: ${Color.Mustard}
  }

  *&.__theme-txt-ice {
    ${CssVar.Text}: ${Color.Ice}
  }

  *&.__theme-txt-white {
    ${CssVar.Text}: ${Color.White}
  }

  /*_________________________________________________
  /* Accent */
  *&.__theme-accent-covered-green {
    ${CssVar.Accent}: ${Color.CoveredGreen}
  }

  *&.__theme-accent-ocean {
    ${CssVar.Accent}: ${Color.Ocean}
  }

  *&.__theme-accent-carrot {
    ${CssVar.Accent}: ${Color.Carrot}
  }

  *&.__theme-accent-coral {
    ${CssVar.Accent}: ${Color.Coral}
  }

  *&.__theme-accent-aqua {
    ${CssVar.Accent}: ${Color.Aqua}
  }

  *&.__theme-accent-slate {
    ${CssVar.Accent}: ${Color.Slate}
  }

  *&.__theme-accent-pine {
    ${CssVar.Accent}: ${Color.Pine}
  }

  *&.__theme-accent-deep-ocean {
    ${CssVar.Accent}: ${Color.DeepOcean}
  }

  *&.__theme-accent-ember {
    ${CssVar.Accent}: ${Color.Ember}
  }

  *&.__theme-accent-mustard {
    ${CssVar.Accent}: ${Color.Mustard}
  }

  *&.__theme-accent-ice {
    ${CssVar.Accent}: ${Color.Ice}
  }

  *&.__theme-accent-white {
    ${CssVar.Accent}: ${Color.White}
  }

  /*_________________________________________________
  /* Buttons */
  *&.__theme-btn-covered-green {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.CoveredGreen};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.CoveredGreen, -10)};
    }

    &:active {
      background: ${adjustHex(Color.CoveredGreen, -18)};
    }
  }

  *&.__theme-btn-ocean {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Ocean};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Ocean, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Ocean, -18)};
    }
  }

  *&.__theme-btn-carrot {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Carrot};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Carrot, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Carrot, -18)};
    }
  }

  *&.__theme-btn-coral {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Coral};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Coral, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Coral, -18)};
    }
  }

  *&.__theme-btn-aqua {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Aqua};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Aqua, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Aqua, -18)};
    }
  }

  *&.__theme-btn-slate {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Slate};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Slate, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Slate, -18)};
    }
  }

  *&.__theme-btn-pine {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Pine};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Pine, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Pine, -18)};
    }
  }

  *&.__theme-btn-deep-ocean {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.DeepOcean};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.DeepOcean, -10)};
    }

    &:active {
      background: ${adjustHex(Color.DeepOcean, -18)};
    }
  }

  *&.__theme-btn-ember {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Ember};
    --themeButtonTextColor: ${Color.White};

    &:hover {
      background: ${adjustHex(Color.Ember, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Ember, -18)};
    }
  }

  *&.__theme-btn-mustard {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Mustard};
    --themeButtonTextColor: ${Color.Slate};

    &:hover {
      background: ${adjustHex(Color.Mustard, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Mustard, -18)};
    }
  }

  *&.__theme-btn-ice {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.Ice};
    --themeButtonTextColor: ${Color.Aqua};

    &:hover {
      background: ${adjustHex(Color.Ice, -10)};
    }

    &:active {
      background: ${adjustHex(Color.Ice, -18)};
    }
  }

  *&.__theme-btn-white {
    /** Buttons */
    --themeButtonBackgroundColor: ${Color.White};
    --themeButtonTextColor: ${Color.Background};

    &:hover {
      background: ${adjustHex(Color.White, -10)};
    }

    &:active {
      background: ${adjustHex(Color.White, -18)};
    }
  }

  *&.__btn-disabled {
    /** Buttons */
    --themeButtonBackgroundColor: ${hexToRGB(Color.Black, 0.08)} !important;
    --themeButtonTextColor: ${hexToRGB(Color.Black, 0.65)} !important;

    cursor: not-allowed !important;
    pointer-events: none !important;

    &:hover {
      background: ${hexToRGB(Color.Black, 0.08)} !important;
    }

    &:active {
      background: ${hexToRGB(Color.Black, 0.08)} !important;
    }
  }
`;

// __________________________________________________________________________________________
// End Component
