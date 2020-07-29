/**
 *
 * @name Sanity.io Content Schema
 * @author Peter Laxalt
 * @description Site Content Model
 *
 */

// __________________________________________________________________________________________

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Content Schemas
import { Page } from "./content/Page";
import { Channel } from "./content/Channel";
import { Carrier } from "./content/Carrier";
import { Faq } from "./content/Faq";
import { Press } from "./content/Press";
import { Form } from "./content/Form";

// Setting Schemas
import { Config } from "./settings/Config";
import { Navigation } from "./settings/Navigation";
import { Footer } from "./settings/Footer";

// Core Builder Element Schemas
import { CenteredQuote } from "./sections/CenteredQuote";
import { CenteredContentRow } from "./sections/CenteredContentRow";
import { ColumnContent } from "./sections/ColumnContent";
import { FullWidthImage } from "./sections/FullWidthImage";
import { GridRow } from "./sections/GridRow";
import { HeadlineRow } from "./sections/HeadlineRow";
import { MarqueeRow } from "./sections/MarqueeRow";
import { SectionBreak } from "./sections/SectionBreak";
import { StickySection } from "./sections/StickySection";
import { ArticleText } from "./sections/ArticleText";
import { CircleTypedHero } from "./sections/CircleTypedHero";
import { CircleIconListings } from "./sections/CircleIconListings";
import { VideoWithBenefitsRow } from "./sections/VideoWithBenefitsRow";
import { CarrierMarquee } from "./sections/CarrierMarquee";
import { RepeatingColumnContentRow } from "./sections/RepeatingColumnContentRow";
import { NumbersHighlightRow } from "./sections/NumbersHighlightRow";
import { FeaturedLogosRow } from "./sections/FeaturedLogosRow";
import { TrustPilotRow } from "./sections/TrustPilotRow";
import { CallToActionRow } from "./sections/CallToActionRow";
import { SplitTypedHero } from "./sections/SplitTypedHero";
import { CarrierListings } from "./sections/CarrierListings";
import { SplitHero } from "./sections/SplitHero";
import { TeamListings } from "./sections/TeamListings";
import { StickyTimelineSection } from "./sections/StickyTimelineSection";
import { ResourceCardListings } from "./sections/ResourceCardListings";
import { FaqSplitListings } from "./sections/FaqSplitListings";
import { PressListings } from "./sections/PressListings";
import { ContactForm } from "./sections/ContactForm";
import { SplitSection } from "./sections/SplitSection";
import { FormDisplay } from "./sections/FormDisplay";
import { TwoColumnLogoHighlightRow } from "./sections/TwoColumnLogoHighlightRow";
import { MediaWithContentSection } from "./sections/MediaWithContentSection";


// __________________________________________________________________________________________

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    /**
     *
     * Schema Types
     *
     */
    Page,
    Channel,
    Carrier,
    Faq,
    Press,
    Form,

    /**
     *
     * Page Builder Sections
     *
     */

    // -- Default Sections
    ArticleText,
    CallToActionRow,
    CarrierListings,
    CarrierMarquee,
    CenteredContentRow,
    CenteredQuote,
    CircleIconListings,
    CircleTypedHero,
    ColumnContent,
    ContactForm,
    FaqSplitListings,
    FeaturedLogosRow,
    FormDisplay,
    FullWidthImage,
    GridRow,
    HeadlineRow,
    MarqueeRow,
    MediaWithContentSection,
    NumbersHighlightRow,
    PressListings,
    RepeatingColumnContentRow,
    ResourceCardListings,
    SectionBreak,
    SplitSection,
    SplitHero,
    SplitTypedHero,
    StickySection,
    StickyTimelineSection,
    TeamListings,
    TrustPilotRow,
    TwoColumnLogoHighlightRow,
    VideoWithBenefitsRow,

    /**
     *
     * Settings
     *
     */
    Config,
    Navigation,
    Footer
  ]),
});
