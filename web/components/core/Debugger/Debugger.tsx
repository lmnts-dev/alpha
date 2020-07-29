// Core
import React from "react";

// Styles
import { DebuggerStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Debugger = {
  showSchema?: any;
  showState?: any;
  expanded?: boolean;
};

/**
 *
 * @name FourOhFour
 * @description A simple debugger component to display current schemas & states.
 *
 */
export const Debugger: React.FunctionComponent<LMNTS_Debugger> = ({
  showSchema,
  showState,
  expanded,
}) => {
  let logSchemaStyles =
    "color: white; background: black; border-radius: 4px; font-weight: bold; margin: 6px 0px; padding: 5px;";
  let logStateStyles =
    "color: black; background: snow; border-radius: 4px; font-weight: bold; margin: 6px 0px; padding: 5px;";

  const log = (message: string) => {
    return `%cLMNTS Debugger: ${message}`;
  };

  if (showState) {
    console.log(log("State"), logStateStyles, showState);
  }

  if (showSchema) {
    console.log(log("Schema"), logSchemaStyles, showSchema);
  }

  return (
    <DebuggerStyle>
      {showState ? (
        <pre className={`__pinned __state ${expanded ? "__opened" : ""}`}>
          {JSON.stringify(showState, null, 2)}
        </pre>
      ) : null}

      {showSchema ? (
        <pre className={`__pinned ${expanded ? "__opened" : ""}`}>
          {JSON.stringify(showSchema, null, 2)}
        </pre>
      ) : null}
    </DebuggerStyle>
  );
};

// End Component
// __________________________________________________________________________________________
