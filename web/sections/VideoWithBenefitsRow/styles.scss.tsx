// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Utils
import { CssUtils } from "../../constants/styles/CssUtils";
import { hexToRGB } from "../../utils/hexToRGB";

// Animations
import { FadeIn } from "../../constants/styles/Animation";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name VideoWithBenefitsRowStyle
 *
 */
export const VideoWithBenefitsRowStyle = styled.section`
  /* ________________________________________ */
  /* Core Styles  */
  position: relative;
  overflow: hidden;

  /* ________________________________________ */
  /* Doo Dad Positioning  */
  .doo-dad {
    position: absolute;
    top: 0;
    right: 0;
    width: 40vw;
    transform: translateX(35%);
    fill: ${Theme.Color.CoveredGreen};
    opacity: 0.15;
  }

  /* ________________________________________ */
  /* The row itself  */
  .__video_with_benefits_row {
    position: relative;
    display: grid;
    padding-top: calc(${Root.Size} * 2);
    padding-bottom: calc(${Root.Size} * 2);

    /* ________________________________________ */
    /* Grid Alignment  */
    grid-template-columns:
      [media-col-start] minmax(0, 50%)
      [media-col-end content-col-start] calc(${Theme.Base.Grid.SiteWidth} / 2)
      [content-col-end gutter-right-col] auto;

    .video-with-benefits-media {
      grid-column-start: media-col-start;
      grid-column-end: media-col-end;
    }

    .video-with-benefits-content {
      grid-column-start: content-col-start;
      grid-column-end: content-col-end;
    }

    /* ________________________________________ */
    /* Media  */
    .video-with-benefits-media {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-left: ${Root.Grid.Gutter.Left};

      /* ________________________________________ */
      /* Media Wrapper  */
      .video-with-benefits-media-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        /* max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.6); */
        padding-bottom: 56.25%; /* 16:9 */
        border: 1px solid ${hexToRGB(Theme.Color.Black, 0.05)};

        /* ________________________________________ */
        /* Media Overlay  */
        .video-toggle-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background: ${hexToRGB(Theme.Color.Black, 0)};
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          cursor: pointer;
          transition: background 0.5s ease;

          /* ________________________________________ */
          /* Media Toggle Button  */
          .video-toggle-button {
            width: calc(${Root.Size} * 2);
            height: calc(${Root.Size} * 2);
            border-radius: 50%;
            border: 1px solid ${Theme.Color.White};
            position: relative;
            background: ${hexToRGB(Theme.Color.White, 0.25)};
            transition: background 0.5s ease;

            /* ________________________________________ */
            /* Media Toggle Button Icon  */
            &:before {
              content: "";
              position: absolute;
              left: 55%;
              top: 50%;
              transform: translate(-50%, -50%) scaleY(0.8);
              width: 0;
              height: 0;
              border-top: calc(${Root.Size} / 2) solid transparent;
              border-bottom: calc(${Root.Size} / 2) solid transparent;
              border-left: calc(${Root.Size} / 2) solid ${Theme.Color.White};
              transition: border-left 0.5s ease;
            }
          }

          /* ________________________________________ */
          /* Interactive States  */
          &:hover {
            background: ${hexToRGB(Theme.Color.Black, 0.5)};

            .video-toggle-button {
              background: ${hexToRGB(Theme.Color.White, 1)};

              &:before {
                border-left: calc(${Root.Size} / 2) solid ${Theme.Color.Black};
              }
            }
          }
        }

        /* ________________________________________ */
        /* Media Iframe & Cover Image Positioning  */
        iframe,
        .video-cover-image-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
          /* transform: scale(1.25); */
        }

        iframe {
          z-index: 5;
        }

        .video-cover-image-wrapper {
          img {
            ${CssUtils.ObjectFit()};
          }
        }
      }

      /* ________________________________________ */
      /* Media Modal  */
      .video-modal-container {
        /* ________________________________________ */
        /* Settings */
        --videoModalCloseBtnSize: ${Root.Size};
        --videoModalCloseBtnOffset: ${Root.Grid.Gutter.Left};
        --videoModalCloseBtnSpace: calc(
          var(--videoModalCloseBtnOffset) + var(--videoModalCloseBtnSize)
        );

        /* ________________________________________ */
        /* Core styles */
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 900;
        opacity: 0;
        animation: ${FadeIn} 1s ease;
        animation-fill-mode: forwards;

        /* ________________________________________ */
        /* Overlay  */
        .video-modal-overlay {
          position: fixed;
          z-index: 950;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          background: ${hexToRGB(Theme.Color.Black, 0.5)};
        }

        /* ________________________________________ */
        /* The iFrame wrapper  */
        .video-el {
          width: 100vw;
          height: 100vh;
          position: relative;
          z-index: 960;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            height: calc(100vh - (var(--videoModalCloseBtnSpace) * 2));
          }

          iframe {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
          }
        }

        /* ________________________________________ */
        /* The Close Button  */
        .video-modal-close-btn {
          position: fixed;
          z-index: 990;
          left: var(--videoModalCloseBtnOffset);
          top: var(--videoModalCloseBtnOffset);
          width: var(--videoModalCloseBtnSize);
          height: var(--videoModalCloseBtnSize);
          border-radius: 5px;
          cursor: pointer;
          background: ${hexToRGB(Theme.Color.Nightsky, 0.75)};

          /* ________________________________________ */
          /* The Close Button Icon */
          &:before,
          &:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            height: 1px;
            width: 100%;
            background: ${Theme.Color.White};
          }

          &:before {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          &:after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          &:hover {
            background: ${hexToRGB(Theme.Color.Nightsky, 0.95)};
          }

          &:active {
            background: ${hexToRGB(Theme.Color.Black, 0.75)};
          }
        }
      }
    }

    /* ________________________________________ */
    /* Content */
    .video-with-benefits-content {
      display: flex;
      position: relative;
      z-index: 5;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: ${Root.Size} ${Root.Size} ${Root.Size} calc(${Root.Size} * 2);

      /* ________________________________________ */
      /* Headline */
      h3 {
        font-weight: 600;
        padding: 0;
        margin: 0;

        &.__focus {
          color: var(--themeForegroundColor);
        }
      }

      /* ________________________________________ */
      /* Body */
      p {
        margin-top: calc(${Root.Size} / 2);
      }

      /* ________________________________________ */
      /* CTA */
      .btn {
        margin-top: calc(${Root.Size} / 4);
      }

      /* ________________________________________ */
      /* Benefits List */
      ul {
        font-size: 1.25rem;
        font-weight: 600;
        padding-left: calc(${Root.Size} / 2);
        border-left: 3px solid var(--themeForegroundColor);

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          padding-left: ${Root.Grid.Gutter.Left};
        }

        li {
          padding: calc(${Root.Size} / 8) 0;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding: calc(${Root.Size} / 4) 0;
          }
        }
      }
    }
  }

  /* ________________________________________ */
  /* Layout */
  &.__layout-media-right {
    .doo-dad {
      position: absolute;
      top: 0;
      right: unset;
      left: 0;
      width: 40vw;
      transform: translateX(-35%);
      fill: ${Theme.Color.CoveredGreen};
      opacity: 0.15;
    }

    .__video_with_benefits_row {
      grid-template-columns:
        [gutter-left-col] auto
        [content-col-start] calc(${Theme.Base.Grid.SiteWidth} / 2)
        [content-col-end media-col-start] minmax(0, 50%);

      .video-with-benefits-media {
        grid-row-start: 1;
        grid-column-start: media-col-start;
        grid-column-end: 4;
        justify-content: flex-start;
        padding-left: 0;
        padding-right: ${Root.Grid.Gutter.Right};
      }

      .video-with-benefits-content {
        grid-row-start: 1;
        grid-column-start: content-col-start;
        grid-column-end: content-col-end;
        padding: ${Root.Size} calc(${Root.Size} * 2) ${Root.Size} 0;
      }
    }
  }

  /* ________________________________________ */
  /* Responsive */
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    overflow: visible;
    max-width: 100vw;

    &.__layout-media-right,
    &.__layout-media-left {
      .__video_with_benefits_row {
        /* ________________________________________ */
        /* Grid Alignment */
        grid-template-columns:
          [main-col-start] 1fr
          [main-col-end section-end] 0;
        grid-template-rows:
          [media-row-start] auto
          [media-row-end content-row-start] auto
          [content-row-end] 0;

        .video-with-benefits-media {
          grid-row-start: media-row-start;
          grid-row-end: media-row-end;
          grid-column-start: main-col-start;
          grid-column-end: main-col-end;
        }

        .video-with-benefits-content {
          grid-row-start: content-row-start;
          grid-row-end: content-row-end;
          grid-column-start: main-col-start;
          grid-column-end: main-col-end;
        }

        /* ________________________________________ */
        /* Content */
        .video-with-benefits-content {
          padding: calc(${Root.Size}) 0 0 0;
        }

        /* ________________________________________ */
        /* Media */
        .video-with-benefits-media {
          padding: 0;
          ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
        }
      }
    }

    /* ________________________________________ */
    /* Doo-dad */
    .doo-dad {
      display: none;
    }
  }

  /* ________________________________________ */
  /* Section Kerning */
  + .__numbers_row {
    .inner {
      padding-top: 0;
    }
  }
`;
