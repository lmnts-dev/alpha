/**
 *
 * @name Types
 * @author Peter Laxalt
 * @description Our site typings.
 *
 */

import {
  Sanity_DefaultItem,
  Sanity_Slug,
  Sanity_ImageAsset,
  Sanity_BlockContent,
} from "./Sanity";
import { LMNTS_SectionLoop } from "../../components/core/SectionLoop";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @BEM_Type LMNTS_Theme
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_Theme_Types =
  | "auto"
  | "covered-green"
  | "aqua"
  | "carrot"
  | "coral"
  | "slate"
  | "pine"
  | "deep-ocean"
  | "ember"
  | "mustard"
  | "ice"
  | "white"
  | "custom";

export type LMNTS_Theme_IconIllustration = {
  theme_icon_illustration:
    | "umbrella"
    | "newspaper"
    | "house_card"
    | "note_papers"
    | "help_bubbles"
    | "covered_brandmark"
    | "envelope";
};

export type LMNTS_Theme_LargeIllustration = {
  theme_large_illustration:
    | "time"
    | "money"
    | "agent_female"
    | "agent_male"
    | "agent_trans"
    | "agent_black"
    | "agent_white"
    | "agent_brown"
    | "customer_female"
    | "customer_male"
    | "customer_trans"
    | "customer_black"
    | "customer_white"
    | "customer_brown"
    | "family_black"
    | "family_white"
    | "family_brown"
    | "press"
    | "auto"
    | "commercial"
    | "pet"
    | "renters"
    | "home"
    | "desk"
    | "envelope"
    | "tech";
};

export type LMNTS_Theme_Dropdown = {
  theme_type: LMNTS_Theme_Types;
};

export type LMNTS_Theme_LayoutDropdown = {
  layout?: "__layout-media-left" | "__layout-media-right";
};

export type LMNTS_Theme_PageLayoutDropdown = {
  page_layout?: {
    layout?: "__layout-default" | "__layout-focus";
  };
};

export type LMNTS_Theme_PageThemeDropdown = {
  page_theme?: LMNTS_Theme_Dropdown;
};

export type LMNTS_Theme_ImageLayoutDropdown = {
  layout?: "__layout-media-fullwidth" | "__layout-media-centered";
};

/**
 *
 * @BEM_Type LMNTS_Default
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_Default_Link = {
  href: string;
  as?: string;
};

export type LMNTS_Default_Sanity_Document = Sanity_DefaultItem & {
  slug: Sanity_Slug;
  title: string;
};

export type LMNTS_Default_SectionLoop_Document = LMNTS_Default_Sanity_Document &
  LMNTS_SectionLoop &
  LMNTS_Theme_PageLayoutDropdown &
  LMNTS_Theme_Dropdown &
  LMNTS_Theme_PageThemeDropdown;

export type LMNTS_Default_SectionHeadlineWithSubheadine = {
  headline?: string;
  subheadline?: string;
};

export type LMNTS_Default_CTA = {
  cta?: LMNTS_Default_Link & {
    label: string;
  };
};

export type LMNTS_Default_OpenGraph = {
  opengraph: {
    image?: Sanity_ImageAsset;
    description?: string;
    tags?: string[];
  };
};

export type LMNTS_DefaultSocialMedia = {
  social_media: {
    twitter?: string;
    instagram?: string;
    linked_in?: string;
    facebook?: string;
  };
};

/**
 *
 * @BEM_Type LMNTS_Navigation
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_Navigation_DropdownLink = LMNTS_Theme_IconIllustration & {
  description?: string;
  label?: string;
  link?: LMNTS_Default_Link;
};

export type LMNTS_Navigation_Link = {
  dropdown?: {
    link_list: LMNTS_Navigation_DropdownLink[];
  };
  label?: string;
  link?: LMNTS_Default_Link;
  is_cta?: boolean;
  _type: "link";
};

export type LMNTS_Navigation_Data = Sanity_DefaultItem & {
  link_list: LMNTS_Navigation_Link[];
  _type: "navigation";
};

/**
 *
 * @BEM_Type LMNTS_Footer
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_Footer_Link = {
  label?: string;
  link: LMNTS_Default_Link;
};

export type LMNTS_Footer_LinkList_Column = {
  link_list: LMNTS_Footer_Link[];
  _type: "column";
};

export type LMNTS_Footer_Data = Sanity_DefaultItem & {
  footer_cta?: {
    cta_headline?: string;
    cta_subheadline?: string;
    link: {
      label: string;
      link: LMNTS_Default_Link;
    };
  };
  link_lists?: {
    columns: LMNTS_Footer_LinkList_Column[];
  };
  minor_footer_text?: string;
};

/**
 *
 * @BEM_Type LMNTS_Carrier
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_CarrierRating = {
  _type: "listing";
  rating: string;
  company: string;
  logo: Sanity_ImageAsset;
};

export type LMNTS_CarrierOffering = {
  _type: "offering";
  headline?: string;
  description?: Sanity_BlockContent[];
};

export type LMNTS_Carrier = Sanity_DefaultItem & {
  logo: Sanity_ImageAsset;
  name: string;
  description?: Sanity_BlockContent[];
  ratings?: LMNTS_CarrierRating[];
  unique_customer_offerings?: LMNTS_CarrierOffering[];
};

/**
 *
 * @BEM_Type LMNTS_FaqItem
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_FaqItem = Sanity_DefaultItem & {
  question: string;
  answer: Sanity_BlockContent;
};

/**
 *
 * @BEM_Type LMNTS_PressItem
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_PressItem = Sanity_DefaultItem & {
  headline: string;
  date: string;
  publisher: string;
  link: string;
};

/**
 *
 * @BEM_Type LMNTS_Form
 * __________________________________________________________________________________________
 *
 */

