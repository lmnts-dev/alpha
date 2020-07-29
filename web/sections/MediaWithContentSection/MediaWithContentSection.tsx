// Core
import React from "react";

// Types
import {
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_LayoutDropdown,
} from "../../constants/types";

// Components
import BlockContent from "@sanity/block-content-to-react";
import { InnerGrid } from "../../components/core/InnerGrid";
import Link from "next/link";
import LazyImage from "../../utils/lazyImage";
import { Debugger } from "../../components/core/Debugger";

// Types
import {
  Sanity_ImageAsset,
  Sanity_BlockContent,
} from "../../constants/types/Sanity";

// Styles
import { MediaWithContentSectionStyle } from "./styles.scss";

// Constants
import { SanityOptions } from "../../clients";
import { isValidURL } from "../../utils/isValidURL";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_MediaWithContentSection = LMNTS_Theme_LayoutDropdown &
  LMNTS_Theme_Dropdown & {
    _type: "media_with_content_section";
    section_content: LMNTS_Default_CTA & {
      headline: string;
      body: Sanity_BlockContent;
    };
    section_featured_image: Sanity_ImageAsset;
  };

export type LMNTS_Section_MediaWithContentSection = {
  schema: LMNTS_Schema_MediaWithContentSection;
};

/**
 *
 * @name MediaWithContentSection
 * @author Peter Laxalt
 *
 */
export const MediaWithContentSection: React.FunctionComponent<LMNTS_Section_MediaWithContentSection> = ({
  schema,
}) => {
  let showDebugger = false;
  let {
    _type,
    section_content,
    section_featured_image,
    theme_type,
    layout,
  } = schema;
  let { headline, body, cta } = section_content;

  return (
    <>
      <MediaWithContentSectionStyle
        className={`section __${_type} ${layout} __theme-${theme_type} __editorial-text-defaults`}
      >
        <InnerGrid addClass={`__${_type}`}>
          <div className="section-content">
            {/* _______________________________________ */}
            {/* Section Headline */}
            {headline ? <h3>{headline}</h3> : null}

            {/* _______________________________________ */}
            {/* Section Body */}
            {body ? (
              <div className="section-content-wrap">
                <BlockContent
                  blocks={body}
                  projectId={SanityOptions.projectId}
                  dataset={SanityOptions.dataset}
                />
              </div>
            ) : null}

            {/* _______________________________________ */}
            {/* Section CTA */}
            {cta ? (
              isValidURL(cta.href) ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className={`btn __theme-btn-${
                    theme_type
                      ? theme_type == "auto"
                        ? "covered-green"
                        : theme_type
                      : null
                  }`}
                >
                  {cta.label}
                </a>
              ) : (
                <Link href={cta.href} as={cta.as ? cta.as : undefined}>
                  <a
                    className={`btn __theme-btn-${
                      theme_type
                        ? theme_type == "auto"
                          ? "covered-green"
                          : theme_type
                        : null
                    }`}
                  >
                    {cta.label}
                  </a>
                </Link>
              )
            ) : null}
          </div>
        </InnerGrid>

        {/* _______________________________________ */}
        {/* Section Media */}
        {section_featured_image ? (
          <figure className="section-featured-image">
            <LazyImage src={section_featured_image.url} alt={headline} />
          </figure>
        ) : null}
      </MediaWithContentSectionStyle>
      {/* _______________________________________ */}
      {/* For Debugging */}
      {showDebugger ? <Debugger showSchema={schema} expanded /> : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
