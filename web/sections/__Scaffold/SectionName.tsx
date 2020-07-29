// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";

// Styles
import { SectionNameStyle } from "./styles.scss";

// Components
import { Debugger } from "../../components/core/Debugger";
import { InnerGrid } from "../../components/core/InnerGrid";

// Begin Component
// __________________________________________________________________________________________

// Types
export type LMNTS_Schema_SectionName = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "section_key";
  };

export type LMNTS_Section_SectionName = {
  schema: LMNTS_Schema_SectionName;
};
// ________________________________

/**
 *
 * @name SectionName
 *
 */
export const SectionName: React.FunctionComponent<LMNTS_Section_SectionName> = ({
  schema,
}) => {
  // ________________________________
  // Debugger Settings
  let showDebugger = true;

  // ________________________________
  // Destructure your Schema
  // Protip: Use CTRL + Spacebar to explore your available typing.
  let { _type } = schema;

  // ________________________________
  // Make the magic happen
  return (
    <>
      <SectionNameStyle className={`section __scaffold __${_type}`}>
        {/* _______________________________________ */}
        {/* InnerGrid providing you an .inner class to target */}
        <InnerGrid addClass={`__${_type}`}>
          {/* _______________________________________ */}
          {/* Your Component's HTML goes here if it's inside the Grid */}
          <details>
            <summary>✅ SectionName: Initialized successfully.</summary>
            <pre>{JSON.stringify(schema, null, 2)}</pre>
          </details>
        </InnerGrid>
      </SectionNameStyle>
      {/* _______________________________________ */}
      {/* For Debugging */}
      {showDebugger ? <Debugger showSchema={schema} /> : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
