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
 * @name SplitSectionStyle
 *
 */
export const SplitSectionStyle = styled.section`
  --sectionSplitSectionHeight: 550px;

  margin: 0;
  background: ${Theme.Color.Background};
  min-height: var(--sectionSplitSectionHeight);
  position: relative;
  display: flex;
  padding: 0 ${Root.Grid.Gutter.Left};

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
  }

  .inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .section-content {
      color: ${Theme.Color.Text};
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-right: calc(${Root.Size});
      padding-bottom: calc(${Root.Size} / 2);

      h3 {
        font-size: 3rem;
        color: ${Theme.Color.Primary};
      }
      
      p {
        font-size: 1.2rem;
        padding-bottom: calc(${Root.Size} / 2);
      }
    }
  }

  &.__layout-media-left {
    .section-featured-image {
      left: 0;
      right: 50%;
    }

    .inner {
      justify-content: flex-end;

      .section-content {
        padding-right: 0;
        padding-left: calc(${Root.Size});
      }
    }
  }
`;
