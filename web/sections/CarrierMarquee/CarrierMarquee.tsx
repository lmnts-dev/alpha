// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Theme_Dropdown,
  LMNTS_App_Data,
  LMNTS_Carrier,
} from "../../constants/types";

// Styles
import { CarrierMarqueeStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CarrierMarquee = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Theme_Dropdown & {
    _type: "carrier_marquee";
    headline?: string;
    subheadline?: string;
  };

export type LMNTS_Section_CarrierMarquee = {
  schema: LMNTS_Schema_CarrierMarquee;
  data: LMNTS_App_Data;
};

/**
 *
 * @name CarrierMarquee
 * @author Peter Laxalt
 *
 */
export const CarrierMarquee: React.FunctionComponent<LMNTS_Section_CarrierMarquee> = ({
  schema,
  data,
}) => {
  let { _type, headline, subheadline } = schema;
  let { __global } = data;
  let { carriers } = __global;

  return (
    <>
      <CarrierMarqueeStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {subheadline ? (
            <span className="txt-caption __subheadline">{subheadline}</span>
          ) : null}
          {headline ? <h3>{headline}</h3> : null}
        </InnerGrid>
        <div className="__full-width">
          <div className="section-marquee-container">
            {carriers ? (
              <ul>
                {carriers.map((carrier: LMNTS_Carrier, idx: number) => {
                  return (
                    <li key={idx}>
                      <figure className="carrier-image-wrapper">
                        <LazyImage src={carrier.logo.url} alt={carrier.name} />
                      </figure>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {carriers ? (
              <ul>
                {carriers.map((carrier: LMNTS_Carrier, idx: number) => {
                  return (
                    <li key={idx}>
                      <figure className="carrier-image-wrapper">
                        <LazyImage src={carrier.logo.url} alt={carrier.name} />
                      </figure>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </CarrierMarqueeStyle>
      {/* For Debugging
      <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
