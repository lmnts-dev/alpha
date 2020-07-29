// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name HeadlineStyle
 *
 */
export const HeadlineStyle = styled.section`
  /**_________________________________________________________________ */
  /** Core Styles */
  display: flex;
  padding: calc(${Root.Size} * 2) calc(${Root.Size} * 2) 0
    calc(${Root.Size} * 2);

  /**_________________________________________________________________ */
  /** Core Elements */
  .section-headline-inner {
    position: relative;
    padding-top: calc(${Root.Size});
    width: 50%;
    max-width: 550px;

    /**_________________________________________________________________ */
    /** Headline itself */
    h3 {
      margin: 0;
      padding: 0;
    }

    p {
      margin-top: calc(${Root.Size} * 0.5);
    }
  }

  /**_________________________________________________________________ */
  /** Layouts */
  &.section-headline-layout-split {
    width: 100%;

    .section-headline-inner {
      width: 100%;
      max-width: unset;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .section-headline-header,
      p {
        width: 40%;
        max-width: 550px;
        margin: 0;
      }
    }
  }

  &.section-headline-layout-left {
    justify-content: flex-start;
  }

  &.section-headline-layout-right {
    justify-content: flex-end;
  }

  /**___________________________________________________________________ */
  /** Responsive */
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    display: flex;
    flex-wrap: wrap;
    padding: calc(${Root.Size}) 0 0 0 !important;

    .section-headline-inner {
      position: relative;
      padding-top: calc(${Root.Size});
      width: 100%;
      max-width: 100%;

      h3 {
        margin: 0;
        padding: 0;
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
        margin-top: calc(${Root.Size} * 0.5);
      }
    }

    /**_________________________________________________________________ */
    /* Layouts */
    &.section-headline-layout-split {
      width: 100%;

      .section-headline-inner {
        width: 100%;
        max-width: unset;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;

        .section-headline-header {
          margin-bottom: calc(${Root.Size} / 2) !important;
        }

        .section-headline-header,
        p {
          width: 100%;
          max-width: 550px;
          margin: 0;
        }
      }
    }

    &.section-headline-layout-left {
      justify-content: flex-start;
    }

    &.section-headline-layout-right {
      justify-content: flex-start;
    }

    /**_________________________________________________________________ */
    /* Section Kerning */
    + .section-grid-row {
      padding-top: calc(${Root.Size} / 2);
    }
  }
`;
