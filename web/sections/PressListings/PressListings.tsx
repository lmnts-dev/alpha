// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_App_Data,
  LMNTS_PressItem,
} from "../../constants/types";

// Styles
import { PressListingsStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_PressListings = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "press_listings";
    add_press_to_top?: LMNTS_PressItem[];
    continue_loop?: boolean;
  };

export type LMNTS_Section_PressListings = {
  schema: LMNTS_Schema_PressListings;
  data: LMNTS_App_Data;
};

/**
 *
 * @name PressListings
 * @author Peter Laxalt
 *
 */
export const PressListings: React.FunctionComponent<LMNTS_Section_PressListings> = ({
  schema,
  data,
}) => {
  let { _type, add_press_to_top, continue_loop } = schema;
  let { __global } = data;

  // _____________________________________
  // Create our Press Order

  // Global Press
  let { press } = __global;

  // Top Ordered Press
  let pressAddedToTop = add_press_to_top
    ? add_press_to_top.map((orderedPressItem: LMNTS_PressItem) => {
        // Match ordered carrier reference to the right carrier from the global data set.
        // This is so we get all the image references.
        return press.filter(
          (pressWithAssets: LMNTS_PressItem) =>
            pressWithAssets._id === orderedPressItem._ref
        )[0];
      })
    : [];

  return (
    <>
      <PressListingsStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {/* _______________________________________ */}
          {/* List Press */}

          {/* _______________________________________ */}
          {/* Add our ordered press to top */}
          {pressAddedToTop && pressAddedToTop.length > 0
            ? pressAddedToTop.map((pressItem: LMNTS_PressItem, idx: number) => {
                return (
                  <a
                    key={idx}
                    href={pressItem.link}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="press-listing"
                  >
                    <div className="press-listing-top">
                      <span className="txt-caption">{pressItem.publisher}</span>
                      <span className="txt-caption">{pressItem.date}</span>
                    </div>
                    <h3>{pressItem.headline}</h3>
                  </a>
                );
              })
            : null}

          {/* _______________________________________ */}
          {/* Continue our loop if applicable */}
          {continue_loop !== false && press && press.length > 0
            ? press.map((pressItem: LMNTS_PressItem, idx: number) => {
                if (!pressAddedToTop.includes(pressItem)) {
                  return (
                    <a
                      key={idx}
                      href={pressItem.link}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="press-listing"
                    >
                      <div className="press-listing-top">
                        <span className="txt-caption">
                          {pressItem.publisher}
                        </span>
                        <span className="txt-caption">{pressItem.date}</span>
                      </div>
                      <h3>{pressItem.headline}</h3>
                    </a>
                  );
                } else {
                  return null;
                }
              })
            : null}
        </InnerGrid>
      </PressListingsStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
