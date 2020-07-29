// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { CallToActionRowStyle } from "./styles.scss";
import LazyImage from "../../utils/lazyImage";
import { InnerGrid } from "../../components/core/InnerGrid";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CallToActionRow = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "call_to_action_row";
    background_image: Sanity_ImageAsset;
    body?: string;
  };

export type LMNTS_Section_CallToActionRow = {
  schema: LMNTS_Schema_CallToActionRow;
};

/**
 *
 * @name CallToActionRow
 * @author Peter Laxalt
 *
 */
export const CallToActionRow: React.FunctionComponent<LMNTS_Section_CallToActionRow> = ({
  schema,
}) => {
  let {
    _type,
    background_image,
    headline,
    subheadline,
    cta,
    theme_type,
    body
  } = schema;

  return (
    <>
      <CallToActionRowStyle className={`section __${_type}`}>
        {background_image ? (
          <figure className="cta-row-background">
            <LazyImage src={background_image.url} alt={headline} />
          </figure>
        ) : null}

        <InnerGrid addClass={`__${_type}`}>
          {subheadline ? (
            <span className="txt-caption __subheadline">{subheadline}</span>
          ) : null}
          {headline ? <h3>{headline}</h3> : null}
          {body ? <p>{body}</p> : null}
          {cta ? (
            <Link href={cta.href} as={cta.as ? cta.as : undefined}>
              <a
                className={`btn __theme-btn-${
                  theme_type
                    ? theme_type == "auto"
                      ? "covered-green"
                      : theme_type
                    : null
                }`}
              >
                {cta.label}
              </a>
            </Link>
          ) : null}
        </InnerGrid>
      </CallToActionRowStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
