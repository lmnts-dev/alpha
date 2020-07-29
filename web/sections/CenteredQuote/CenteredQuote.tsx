// Core
import React from "react";

// Styles
import { CenteredQuoteStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CenteredQuote = {
  content: string;
  author?: string;
  company?: string;
  _type: "centered_quote";
};

export type LMNTS_Section_CenteredQuote = {
  schema: LMNTS_Schema_CenteredQuote;
};

/**
 *
 * @name CenteredQuote
 * @author Peter Laxalt
 * @description Simple centered text row.
 *
 */
export const CenteredQuote: React.FunctionComponent<LMNTS_Section_CenteredQuote> = ({
  schema,
}) => {
  let { content, author, company } = schema;

  return (
    <CenteredQuoteStyle className={`section __centered-quote`}>
      <blockquote>{content}</blockquote>
      {author ? <span className="author">{author}</span> : false}
      {company ? <span className="company">{company}</span> : false}
    </CenteredQuoteStyle>
  );
};

// End Component
// __________________________________________________________________________________________
