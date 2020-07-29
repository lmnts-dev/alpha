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

// Styles
import { SplitSectionStyle } from "./styles.scss";
import {
  Sanity_ImageAsset,
  Sanity_BlockContent,
} from "../../constants/types/Sanity";
import Link from "next/link";
import LazyImage from "../../utils/lazyImage";
import { SanityOptions } from "../../clients";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_SplitSection = LMNTS_Theme_LayoutDropdown &
  LMNTS_Theme_Dropdown & {
    _type: "split_section";
    section_content: LMNTS_Default_CTA & {
      headline: string;
      body: Sanity_BlockContent;
    };
    section_featured_image: Sanity_ImageAsset;
  };

export type LMNTS_Section_SplitSection = {
  schema: LMNTS_Schema_SplitSection;
};

/**
 *
 * @name SplitSection
 * @author Peter Laxalt
 *
 */
export const SplitSection: React.FunctionComponent<LMNTS_Section_SplitSection> = ({
  schema,
}) => {
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
      <SplitSectionStyle
        className={`section __${_type} ${layout} __theme-fg-${theme_type}`}
      >
        <InnerGrid addClass={`__${_type}`}>
          <div className="section-content">
            {headline ? <h3>{headline}</h3> : null}
            {body ? (
              <div className="section-content-wrap">
                <BlockContent
                  blocks={body}
                  projectId={SanityOptions.projectId}
                  dataset={SanityOptions.dataset}
                />
              </div>
            ) : null}
            {cta ? (
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
            ) : null}
          </div>
        </InnerGrid>
        {section_featured_image ? (
          <figure className="section-featured-image">
            <LazyImage src={section_featured_image.url} alt={headline} />
          </figure>
        ) : null}
      </SplitSectionStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
