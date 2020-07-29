// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Utils
import { hexToRGB } from "../../../utils/hexToRGB";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { FadeInScaleUpFromTop } from "../../../constants/styles/Animation";

// Begin Styles
// __________________________________________________________________________________________

type LMNTS_NavigationStyle = {
  shouldFocus?: boolean;
};

/**
 *
 * @name Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
 *
 */
export const NavigationStyle = styled.header<LMNTS_NavigationStyle>`
  /**_________________________________________________________________ */
  /** Settings */
  --navLinkPadding: calc(var(--navHeight) * 0.45);
  --navBackgroundColor: ${Theme.Color.White};
  --navHeight: ${Root.Nav.Size};
  --navCtaButtonHeight: calc(var(--navHeight) * 0.55);

  /**_________________________________________________________________ */
  /** Core Styles */
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 900;
  padding: 0 ${Root.Grid.Gutter.Right} 0px ${Root.Grid.Gutter.Left};

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding: 0px;
  }

  /**_________________________________________________________________ */
  /** Main Bar */
  .__nav-grid {
    /**_________________________________________________________________ */
    /** Core Styles */
    background: var(--navBackgroundColor);
    height: var(--navHeight);
    font-family: ${Theme.Font.Header};
    box-shadow: 0 6px 20px 0 ${hexToRGB(Theme.Color.Nightsky, 0.07)};
    position: relative;

    transition: box-shadow 0.5s ease;
    will-change: box-shadow;

    /**_________________________________________________________________ */
    /** Grid Setup */
    display: grid;
    grid-template-columns:
      [branding-start] auto
      [branding-end linklist-start] 1fr;
    grid-template-rows: 1;
    padding: 0 calc(var(--navLinkPadding) / 2) 0px ${Root.Grid.Gutter.Left};

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-right: 0px;
    }

    /**_________________________________________________________________ */
    /** Core Elements */
    .nav-branding,
    .nav-linklist {
      display: flex;
      align-items: center;
    }

    .nav-branding {
      /**_______________________________ */
      /** Grid Alignment */
      grid-column-start: branding-start;
      grid-column-end: branding-end;

      /**_______________________________ */
      /** Core Styles */
      padding-right: calc(var(--navLinkPadding) / 2);

      a {
        height: 100%;
        display: flex;
        align-items: center;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          img {
            width: 27vw;
          }
        }
      }
    }
  }

  /**_________________________________________________________________ */
  /** Linklists */
  .nav-linklist,
  .nav-overlay-linklist {
    /**_______________________________ */
    /** Grid Alignment */
    grid-column-start: linklist-start;
    grid-column-end: 3;

    /**_______________________________ */
    /** Core Styles */
    justify-content: flex-end;

    /**_______________________________ */
    /** Core Elements */
    ul {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      height: 100%;

      /**_______________________________ */
      /** Nav Items */
      li {
        display: flex;
        align-items: center;
        height: 100%;

        a,
        .nav-item {
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          cursor: pointer;
          ${CssUtils.DisableUserSelect()};

          /**_______________________________ */
          /** Style if a dropdown */
          &.__is-dropdown {
            &:after {
              content: "";
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%) scaleX(0.7);
              width: 0;
              height: 0;
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-top: 4px solid ${Theme.Color.Primary};
            }

            &:hover {
              :before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 4px;
                background: ${Theme.Color.CoveredGreen};
              }
            }
          }

          &.__active {
            &:before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 4px;
              background: ${Theme.Color.CoveredGreen};
            }
          }

          &:not(.btn) {
            display: flex;
            align-items: center;
            height: 100%;
            padding-left: calc(var(--navLinkPadding) / 2);
            padding-right: calc(var(--navLinkPadding) / 2);
            color: ${Theme.Color.Text};

            &:hover {
              text-decoration: none;
              color: ${Theme.Color.Black};
              background: ${hexToRGB(Theme.Color.Black, 0.02)};
            }

            &:active {
              background: ${hexToRGB(Theme.Color.Black, 0.04)};
            }
          }

          /**_______________________________ */
          /** Navigation CTA */
          &.btn {
            margin-left: calc(var(--navLinkPadding) / 2);
            height: var(--navCtaButtonHeight);
            box-shadow: 0px 0px 0px 1px
              ${hexToRGB(Theme.Color.CoveredGreen, 0.25)};
            background: ${hexToRGB(Theme.Color.CoveredGreen, 0)};
            color: ${Theme.Color.CoveredGreen};

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              font-size: 0.8rem;
              font-weight: 500;
              margin-right: calc(var(--navLinkPadding) / 2);
              padding-left: calc(var(--navLinkPadding) / 2);
              padding-right: calc(var(--navLinkPadding) / 2);
            }

            &:hover {
              background: ${hexToRGB(Theme.Color.CoveredGreen, 1)};
              box-shadow: 0px 0px 0px 4px
                ${hexToRGB(Theme.Color.CoveredGreen, 0.15)};
              color: ${Theme.Color.White};
            }

            &:active {
              background: ${hexToRGB(Theme.Color.CoveredGreen, 1)};
              box-shadow: 0px 0px 0px 4px
                ${hexToRGB(Theme.Color.CoveredGreen, 0.25)};
              color: ${Theme.Color.White};
            }
          }
        }

        /**_______________________________ */
        /** Dropdowns */
        .nav-dropdown {
          position: absolute;
          overflow: visible;
          height: auto;
          left: 0;
          top: 100%;
          right: 0;
          background: ${Theme.Color.White};
          display: flex;
          justify-content: flex-start;
          border-top: 1px solid ${hexToRGB(Theme.Color.Nightsky, 0.04)};
          box-shadow: 0 6px 20px 0 ${hexToRGB(Theme.Color.Nightsky, 0.04)};
          padding-top: var(--navLinkPadding);
          padding-bottom: var(--navLinkPadding);
          align-items: stretch;
          display: none;
          animation: ${FadeInScaleUpFromTop} 0.25s ease-in-out;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;

          &.__visible {
            display: flex;
          }

          li {
            min-width: 25%;
            border-right: 1px solid ${hexToRGB(Theme.Color.Nightsky, 0.04)};
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: relative;

            &:last-child {
              border-right: none;
            }

            &:before {
              content: "";
              position: absolute;
              left: calc(var(--navLinkPadding) / 4);
              top: calc(var(--navLinkPadding) * -0.75);
              bottom: calc(var(--navLinkPadding) * -0.75);
              right: calc(var(--navLinkPadding) / 4);
              background: ${hexToRGB(Theme.Color.Black, 0)};
              border-radius: 3px;
            }

            @media (min-width: ${Theme.Base.Media.Width.Md}) {
              &:hover {
                &:before {
                  background: ${hexToRGB(Theme.Color.Black, 0.02)};
                }
              }

              &:active {
                &:before {
                  background: ${hexToRGB(Theme.Color.Black, 0.04)};
                }
              }
            }

            a {
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding-right: var(--navLinkPadding);
              padding-left: var(--navLinkPadding);

              figure,
              p {
                margin: 0;
                padding: 0;
              }

              p {
                opacity: 0.75;
                font-size: 1rem;
              }

              figure {
                span {
                  display: inline-block;
                  width: var(--navLinkPadding);
                  height: var(--navLinkPadding);
                  margin-bottom: calc(var(--navLinkPadding) / 4);
                }
              }

              .dropdown-link-label {
                display: block;
                padding-bottom: calc(var(--navLinkPadding) / 4);
                font-size: 1.25rem;
                font-weight: 600;
              }

              &:hover {
                background: none;
                filter: none;
                opacity: 1;
              }
            }
          }
        }

        /* _________________________________ */
        /* Hamburger Button */
        &.__hamburger {
          /* ________________________________ */
          /* Settings  */
          --hamburgerBtnLineWidth: calc(${Root.Nav.Size} * 0.65);
          --hamburgerBtnLineHeight: 2px;
          --hamburgerBtnLineOffset: calc(${Root.Size} / 6);

          /* ________________________________ */
          /* Core Styles  */
          display: none;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            display: block;
            width: ${Root.Nav.Size};
            height: ${Root.Nav.Size};
            position: relative;

            /* ________________________________ */
            /* The Icon */
            .__hamburger-toggle {
              position: absolute;
              left: 0%;
              top: 0%;
              bottom: 0%;
              right: 0%;
            }

            /* ________________________________ */
            /* Line Styling */
            .__hamburger-toggle::before,
            .__hamburger-toggle::after,
            &:before,
            &:after {
              content: "";
              position: absolute;

              left: 50%;
              transform: translate(-50%, -50%) scaleX(1);
              opacity: 1;
              width: var(--hamburgerBtnLineWidth);
              height: var(--hamburgerBtnLineHeight);

              transition: transform 0.25s ease, opacity 0.25s ease;
              will-change: transform, opacity;

              background: ${Theme.Color.Text};
            }

            /* ________________________________ */
            /* Top */
            .__hamburger-toggle::after {
              top: calc(50% - var(--hamburgerBtnLineOffset));
            }

            /* ________________________________ */
            /* Center Lines */
            /* These transform/transition into an X in the overlay toggle modifier below. */
            &:before,
            &:after {
              top: 50%;
              transform: translate(-50%, -50%) rotate(0deg);
              transition: transform 0.25s ease;
              will-change: transform;
            }

            /* ________________________________ */
            /* Bottom */
            .__hamburger-toggle::before {
              top: calc(50% + var(--hamburgerBtnLineOffset));
            }
          }
        }
      }
    }
  }

  /**_________________________________________________________________ */
  /** Navigation bar (not overlay) linklist specific styling */
  .__nav-grid {
    .nav-linklist {
      ul {
        li {
          a,
          .nav-item {
            &:not(.btn) {
              @media (max-width: ${Theme.Base.Media.Width.Md}) {
                display: none;
              }
            }
          }
        }

        &.nav-dropdown {
          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            display: none;

            &.__visible {
              display: none;
            }
          }
        }
      }
    }
  }

  /**_________________________________________________________________ */
  /** Nav Overlay States */

  .__nav-overlay {
    display: none;
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    &.__overlay-visible {
      /* ________________________________ */
      /* Update Shadow */
      .__nav-grid {
        box-shadow: 0px 0px 0px 1px ${hexToRGB(Theme.Color.Nightsky, 0.07)};

        .nav-linklist {
          ul {
            li {
              .btn {
                color: ${Theme.Color.Background};
                background: ${Theme.Color.Primary};
              }

              &.__hamburger {
                /* ________________________________ */
                /* Hamburger Close Button Animation */
                &:after {
                  transform: translate(-50%, -50%) rotate(45deg);
                }

                &:before {
                  transform: translate(-50%, -50%) rotate(-45deg);
                }

                .__hamburger-toggle::before,
                .__hamburger-toggle::after {
                  opacity: 0;
                  transform: translate(-50%, -50%) scaleX(0);
                }
              }
            }
          }
        }
      }

      /**_________________________________________________________________ */
      /** Nav Overlay Itself */
      .__nav-overlay {
        /* ________________________________ */
        /* Core Styles */
        --navOverlayListItemSpacing: calc(${Root.Size} / 2);

        /* ________________________________ */
        /* Core Styles */
        position: fixed;
        overflow-y: auto;
        z-index: -1;
        display: block;

        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        padding-top: ${Root.Nav.Size};

        background: ${Theme.Color.Background};

        /* ________________________________ */
        /* Overlay Grid */
        .__nav-overlay-grid {
          margin: 0 auto;

          /* ________________________________ */
          /* Overlay List */
          .nav-overlay-linklist {
            padding-bottom: calc(${Root.Size} * 2);

            ul {
              display: flex;
              flex-direction: column;
              width: 100%;

              li {
                border-bottom: 1px solid ${hexToRGB(Theme.Color.Nightsky, 0.07)};
                width: 100%;

                display: flex;
                flex-direction: column;

                .nav-item,
                a {
                  width: 100%;
                  padding: var(--navOverlayListItemSpacing)
                    ${Root.Grid.Gutter.Right} var(--navOverlayListItemSpacing)
                    ${Root.Grid.Gutter.Left};
                  font-weight: 500;
                  font-size: 1.5rem;

                  &:after {
                    transform: translate(-50%, -50%) rotate(-90deg);
                    transform-origin: center center;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 8px solid var(--themeForegroundColor);
                  }

                  &.__dropdown-is-visible {
                    &:after {
                      transform: translate(-50%, -50%) rotate(0deg);
                    }
                  }
                }
              }

              /* _________________________________ */
              /* Dropdown Lists */
              &.nav-dropdown {
                position: relative;
                display: none;
                animation: none;
                box-shadow: none;
                padding: 0;

                &.__visible {
                  display: flex;
                  animation: none;
                }

                /* ________________________________ */
                /* Dropdown List Items */
                li {
                  min-width: unset;
                  width: 100%;

                  &:last-child {
                    border-bottom: unset;
                  }

                  a {
                    --navOverlayDropdownIconSize: ${Root.Size};

                    position: relative;
                    padding-left: calc(
                      var(--navOverlayDropdownIconSize) + var(--navLinkPadding)
                    );

                    /* ________________________________ */
                    /* Dropdown List Item Icons*/
                    figure {
                      position: absolute;

                      left: ${Root.Grid.Gutter.Left};
                      top: var(--navLinkPadding);
                      width: var(--navOverlayDropdownIconSize);
                      height: var(--navOverlayDropdownIconSize);

                      span {
                        width: var(--navOverlayDropdownIconSize);
                        height: var(--navOverlayDropdownIconSize);
                      }
                    }

                    /* ________________________________ */
                    /* Dropdown List Item Descriptions */
                    p {
                      padding-left: var(--navLinkPadding);
                      font-size: 0.9rem;
                    }

                    /* ________________________________ */
                    /* Dropdown List Item Labels */
                    .dropdown-link-label {
                      padding-left: var(--navLinkPadding);
                      font-size: 1rem;
                      position: relative;
                      width: 100%;

                      &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        right: 0;
                        transform: rotate(45deg);
                        border-top: 1px solid ${Theme.Color.Primary};
                        border-right: 1px solid ${Theme.Color.Primary};
                        width: 8px;
                        height: 8px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
