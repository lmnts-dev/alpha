// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Marquee } from "../../constants/styles/Animation";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name CarrierMarqueeStyle
 *
 */
export const CarrierMarqueeStyle = styled.section`
  margin: 0;
  padding-top: calc(${Root.Size} * 2);
  padding-bottom: calc(${Root.Size} * 2);
  background: ${Theme.Color.Ice};

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
    padding-top: calc(${Root.Size} * 2);
    padding-bottom: calc(${Root.Size} * 2);
  }

  h3 {
    font-weight: 600;
  }

  h3,
  .__subheadline {
    width: 100%;
    text-align: center;
  }

  .__subheadline {
    color: ${Theme.Color.CoveredGreen};
  }

  .section-marquee-container {
    flex-shrink: 0;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    overflow: hidden;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex-shrink: 0;
    position: relative;
    padding: calc(${Root.Size} / 2) 0;
    animation: ${Marquee} 30s linear infinite;
    ${CssUtils.DisableUserSelect()};

    li {
      flex-shrink: 0;
      white-space: nowrap;
      margin-right: calc(${Root.Size} / 4);
      font-weight: 400;
      display: flex;
      align-items: center;

      figure {
        margin: 0;
        padding: calc(${Root.Size} / 4);
        background: ${Theme.Color.White};
        box-shadow: ${Theme.Color.BoxShadow};
        position: relative;
        width: calc(${Root.Size} * 3);
        height: calc(${Root.Size} * 4);

        img {
          ${CssUtils.ObjectFit("contain")};
          transform: scale(.8);
          pointer-events: none;
        }
      }
    }
  }
`;
