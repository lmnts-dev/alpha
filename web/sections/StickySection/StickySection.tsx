// Core
import React from "react";

// Types
import {
  Sanity_ImageAsset,
  Sanity_BlockContent,
} from "../../constants/types/Sanity";

// Styles
import { StickySectionStyle } from "./styles.scss";

// Components
import BlockContent from "@sanity/block-content-to-react";
import { LazyImage } from "../../utils/lazyImage";

// Utils
import { urlFor } from "../../utils/urlFor";
import { calcAspectRatio } from "../../utils/calcAspectRatio";
import { SanityOptions } from "../../clients";
import {
  LMNTS_Theme_LayoutDropdown,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_StickySection = LMNTS_Theme_LayoutDropdown &
  LMNTS_Theme_Dropdown & {
    headline: string;
    subheadline?: string;
    doodad_toggle?: boolean;
    body?: Sanity_BlockContent;
    images?: Sanity_ImageAsset[];
    _type: "sticky_section";
  };

export type LMNTS_Section_StickySection = {
  schema: LMNTS_Schema_StickySection;
};

/**
 *
 * @name StickySection
 * @author Peter Laxalt
 * @description A Sticky Section component.
 * @requires studio/sections/StickySection
 *
 */

export const StickySection: React.FunctionComponent<LMNTS_Section_StickySection> = ({
  schema,
}) => {
  let {
    layout,
    headline,
    subheadline,
    body,
    images,
    doodad_toggle,
    theme_type,
    _type,
  } = schema;

  return (
    <StickySectionStyle
      className={`section __${_type} section-sticky ${
        doodad_toggle ? "__show-dood-dad" : ""
      } ${theme_type ? `__theme-fg-${theme_type}` : ""} section-sticky-${
        layout ? (layout == "__layout-media-left" ? "left" : "right") : "right"
      } `}
    >
      <InnerGrid addClass={`__${_type}`}>
        <div className="section-sticky-col content">
          <div className="section-sticky-col-inner">
            {subheadline ? (
              <span className="txt-caption __subheadline">{subheadline}</span>
            ) : null}
            {headline ? (
              <h3 className="section-sticky-headline">{headline}</h3>
            ) : null}
            {body ? (
              <div className="section-block-content">
                <BlockContent
                  blocks={body}
                  projectId={SanityOptions.projectId}
                  dataset={SanityOptions.dataset}
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="section-sticky-col img">
          <div className="section-sticky-col-inner">
            {images
              ? images.map((image: Sanity_ImageAsset, idx: number) => {
                  return (
                    <div
                      className={`section-sticky-img-wrapper ${
                        image.metadata
                          ? image.metadata.hasAlpha
                            ? "__hide-placeholder-bg"
                            : false
                          : false
                      }`}
                      data-aspect-ratio={`${
                        image.metadata
                          ? image.metadata.dimensions.aspectRatio
                          : -1
                      }`}
                      style={
                        image.metadata.dimensions
                          ? {
                              paddingBottom: calcAspectRatio(
                                image.metadata.dimensions
                              ),
                            }
                          : {}
                      }
                      key={idx}
                    >
                      <LazyImage
                        src={`${urlFor(image)
                          .width(2000)
                          .auto("format")
                          .url()}`}
                        alt={headline + ": " + subheadline}
                        title={headline + ": " + subheadline}
                        aspectRatio={`${
                          image.metadata
                            ? image.metadata.dimensions.aspectRatio
                            : -1
                        }`}
                      />
                    </div>
                  );
                })
              : false}
          </div>
        </div>
      </InnerGrid>
    </StickySectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
