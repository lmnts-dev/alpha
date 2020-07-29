/**
 *
 * @name studio/utils/resolveProductionUrl.js
 * @author Peter Laxalt
 * @description Resolves URLs for previewing content.
 */

// Imports
// __________________________________________________________________________________________

import siteSettings from "../config/siteSettings";

// Begin Component
// __________________________________________________________________________________________

export default function resolveProductionUrl(document) {
  let slug;

  if (document._type == "channel") {
    slug = `/channels/${document.slug.current}`;
  } else if (document.slug.current == "home-page") {
    slug = `/`;
  } else {
    slug = `/${document.slug.current}`;
  }

  return `${siteSettings.baseUrl}/api/${siteSettings.previewApiRoute}?secret=${siteSettings.previewSecret}&slug=${slug}`;
}
