// Core
import React from "react";

// Styles
import { SectionBreakStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_SectionBreak = {
  style: string;
  _type: "section_break";
};

export type LMNTS_Section_SectionBreak = {
  schema: LMNTS_Schema_SectionBreak;
};

/**
 *
 * @name SectionBreak
 * @author Peter Laxalt
 * @description Simple Section Break.
 * @requires studio/sections/SectionBreak
 */

export const SectionBreak: React.FunctionComponent<LMNTS_Section_SectionBreak> = ({
  schema,
}) => {
  let { style } = schema;
  let styleClass = style
    ? style == "High Contrast Section Break"
      ? "section-break-high-contrast"
      : false
    : false;

  return (
    <SectionBreakStyle className={`section section-break ${styleClass}`} />
  );
};

// End Component
// __________________________________________________________________________________________
