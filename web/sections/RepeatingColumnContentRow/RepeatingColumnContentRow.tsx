// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";

// Styles
import { RepeatingColumnContentRowStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";
import { Settings } from "../../constants/site/Settings";
import LazyImage from "../../utils/lazyImage";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_RepeatingColumn = LMNTS_Default_CTA & {
  _type: "column";
  body?: string;
  headline?: string;
  image?: Sanity_ImageAsset;
};

export type LMNTS_Schema_RepeatingColumnContentRow = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Theme_Dropdown & {
    _type: "repeating_column_content_row";
    columns: LMNTS_RepeatingColumn[];
  };

export type LMNTS_Section_RepeatingColumnContentRow = {
  schema: LMNTS_Schema_RepeatingColumnContentRow;
};

/**
 *
 * @name RepeatingColumnContentRow
 * @author Peter Laxalt
 *
 */
export const RepeatingColumnContentRow: React.FunctionComponent<LMNTS_Section_RepeatingColumnContentRow> = ({
  schema,
}) => {
  let { _type, subheadline, headline, columns } = schema;

  return (
    <>
      <RepeatingColumnContentRowStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          <div className="repeating-column-row-header">
            {subheadline ? (
              <span className="txt-caption __subheadline">{subheadline}</span>
            ) : null}
            {headline ? <h3>{headline}</h3> : null}
          </div>
          <div className="repeating-column-row-columns">
            {columns && columns.length > 0
              ? columns.map((column: LMNTS_RepeatingColumn, idx: number) => {
                  return (
                    <div className="col" key={idx}>
                      <div className="col-inner">
                        {column.image ? (
                          <figure>
                            <LazyImage
                              src={column.image.url}
                              alt={
                                column.headline
                                  ? column.headline
                                  : Settings.siteTitleShort
                              }
                            />
                          </figure>
                        ) : null}
                        {column.headline ? <h4>{column.headline}</h4> : null}
                        {column.body ? <p>{column.body}</p> : null}
                        {column.cta ? (
                          <Link
                            href={column.cta.href}
                            as={column.cta.as ? column.cta.as : undefined}
                          >
                            <a className="btn">{column.cta.label}</a>
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </InnerGrid>
      </RepeatingColumnContentRowStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
