// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Utils
import { CssUtils } from "../../constants/styles/CssUtils";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name MediaWithContentSectionStyle
 *
 */
export const MediaWithContentSectionStyle = styled.section`
  /* ________________________________________________ */
  /* Settings */
  --sectionMediaWithContentHeight: 550px;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionMediaWithContentHeight: 350px;
  }

  /* ________________________________________________ */
  /* Core Styles */
  margin: 0;
  margin-bottom: ${Root.Size};
  background: var(--themeBackgroundColor);
  min-height: var(--sectionMediaWithContentHeight);
  position: relative;
  display: flex;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
    flex-direction: column-reverse;
  }

  /* ________________________________________________ */
  /* Section Image */
  .section-featured-image {
    position: absolute;
    right: 0;
    left: 50%;
    top: 0;
    bottom: 0;
    overflow: hidden;

    img {
      ${CssUtils.ObjectFit()};
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      position: relative;
      right: unset;
      left: unset;
      top: unset;
      bottom: unset;
      width: 100%;
      padding-bottom: var(--sectionMediaWithContentHeight);
    }
  }

  .inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* ________________________________________________ */
    /* Section Content */
    .section-content {
      color: var(--themeTextColor);
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-right: ${Root.Size};

      h3,
      p {
        width: 100%;
        max-width: calc(${Theme.Base.Grid.SiteWidth} / 2.5);
      }
      h3 {
        font-size: 2.5rem;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1.2rem;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 1.1rem;
        }
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;
        height: auto;
        padding-right: ${Root.Grid.Gutter.Right};
        padding-left: ${Root.Grid.Gutter.Left};
        padding-top: calc(${Root.Size});
        padding-bottom: calc(${Root.Size});
      }
    }
  }

  /* ________________________________________________ */
  /* Layouts */
  &.__layout-media-left {
    .section-featured-image {
      left: 0;
      right: 50%;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        right: unset;
      }
    }

    .inner {
      justify-content: flex-end;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        justify-content: flex-start;
      }

      .section-content {
        padding-right: 0;
        padding-left: calc(${Root.Size});

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          padding-right: ${Root.Grid.Gutter.Right};
          padding-left: ${Root.Grid.Gutter.Left};
        }
      }
    }
  }

  /* ________________________________________________ */
  /* Section Kerning */
  + .__video_with_benefits_row {
    .__video_with_benefits_row {
      padding-top: ${Root.Size};
    }
  }
`;
