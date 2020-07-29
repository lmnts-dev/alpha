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
 * @name ResourceCardListingsStyle
 *
 */
export const ResourceCardListingsStyle = styled.section`
  /**_________________________________________________________________ */
  /** Core Styles */
  background: ${Theme.Color.Ice};
  padding: calc(${Root.Size} * 2) 0;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};
    padding: calc(${Root.Size} * 2) 0;
  }

  h3 {
    text-align: center;
  }

  .resource-card-listings {
    /**_________________________________________________________________ */
    /** Settings */
    --sectionResourceCardListingsSpacing: calc(${Root.Size} / 2);
    --sectionResourceCardListingsIconSize: ${Root.Size};
    --sectionResourceCardListingsCardSize: 33.3333333%;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      --sectionResourceCardListingsCardSize: 100%;
    }

    /**_________________________________________________________________ */
    /** Core Styles */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (min-width: ${Theme.Base.Media.Width.Md}) {
      ${CssUtils.ForceFullWidth("var(--sectionResourceCardListingsSpacing)")};
      padding: var(--sectionResourceCardListingsSpacing);
    }

    /**_________________________________________________________________ */
    /** The cards themselves */
    .resource-card {
      padding: var(--sectionResourceCardListingsSpacing);
      width: var(--sectionResourceCardListingsCardSize);

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        padding-left: var(--sectionResourceCardListingsSpacing);
        padding-right: var(--sectionResourceCardListingsSpacing);
        padding-top: calc(var(--sectionResourceCardListingsSpacing) / 2);
        padding-bottom: calc(var(--sectionResourceCardListingsSpacing) / 2);
      }

      .resource-card-inner {
        /**_________________________________________________________________ */
        /** Core Styles */
        background: ${Theme.Color.White};
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: calc(var(--sectionResourceCardListingsSpacing) * 1.5);
        color: ${Theme.Color.Text};
        border-radius: 4px;
        box-shadow: ${Theme.Color.BoxShadow};
        transition: box-shadow 0.5s ease;
        will-change: box-shadow;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          /**_________________________________________________________________ */
          /** Mobile Grid Alignment */
          display: grid;
          grid-template-columns:
            [icon-start] var(--sectionResourceCardListingsIconSize)
            [icon-end content-start] 1fr
            [content-end card-col-end] 0;
          grid-template-rows:
            [headline-start] auto
            [headline-end description-start] auto
            [description-end cta-start] auto
            [cta-end card-row-end] 0;

          .resource-name,
          p,
          .pseudo-cta {
            grid-column-start: content-start;
            grid-column-end: content-end;
          }

          .resource-name {
            grid-row-start: headline-start;
          }

          p {
            grid-row-start: description-start;
          }

          .pseudo-cta {
            grid-row-start: cta-start;
          }

          figure {
            grid-row-start: headline-start;
            grid-column-start: icon-start;
            grid-column-end: icon-end;
          }

          /**_________________________________________________________________ */
          /** Mobile Icon Adjustments */
          figure {
            width: 0px;
            height: 0px;

            span {
              position: absolute;
              left: 0;
              top: 0;
              transform: translateX(
                calc(var(--sectionResourceCardListingsSpacing) * -0.5)
              );
            }
          }
        }

        /**_________________________________________________________________ */
        /** Card Title */
        .resource-name {
          font-size: 1.6rem;
          font-weight: 400;
          padding-top: calc(${Root.Size} / 2);
          padding-bottom: calc(${Root.Size} / 2);

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            padding-top: 0;
            padding-bottom: calc(${Root.Size} / 4);
          }
        }

        /**_________________________________________________________________ */
        /** Card Description */
        p {
          font-size: 1rem;
          letter-spacing: 0px;
          padding-bottom: calc(${Root.Size} / 2);
          opacity: 0.75;
        }

        /**_________________________________________________________________ */
        /** Card Pseudo CTA */
        .pseudo-cta {
          --pseudoCtaArrowSize: calc(${Root.Size} * 0.5);

          font-weight: 600;
          font-size: 1.25rem;
          position: relative;
          padding-right: var(--footerCtaArrowSize);
          transform: translateX(0%);
          will-change: transform;
          transition: transform 0.5s ease;
          color: var(--themeForegroundColor);
          width: 100%;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 1rem;
          }

          /**_________________________________________________________________ */
          /** Card Pseudo CTA Carat Icon */
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translate(0%, -50%);
            right: 0;
            width: var(--pseudoCtaArrowSize);
            height: var(--pseudoCtaArrowSize);
            border-radius: 50%;
            border: 1px solid var(--themeForegroundColor);
            will-change: transform;
            transition: transform 0.5s ease;
          }

          &:after {
            content: "";
            position: absolute;
            right: calc(var(--pseudoCtaArrowSize) * 0.425);
            top: 50%;
            transform: translate(0%, -50%) rotate(45deg);
            width: calc(var(--pseudoCtaArrowSize) * 0.25);
            height: calc(var(--pseudoCtaArrowSize) * 0.25);
            border-top: 1px solid var(--themeForegroundColor);
            border-right: 1px solid var(--themeForegroundColor);
            will-change: transform;
            transition: transform 0.5s ease;
          }
        }

        /**_________________________________________________________________ */
        /** Card Icon */
        figure {
          span {
            display: block;
            width: var(--sectionResourceCardListingsIconSize);
            height: var(--sectionResourceCardListingsIconSize);
            position: relative;

            img {
              ${CssUtils.ObjectFit("contain")};
            }
          }
        }

        /**_________________________________________________________________ */
        /** Interactive States */
        &:hover {
          box-shadow: ${Theme.Color.BoxShadowHover};
          color: ${Theme.Color.Text};
          text-decoration: none;

          p {
            opacity: 1;
          }

          .pseudo-cta {
            &:before {
              transform: translate(20%, -50%);
            }

            &:after {
              transform: translate(50%, -50%) rotate(45deg);
            }
          }
        }
      }
    }
  }
`;
