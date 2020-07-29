// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_ImageLayoutDropdown,
} from "../../constants/types";
import {
  Sanity_BlockContent,
  Sanity_ImageAsset,
} from "../../constants/types/Sanity";

// Styles
import { StickyTimelineSectionStyle } from "./styles.scss";

// Components
import BlockContent from "@sanity/block-content-to-react";
import { Debugger } from "../../components/core/Debugger";
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";
import { SanityOptions } from "../../clients";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_StickyTimelinePoint = {
  _type: "point";
  headline: string;
  body: Sanity_BlockContent;
  featured_image: Sanity_ImageAsset;
};

export type LMNTS_Schema_StickyTimelineSection = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Theme_Dropdown &
  LMNTS_Theme_ImageLayoutDropdown & {
    _type: "sticky_timeline_section";
    timeline_points: LMNTS_StickyTimelinePoint[];
  };

export type LMNTS_Section_StickyTimelineSection = {
  schema: LMNTS_Schema_StickyTimelineSection;
};

/**
 *
 * @name StickyTimelineSection
 * @author Peter Laxalt
 *
 */
export const StickyTimelineSection: React.FunctionComponent<LMNTS_Section_StickyTimelineSection> = ({
  schema,
}) => {
  let showDebugger = false;
  let {
    _type,
    timeline_points,
    headline,
    subheadline,
    layout,
    theme_type,
  } = schema;

  return (
    <>
      <StickyTimelineSectionStyle
        className={`section __${_type} ${layout} __theme-fg-${theme_type}`}
      >
        <InnerGrid addClass={`__${_type}`}>
          {/* _______________________________________ */}
          {/* Sticky timeline points */}
          {timeline_points.length > 0
            ? timeline_points.map(
                (point: LMNTS_StickyTimelinePoint, idx: number) => {
                  return (
                    <div className="sticky-timeline-point" key={idx}>
                      {/* _______________________________________ */}
                      {/* Sticky Timeline point content column */}
                      <div className="sticky-timeline-col __content">
                        {/* _______________________________________ */}
                        {/* Show Sticky Timeline header on first point */}
                        {idx === 0 ? (
                          <div className="sticky-timeline-section-header">
                            {subheadline ? (
                              <span className="txt-caption __subheadline">
                                {subheadline}
                              </span>
                            ) : null}
                            {headline ? <h3>{headline}</h3> : null}
                          </div>
                        ) : null}

                        {/* _______________________________________ */}
                        {/* Sticky Timeline point content */}
                        <div className="sticky-timeline-point-content">
                          <h4>{point.headline}</h4>
                          {point.body ? (
                            <BlockContent
                              blocks={point.body}
                              projectId={SanityOptions.projectId}
                              dataset={SanityOptions.dataset}
                            />
                          ) : null}
                        </div>
                      </div>

                      {/* _______________________________________ */}
                      {/* Sticky Timeline point media column */}
                      <div className="sticky-timeline-col __media">
                        <figure>
                          <LazyImage
                            src={point.featured_image.url}
                            alt={point.headline}
                          />
                        </figure>
                      </div>
                    </div>
                  );
                }
              )
            : null}
        </InnerGrid>
      </StickyTimelineSectionStyle>
      {/* _______________________________________ */}
      {/* For Debugging */}
      {showDebugger ? <Debugger showSchema={schema} expanded /> : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
