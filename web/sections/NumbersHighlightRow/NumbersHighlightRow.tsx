// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";

// Styles
import { NumbersHighlightRowStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_NumbersHighlight = {
  counter: string;
  caption?: string;
};

export type LMNTS_Schema_NumbersHighlightRow = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Theme_Dropdown & {
    _type: "numbers_row";
    headline?: string;
    subheadline?: string;
    numbers: LMNTS_NumbersHighlight[];
  };

export type LMNTS_Section_NumbersHighlightRow = {
  schema: LMNTS_Schema_NumbersHighlightRow;
};

/**
 *
 * @name NumbersHighlightRow
 * @author Peter Laxalt
 *
 */
export const NumbersHighlightRow: React.FunctionComponent<LMNTS_Section_NumbersHighlightRow> = ({
  schema,
}) => {
  let { _type, subheadline, headline, numbers } = schema;

  return (
    <>
      <NumbersHighlightRowStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          <div className="numbers-highlight-row-header">
            {subheadline ? (
              <span className="txt-caption __subheadline">{subheadline}</span>
            ) : null}
            {headline ? <h3>{headline}</h3> : null}
          </div>
          <div className="numbers-highlight-row-columns">
            {numbers
              ? numbers.map((number: LMNTS_NumbersHighlight, idx: number) => {
                  return (
                    <div className="numbers-highlight-col" key={idx}>
                      <div className="numbers-highlight-col-inner">
                        <span className="counter">{number.counter}</span>
                        {number.caption ? <p>{number.caption}</p> : null}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </InnerGrid>
      </NumbersHighlightRowStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
