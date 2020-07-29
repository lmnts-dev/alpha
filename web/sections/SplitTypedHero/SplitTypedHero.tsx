// Core
import React from "react";

// Libraries
import Typed from "react-typed";

// Types
import {
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_LayoutDropdown,
} from "../../constants/types";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { SplitTypedHeroStyle } from "./styles.scss";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import Link from "next/link";
import LazyImage from "../../utils/lazyImage";

// Constants
import { Settings } from "../../constants/site/Settings";
import { Debugger } from "../../components/core/Debugger";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_SplitTypedHero = LMNTS_Theme_LayoutDropdown &
  LMNTS_Theme_Dropdown & {
    _type: "split_typed_hero";
    hero_content: LMNTS_Default_CTA & {
      header_static_string: string;
      header_looping_strings: string[];
    };
    hero_featured_image: Sanity_ImageAsset;
  };

export type LMNTS_Section_SplitTypedHero = {
  schema: LMNTS_Schema_SplitTypedHero;
};

/**
 *
 * @name SplitTypedHero
 * @author Peter Laxalt
 *
 */
export const SplitTypedHero: React.FunctionComponent<LMNTS_Section_SplitTypedHero> = ({
  schema,
}) => {
  let showDebugger = false;
  let { _type, hero_content, hero_featured_image, theme_type, layout } = schema;
  let { header_static_string, header_looping_strings, cta } = hero_content;

  return (
    <>
      <SplitTypedHeroStyle
        className={`section __${_type} ${layout} __theme-${theme_type}`}
      >
        <InnerGrid addClass={`__${_type}`}>
          <div className="hero-content">
            {/* _______________________________________ */}
            {/* Typed Headline Wrapper */}
            {header_static_string ? <h1>{header_static_string}</h1> : null}

            {/* _______________________________________ */}
            {/* Typed Strings Wrapper */}
            {header_looping_strings.length > 0 ? (
              <Typed
                strings={header_looping_strings}
                typeSpeed={80}
                backSpeed={40}
                className={`typed-wrapper`}
                loop={true}
                showCursor={false}
              />
            ) : null}

            {/* _______________________________________ */}
            {/* CTA */}
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
          </div>
        </InnerGrid>
        {hero_featured_image ? (
          <figure className="hero-featured-image">
            <LazyImage
              src={hero_featured_image.url}
              alt={Settings.siteTitleShort}
            />
          </figure>
        ) : null}
      </SplitTypedHeroStyle>

      {/* _______________________________________ */}
      {/* For Debugging */}
      {showDebugger ? <Debugger showSchema={schema} /> : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