// Form Field Defaults
export type LMNTS_Form_Field_Default = {
  _key: string;
  isRequired: boolean;
  placeholder: string;
  field_label?: string;

  // Dynamic
  recordId?: string; // Returned from Airtable
  value?: any; // Filled out by user & managed by state
};

export type LMNTS_Form_Field_Default_TimeValues = {
  hour: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  minute: 0 | 15 | 30 | 45;
  period: "AM" | "PM";
};

// Form Fields
export type LMNTS_Form_Field_Email = LMNTS_Form_Field_Default & {
  _type: "field_email";
};

export type LMNTS_Form_Field_Text = LMNTS_Form_Field_Default & {
  _type: "field_text";
};

export type LMNTS_Form_Field_Dropdown_Option = {
  _type: "option";
  label: string;
  value?: string;
};

export type LMNTS_Form_Field_Dropdown = LMNTS_Form_Field_Default & {
  _type: "field_dropdown";
  options: LMNTS_Form_Field_Dropdown_Option[];
};

export type LMNTS_Form_Field_TimeRangePicker = LMNTS_Form_Field_Default & {
  _type: "field_time_range_picker";
  start_time: LMNTS_Form_Field_Default_TimeValues;
  end_time: LMNTS_Form_Field_Default_TimeValues;
};

export type LMNTS_Form_Field_DatePicker = LMNTS_Form_Field_Default & {
  _type: "field_date_picker";
  value: Date;
};

export type LMNTS_Form_Field_Textarea = LMNTS_Form_Field_Default & {
  _type: "field_textarea";
};

// Supported Form Fields
export type LMNTS_Form_Fields_Supported =
  | LMNTS_Form_Field_Email
  | LMNTS_Form_Field_Text
  | LMNTS_Form_Field_Dropdown
  | LMNTS_Form_Field_DatePicker;

// Form Steps
export type LMNTS_Form_Step = {
  _type: "step";
  _key: string;
  description?: string;
  headline?: string;
  fields: Array<LMNTS_Form_Fields_Supported>;
};

// Form State
export type LMNTS_Form_State = {
  airtable_submitted_record_id?: string;
  current_step: number;
  is_complete: boolean;
  has_error: boolean;
  error_messages: string[];
  is_loading: boolean;
};

// Forms
export type LMNTS_Form = {
  _type: "form";
  name?: string;
  airtable_table_name?: string;
  steps?: LMNTS_Form_Step[];
  confirmation_settings?: {
    submit_button: LMNTS_Theme_Dropdown & {
      label?: string;
    };
    success_page: LMNTS_Default_CTA &
      LMNTS_Theme_Dropdown & {
        description: Sanity_BlockContent;
        headline: string;
      };
  };
  disclaimer?: Sanity_BlockContent;
};

/**
 *
 * @BEM_Type LMNTS_DynamicPage
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_DynamicPage = Sanity_DefaultItem & {
  slug: Sanity_Slug;
};

/**
 *
 * @BEM_Type LMNTS_Config
 * __________________________________________________________________________________________
 *
 */
export type LMNTS_Config_Data = Sanity_DefaultItem &
  LMNTS_DefaultSocialMedia &
  LMNTS_Default_OpenGraph & {
    title: string;
    airtable: {
      api_key?: string;
      base_id?: string;
    };
    contact: {
      address_line_1?: string;
      address_line_2?: string;
      email?: string;
      phone_number?: string;
    };
  };

/**
 *
 * @BEM_Type LMNTS_Global
 * __________________________________________________________________________________________
 *
 */

export type LMNTS_Global_Data = {
  carriers: LMNTS_Carrier[];
  faq: LMNTS_FaqItem[];
  press: LMNTS_PressItem[];
  config: LMNTS_Config_Data;
};

/**
 *
 * @BEM_Type LMNTS_App
 * __________________________________________________________________________________________
 *
 */

/**
 *
 * @name LMNTS_App_Data
 *
 */
export type LMNTS_App_Data = {
  allContent?: any;
  __nav: LMNTS_Navigation_Data;
  __footer: LMNTS_Footer_Data;
  __document?: LMNTS_Default_SectionLoop_Document;
  __global: LMNTS_Global_Data;
  previewMode: boolean;
};
