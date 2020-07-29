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
import { FeaturedLogosRowStyle } from "./styles.scss";
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_FeaturedLogo = {
  company_name: string;
  image: Sanity_ImageAsset;
};

export type LMNTS_Schema_FeaturedLogosRow = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "featured_logos_row";
    headline?: string;
    featured_logos: LMNTS_FeaturedLogo[];
  };

export type LMNTS_Section_FeaturedLogosRow = {
  schema: LMNTS_Schema_FeaturedLogosRow;
};

/**
 *
 * @name FeaturedLogosRow
 * @author Peter Laxalt
 *
 */
export const FeaturedLogosRow: React.FunctionComponent<LMNTS_Section_FeaturedLogosRow> = ({
  schema,
}) => {
  let { _type, headline, featured_logos } = schema;

  return (
    <>
      <FeaturedLogosRowStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          <div className="featured-logos-row-header">
            {headline ? <h3>{headline}</h3> : null}
          </div>
          <ul className="featured-logos-row-listings">
            {featured_logos
              ? featured_logos.map((logo: LMNTS_FeaturedLogo, idx: number) => {
                  return (
                    <li className="featured-logo-listing" key={idx}>
                      <div className="featured-logo-listing-inner">
                        <figure>
                          <LazyImage
                            src={logo.image.url}
                            alt={logo.company_name}
                          />
                        </figure>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </InnerGrid>
      </FeaturedLogosRowStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
