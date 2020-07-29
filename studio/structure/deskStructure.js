/**
 *
 * @name LMNTS-6 Sanity.io Desk Structure
 * @author Peter Laxalt
 * @description LMNTS-6 Desk Structure Model
 *
 */

// __________________________________________________________________________________________

// Core
import React, { Component } from "react";
import S from "@sanity/desk-tool/structure-builder";

// Icons
import {
  FaGlobe,
  FaCampground,
  FaUserAstronaut,
  FaEnvelope,
  FaDraftingCompass,
  FaQuestionCircle,
  FaShoePrints,
  FaNewspaper,
  FaSyncAlt,
  FaPencilAlt,
} from "react-icons/fa";

// Registries
import { ChannelRegistry } from "../schemas/content/Channel";
import { PageRegistry } from "../schemas/content/Page";
import { ConfigRegistry } from "../schemas/settings/Config";
import { CarrierRegistry } from "../schemas/content/Carrier";
import { NavigationRegistry } from "../schemas/settings/Navigation";
import { FooterRegistry } from "../schemas/settings/Footer";
import { FaqRegistry } from "../schemas/content/Faq";
import { PressRegistry } from "../schemas/content/Press";
import resolveProductionUrl from "../utils/resolveProductionUrl";
import { FormRegistry } from "../schemas/content/Form";

// __________________________________________________________________________________________

/**
 * Simple example of web preview
 */
class WebPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: 0,
    };

    this.resetIframe = this.resetIframe.bind(this);
  }

  resetIframe() {
    this.setState({ random: this.state.random + 1 });
  }

  render() {
    const { displayed } = this.props.document;
    let previewUrl = resolveProductionUrl(displayed);

    return (
      <>
        <button
          onClick={this.resetIframe}
          style={{
            position: "fixed",
            right: 10,
            top: "50%",
            zIndex: 999,
            background: "white",
            boxShadow: "0 6px 20px 0px rgba(0,0,0,.15)",
            border: 0,
            outline: 0,
            borderRadius: 4,
            padding: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaSyncAlt />
        </button>
        <iframe
          src={previewUrl}
          frameBorder={0}
          key={this.state.random}
          style={{ width: "100%", height: "100%" }}
        />
      </>
    );
  }
}

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "channel" || schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title("Preview"),
    ]);
  }
};

/**
 * Our Desk Structure
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      /**
       * List all of our document types, filter out
       * our hidden document types
       */
      // ...S.documentTypeListItems().filter(hiddenDocTypes),

      // Pages
      S.listItem()
        .title("Pages")
        .icon(FaCampground)
        // This automatically gives it properties from the page type
        .schemaType(PageRegistry.name)
        // When you open this list item, list out the documents
        // of the type “page"
        .child(S.documentTypeList(PageRegistry.name).title("Pages")),

      // Channels
      S.listItem()
        .title("Channels")
        .icon(FaUserAstronaut)
        .schemaType(ChannelRegistry.name)
        .child(S.documentTypeList(ChannelRegistry.name).title("Channel")),

      // Carriers
      S.listItem()
        .title("Carriers")
        .icon(FaEnvelope)
        .schemaType(CarrierRegistry.name)
        .child(S.documentTypeList(CarrierRegistry.name).title("Carrier")),

      // FAQ
      S.listItem()
        .title("FAQ")
        .icon(FaQuestionCircle)
        .schemaType(FaqRegistry.name)
        .child(S.documentTypeList(FaqRegistry.name).title("FAQ")),

      // Press
      S.listItem()
        .title("Press")
        .icon(FaNewspaper)
        .schemaType(PressRegistry.name)
        .child(S.documentTypeList(PressRegistry.name).title("Press")),

      // Press
      S.listItem()
      .title("Airtable Forms")
      .icon(FaPencilAlt)
      .schemaType(FormRegistry.name)
      .child(S.documentTypeList(FormRegistry.name).title("Airtable Forms")),

      // Divider
      S.divider(),

      // Navigation
      S.listItem()
        .title("Navigation")
        .icon(FaDraftingCompass)
        .child(
          S.editor()
            .id(NavigationRegistry.name)
            .schemaType(NavigationRegistry.name)
            .documentId("navigationConfig")
            .title("Navigation Settings")
        ),

      // Footer
      S.listItem()
        .title("Footer")
        .icon(FaShoePrints)
        .child(
          S.editor()
            .id(FooterRegistry.name)
            .schemaType(FooterRegistry.name)
            .documentId("footerConfig")
            .title("Footer Settings")
        ),

      // Settings
      S.listItem()
        .title("Settings")
        .icon(FaGlobe)
        .child(
          S.editor()
            .id(ConfigRegistry.name)
            .schemaType(ConfigRegistry.name)
            .documentId("globalConfig")
            .title("Global Settings")
        ),

      // Open Airtable
      // S.listItem()
      //   .title("Open Airtable")
      //   .icon(FaExternalLinkAlt)
      //   .child(() =>
      //     window.open(
      //       "https://airtable.com/tblYVYIn8Qvez885Q/viwWlwGYVN7C5kRGB"
      //     )
      //   ),
    ]);

// __________________________________________________________________________________________

// LEGACY CODE

/**
 * Simple example of web preview
 */
// const url = "http://lmnts-6-three.now.sh/api/preview?secret=lordmeeko?slug=/work/";

// class WebPreview extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       random: 0,
//     };

//     this.resetIframe = this.resetIframe.bind(this);
//   }

//   resetIframe() {
//     this.setState({ random: this.state.random + 1 });
//   }

//   render() {
//     const { displayed } = this.props.document;

//     return (
//       <>
//         <button
//           onClick={this.resetIframe}
//           style={{
//             position: "fixed",
//             right: 10,
//             top: "50%",
//             zIndex: 999,
//             background: "white",
//             borderRadius: 100,
//             padding: 20,
//           }}
//         >
//           Refresh
//         </button>
//         <iframe
//           src={url + displayed.slug.current}
//           frameBorder={0}
//           key={this.state.random}
//           style={{ width: "100%", height: "100%" }}
//         />
//       </>
//     );
//   }
// }

// export const getDefaultDocumentNode = ({ schemaType }) => {
//   // Conditionally return a different configuration based on the schema type
//   if (schemaType === "project") {
//     return S.document().views([
//       S.view.form(),
//       S.view.component(WebPreview).title("Web"),
//     ]);
//   }
// };

/**
 * Our Hidden Doc Types
 */

// const hiddenDocTypes = (listItem) =>
//   ![
//     "config",
//     "navigation",
//     "hiddenItem", // For example purposes
//   ].includes(listItem.getId());
