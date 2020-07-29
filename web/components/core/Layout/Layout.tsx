// Core
import { useRouter } from "next/router";

// Constants
import { GlobalStyle } from "../../../constants/styles/Global";
import { Theme } from "../../../constants/Theme";

// Components
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { SiteHead } from "../SiteHead";

// Types
import { LMNTS_App_Data } from "../../../constants/types";
import { ReactNode } from "react";

// Styles
import { LayoutStyle } from "./styles.scss";

// Utils
import { hexToRGB } from "../../../utils/hexToRGB";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_Layout = {
  children: ReactNode;
  __data: LMNTS_App_Data;
};

/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 * @param {ReactNode} children
 */
export const Layout: React.FunctionComponent<LMNTS_Layout> = ({
  children,
  __data,
}) => {
  let { __nav, __footer, __document, __global } = __data;
  let router = useRouter();
  let fromPreviewMode = router.query.fromPreviewMode
    ? router.query.fromPreviewMode == "1"
      ? true
      : false
    : false;
  let isPreviewMode = router.query.isPreviewMode
    ? router.query.isPreviewMode == "1"
      ? true
      : false
    : false;

  return (
    <>
      {/* _______________________________________________ */}
      {/* Site <head> tag */}
      <SiteHead />

      {/* _______________________________________________ */}
      {/* Global Styles */}
      <GlobalStyle />

      {/* _______________________________________________ */}
      {/* Navigation */}
      {__document &&
      __document.page_layout &&
      __document.page_layout.layout !== "__layout-focus" ? (
        <Navigation data={__nav} />
      ) : null}

      {/* _______________________________________________ */}
      {/* Main Wrapper */}
      <LayoutStyle
        className={`layout ${
          __document &&
          __document.page_theme &&
          __document.page_theme.theme_type
            ? `__theme-fg-${__document.page_theme.theme_type}`
            : ""
        }`}
      >
        {children}
      </LayoutStyle>

      {/* _______________________________________________ */}
      {/* Footer */}
      {__document &&
      __document.page_layout &&
      __document.page_layout.layout !== "__layout-focus" ? (
        <Footer
          addClass={`${
            __document &&
            __document.page_theme &&
            __document.page_theme.theme_type
              ? `__theme-bg-${__document.page_theme.theme_type}`
              : ""
          }`}
          data={__footer}
          globals={__global}
        />
      ) : null}

      {/* _______________________________________________ */}
      {/* Preview Mode Toggles */}
      {fromPreviewMode ? (
        <a
          href={`/`}
          className="btn"
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            boxShadow: "0 6px 20px 0px " + hexToRGB(Theme.Color.Nightsky, 0.15),
            background: Theme.Color.Nightsky,
            color: "white",
            zIndex: 999999999,
          }}
        >
          Preview mode closed
        </a>
      ) : null}

      {isPreviewMode ? (
        <a
          href={`/api/exit-preview`}
          className="btn"
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            boxShadow: "0 6px 20px 0px " + hexToRGB(Theme.Color.Nightsky, 0.15),
            background: Theme.Color.Success,
            color: "white",
            zIndex: 999999999,
          }}
        >
          Preview mode active
        </a>
      ) : null}
    </>
  );
};
