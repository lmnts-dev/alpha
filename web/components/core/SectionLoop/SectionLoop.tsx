// Core
import React from "react";

// Styles
import { SectionLoopStyle } from "./styles.scss";

// Types
import { LMNTS_App_Data } from "../../../constants/types";

// Sections Types & Schemas
import {
  SectionBreak,
  LMNTS_Schema_SectionBreak,
} from "../../../sections/SectionBreak";
import { GridRow, LMNTS_Schema_GridRow } from "../../../sections/GridRow";
import {
  CenteredQuote,
  LMNTS_Schema_CenteredQuote,
} from "../../../sections/CenteredQuote";
import {
  FullWidthImage,
  LMNTS_Schema_FullWidthImage,
} from "../../../sections/FullWidthImage";
import {
  StickySection,
  LMNTS_Schema_StickySection,
} from "../../../sections/StickySection";
import { Headline, LMNTS_Schema_Headline } from "../../../sections/Headline";
import {
  ColumnContent,
  LMNTS_Schema_ColumnContent,
} from "../../../sections/ColumnContent";
import {
  MarqueeRow,
  LMNTS_Schema_MarqueeRow,
} from "../../../sections/MarqueeRow";
import {
  ArticleText,
  LMNTS_Schema_ArticleText,
} from "../../../sections/ArticleText";
import {
  LMNTS_Schema_CallToActionRow,
  CallToActionRow,
} from "../../../sections/CallToActionRow";
import {
  LMNTS_Schema_CarrierMarquee,
  CarrierMarquee,
} from "../../../sections/CarrierMarquee";
import {
  LMNTS_Schema_CarrierListings,
  CarrierListings,
} from "../../../sections/CarrierListings";
import {
  CenteredContent,
  LMNTS_Schema_CenteredContent,
} from "../../../sections/CenteredContent";
import {
  LMNTS_Schema_CircleIconListings,
  CircleIconListings,
} from "../../../sections/CircleIconListings/CircleIconListings";
import {
  LMNTS_Schema_CircleTypedHero,
  CircleTypedHero,
} from "../../../sections/CircleTypedHero";
import {
  FeaturedLogosRow,
  LMNTS_Schema_FeaturedLogosRow,
} from "../../../sections/FeaturedLogosRow/FeaturedLogosRow";
import {
  LMNTS_Schema_NumbersHighlightRow,
  NumbersHighlightRow,
} from "../../../sections/NumbersHighlightRow";
import {
  RepeatingColumnContentRow,
  LMNTS_Schema_RepeatingColumnContentRow,
} from "../../../sections/RepeatingColumnContentRow";
import {
  ResourceCardListings,
  LMNTS_Schema_ResourceCardListings,
} from "../../../sections/ResourceCardListings";
import { LMNTS_Schema_SplitHero, SplitHero } from "../../../sections/SplitHero";
import {
  SplitTypedHero,
  LMNTS_Schema_SplitTypedHero,
} from "../../../sections/SplitTypedHero";
import {
  LMNTS_Schema_StickyTimelineSection,
  StickyTimelineSection,
} from "../../../sections/StickyTimelineSection";
import {
  LMNTS_Schema_TeamListings,
  TeamListings,
} from "../../../sections/TeamListings";
import {
  TrustPilotRow,
  LMNTS_Schema_TrustPilotRow,
} from "../../../sections/TrustPilotRow";
import {
  VideoWithBenefitsRow,
  LMNTS_Schema_VideoWithBenefitsRow,
} from "../../../sections/VideoWithBenefitsRow";
import {
  LMNTS_Schema_FaqSplitListings,
  FaqSplitListings,
} from "../../../sections/FaqSplitListings";
import {
  PressListings,
  LMNTS_Schema_PressListings,
} from "../../../sections/PressListings";
import {
  LMNTS_Schema_ContactForm,
  ContactForm,
} from "../../../sections/ContactForm";
import {
  SplitSection,
  LMNTS_Schema_SplitSection,
} from "../../../sections/SplitSection";
import {
  FullscreenFormDisplay,
  LMNTS_Schema_FullscreenFormDisplay,
} from "../../../sections/FullscreenFormDisplay";
import {
  TwoColumnLogoHighlightRow,
  LMNTS_Schema_TwoColumnLogoHighlightRow,
} from "../../../sections/TwoColumnLogoHighlightRow";
import {
  LMNTS_Schema_MediaWithContentSection,
  MediaWithContentSection,
} from "../../../sections/MediaWithContentSection";

