// Core
import React, { PureComponent } from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_LayoutDropdown,
} from "../../constants/types";
import {
  Sanity_BlockContent,
  Sanity_ImageAsset,
} from "../../constants/types/Sanity";

// Constants
import { SanityOptions } from "../../clients";

// Components
import BlockContent from "@sanity/block-content-to-react";
import LazyImage from "../../utils/lazyImage";
import Link from "next/link";
import CoveredCarat from "../../components/lib/Icon/SVG/Custom/CoveredCarat";

// Styles
import { VideoWithBenefitsRowStyle } from "./styles.scss";
import { createGlobalStyle } from "styled-components";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name LMNTS_Section_VideoWithModal Types
 *
 */

export type LMNTS_VideoWithModalState = {
  modalVisible: boolean;
};

export type LMNTS_VideoWithModalProps = {
  src: string;
  cover: string;
  cover_alt: string;
  addClass?: string;
};

/**
 *
 * @name VideoWithModal
 *
 */
class VideoWithModal extends PureComponent<
  LMNTS_VideoWithModalProps,
  LMNTS_VideoWithModalState
> {
  constructor(props: LMNTS_VideoWithModalProps) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    // Bind our functions
    this.toggleVideoModal = this.toggleVideoModal.bind(this);
  }

  /**
   *
   * @name toggleVideoModal
   * @description Sets our state truthy or falsy to show or hide the video overlay.
   *
   */
  toggleVideoModal = () => {
    if (this.state.modalVisible) {
      this.setState({
        modalVisible: false,
      });
    } else {
      this.setState({
        modalVisible: true,
      });
    }
  };

  render() {
    let { src, cover, cover_alt, addClass } = this.props;

    const BodyScrollLock = createGlobalStyle`
      body {
        overflow-y: hidden !important;
      }
    `;

    return (
      <>
        <div className={`video-with-modal ${addClass}`}>
          <div
            className="video-toggle-overlay"
            onClick={() => this.toggleVideoModal()}
          >
            <figure className="video-toggle-button" />
          </div>
          <iframe
            src={`${src}?autoplay=1&muted=1&title=0&byline=0&portrait=0&sidedock=0&background=1`}
            width="100%"
            height="100%"
            frameBorder={0}
            allow="autoplay; fullscreen"
            allowFullScreen={true}
          />
          <figure className="video-cover-image-wrapper">
            <LazyImage src={`${cover}`} alt={`${cover_alt}`} />
          </figure>
        </div>
        {this.state.modalVisible ? (
          <div className="video-modal-container">
            <div
              className="video-modal-overlay"
              onClick={() => this.toggleVideoModal()}
            />
            <div className="video-el">
              <iframe
                src={`${src}?autoplay=1&muted=0&title=0`}
                width="100%"
                height="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen={true}
              />
            </div>
            <div
              className="video-modal-close-btn"
              onClick={() => this.toggleVideoModal()}
            />
            <BodyScrollLock />
          </div>
        ) : null}
      </>
    );
  }
}

/**
 *
 * @name LMNTS_Section_VideoWithBenefitsRow Types
 *
 */

export type LMNTS_Schema_VideoWithBenefitsRow = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown &
  LMNTS_Theme_LayoutDropdown & {
    _type: "video_with_benefits_row";
    benefits?: string[];
    body?: Sanity_BlockContent[];
    doodad_toggle?: true;
    headline: string;
    subheadline?: string;
    focus_headline?: string;
    theme_type?: string;
    video: {
      cover_image: Sanity_ImageAsset;
      video_source: string;
    };
  };

export type LMNTS_Section_VideoWithBenefitsRow = {
  schema: LMNTS_Schema_VideoWithBenefitsRow;
};

/**
 *
 * @name VideoWithBenefitsRow
 * @author Peter Laxalt
 *
 */
export const VideoWithBenefitsRow: React.FunctionComponent<LMNTS_Section_VideoWithBenefitsRow> = ({
  schema,
}) => {
  let {
    _type,
    benefits,
    body,
    doodad_toggle,
    headline,
    subheadline,
    focus_headline,
    theme_type,
    video,
    layout,
    cta,
  } = schema;

  return (
    <>
      <VideoWithBenefitsRowStyle
        className={`section __${_type} ${
          doodad_toggle ? "__show-doodad" : ""
        } ${layout ? layout : "__layout-media-left"} ${
          theme_type ? `__theme-fg-${theme_type}` : ""
        }`}
      >
        {/* ____________________________________________ */}
        {/* Doo Dad */}
        {doodad_toggle ? <CoveredCarat /> : null}
        <div className={`__${_type}`}>
          {/* ____________________________________________ */}
          {/* Media  */}
          <div className="video-with-benefits-media">
            <VideoWithModal
              src={video.video_source}
              cover={video.cover_image.url}
              cover_alt={headline}
              addClass={`video-with-benefits-media-container`}
            />
          </div>

          {/* ____________________________________________ */}
          {/* Content  */}
          <div className="video-with-benefits-content">
            {/* ____________________________________________ */}
            {/* Subheadline */}
            {subheadline ? (
              <span className="txt-caption">{subheadline}</span>
            ) : null}
            {/* ____________________________________________ */}
            {/* Headline */}
            {headline ? <h3>{headline}</h3> : null}
            {/* ____________________________________________ */}
            {/* Focus Headline */}
            {focus_headline ? (
              <h3 className="__focus">{focus_headline}</h3>
            ) : null}
            {/* ____________________________________________ */}
            {/* Body */}
            {body ? (
              <BlockContent
                blocks={body}
                projectId={SanityOptions.projectId}
                dataset={SanityOptions.dataset}
              />
            ) : null}

            {/* ____________________________________________ */}
            {/* CTA */}
            {cta ? (
              <Link href={cta.href} as={cta.as ? cta.as : undefined}>
                <a className={`btn __theme-btn-${theme_type}`}>{cta.label}</a>
              </Link>
            ) : null}

            {/* ____________________________________________ */}
            {/* Benefits */}
            {benefits && benefits.length > 0 ? (
              <ul>
                {benefits.map((benefit: string, idx: number) => {
                  return <li key={idx}>{benefit}</li>;
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </VideoWithBenefitsRowStyle>
      {/* For Debugging */}
      {/* <pre className="__pinned">{JSON.stringify(schema, null, 2)}</pre> */}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
