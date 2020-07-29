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

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name StickyTimelineSectionStyle
 *
 */
export const StickyTimelineSectionStyle = styled.section`
  /* ________________________________________ */
  /* Settings  */
  --sectionStickyTimelinePointSize: calc(${Root.Size} / 4);
  --sectionStickyTimelineIndentSize: ${Root.Size};

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionStickyTimelineIndentSize: ${Root.Grid.Gutter.Left};
  }

  /* ________________________________________ */
  /* Core Styles  */
  margin: 0 0 calc(${Root.Size} * 2) 0;

  .inner {
    &.__sticky_timeline_section {
      position: relative;

      /* ________________________________________ */
      /* The time LINE itself  */
      &:before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        bottom: 0;
        width: 1px;
        background: ${hexToRGB(Theme.Color.Black, 0.08)};

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          left: 0;
        }
      }

      /* ________________________________________ */
      /* Individual Points  */
      .sticky-timeline-point {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        z-index: 5;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-direction: column;
        }

        /* ________________________________________ */
        /* Columns  */
        .sticky-timeline-col {
          width: 50%;
          position: relative;

          @media (min-width: ${Theme.Base.Media.Width.Md}) {
            display: flex;
          }

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            width: 100%;
          }

          /* ________________________________________ */
          /* Content Column  */
          &.__content {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding-left: var(--sectionStickyTimelineIndentSize);

            .sticky-timeline-point-content {
              width: 100%;
              padding-top: calc(${Root.Size} * 1.5);

              @media (min-width: ${Theme.Base.Media.Width.Md}) {
                max-width: 70%;
              }

              h4 {
                position: relative;
                padding: 0;
                margin-bottom: calc(${Root.Size} / 4);

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  font-size: 1.6rem;
                }

                /* ________________________________________ */
                /* Timeline Point  */
                &:before {
                  content: "";
                  position: absolute;
                  left: calc(
                    (
                        var(--sectionStickyTimelineIndentSize) +
                          (var(--sectionStickyTimelinePointSize) / 2)
                      ) * -1
                  );
                  top: 50%;
                  transform: translateY(-50%);
                  width: var(--sectionStickyTimelinePointSize);
                  height: var(--sectionStickyTimelinePointSize);
                  border-radius: 50%;
                  background: ${Theme.Color.Primary};
                }
              }

              p {
                font-size: 1.2rem;

                @media (max-width: ${Theme.Base.Media.Width.Md}) {
                  font-size: 1rem;
                }
              }
            }

            .sticky-timeline-section-header {
              .__subheadline {
                color: ${Theme.Color.Primary};
              }

              h3 {
                margin: 0;
                padding: 0;
              }
            }
          }

          /* ________________________________________ */
          /* Media Column  */
          &.__media {
            padding: ${Root.Size};
            display: flex;
            align-items: center;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding: var(--sectionStickyTimelineIndentSize) 0
                var(--sectionStickyTimelineIndentSize)
                var(--sectionStickyTimelineIndentSize);
            }

            figure {
              width: 100%;
              padding-bottom: 75%;
              position: relative;

              img {
                ${CssUtils.ObjectFit()};
              }
            }
          }
        }

        /* ________________________________________ */
        /* Adjust padding of first point  */
        &:first-child {
          .sticky-timeline-col {
            &.__content {
              .sticky-timeline-point-content {
                padding-top: calc(${Root.Size});
              }
            }
          }
        }
      }
    }
  }

  /* ________________________________________ */
  /* Layouts  */
  &.__layout-media-left {
    .inner {
      &.__sticky_timeline_section {
        .sticky-timeline-point {
          flex-direction: row-reverse;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            flex-direction: column;
          }
        }
      }
    }
  }
`;
