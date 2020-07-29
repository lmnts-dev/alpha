// Core
import React from "react";

// Types
import {
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_LayoutDropdown,
} from "../../constants/types";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Styles
import { SplitHeroStyle } from "./styles.scss";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import Link from "next/link";
import LazyImage from "../../utils/lazyImage";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_SplitHero = LMNTS_Theme_LayoutDropdown &
  LMNTS_Theme_Dropdown & {
    _type: "split_hero";
    hero_content: LMNTS_Default_CTA & {
      headline: string;
      content: string;
    };
    hero_featured_image: Sanity_ImageAsset;
  };

export type LMNTS_Section_SplitHero = {
  schema: LMNTS_Schema_SplitHero;
};

/**
 *
 * @name SplitHero
 * @author Peter Laxalt
 *
 */
export const SplitHero: React.FunctionComponent<LMNTS_Section_SplitHero> = ({
  schema,
}) => {
  let { _type, hero_content, hero_featured_image, theme_type, layout } = schema;
  let { headline, content, cta } = hero_content;

  return (
    <>
      <SplitHeroStyle
        className={`section __${_type} ${layout} __theme-${theme_type}`}
      >
        <InnerGrid addClass={`__${_type}`}>
          <div className="hero-content">
            {headline ? <h1>{headline}</h1> : null}
            {content ? <p>{content}</p> : null}
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
            <LazyImage src={hero_featured_image.url} alt={headline} />
          </figure>
        ) : null}
      </SplitHeroStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
