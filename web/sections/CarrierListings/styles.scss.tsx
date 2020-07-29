// Imports
// __________________________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Utils
import { CssUtils } from "../../constants/styles/CssUtils";
import { hexToRGB } from "../../utils/hexToRGB";

// Animation
import {
  SlideFromRight,
  OverlayFadeIn,
} from "../../constants/styles/Animation";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name CarrierListingsStyle
 *
 */
export const CarrierListingsStyle = styled.section`
  /* ________________________________________ */
  /* Core Styles  */
  padding: calc(${Root.Size} * 2) 0;
  position: relative;

  /* ________________________________________ */
  /* Core Classes  */
  h3,
  span,
  p {
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.65);
  }

  .txt-caption {
    color: ${Theme.Color.Primary};
  }

  .doo-dad {
    position: absolute;
    top: 20vh;
    left: 0;
    width: 50vw;
    transform: translateX(-35%);
    fill: ${Theme.Color.CoveredGreen};
    opacity: 0.15;
  }

  .inner {
    position: relative;
    z-index: 5;
  }

  .carrier-listings {
    /* ________________________________________ */
    /* Settings  */
    --sectionCarrierCardListingsSpacing: calc(${Root.Size} / 4);
    --sectionCarrierCardListingsIconSize: ${Root.Size};
    --sectionCarrierCardListingsCardSize: 25%;

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      --sectionCarrierCardListingsCardSize: 50%;
      --sectionCarrierCardListingsSpacing: calc(${Root.Size} / 4);
    }

    /* ________________________________________ */
    /* Core Styles  */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: ${Root.Size};
    ${CssUtils.ForceFullWidth("var(--sectionCarrierCardListingsSpacing)")};

    /* ________________________________________ */
    /* Cards  */
    .carrier-card {
      padding: var(--sectionCarrierCardListingsSpacing);
      width: var(--sectionCarrierCardListingsCardSize);

      .carrier-card-inner {
        background: ${Theme.Color.White};
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: calc(var(--sectionCarrierCardListingsSpacing) * 2);
        border-radius: 4px;
        box-shadow: ${Theme.Color.BoxShadow};
        transition: box-shadow 0.5s ease;
        will-change: box-shadow;
        cursor: pointer;

        figure {
          position: relative;
          width: 100%;
          padding-bottom: 75%;

          img {
            ${CssUtils.ObjectFit("contain")};
          }
        }

        &:hover {
          box-shadow: ${Theme.Color.BoxShadowHover};
          color: ${Theme.Color.Text};
          text-decoration: none;

          p {
            opacity: 1;
          }

          .pseudo-cta {
            &:before {
              transform: translate(20%, -50%);
            }

            &:after {
              transform: translate(50%, -50%) rotate(45deg);
            }
          }
        }
      }
    }
  }
`;

