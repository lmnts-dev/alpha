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
import { ResourceCardListingsStyle } from "./styles.scss";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_ResourceCard = LMNTS_Default_CTA &
  LMNTS_Theme_IconIllustration & {
    name: string;
    body: string;
    is_external?: boolean;
  };

export type LMNTS_Schema_ResourceCardListings = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Theme_Dropdown & {
    _type: "resource_card_listings";
    listings: LMNTS_ResourceCard[];
  };

export type LMNTS_Section_ResourceCardListings = {
  schema: LMNTS_Schema_ResourceCardListings;
};

/**
 *
 * @name ResourceCardListings
 * @author Peter Laxalt
 *
 */
export const ResourceCardListings: React.FunctionComponent<LMNTS_Section_ResourceCardListings> = ({
  schema,
}) => {
  let { _type, subheadline, headline, listings } = schema;

  return (
    <>
      <ResourceCardListingsStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {/* ______________________________________________ */}
          {/* Headline */}
          {subheadline ? (
            <span className="txt-caption __subheadline">{subheadline}</span>
          ) : null}
          {headline ? <h3>{headline}</h3> : null}

          {/* ______________________________________________ */}
          {/* Listings */}
          <ul className="resource-card-listings">
            {listings.length > 0
              ? listings.map((listing: LMNTS_ResourceCard, idx: number) => {
                  return (
                    // __________________________________________
                    // List Item
                    <li className="resource-card" key={idx}>
                      <Link
                        href={listing.cta ? listing.cta.href : "/"}
                        as={
                          listing.cta
                            ? listing.cta.as
                              ? listing.cta.as
                              : undefined
                            : undefined
                        }
                      >
                        <a className="resource-card-inner">
                          {/* ______________________________________________ */}
                          {/* Icon */}
                          <figure>
                            <span>
                              <LazyImage
                                src={`/icons/ico-${listing.theme_icon_illustration}.svg`}
                                alt={`${listing.name}`}
                              />
                            </span>
                          </figure>

                          {/* ______________________________________________ */}
                          {/* Headline */}
                          <div className="resource-name">{listing.name}</div>

                          {/* ______________________________________________ */}
                          {/* Description */}
                          <p>{listing.body}</p>

                          {/* ______________________________________________ */}
                          {/* Pseduo CTA */}
                          <div className="pseudo-cta">
                            {listing.cta ? listing.cta.label : "Learn More"}
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </InnerGrid>
      </ResourceCardListingsStyle>
      {/* ______________________________________________ */}
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