// Component Typings
// __________________________________________________________________________________________

export type LMNTS_SectionLoopItems =
  | LMNTS_Schema_CenteredQuote
  | LMNTS_Schema_ColumnContent
  | LMNTS_Schema_GridRow
  | LMNTS_Schema_Headline
  | LMNTS_Schema_MarqueeRow
  | LMNTS_Schema_SectionBreak
  | LMNTS_Schema_FullWidthImage
  | LMNTS_Schema_StickySection
  | LMNTS_Schema_ArticleText
  | LMNTS_Schema_CallToActionRow
  | LMNTS_Schema_CarrierMarquee
  | LMNTS_Schema_CarrierListings
  | LMNTS_Schema_CenteredContent
  | LMNTS_Schema_CircleIconListings
  | LMNTS_Schema_CircleTypedHero
  | LMNTS_Schema_FeaturedLogosRow
  | LMNTS_Schema_NumbersHighlightRow
  | LMNTS_Schema_RepeatingColumnContentRow
  | LMNTS_Schema_ResourceCardListings
  | LMNTS_Schema_SplitSection
  | LMNTS_Schema_SplitHero
  | LMNTS_Schema_SplitTypedHero
  | LMNTS_Schema_StickyTimelineSection
  | LMNTS_Schema_TeamListings
  | LMNTS_Schema_TrustPilotRow
  | LMNTS_Schema_VideoWithBenefitsRow
  | LMNTS_Schema_FaqSplitListings
  | LMNTS_Schema_PressListings
  | LMNTS_Schema_ContactForm
  | LMNTS_Schema_FullscreenFormDisplay
  | LMNTS_Schema_TwoColumnLogoHighlightRow
  | LMNTS_Schema_MediaWithContentSection;

export type LMNTS_SectionLoop = {
  content: LMNTS_SectionLoopItems[];
  data: LMNTS_App_Data;
};

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name SectionLoop
 * @author Peter Laxalt
 * @description The loop to display section components.
 * @requires studio/scaffold/Sections
 *
 */