export const CarrierDialogGlobalStyle = createGlobalStyle`
  /* ________________________________________ */
  /* Body Lock  */
  body {
    overflow: hidden !important;
  }

  /* ________________________________________ */
  /* Carrier Dialog Itsef */
  .carrier-dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    z-index: 999;

    /* ________________________________________ */
    /* The Overlay  */
    .carrier-dialog-overlay {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vw;
      opacity: 0.75;
      background: ${Theme.Color.Ice};
      will-change: opacity;
      animation: ${OverlayFadeIn} .25s ease-in-out;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    /* ________________________________________ */
    /* The Container  */
    .carrier-dialog-container {
      /* ________________________________________ */
      /* Settings  */
      --carrierDialogSize: 650px;
      --carrierDialogExitButtonSize: ${Root.Size};
      --carrierDialogPadding: ${Root.Size};
      --carrierDialogIndentSize: calc(var(--carrierDialogExitButtonSize) + (var(--carrierDialogPadding) / 2));

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        --carrierDialogPadding: ${Root.Grid.Gutter.Left};
        --carrierDialogSize: 100vw;
      }

      /* ________________________________________ */
      /* Core Styles  */
      max-width: var(--carrierDialogSize);
      min-width: calc(var(--carrierDialogSize) / 2);
      width: 100%;
      background: ${Theme.Color.White};
      box-shadow: 6px 0px 20px 0 ${hexToRGB(Theme.Color.Black, 0.07)};
      height: 100vh;
      overflow-y: auto;
      position: relative;
      z-index: 999;
      will-change: opacity, transform;
      animation: ${SlideFromRight} .5s ease-in-out;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

      /* ________________________________________ */
      /* Exit Button  */
      .carrier-dialog-close-btn {
        position: fixed;
        z-index: 999;
        top: calc(var(--carrierDialogPadding) / 4);
        right: calc(var(--carrierDialogPadding) / 4);

        figure {
          width: var(--carrierDialogExitButtonSize);
          height: var(--carrierDialogExitButtonSize);
          position: relative;
          cursor: pointer;

          &:active {
            background: ${hexToRGB(Theme.Color.Black, 0.08)};
          }

          &:before, &:after {
            content: '';
            position: absolute;
            background: ${Theme.Color.Black};
            opacity: .65;
            top: 50%;
            left: 50%;
            width: 90%;
            height: 2px;
            transition: transform 1s ease, opacity 1s ease, width .75s ease;
            will-change: transform, opacity, width;
            transform-origin: center center;
          }

          &:before {
            transform: scaleX(1) translate(-50%, -50%) rotate(45deg);
          }

          &:after {
            transform: scaleX(1) translate(-50%, -50%) rotate(-45deg);
          }

          &:hover {
            background: ${hexToRGB(Theme.Color.Black, 0.04)};

            &:before, &:after {
              opacity: .95;
              width: 70%;
            }

            &:before {
              transform: scaleX(1) translate(-50%, -50%) rotate(45deg);
            }

            &:after {
              transform: scaleX(1) translate(-50%, -50%) rotate(-45deg);
            }
          }
        }
      }

      /* ________________________________________ */
      /* Dialog Rows  */
      .carrier-dialog-row {
        padding: var(--carrierDialogPadding) var(--carrierDialogIndentSize) var(--carrierDialogPadding) var(--carrierDialogPadding);

        &.__header,
        &.__body {
          padding-bottom: calc(var(--carrierDialogPadding) / 2);
          padding-top: calc(var(--carrierDialogPadding) / 2);

          @media (max-width: ${Theme.Base.Media.Width.Sm}) {
            padding-bottom: calc(${Root.Size});
            padding-top: calc(${Root.Size});
          }
        }

        /* ________________________________________ */
        /* Dialog Row Header  */
        &.__header {
          padding-bottom: 0;

          /* ________________________________________ */
          /* Dialog Row Branding  */
          .carrier-dialog-branding {
            display: flex;
            justify-content: flex-start;

            .carrier-dialog-logo {
              position: relative;
              margin-bottom: calc(${Root.Size} / 2);
              padding-bottom: 25%;
              width: 60%;

              img {
                ${CssUtils.ObjectFit("contain")};
                object-position: left;
              }

              @media (max-width: ${Theme.Base.Media.Width.Sm}) {
                margin-bottom: ${Root.Size};
                padding-bottom: 40%;
              }
            }
          }

          /* ________________________________________ */
          /* Dialog Row Ratings  */
          .carrier-dialog-ratings {
            --carrierRatingPadding: calc(${Root.Size} / 6);
            --carrierRatingSize: 15%;

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              --carrierRatingSize: 20%;
            }

            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            ${CssUtils.ForceFullWidth(`var(--carrierRatingPadding)`)};

            .carrier-rating {
              width: var(--carrierRatingSize);
              border-right: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};
              padding: calc(${Root.Size} / 6);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              &:last-child {
                border-right: 0;
              }

              .carrier-rating-logo {
                position: relative;
                width: 100%;
                padding-bottom: 100%;
                margin-bottom: calc(${Root.Size} / 6);

                img {
                  ${CssUtils.ObjectFit("contain")};
                }
              }
            }
          }
        }

        /* ________________________________________ */
        /* Dialog Row Body  */
        &.__body {
          border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};

          p {
            font-size: 1.2rem;

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              font-size: 1rem;
            }
          }
        }

        /* ________________________________________ */
        /* Dialog Row Offerings  */
        &.__offerings {
          padding-top: calc(var(--carrierDialogPadding) / 2);

          .offerings-header {
            color: ${Theme.Color.Primary};
            margin-bottom: calc(var(--carrierDialogPadding) / 2);

            @media (max-width: ${Theme.Base.Media.Width.Sm}) {
              margin-top: ${Root.Size};
              font-size: 1.5rem;
            }
          }

          li {
            margin-bottom: calc(var(--carrierDialogPadding) / 2);

            p {
              font-size: 1rem;
            }

            h5 {
              font-size: 1.45rem;

              @media (max-width: ${Theme.Base.Media.Width.Sm}) {
                font-size: 1.25rem;
              }
            }
          }
        }
      }
    }
  }`;
