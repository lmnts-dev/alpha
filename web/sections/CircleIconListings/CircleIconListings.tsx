// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_IconIllustration,
} from "../../constants/types";

// Styles
import { CircleIconListingsStyle } from "./styles.scss";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import Link from "next/link";
import LazyImage from "../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CircleIconIndividualListing = LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown &
  LMNTS_Theme_IconIllustration & {
    body: string;
    header: string;
  };

export type LMNTS_Schema_CircleIconListings = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "circle_icon_listings";
    listings: LMNTS_Schema_CircleIconIndividualListing[];
  };

export type LMNTS_Section_CircleIconListings = {
  schema: LMNTS_Schema_CircleIconListings;
};

/**
 *
 * @name CircleIconListings
 * @author Peter Laxalt
 *
 */
export const CircleIconListings: React.FunctionComponent<LMNTS_Section_CircleIconListings> = ({
  schema,
}) => {
  let { _type, listings } = schema;

  return (
    <>
      <CircleIconListingsStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {listings && listings.length > 0 ? (
            <ul>
              {listings.map(
                (
                  listing: LMNTS_Schema_CircleIconIndividualListing,
                  idx: number
                ) => {
                  if (listing.cta) {
                    return (
                      // _________________________________________
                      // Individual Listings with Links
                      <li
                        className={`${
                          listing.theme_type
                            ? "__theme-" + listing.theme_type
                            : "__theme-auto"
                        }`}
                        key={idx}
                      >
                        <Link
                          href={listing.cta.href}
                          as={listing.cta.as ? listing.cta.as : undefined}
                        >
                          <a className="listing-inner">
                            {/* ____________________________________________________ */}
                            {/* Icon */}
                            <figure>
                              <span>
                                <LazyImage
                                  src={`/icons/ico-${listing.theme_icon_illustration}.svg`}
                                  alt={`${listing.header}`}
                                />
                              </span>
                            </figure>

                            {/* ____________________________________________________ */}
                            {/* Header */}
                            <span className="listing-title">
                              {listing.header}
                            </span>

                            {/* ____________________________________________________ */}
                            {/* Description */}
                            <p>{listing.body}</p>

                            {/* ____________________________________________________ */}
                            {/* Pseudo Cta */}
                            <span className="pseudo-cta">
                              {listing.cta.label}
                            </span>
                          </a>
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      // _________________________________________
                      // Individual Listings without Links
                      <li
                        className={`${
                          listing.theme_type
                            ? "__theme-" + listing.theme_type
                            : "__theme-auto"
                        }`}
                        key={idx}
                      >
                        <div className="listing-inner">
                          {/* ____________________________________________________ */}
                          {/* Icon */}
                          <figure>
                            <span />
                          </figure>

                          {/* ____________________________________________________ */}
                          {/* Header */}
                          <span className="listing-title">
                            {listing.header}
                          </span>

                          {/* ____________________________________________________ */}
                          {/* Description */}
                          <p>{listing.body}</p>
                        </div>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          ) : null}
        </InnerGrid>
      </CircleIconListingsStyle>
      {/* ____________________________________________________ */}
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
