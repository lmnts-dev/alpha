// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_App_Data,
  LMNTS_Carrier,
  LMNTS_CarrierRating,
  LMNTS_CarrierOffering,
} from "../../constants/types";

// Styles
import { CarrierListingsStyle, CarrierDialogGlobalStyle } from "./styles.scss";

// Components
import { InnerGrid } from "../../components/core/InnerGrid";
import LazyImage from "../../utils/lazyImage";
import CoveredCarat from "../../components/lib/Icon/SVG/Custom/CoveredCarat";
import { Debugger } from "../../components/core/Debugger";
import BlockContent from "@sanity/block-content-to-react";

// Constants
import { SanityOptions } from "../../clients";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Schema_CarrierListings = LMNTS_Default_SectionHeadlineWithSubheadine & {
  _type: "carrier_listings";
  content?: string;
  doodad_toggle?: boolean;
  add_carriers_to_top?: LMNTS_Carrier[];
  continue_loop?: boolean;
};

export type LMNTS_Section_CarrierListings = {
  schema: LMNTS_Schema_CarrierListings;
  data: LMNTS_App_Data;
};

export type LMNTS_CarrierDialog = {
  carrier?: LMNTS_Carrier;
  toggleCarrierDialog: any;
};

export type LMNTS_Section_CarrierListings_State = {
  dialogOpen: boolean;
  carrier?: LMNTS_Carrier;
};

/**
 *
 * @name CarrierDialog
 * @author Peter Laxalt
 *
 */
const CarrierDialog: React.FunctionComponent<LMNTS_CarrierDialog> = ({
  carrier,
  toggleCarrierDialog,
}) => {
  if (carrier) {
    return (
      <>
        <CarrierDialogGlobalStyle />
        <div className="carrier-dialog">
          {/* _______________________________________ */}
          {/* The overlay */}
          <figure
            className="carrier-dialog-overlay"
            onClick={() => toggleCarrierDialog()}
          />

          {/* _______________________________________ */}
          {/*The container itself*/}
          <div className="carrier-dialog-container">
            {/* _______________________________________ */}
            {/*The close button*/}
            <span
              className="carrier-dialog-close-btn"
              onClick={() => toggleCarrierDialog()}
            >
              <figure />
            </span>

            {/* _______________________________________ */}
            {/* Header Section */}
            <div className="carrier-dialog-row __header">
              {/* _______________________________________ */}
              {/* Carrier Branding */}
              <div className="carrier-dialog-branding">
                <figure className="carrier-dialog-logo">
                  <LazyImage src={carrier.logo.url} alt={carrier.name} />
                </figure>
              </div>

              {/* _______________________________________ */}
              {/* Carrier Ratings */}
              {carrier.ratings && carrier.ratings.length > 0 ? (
                <ul className="carrier-dialog-ratings">
                  {carrier.ratings.map(
                    (rating: LMNTS_CarrierRating, idx: number) => {
                      return (
                        <li className="carrier-rating" key={idx}>
                          {/* _______________________________________ */}
                          {/* The rating image */}
                          {rating.logo ? (
                            <figure className="carrier-rating-logo">
                              <LazyImage
                                src={rating.logo.url}
                                alt={rating.company}
                              />
                            </figure>
                          ) : null}

                          {/* _______________________________________ */}
                          {/* The rating itself */}
                          {rating.rating ? (
                            <span className="carrier-rating-score">
                              {rating.rating}
                            </span>
                          ) : null}
                        </li>
                      );
                    }
                  )}
                </ul>
              ) : null}
            </div>

            {/* _______________________________________ */}
            {/* Body Section */}
            {carrier.description ? (
              <div className="carrier-dialog-row __body">
                <div className="section-content-wrap">
                  <BlockContent
                    blocks={carrier.description}
                    projectId={SanityOptions.projectId}
                    dataset={SanityOptions.dataset}
                  />
                </div>
              </div>
            ) : null}

            {/* _______________________________________ */}
            {/* Offerings Section */}
            {carrier.unique_customer_offerings &&
            carrier.unique_customer_offerings.length > 0 ? (
              <ul className="carrier-dialog-row __offerings">
                <h4 className="offerings-header">Unique Customer Offerings</h4>
                {carrier.unique_customer_offerings.map(
                  (offering: LMNTS_CarrierOffering, idx: number) => {
                    return (
                      <li key={idx}>
                        {offering.headline ? (
                          <h5>{offering.headline}</h5>
                        ) : null}
                        {offering.description ? (
                          <BlockContent
                            blocks={offering.description}
                            projectId={SanityOptions.projectId}
                            dataset={SanityOptions.dataset}
                          />
                        ) : null}
                      </li>
                    );
                  }
                )}
              </ul>
            ) : null}
          </div>
        </div>
      </>
    );
  } else {
    console.log("🚫 CarrierDialog: Carrier not provided.");

    return null;
  }
};

