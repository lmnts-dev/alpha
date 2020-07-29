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
 * @name CenteredContentStyle
 *
 */
export const CenteredContentStyle = styled.section`
  margin: 0;

  .__centered_content_row {
    padding: calc(${Root.Size} * 2) 0;

    /* ________________________________________ */
    /* Globals */
    h3,
    .__subheadline,
    .centered-content {
      text-align: center;
      margin: 0 auto;
      width: 100%;
      max-width: calc(${Theme.Base.Grid.SiteWidth} * 0.65);
    }

    /* ________________________________________ */
    /* Media */
    .centered-image {
      position: relative;
      width: 100%;
      text-align: center;
      margin: 0 auto;
      margin-top: ${Root.Size};

      img {
        ${CssUtils.ObjectFit("contain")}
      }
    }

    /* ________________________________________ */
    /* CTA */
    .centered-content-cta {
      width: auto;
      margin: 0 auto;
      margin-top: calc(${Root.Size} / 4);
      text-align: center;

      .btn {
        width: auto;
        display: inline-flex;
      }
    }

    /* ________________________________________ */
    /* Subheadline */
    .__subheadline {
      color: var(--themeForegroundColor);
    }

    /* ________________________________________ */
    /* Content itself */
    .centered-content {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        text-align: center;
      }
    }
  }

  /* ________________________________________ */
  /* Section Kerning */
  + .__video_with_benefits_row {
    .__video_with_benefits_row {
      padding-top: ${Root.Size};
    }
  }

  + .__split_section {
    margin-top: ${Root.Size};
  }
`;
