// Core
import React from "react";

// Styles
import { CenteredContentStyle } from "./styles.scss";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_ImageLayoutDropdown,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";
import {
  Sanity_BlockContent,
  Sanity_ImageAsset,
} from "../../constants/types/Sanity";

// Constants
import { SanityOptions } from "../../clients";

// Components
import BlockContent from "@sanity/block-content-to-react";
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";
import { calcAspectRatio } from "../../utils/calcAspectRatio";
import { isValidURL } from "../../utils/isValidURL";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CenteredContent = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    body?: Sanity_BlockContent;
    featured_image?: {
      image: Sanity_ImageAsset;
      layout: LMNTS_Theme_ImageLayoutDropdown;
    };
    background_image?: Sanity_ImageAsset;
    _type: "centered_content_row";
  };

export type LMNTS_Section_CenteredContent = {
  schema: LMNTS_Schema_CenteredContent;
};

/**
 *
 * @name CenteredContent
 * @author Peter Laxalt
 * @description Simple centered text row.
 *
 */
export const CenteredContent: React.FunctionComponent<LMNTS_Section_CenteredContent> = ({
  schema,
}) => {
  let { _type, subheadline, headline, body, featured_image, cta } = schema;

  return (
    <>
      <CenteredContentStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {/* ___________________________________________ */}
          {/* Subheadline */}
          {subheadline ? (
            <span className="txt-caption __subheadline">{subheadline}</span>
          ) : null}

          {/* ___________________________________________ */}
          {/* Headline */}
          {headline ? <h3>{headline}</h3> : null}

          {/* ___________________________________________ */}
          {/* Content */}
          {body ? (
            <div className="centered-content">
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
              <div className="centered-content-cta">
                <a
                  href={cta.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className={`btn __theme-btn-covered-green`}
                >
                  {cta.label}
                </a>
              </div>
            ) : (
              <div className="centered-content-cta">
                <Link href={cta.href} as={cta.as ? cta.as : undefined}>
                  <a className={`btn __theme-btn-covered-green`}>{cta.label}</a>
                </Link>
              </div>
            )
          ) : null}

          {/* ___________________________________________ */}
          {/* Featured Image */}
          {featured_image && featured_image.image ? (
            <figure
              className="centered-image"
              style={
                featured_image.image.metadata
                  ? {
                      paddingBottom: calcAspectRatio(
                        featured_image.image.metadata.dimensions
                      ),
                    }
                  : {}
              }
            >
              <LazyImage src={featured_image.image.url} alt={headline} />
            </figure>
          ) : null}
        </InnerGrid>
      </CenteredContentStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
