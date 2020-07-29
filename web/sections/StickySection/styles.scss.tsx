// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name StickySectionStyle
 *
 */
export const StickySectionStyle = styled.section`
  /* ___________________________________________ */
  /* Settings */
  --sectionStickyDooDadSize: 40vw;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionStickyDooDadSize: 80vw;
  }

  /* ___________________________________________ */
  /* Core Styles */
  padding: calc(${Root.Size}) 0;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
    padding: calc(${Root.Size}) 0;
    overflow: hidden;
  }

  /* ___________________________________________ */
  /* Inner Grid */
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      flex-direction: column-reverse;
    }

    /* ___________________________________________ */
    /* Columns */
    .section-sticky-col {
      width: 50%;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;
      }

      /* ___________________________________________ */
      /* Content Column */
      &.content {
        max-width: 550px;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          max-width: 100%;
        }

        .section-sticky-col-inner {
          padding-top: calc(${Root.Size});

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding-top: calc(${Root.Size} / 2);
          }

          .section-block-content {
            border-left: 1px solid ${Theme.Color.Primary};
            padding-left: calc(${Root.Size} / 2);

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              border-left: 3px solid ${Theme.Color.Primary};
              margin-left: ${Root.Grid.Gutter.Left};
              padding-left: ${Root.Grid.Gutter.Left};
              padding-right: ${Root.Grid.Gutter.Right};
            }
          }

          .__subheadline {
            color: ${Theme.Color.Primary};
          }

          .section-sticky-headline {
            opacity: 1;
            margin-bottom: calc(${Root.Size});
            padding: 0;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-left: ${Root.Grid.Gutter.Left};
              padding-right: ${Root.Grid.Gutter.Right};
            }
          }

          .txt-caption {
            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-left: ${Root.Grid.Gutter.Left};
              padding-right: ${Root.Grid.Gutter.Right};
            }
          }

          h3 {
            &:not(.section-sticky-headline) {
              margin-bottom: calc(${Root.Size} / 4);
            }
          }

          h4 {
            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              font-size: 1.4rem;
            }
          }

          p {
            opacity: 1;
            margin-bottom: calc(${Root.Size} / 2);
          }
        }
      }

      /* ___________________________________________ */
      /* Image Column */
      &.img {
        position: sticky;
        top: calc(${Root.Nav.Size} + ${Theme.Base.Grid.SiteFrameWidth});
        padding-top: ${Root.Size};

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          position: relative;
          top: unset;
        }

        .section-sticky-img-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: attr(data-aspect-ratio);
          overflow: hidden;
          margin-bottom: calc(${Root.Size} / 2);

          img {
            ${CssUtils.ObjectFit()}
            z-index: 15;
          }
        }
      }
    }
  }

  /* ___________________________________________ */
  /* Modifiers */
  &.__show-dood-dad {
    .img {
      &:after {
        content: "";
        position: absolute;
        right: calc(var(--sectionStickyDooDadSize) / -6);
        top: 0;
        width: var(--sectionStickyDooDadSize);
        height: var(--sectionStickyDooDadSize);
        border-radius: 50%;
        background-color: ${Theme.Color.Primary};
        opacity: 0.25;
      }
    }
  }

  /* ___________________________________________ */
  /* Layouts */
  &.section-sticky-left {
    .inner {
      flex-direction: row-reverse;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        flex-direction: column-reverse;
      }

      .section-sticky-col {
        &.content {
          padding: 0 ${Root.Size};

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding: 0;
          }
        }

        &.img {
          &:after {
            right: unset;
            left: 0;
          }
        }
      }
    }
  }

  &.section-sticky-right {
    .inner {
      flex-direction: row;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        flex-direction: column-reverse;
      }

      .section-sticky-col {
        &.content {
          padding: 0 ${Root.Size};

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding: 0;
          }
        }
      }
    }
  }

  /* ___________________________________________ */
  /* Section Kerning */
  + .__trust_pilot_row {
    padding-top: 0;
  }
`;
