// Core
import React from "react";

// Types
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { TwoColumnLogoHighlightRowStyle } from "./styles.scss";

// Components
import { Debugger } from "../../components/core/Debugger";
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_LogoHighlightColumn = {
  company_name: string;
  highlight_description: string;
  image: Sanity_ImageAsset;
};

export type LMNTS_Schema_TwoColumnLogoHighlightRow = {
  _type: "two_column_logo_highlight_row";
  left_column: LMNTS_LogoHighlightColumn;
  right_column: LMNTS_LogoHighlightColumn;
};

export type LMNTS_Section_TwoColumnLogoHighlightRow = {
  schema: LMNTS_Schema_TwoColumnLogoHighlightRow;
};

/**
 *
 * @name TwoColumnLogoHighlightRow
 * @author Peter Laxalt
 *
 */
export const TwoColumnLogoHighlightRow: React.FunctionComponent<LMNTS_Section_TwoColumnLogoHighlightRow> = ({
  schema,
}) => {
  let showDebugger = false;
  let { _type, left_column, right_column } = schema;

  return (
    <>
      <TwoColumnLogoHighlightRowStyle className={`section __${_type}`}>
        {/* _____________________________________________________ */}
        {/* Inner Grid */}
        <InnerGrid addClass={`__${_type}`}>
          {/* _____________________________________________________ */}
          {/* Left Column */}
          <div className="logo-highlight-col">
            {/* _________________________ */}
            {/* Left Column Media */}
            <div className="logo-highlight-col-media">
              <figure>
                <LazyImage
                  src={left_column.image.url}
                  alt={left_column.company_name}
                />
              </figure>
            </div>
            {/* _________________________ */}
            {/* Left Column Content */}
            <div className="logo-highlight-col-content">
              <p>{left_column.highlight_description}</p>
            </div>
          </div>

          {/* _____________________________________________________ */}
          {/* Right Column */}
          <div className="logo-highlight-col">
            {/* _________________________ */}
            {/* Right Column Media */}
            <div className="logo-highlight-col-media">
              <figure>
                <LazyImage
                  src={right_column.image.url}
                  alt={right_column.company_name}
                />
              </figure>
            </div>
            {/* _________________________ */}
            {/* Right Column Content */}
            <div className="logo-highlight-col-content">
              <p>{right_column.highlight_description}</p>
            </div>
          </div>
        </InnerGrid>
      </TwoColumnLogoHighlightRowStyle>

      {/* _______________________________________ */}
      {/* For Debugging */}
      {showDebugger ? <Debugger showSchema={schema} expanded /> : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
