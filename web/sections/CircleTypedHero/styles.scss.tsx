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
 * @name CircleTypedHeroStyle
 *
 */
export const CircleTypedHeroStyle = styled.section`
  /**_________________________________________________________________ */
  /** Settings */
  --sectionCircleTypedHeroMinHeight: 750px;
  --sectionCircleTypedHeroCircleOffset: ${Root.Size};
  --sectionCircleTypedHeroHeadlineSize: 3rem;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionCircleTypedHeroHeadlineSize: 2rem;
    --sectionCircleTypedHeroMinHeight: 550px;
  }

  /**_________________________________________________________________ */
  /** Core Styles */
  position: relative;
  z-index: 5;
  background: ${Theme.Color.Placeholder};
  overflow: hidden;

  /**_________________________________________________________________ */
  /** Core Elements */

  /* ___________________________________________________ */
  /* Background Image */
  figure {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;

    img {
      ${CssUtils.ObjectFit()}
    }
  }

  /* ___________________________________________________ */
  /* Hero Content */
  .inner {
    &.__circle_typed_hero {
      min-height: var(--sectionCircleTypedHeroMinHeight);
      position: relative;
      z-index: 5;
      display: flex;
      align-items: stretch;

      .content-wrapper {
        height: auto;
        max-width: 50%;
        padding-top: calc(${Root.Nav.Size} + calc(${Root.Size}));
        position: relative;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          max-width: 100%;
        }

        /* ___________________________________________________ */
        /* The Circle Background Itself */
        &:before {
          content: "";
          position: absolute;
          left: calc(var(--sectionCircleTypedHeroCircleOffset) * -4);
          top: calc(var(--sectionCircleTypedHeroCircleOffset) * -5);
          width: calc(100% + (var(--sectionCircleTypedHeroCircleOffset) * 3));
          padding-bottom: calc(
            100% + (var(--sectionCircleTypedHeroCircleOffset) * 3)
          );
          background: ${Theme.Color.White};
          border-radius: 50%;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            /* width: 50vh;
            padding-bottom: 50vh;
            left: -30vh;
            top: -20vh; */

            width: 65vh;
            padding-bottom: 65vh;
            left: -23vh;
            top: -18vh;
          }
        }

        /* ___________________________________________________ */
        /* Content */
        .content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          color: ${Theme.Color.Nightsky};

          span {
            font-size: var(--sectionCircleTypedHeroHeadlineSize);
            font-family: ${Theme.Font.Header};

            &.typed-wrapper {
              color: ${Theme.Color.Primary};
              min-height: var(--sectionCircleTypedHeroHeadlineSize);
              font-weight: 600;
            }
          }

          h1 {
            font-size: 1.75rem;
            font-weight: 400;
            font-family: ${Theme.Font.Body};
            max-width: 80%;
            margin-top: calc(${Root.Size} / 4);
            margin-bottom: calc(${Root.Size} / 6);
            line-height: 1.25;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }

  /* ________________________________________________ */
  /* Section Kerning */
  + .__two_column_logo_highlight_row {
    @media (min-width: ${Theme.Base.Media.Width.Md}) {
      margin-top: calc(${Root.Size} * -1);
    }
  }

  + .__circle_icon_listings {
    @media (min-width: ${Theme.Base.Media.Width.Md}) {
      margin-top: calc(${Root.Size} * -3.25);
      position: relative;
      z-index: 100;
      background: none;
    }
  }
`;
