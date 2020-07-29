// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_App_Data,
  LMNTS_FaqItem,
} from "../../constants/types";
import { Sanity_ImageAsset } from "../../constants/types/Sanity";

// Constants
import { SanityOptions } from "../../clients";

// Styles
import { FaqSplitListingsStyle } from "./styles.scss";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";

// Hooks
import { useRouter } from "next/router";

// Utils
import slugify from "../../utils/slugify";
import { isValidURL } from "../../utils/isValidURL";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_FaqSplitListings = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown & {
    _type: "faq_split_listings";
    featured_image: Sanity_ImageAsset;
    body?: string;
    add_faq_to_top?: LMNTS_FaqItem[];
    continue_loop?: boolean;
  };

export type LMNTS_Section_FaqSplitListings = {
  schema: LMNTS_Schema_FaqSplitListings;
  data: LMNTS_App_Data;
};

/**
 *
 * @name FaqSplitListings
 * @author Peter Laxalt
 *
 */
export const FaqSplitListings: React.FunctionComponent<LMNTS_Section_FaqSplitListings> = ({
  schema,
  data,
}) => {
  let {
    _type,
    featured_image,
    headline,
    subheadline,
    body,
    cta,
    theme_type,
    add_faq_to_top,
    continue_loop,
  } = schema;
  let { __global } = data;
  let router = useRouter();

  // _____________________________________
  // Create our FAQ Order

  // Global Faq
  let { faq } = __global;

  // Top Ordered Faq
  let faqAddedToTop = add_faq_to_top
    ? add_faq_to_top.map((orderedFaqItem: LMNTS_FaqItem) => {
        // Match ordered carrier reference to the right carrier from the global data set.
        // This is so we get all the image references.
        return faq.filter(
          (faqWithAssets: LMNTS_FaqItem) =>
            faqWithAssets._id === orderedFaqItem._ref
        )[0];
      })
    : [];

  return (
    <>
      <FaqSplitListingsStyle
        className={`section __${_type} __theme-bg-${
          theme_type ? theme_type : "covered-green"
        }`}
      >
        {/* __________________________________________________ */}
        {/* Inner Grid */}
        <InnerGrid addClass={`__${_type}`}>
          {/* __________________________________________________ */}
          {/* Headline Section */}
          <div
            className={`faq-split-listings-col __headline __theme-${
              theme_type ? theme_type : "covered-green"
            }`}
          >
            {/* __________________________________________________ */}
            {/* Subheadline */}
            {subheadline ? (
              <span className="txt-caption __subheadline">{subheadline}</span>
            ) : null}

            {/* __________________________________________________ */}
            {/* Headline */}
            {headline ? <h1>{headline}</h1> : null}

            {/* __________________________________________________ */}
            {/* Body */}
            {body ? <p>{body}</p> : null}

            {/* __________________________________________________ */}
            {/* CTA */}
            {cta ? (
              isValidURL(cta.href) ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className={`btn`}
                >
                  {cta.label}
                </a>
              ) : (
                <Link href={cta.href} as={cta.as ? cta.as : undefined}>
                  <a className={`btn `}>{cta.label}</a>
                </Link>
              )
            ) : null}
          </div>

          {/* __________________________________________________ */}
          {/* Content & Listings */}
          <div className="faq-split-listings-col __content">
            {/* __________________________________________________ */}
            {/* Featured Imaage */}
            {featured_image ? (
              <figure className="faq-split-listings-featured-image">
                <LazyImage src={featured_image.url} alt={headline} />
              </figure>
            ) : null}

            {/* __________________________________________________ */}
            {/* The Listings */}
            <div className="faq-split-listings">
              {/* _______________________________________ */}
              {/* Add our ordered FAQ to top */}
              {faqAddedToTop && faqAddedToTop.length > 0
                ? faqAddedToTop.map((faqItem: LMNTS_FaqItem, idx: number) => {
                    let itemId = `${slugify(faqItem.question)}`;

                    return (
                      <div className="faq-listing" key={idx}>
                        <input
                          type="checkbox"
                          className="faq-listing-toggle"
                          id={`${itemId}`}
                          defaultChecked={
                            router.query.show == slugify(faqItem.question)
                          }
                        />
                        <label
                          htmlFor={`${itemId}`}
                          className="faq-listing-label"
                        >
                          <span className="ico-carat">
                            <figure />
                          </span>
                          <span className="label-el">{faqItem.question}</span>
                        </label>
                        <div className="faq-block-content">
                          <BlockContent
                            blocks={faqItem.answer}
                            projectId={SanityOptions.projectId}
                            dataset={SanityOptions.dataset}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}

              {/* _______________________________________ */}
              {/* Continue our loop if applicable */}
              {continue_loop !== false && faq.length > 0 && faq
                ? faq.map((faqItem: LMNTS_FaqItem, idx: number) => {
                    let itemId = `${slugify(faqItem.question)}`;

                    if (!faqAddedToTop.includes(faqItem)) {
                      return (
                        <div className="faq-listing" key={idx}>
                          <input
                            type="checkbox"
                            className="faq-listing-toggle"
                            id={`${itemId}`}
                            defaultChecked={
                              router.query.show == slugify(faqItem.question)
                            }
                          />
                          <label
                            htmlFor={`${itemId}`}
                            className="faq-listing-label"
                          >
                            <span className="ico-carat">
                              <figure />
                            </span>
                            <span className="label-el">{faqItem.question}</span>
                          </label>
                          <div className="faq-block-content">
                            <BlockContent
                              blocks={faqItem.answer}
                              projectId={SanityOptions.projectId}
                              dataset={SanityOptions.dataset}
                            />
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })
                : null}
            </div>
          </div>
        </InnerGrid>
      </FaqSplitListingsStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
