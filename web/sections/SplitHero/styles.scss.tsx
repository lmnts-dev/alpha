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
 * @name SplitHeroStyle
 *
 */
export const SplitHeroStyle = styled.section`
  /* ________________________________________________ */
  /* Settings */
  --sectionSplitHeroHeight: 550px;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --sectionSplitHeroHeight: 250px;
  }

  /* ________________________________________________ */
  /* Core Styles */
  margin: 0;
  margin-bottom: ${Root.Size};
  background: var(--themeBackgroundColor);
  min-height: var(--sectionSplitHeroHeight);
  position: relative;
  display: flex;
  border-bottom: 1px solid ${hexToRGB(Theme.Color.Black, 0.08)};
  padding: 0 ${Root.Grid.Gutter.Left};

  &:first-child {
    .inner {
      padding-top: ${Root.Nav.Size};

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        padding-top: calc(${Root.Nav.Size} * 2.5);
        padding-bottom: ${Root.Grid.Gutter.Left};
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    flex-direction: column;
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
  }

  /* ________________________________________________ */
  /* Hero Image */
  .hero-featured-image {
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
      width: 100%;
      left: unset;
      right: unset;
      top: unset;
      bottom: unset;
      ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
      padding-bottom: var(--sectionSplitHeroHeight);
    }
  }

  /* ________________________________________________ */
  /* Hero Inner Grid */
  .inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: calc(${Root.Size} * 2);

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      min-height: calc(var(--sectionSplitHeroHeight) + ${Root.Nav.Size});
    }

    /* ________________________________________________ */
    /* Hero Content */
    .hero-content {
      color: var(--themeTextColor);
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-right: calc(${Root.Size});
      padding-bottom: calc(${Root.Size} / 2);

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          padding-bottom: calc(${Root.Size} / 2);
        }
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;
        padding-right: 0;
        padding-bottom: 0;

        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }

  /* ________________________________________________ */
  /* Layouts */
  &.__layout-media-left {
    .hero-featured-image {
      left: 0;
      right: 50%;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        left: unset;
        right: unset;
      }
    }

    .inner {
      justify-content: flex-end;

      .hero-content {
        padding-right: 0;
        padding-left: calc(${Root.Size});
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        justify-content: flex-start;

        .hero-content {
          padding-right: 0;
          padding-left: 0;
        }
      }
    }
  }

  /* ________________________________________________ */
  /* Section Kerning */
  + .__two_column_logo_highlight_row,
  + .__contact_form,
  + .__resource_card_listings {
    margin-top: calc(${Root.Size} * -1);
  }
`;
