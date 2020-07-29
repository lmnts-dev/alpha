// Core
import React from "react";

// Components
import { InnerGrid } from "../InnerGrid";

// Types
import { LMNTS_Footer_Data, LMNTS_Global_Data } from "../../../constants/types";

// Styles
import { FooterStyle } from "./styles.scss";

// Components
import Link from "next/link";
import LazyImage from "../../../utils/lazyImage";
import { SocialMediaLinks } from "../../lib/SocialMediaLinks";

// Constants
import { Settings } from "../../../constants/site/Settings";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_Footer = {
  data: LMNTS_Footer_Data;
  addClass?: string;
  globals: LMNTS_Global_Data;
};

/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */

export const Footer: React.FunctionComponent<LMNTS_Footer> = ({
  data,
  addClass,
  globals,
}) => {
  // console.log(data ? "✅ Footer: Data loaded." : "🚫 Footer: Data not loaded.");

  let { footer_cta, link_lists, minor_footer_text } = data;
  let { config } = globals;
  let { social_media } = config;

  return (
    <FooterStyle className={addClass ? addClass : undefined}>
      <div className="fullwidth __footer-theme">
        <InnerGrid addClass="__footer-grid">
          {/* Footer CTA */}
          {footer_cta && footer_cta.link.link.href ? (
            <Link
              href={footer_cta.link.link.href}
              as={footer_cta.link.link.as ? footer_cta.link.link.as : undefined}
            >
              <a className="footer-row __footer-cta">
                <div className="footer-cta-large-text">
                  {footer_cta.cta_subheadline ? (
                    <span className="txt-caption">
                      {footer_cta.cta_subheadline}
                    </span>
                  ) : (
                    ""
                  )}

                  {footer_cta.cta_headline ? (
                    <h3>{footer_cta.cta_headline}</h3>
                  ) : (
                    ""
                  )}
                </div>

                <div className="footer-cta-pseudo-button">
                  {footer_cta.link.label}
                </div>
              </a>
            </Link>
          ) : null}

          {/* Footer Link Lists */}
          {link_lists && link_lists.columns.length > 0 ? (
            <div className="footer-row __link-lists">
              {link_lists.columns.map((linkListColumn, idx: number) => {
                return (
                  <ul key={idx}>
                    {linkListColumn.link_list &&
                    linkListColumn.link_list.length > 0
                      ? linkListColumn.link_list.map(
                          (linkItem, idxx: number) => {
                            if (linkItem.link && linkItem.link.href) {
                              return (
                                <li key={idxx}>
                                  <Link
                                    href={linkItem.link.href}
                                    as={
                                      linkItem.link.as
                                        ? linkItem.link.as
                                        : undefined
                                    }
                                  >
                                    <a>
                                      {linkItem.label ? linkItem.label : ""}
                                    </a>
                                  </Link>
                                </li>
                              );
                            } else if (linkItem.label) {
                              return (
                                <li className="__header" key={idxx}>
                                  {linkItem.label ? linkItem.label : ""}
                                </li>
                              );
                            } else {
                              console.log(
                                "🚫 Footer: LinkList item missing required properties."
                              );
                              return null;
                            }
                          }
                        )
                      : null}
                  </ul>
                );
              })}
            </div>
          ) : null}

          {/* ____________________________________________________________________ */}
          {/* Footer Bottom Bar */}
          <div className="footer-row __disclaimer-bar">
            <div className="footer-branding">
              <LazyImage
                src="/covered-logomark-white.svg"
                alt={Settings.siteTitleShort}
                title={Settings.siteTitleShort}
              />
            </div>
            <div className="footer-social-media">
              <SocialMediaLinks social_media={social_media} />
            </div>
            <div className="footer-disclaimer">
              {minor_footer_text ? minor_footer_text : "Made with ❤"}
            </div>
          </div>
        </InnerGrid>
      </div>
    </FooterStyle>
  );
};

// End Component
// __________________________________________________________________________________________
