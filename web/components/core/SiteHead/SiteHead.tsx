/**
 *
 * Head.js
 * @author Peter Laxalt
 * @description The website <head>.
 *
 */

// Core
import Head from "next/head";
import { Settings } from "../../../constants/site/Settings";

// Begin Component
// __________________________________________________________________________________________

export const SiteHead = ({
  title = Settings.siteTitle + " | " + Settings.siteDescription,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Basic page needs */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="keywords" content={Settings.siteBaseKeywords} />
      <meta name="description" content={Settings.siteDescription} />

      {/* PWA Requirements */}
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-title"
        content={Settings.siteTitleShort}
      />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name='format-detection' content='telephone=no' />
      <link rel="manifest" href="/manifest.json" />
      <meta name='application-name' content={Settings.siteTitleShort} />

      {/* Opengraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={Settings.siteUrl} />
      <meta property="og:title" content={Settings.siteTitle} />
      <meta property="og:description" content={Settings.siteDescription} />
      <meta property="og:image" content={`${Settings.siteUrl}/og.png`} />
      <meta property="og:image:width" content="596" />
      <meta property="og:image:height" content="328" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:domain"
        // @ts-ignore
        value={Settings.siteUrl}
      />
      <meta
        name="twitter:title"
        // @ts-ignore
        value=""
      />
      <meta
        name="twitter:description"
        // @ts-ignore
        value={Settings.siteDescription}
      />
      <meta name="twitter:image" content={`${Settings.siteUrl}/og.png`} />
      <meta
        name="twitter:url"
        // @ts-ignore
        value={Settings.siteUrl}
      />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={Settings.themeColor}
      />
      <meta name="msapplication-TileColor" content={Settings.themeColor} />
      <meta name="theme-color" content={Settings.themeColor} />

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sarabun:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,600&display=swap"
        rel="stylesheet"
      />

      {/* TrustBox script */}
      <script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      ></script>
      {/* End TrustBox script */}
    </Head>
  );
};
