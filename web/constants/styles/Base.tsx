// Begin Components
// __________________________________________________________________________________________

/**
 *
 * @name Base
 * @description Core measurements throughout the app.
 *
 */
export const Base = {
  // Core Base Measurement
  Size: {
    Lg: 60,
    Md: 45,
    Sm: 45,
  },

  // Root Element Measurement
  Rem: {
    Lg: 15, // px
    Md: 14, // px
    Sm: 14, // px
  },

  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: 1280, // px
      Md: 1024, // px
      Sm: 676, // px
    },
    Height: {
      Lg: 828, // px
      Md: 640, // px
      Sm: 568, // px
    },
  },

  // Site Grid
  Grid: {
    SiteWidth: 1280, // px
    // SiteWidth: 2680, // px
    ReadingWidth: 1024, // px
    SiteFrameWidth: 10,
    Nav: {
      Size: {
        Lg: 100, // px
        Md: 85, // px
        Sm: 55, // px
      },
    },

    Footer: {
      Size: {
        Lg: 35, // px
        Md: 35, // px
        Sm: 35, // px
      },
    },

    // Universal padding from the edge of the browser
    Gutter: {
      Lg: {
        Top: 0, // px
        Bottom: 0, // px
        Right: 40, // px
        Left: 40, // px
      },
      Md: {
        Top: 0, // px
        Bottom: 0, // px
        Right: 30, // px
        Left: 30, // px
      },
      Sm: {
        Top: 0, // px
        Bottom: 0, // px
        Right: 30, // px
        Left: 30, // px
      },
    },

    Indent: {
      Lg: {
        X: 175, // px
        Y: 20, // px
      },
      Md: {
        X: 0, // px
        Y: 10, // px
      },
      Sm: {
        X: 0, // px
        Y: 0, // px
      },
    },
  },

  // View Width (vw) Based Measurements
  ViewWidth: {
    Padding: {
      Sm: "4.5", // vw
      Md: "4.5", // vw
      Lg: "1.2", // vw
    },
  },

  // Buttons
  Button: {
    Lg: 55, // px
    Md: 55, // px
    Sm: 40, // px
  },

  // Inputs
  Input: {
    Lg: 44, // px
    Md: 35, // px
    Sm: 35, // px
  },

  // Transitions
  Transition: {
    String: "all 0.25s ease",
    Duration: 0.25, // seconds
    Ease: [0.29, 0.77, 0.57, 0.85], // Cubic Bezier Ease
    Page: 2000, // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
  },

  // Geometry
  Geometry: {
    Radius: 15, // px
  },

  // Borders
  Border: {
    Size: 6,
  },

  // Dialogs
  DialogPaddingSize: {
    Lg: 15, // px
    Md: 15, // px
    Sm: 10, // px
  },
};

// End Component
// __________________________________________________________________________________________