export const SectionLoop: React.FunctionComponent<LMNTS_SectionLoop> = ({
  content,
  data,
}) => {
  // console.log(
  //   content.length > 0
  //     ? "✅ SectionLoop: Content data loaded."
  //     : "🚫 SectionLoop: Content data not loaded or doesn't exist.",
  //   content
  // );

  return (
    <SectionLoopStyle className="__section-loop">
      {content.length > 0 ? (
        content.map((schema: LMNTS_SectionLoopItems, idx: number) => {
          switch (schema._type) {
            /**
             *
             * Generic
             *
             */
            case "article_text":
              return <ArticleText schema={schema} key={idx} />;

            case "call_to_action_row":
              return <CallToActionRow schema={schema} key={idx} />;

            case "carrier_listings":
              return <CarrierListings data={data} schema={schema} key={idx} />;

            case "carrier_marquee":
              return <CarrierMarquee data={data} schema={schema} key={idx} />;

            case "call_to_action_row":
              return <CallToActionRow schema={schema} key={idx} />;

            case "centered_content_row":
              return <CenteredContent schema={schema} key={idx} />;

            case "circle_icon_listings":
              return <CircleIconListings schema={schema} key={idx} />;

            case "circle_typed_hero":
              return <CircleTypedHero schema={schema} key={idx} />;

            case "contact_form":
              return <ContactForm data={data} schema={schema} key={idx} />;

            case "faq_split_listings":
              return <FaqSplitListings data={data} schema={schema} key={idx} />;

            case "featured_logos_row":
              return <FeaturedLogosRow schema={schema} key={idx} />;

            case "form_display":
              return <FullscreenFormDisplay schema={schema} key={idx} />;

            case "repeating_column_content_row":
              return <RepeatingColumnContentRow schema={schema} key={idx} />;

            case "resource_card_listings":
              return <ResourceCardListings schema={schema} key={idx} />;

            case "split_section":
              return <SplitSection schema={schema} key={idx} />;

            case "split_hero":
              return <SplitHero schema={schema} key={idx} />;

            case "split_typed_hero":
              return <SplitTypedHero schema={schema} key={idx} />;

            case "sticky_timeline_section":
              return <StickyTimelineSection schema={schema} key={idx} />;

            case "team_listings":
              return <TeamListings schema={schema} key={idx} />;

            case "trust_pilot_row":
              return <TrustPilotRow schema={schema} key={idx} />;

            case "two_column_logo_highlight_row":
              return <TwoColumnLogoHighlightRow schema={schema} key={idx} />;

            case "video_with_benefits_row":
              return <VideoWithBenefitsRow schema={schema} key={idx} />;

            case "numbers_row":
              return <NumbersHighlightRow schema={schema} key={idx} />;

            case "media_with_content_section":
              return <MediaWithContentSection schema={schema} key={idx} />;

            case "press_listings":
              return <PressListings data={data} schema={schema} key={idx} />;

            case "centered_quote":
              return <CenteredQuote schema={schema} key={idx} />;

            case "column_content":
              return <ColumnContent schema={schema} key={idx} />;

            case "fullwidth_image":
              return <FullWidthImage schema={schema} key={idx} />;

            case "grid_row":
              return <GridRow schema={schema} key={idx} />;

            case "headline":
              return <Headline schema={schema} key={idx} />;

            case "marquee_row":
              return <MarqueeRow schema={schema} key={idx} />;

            case "sticky_section":
              return <StickySection schema={schema} key={idx} />;

            case "section_break":
              return <SectionBreak schema={schema} key={idx} />;

            /**
             *
             * Default
             *
             */
            default:
              if ((process.env.IS_DEVELOPMENT = "1")) {
                // @ts-ignore
                return <div>🧸 SectionLoop: {schema._type}</div>;
              } else {
                return console.log("🧸 SectionLoop: Section does not exist.");
              }
          }
        })
      ) : (
        <div>🧸 SectionLoop: Content empty or does not exist.</div>
      )}
    </SectionLoopStyle>
  );
};

/**
 *
 * @name SectionLoopQuery
 * @author Peter Laxalt
 * @description This is our projection to query the section loop in a way that reflects our content above.
 * @see https://www.sanity.io/docs/how-queries-work
 * @requires studio/scaffold/Sections
 *
 */

export const SectionLoopQuery = `{
  ...,
  "content": content[]{
      ...,
      "image": image.asset->,
      "hero_background_image": hero_background_image.asset->,
      "images": images[].asset->,
      "items": items[]{
        ..., "image" : image.asset->
      },
      "video": {
        "cover_image": video.cover_image.asset->,
        "video_source": video.video_source
      },
      "columns": columns[]{
        ...,
        "image": image.asset->
      },
      "team_members": team_members[]{
        ...,
        "image": image.asset->
      },
      "featured_logos": featured_logos[]{
        ...,
        "image": image.asset->
      },
      "timeline_points": timeline_points[]{
        ...,
        "featured_image": featured_image.asset->
      },
      "featured_image": {
        "image": featured_image.image.asset->
      },
      "hero_featured_image": hero_featured_image.asset->,
      "section_featured_image": section_featured_image.asset->,
      "featured_image": featured_image.asset->,
      "background_image": background_image.asset->,
      "form_reference": form_reference->,
      "left_column": {
        ...left_column,
        "image": left_column.image.asset->
      },
      "right_column": {
        ...right_column,
        "image": right_column.image.asset->
      }
   }
}`;

// "logo": logo.asset->,
//         "ratings": ratings[]{
//           logo.asset->
//         }

// End Component
// __________________________________________________________________________________________
