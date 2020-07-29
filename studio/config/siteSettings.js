/**
 *
 * @name studio/config/siteSettings.js
 * @author Peter Laxalt
 * @description Strings to use throughout the studio settings.
 */

// Begin Component
// __________________________________________________________________________________________

export default class siteSettings {
  static previewSecret = "89509"; // THIS HAS TO MATCH THE `SANITY_PREVIEW_SECRET` SET IN `.env.local` IN `/web`
  static previewApiRoute = "preview";
  static vercelProjectId = "covered-2020";
  static baseUrl = "https://covered.vercel.app";
  static baseUrlHook = "https://api.vercel.com/v1/integrations/deploy/QmZHArV6uVQU2f49rngBB9AFX28dPY1wBt1pUbvZacEMCP/6RVLiQlu8x";
  static stagingUrl = "https://covered-staging.vercel.app";
  static stagingUrlHook = "https://api.vercel.com/v1/integrations/deploy/QmZHArV6uVQU2f49rngBB9AFX28dPY1wBt1pUbvZacEMCP/HrcDQqlXG3";
  // static baseUrl = "http://localhost:3000";
}
