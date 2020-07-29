// Core
import React from "react";

// Libraries
import Typed from "react-typed";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
} from "../../constants/types";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { CircleTypedHeroStyle } from "./styles.scss";

// Components
import LazyImage from "../../utils/lazyImage";
import { InnerGrid } from "../../components/core/InnerGrid";

// Constants
import { Settings } from "../../constants/site/Settings";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CircleTypedHero = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "circle_typed_hero";
    hero_background_image?: Sanity_ImageAsset;
    hero_content: LMNTS_Default_CTA & {
      header_looping_strings: string[];
      header_static_string: string;
      header_sub_paragraph?: string;
    };
  };

export type LMNTS_Section_CircleTypedHero = {
  schema: LMNTS_Schema_CircleTypedHero;
};

/**
 *
 * @name CircleTypedHero
 * @author Peter Laxalt
 *
 */
export const CircleTypedHero: React.FunctionComponent<LMNTS_Section_CircleTypedHero> = ({
  schema,
}) => {
  let { _type, hero_background_image, hero_content } = schema;

  if (
    hero_background_image &&
    hero_content &&
    hero_content.header_looping_strings
  ) {
    return (
      <>
        <CircleTypedHeroStyle className={`section __fullwidth __${_type}`}>
          
          {/* _______________________________________ */}
          {/* Background Image */}
          <figure>
            {hero_background_image ? (
              <LazyImage
                src={`${hero_background_image.url}`}
                alt={Settings.siteTitleShort}
              />
            ) : null}
          </figure>

          {/* _______________________________________ */}
          {/* Content */}
          <InnerGrid addClass={`__${_type}`}>
            <div className="content-wrapper">
              <div className="content">

                {/* _______________________________________ */}
                {/* Static Headline */}
                <span>{hero_content.header_static_string}</span>

                {/* _______________________________________ */}
                {/* Typed Headline Wrapper */}
                {hero_content.header_looping_strings.length > 0 ? (
                  <Typed
                    strings={hero_content.header_looping_strings}
                    typeSpeed={80}
                    backSpeed={40}
                    className={`typed-wrapper`}
                    loop={true}
                    showCursor={false}
                  />
                ) : null}

                {/* _______________________________________ */}
                {/* Paragraph (Styled as h1 tag for SEO) */}
                {hero_content.header_sub_paragraph ? (
                  <h1>{hero_content.header_sub_paragraph}</h1>
                ) : null}

                {/* _______________________________________ */}
                {/* CTA */}
                {hero_content.cta ? (
                  <Link
                    href={hero_content.cta.href}
                    as={hero_content.cta.as ? hero_content.cta.as : undefined}
                  >
                    <a className="btn __theme-btn-covered-green">{hero_content.cta.label}</a>
                  </Link>
                ) : null}
              </div>
            </div>
          </InnerGrid>
        </CircleTypedHeroStyle>

        {/* For Debugging */}
        {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
      </>
    );
  } else {
    console.log(
      "🚫 CircleTypedHero: Required attributes `hero_background_image` and `hero_content` missing."
    );
    return null;
  }
};

// End Component
// __________________________________________________________________________________________
