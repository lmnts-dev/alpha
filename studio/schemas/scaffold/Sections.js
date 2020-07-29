/**
 *
 * @name Section Registry
 * @author Peter Laxalt
 * @description
 * @requires web/sections/SectionLoop
 * This is where we register our section id's to show up
 * in the Sanity builder.
 *
 */

import { CenteredQuoteRegistry } from "../sections/CenteredQuote";
import { ColumnContentRegistry } from "../sections/ColumnContent";
import { FullWidthImageRegistry } from "../sections/FullWidthImage";
import { GridRowRegistry } from "../sections/GridRow";
import { HeadlineRowRegistry } from "../sections/HeadlineRow";
import { MarqueeRowRegistry } from "../sections/MarqueeRow";
import { SectionBreakRegistry } from "../sections/SectionBreak";
import { StickySectionRegistry } from "../sections/StickySection";
import { ArticleTextRegistry } from "../sections/ArticleText";
import { CircleTypedHeroRegistry } from "../sections/CircleTypedHero";
import { CircleIconListingsRegistry } from "../sections/CircleIconListings";
import { VideoWithBenefitsRowRegistry } from "../sections/VideoWithBenefitsRow";
import { CarrierMarqueeRegistry } from "../sections/CarrierMarquee";
import { RepeatingColumnContentRowRegistry } from "../sections/RepeatingColumnContentRow";
import { NumbersHighlightRowRegistry } from "../sections/NumbersHighlightRow";
import { FeaturedLogosRowRegistry } from "../sections/FeaturedLogosRow";
import { TrustPilotRowRegistry } from "../sections/TrustPilotRow";
import { CallToActionRowRegistry } from "../sections/CallToActionRow";
import { SplitTypedHeroRegistry } from "../sections/SplitTypedHero";
import { CarrierListingsRegistry } from "../sections/CarrierListings";
import { SplitHeroRegistry } from "../sections/SplitHero";
import { TeamListingsRegistry } from "../sections/TeamListings";
import { CenteredContentRowRegistry } from "../sections/CenteredContentRow";
import { StickyTimelineSectionRegistry } from "../sections/StickyTimelineSection";
import { ResourceCardListingsRegistry } from "../sections/ResourceCardListings";
import { FaqSplitListingsRegistry } from "../sections/FaqSplitListings";
import { PressListingsRegistry } from "../sections/PressListings";
import { ContactFormRegistry } from "../sections/ContactForm";
import { SplitSectionRegistry } from "../sections/SplitSection";
import { FormDisplayRegistry } from "../sections/FormDisplay";
import { TwoColumnLogoHighlightRowRegistry } from "../sections/TwoColumnLogoHighlightRow";
import { MediaWithContentSectionRegistry } from "../sections/MediaWithContentSection";

// __________________________________________________________________________________________

export const SectionRegistryMeta = {
  title: "Page Sections",
  name: "content",
  type: "array",
};

/**
 *
 * @name Sections
 * @param includeSections? : array : Section `types` to include.
 * @param excludeSections? : array : Section `types` to exclude.
 * @returns Array back of sections.
 *
 */
export const Sections = (includeSections, excludeSections) => {
  /**
   *
   * Default Variables
   *
   */
  let defaultSections = [
    { type: ArticleTextRegistry.name },
    { type: CallToActionRowRegistry.name },
    { type: CarrierListingsRegistry.name },
    { type: CarrierMarqueeRegistry.name },
    { type: CenteredContentRowRegistry.name },
    { type: CenteredQuoteRegistry.name },
    { type: CircleIconListingsRegistry.name },
    { type: CircleTypedHeroRegistry.name },
    { type: ColumnContentRegistry.name },
    { type: ContactFormRegistry.name },
    { type: FaqSplitListingsRegistry.name },
    { type: FeaturedLogosRowRegistry.name },
    { type: FormDisplayRegistry.name },
    { type: FullWidthImageRegistry.name },
    { type: GridRowRegistry.name },
    { type: HeadlineRowRegistry.name },
    { type: MarqueeRowRegistry.name },
    { type: MediaWithContentSectionRegistry.name },
    { type: NumbersHighlightRowRegistry.name },
    { type: PressListingsRegistry.name },
    { type: RepeatingColumnContentRowRegistry.name },
    { type: ResourceCardListingsRegistry.name },
    { type: SectionBreakRegistry.name },
    { type: SplitSectionRegistry.name },
    { type: SplitHeroRegistry.name },
    { type: SplitTypedHeroRegistry.name },
    { type: StickySectionRegistry.name },
    { type: StickyTimelineSectionRegistry.name },
    { type: TeamListingsRegistry.name },
    { type: TwoColumnLogoHighlightRowRegistry.name },
    { type: TrustPilotRowRegistry.name },
    { type: VideoWithBenefitsRowRegistry.name },
  ];

  // Add any optional sections here.
  let optionalSections = [];

  let selectedSections = [];

  let filteredSections = defaultSections;

  /**
   *
   * @name handleIncludeSections
   * @returns Array back of defaultSections with included sections added on
   *
   */
  function handleIncludeSections(sectionsToInclude) {
    sectionsToInclude.forEach((type) => {
      let matchedSection = optionalSections.filter(
        (section) => section.type == type
      );

      selectedSections = selectedSections.concat(matchedSection[0]);
    });

    filteredSections = filteredSections.concat(selectedSections);

    return {
      ...SectionRegistryMeta,
      of: filteredSections,
    };
  }

  /**
   *
   * @name handleExcludeSections
   * @returns Array with specified sections removed
   *
   */
  function handleExcludeSections(sectionsToExclude) {
    sectionsToExclude.forEach((type) => {
      filteredSections = filteredSections.filter(
        (section) => section.type != type
      );
    });

    return {
      ...SectionRegistryMeta,
      of: filteredSections,
    };
  }

  /**
   *
   * Return Our Data
   *
   */
  if (includeSections && excludeSections) {
    // If both are specified
    handleIncludeSections(includeSections);

    return handleExcludeSections(excludeSections);
  } else if (includeSections) {
    // If only includeSections is specified
    return handleIncludeSections(includeSections);
  } else if (excludeSections) {
    // If only excludeSections is specified
    return handleExcludeSections(excludeSections);
  } else {
    // If none specified
    return {
      ...SectionRegistryMeta,
      of: defaultSections,
    };
  }
};
