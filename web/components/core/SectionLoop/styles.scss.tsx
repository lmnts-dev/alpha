/**
 *
 * SectionLoopStyle.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website SectionLoopStyle Styles.
 *
 */

// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";

// Begin Styles
// __________________________________________________________________________________________

let sectionPadding = `calc(${Root.Size} * 2)`;
let sectionContentMaxWidth = `550px`;

export const SectionLoopStyle = styled.div`
  width: 100%;
  margin: 0 auto;

  /***************** */
  /* Sections */
  /***************** */

  .section {
    /***************** */
    /* Global Adjustments */
    /***************** */


    /***************** */
    /* Namespaces */
    /***************** */

    /* -- FullWidthImage */
    &-fullwidth-image {
      + .section-centered-text {
        padding-top: calc(${sectionPadding} * 2);
      }
    }

    /* -- CenteredText */
    &-centered-text {
      padding: ${sectionPadding};
    }

    /* -- Sticky */
    &-sticky {
      padding: ${sectionPadding} 0;

      .section-sticky-col {
        &.content {
          max-width: ${sectionContentMaxWidth};
        }
      }
    }

    /* -- SectionBreak */
    &-break {
      padding: ${sectionPadding} 0;
    }

    /* -- GridRow */
    &-grid-row {
      padding: ${sectionPadding} 0;
    }

    /* -- SmallHeadline */
    &-headline {
      padding: ${sectionPadding} ${sectionPadding} 0 ${sectionPadding};

      .section-headline-inner {
        max-width: ${sectionContentMaxWidth};
      }
    }
  }
`;
