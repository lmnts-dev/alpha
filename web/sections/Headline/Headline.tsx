// Core
import React from "react";

// Styles
import { HeadlineStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_Headline = {
  headline?: string;
  subheadline?: string;
  body?: string;
  layout: string;
  size?: string;
  _type: "headline";
};

export type LMNTS_Section_Headline = {
  schema: LMNTS_Schema_Headline;
};

/**
 *
 * @name Headline
 * @author Peter Laxalt
 * @description Simple Headline component.
 * @requires studio/sections/Headline
 *
 */
export const Headline: React.FunctionComponent<LMNTS_Section_Headline> = ({
  schema,
}) => {
  let { headline, subheadline, body, layout, size, _type } = schema;

  return (
    <HeadlineStyle
      className={`section section-headline section-headline-layout-${layout} section-headline-size-${
        size ? size : "regular"
      }`}
    >
      <InnerGrid addClass={`__${_type}`}>
        <div className="section-headline-inner">
          <div className="section-headline-header">
            {headline ? <h3 className="io">{headline}</h3> : false}
            {subheadline ? (
              <h3 className="io subheadline">{subheadline}</h3>
            ) : (
              false
            )}
          </div>
          {body ? <p className="io">{body}</p> : false}
        </div>
      </InnerGrid>
    </HeadlineStyle>
  );
};

// End Component
// __________________________________________________________________________________________