/**
 *
 * @name CarrierListings
 * @author Peter Laxalt
 *
 */
export class CarrierListings extends React.Component<
  LMNTS_Section_CarrierListings,
  LMNTS_Section_CarrierListings_State
> {
  // Create our Constructor
  constructor(props: LMNTS_Section_CarrierListings) {
    super(props);

    this.state = {
      dialogOpen: false,
      carrier: undefined,
    };

    this.toggleCarrierDialog = this.toggleCarrierDialog.bind(this);
  }

  /**
   *
   * @name toggleCarrierDialog
   * @description Show/hide the carrier dialog.
   *
   */
  toggleCarrierDialog = (carrier?: LMNTS_Carrier) => {
    if (this.state.dialogOpen) {
      console.log("✅ toggleCarrierDialog: Fired falsey.");

      this.setState({
        dialogOpen: false,
        carrier: undefined,
      });
    } else {
      console.log("✅ toggleCarrierDialog: Fired truthy.");

      this.setState({
        dialogOpen: true,
        carrier: carrier,
      });
    }
  };

  render() {
    // ____________________________________
    // Settings
    let showDebugger = false;

    // ____________________________________
    // Variables
    let {
      _type,
      headline,
      subheadline,
      content,
      doodad_toggle,
      add_carriers_to_top,
      continue_loop,
    } = this.props.schema;
    let { __global } = this.props.data;

    // _____________________________________
    // Create our Carriers Order

    // Global Carriers
    let { carriers } = __global;

    // Top Ordered Carriers
    let carriersAddedToTop = add_carriers_to_top
      ? add_carriers_to_top.map((orderedCarrier: LMNTS_Carrier) => {
          // Match ordered carrier reference to the right carrier from the global data set.
          // This is so we get all the image references.
          return carriers.filter(
            (carrierWithAssets: LMNTS_Carrier) =>
              carrierWithAssets._id === orderedCarrier._ref
          )[0];
        })
      : [];

    return (
      <>
        <CarrierListingsStyle className={`section __${_type}`}>
          {/* _______________________________________ */}
          {/* The Doo Dad */}
          {doodad_toggle ? <CoveredCarat /> : null}

          {/* _______________________________________ */}
          {/* Inner Grid */}
          <InnerGrid addClass={`__${_type}`}>
            {/* _______________________________________ */}
            {/* Section Header */}
            {subheadline ? (
              <span className="txt-caption __subheadline">{subheadline}</span>
            ) : null}
            {headline ? <h3>{headline}</h3> : null}
            {content ? <p>{content}</p> : null}

            {/* _______________________________________ */}
            {/* List Carriers */}
            {carriers ? (
              <ul className="carrier-listings">
                {/* _______________________________________ */}
                {/* Add our ordered carriers to top */}
                {carriersAddedToTop && carriersAddedToTop.length > 0
                  ? carriersAddedToTop.map(
                      (carrier: LMNTS_Carrier, idx: number) => {
                        if (carrier.logo && carrier.logo.url) {
                          return (
                            <li
                              className="carrier-card"
                              onClick={() => this.toggleCarrierDialog(carrier)}
                              key={idx}
                            >
                              <div className="carrier-card-inner">
                                <figure className="carrier-image-wrapper">
                                  <LazyImage
                                    src={carrier.logo.url}
                                    alt={carrier.name}
                                  />
                                </figure>
                              </div>
                            </li>
                          );
                        } else {
                          return null;
                        }
                      }
                    )
                  : null}

                {/* _______________________________________ */}
                {/* Continue our loop if applicable */}
                {continue_loop !== false
                  ? carriers.map((carrier: LMNTS_Carrier, idx: number) => {
                      // ____________________________________
                      // Exclude top logos from loop
                      if (
                        carrier.logo &&
                        carrier.logo.url &&
                        !carriersAddedToTop.includes(carrier)
                      ) {
                        return (
                          <li
                            className="carrier-card"
                            onClick={() => this.toggleCarrierDialog(carrier)}
                            key={idx}
                          >
                            <div className="carrier-card-inner">
                              <figure className="carrier-image-wrapper">
                                <LazyImage
                                  src={carrier.logo.url}
                                  alt={carrier.name}
                                />
                              </figure>
                            </div>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })
                  : null}
              </ul>
            ) : null}
          </InnerGrid>
        </CarrierListingsStyle>

        {/* _______________________________________ */}
        {/* Carrier Dialog */}
        {this.state.dialogOpen ? (
          <CarrierDialog
            carrier={this.state.carrier}
            toggleCarrierDialog={this.toggleCarrierDialog}
          />
        ) : null}

        {/* _______________________________________ */}
        {/* For Debugging */}
        {showDebugger ? (
          <Debugger
            showSchema={this.props.schema}
            showState={__global.carriers}
            expanded
          />
        ) : null}
      </>
    );
  }
}

// End Component
// __________________________________________________________________________________________
