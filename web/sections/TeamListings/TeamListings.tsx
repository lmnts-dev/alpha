// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_DefaultSocialMedia,
} from "../../constants/types";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { TeamListingsStyle } from "./styles.scss";

// Components
import { Debugger } from "../../components/core/Debugger";
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";
import { SocialMediaLinks } from "../../components/lib/SocialMediaLinks";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_TeamMember = LMNTS_DefaultSocialMedia & {
  image: Sanity_ImageAsset;
  name: string;
  position: string;
};

export type LMNTS_Schema_TeamListings = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "team_listings";
    team_members: LMNTS_TeamMember[];
  };

export type LMNTS_Section_TeamListings = {
  schema: LMNTS_Schema_TeamListings;
};

/**
 *
 * @name TeamListings
 * @author Peter Laxalt
 *
 */
export const TeamListings: React.FunctionComponent<LMNTS_Section_TeamListings> = ({
  schema,
}) => {
  let showDebugger = false;
  let { _type, team_members, subheadline, headline } = schema;

  return (
    <>
      <TeamListingsStyle className={`section __${_type}`}>
        <InnerGrid addClass={`__${_type}`}>
          {/* _______________________________________ */}
          {/* Team Listings Headline */}
          <div className="team-listings-section-header">
            {subheadline ? (
              <span className="txt-caption __subheadline">{subheadline}</span>
            ) : null}
            {headline ? <h3>{headline}</h3> : null}
          </div>

          {/* _______________________________________ */}
          {/* Team Listings Items */}
          <ul className="team-listings-items">
            {team_members && team_members.length > 0
              ? team_members.map((person: LMNTS_TeamMember, idx: number) => {
                  return (
                    <li className="team-listing" key={idx}>
                      <div className="team-listing-inner">
                        {/* _______________________________________ */}
                        {/* Photo */}
                        <figure className="team-listing-row __image">
                          <LazyImage src={person.image.url} alt={person.name} />
                        </figure>
                        {/* _______________________________________ */}
                        {/* Name */}
                        <span className="team-listing-row __name">
                          {person.name}
                        </span>
                        {/* _______________________________________ */}
                        {/* Position */}
                        <span className="team-listing-row __position">
                          {person.position}
                        </span>
                        {/* _______________________________________ */}
                        {/* Social Media */}
                        <span className="team-listing-row __social">
                          <SocialMediaLinks
                            social_media={person.social_media}
                          />
                        </span>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </InnerGrid>
      </TeamListingsStyle>
      {/* _______________________________________ */}
      {/* For Debugging */}
      {showDebugger ? <Debugger showSchema={schema} expanded /> : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
