// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";

// Styles
import { TrustPilotRowStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_TrustPilotRow = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "trust_pilot_row";
  };

export type LMNTS_Section_TrustPilotRow = {
  schema: LMNTS_Schema_TrustPilotRow;
};

declare global {
  interface Window {
    Trustpilot: any;
  }
}

/**
 *
 * @name TrustBox
 * @author Peter Laxalt
 * @see https://support.trustpilot.com/hc/en-us/articles/115011421468--Add-a-TrustBox-widget-to-a-single-page-application
 *
 */
const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
      className="trustpilot-widget" // Renamed this to className.
      data-locale="en-US"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id="5cadf7028abadb0001cf1f22"
      data-style-height="130px"
      data-style-width="100%"
      data-theme="light"
      data-stars="4,5"
    >
      <a
        href="https://www.trustpilot.com/review/example.com"
        target="_blank"
        rel="noopener"
      >
        {" "}
        Trustpilot
      </a>
    </div>
  );
};
export default TrustBox;

/**
 *
 * @name TrustPilotRow
 * @author Peter Laxalt
 *
 */
export const TrustPilotRow: React.FunctionComponent<LMNTS_Section_TrustPilotRow> = ({
  schema,
}) => {
  let { _type, headline, subheadline } = schema;

  return (
    <>
      <TrustPilotRowStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {subheadline ? (
            <span className="txt-caption __subheadline">{subheadline}</span>
          ) : null}
          {headline ? <h3>{headline}</h3> : null}
          <TrustBox />
        </InnerGrid>
      </TrustPilotRowStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
