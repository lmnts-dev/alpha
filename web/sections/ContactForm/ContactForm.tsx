// Core
import React from "react";

// Types
import {
  LMNTS_Default_SectionHeadlineWithSubheadine,
  LMNTS_Default_CTA,
  LMNTS_Theme_Dropdown,
  LMNTS_Theme_LayoutDropdown,
  LMNTS_App_Data,
  LMNTS_Form,
} from "../../constants/types";

// Styles
import { ContactFormStyle } from "./styles.scss";

// Components
import { Debugger } from "../../components/core/Debugger";
import { InnerGrid } from "../../components/core/InnerGrid";
import { SocialMediaLinks } from "../../components/lib/SocialMediaLinks";
import { GenericForm } from "../../components/lib/GenericForm";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_ContactFormColumnContent = {
  headline: string;
  description: string;
};

export type LMNTS_Schema_ContactForm = LMNTS_Default_SectionHeadlineWithSubheadine &
  LMNTS_Default_CTA &
  LMNTS_Theme_Dropdown &
  LMNTS_Theme_LayoutDropdown & {
    _type: "contact_form";
    form_reference: LMNTS_Form;
    form_column: LMNTS_ContactFormColumnContent;
    address_column: LMNTS_ContactFormColumnContent;
  };

export type LMNTS_Section_ContactForm = {
  schema: LMNTS_Schema_ContactForm;
  data: LMNTS_App_Data;
};

/**
 *
 * @name ContactForm
 * @author Peter Laxalt
 *
 */
export const ContactForm: React.FunctionComponent<LMNTS_Section_ContactForm> = ({
  schema,
  data,
}) => {
  let showDebugger = false;
  let {
    _type,
    layout,
    theme_type,
    form_column,
    address_column,
    form_reference,
  } = schema;
  let { __global } = data;
  let { config } = __global;
  let { contact } = config;

  return (
    <>
      <ContactFormStyle
        className={`section __${_type} ${layout} __theme-bg-${theme_type}`}
      >
        <InnerGrid addClass={`__${_type}`}>
          {/* _________________________________________________________ */}
          {/* Contact Information Column */}
          <div className="section-col __content">
            <div className="section-content-wrap">
              {/* _________________________________________________________ */}
              {/* Contact Information headline / description */}
              {address_column.headline ? (
                <h3>{address_column.headline}</h3>
              ) : null}

              {address_column.description ? (
                <p>{address_column.description}</p>
              ) : null}

              {/* _________________________________________________________ */}
              {/* Contact information block */}
              <div className="section-contact-info">
                <ul className="contact-info">
                  {/* _________________________________________________________ */}
                  {/* Email */}
                  {contact.email ? (
                    <li className="contact-info-row">
                      <a
                        href={`mailto: ${contact.email}`}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {contact.email}
                      </a>
                    </li>
                  ) : null}

                  {/* _________________________________________________________ */}
                  {/* Phone Number */}
                  {contact.phone_number ? (
                    <li className="contact-info-row">
                      <a
                        href={`tel: ${contact.phone_number}`}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {contact.phone_number}
                      </a>
                    </li>
                  ) : null}

                  {/* _________________________________________________________ */}
                  {/* Address Line 1 */}
                  {contact.address_line_1 ? (
                    <li className="contact-info-row __address-line">
                      {contact.address_line_1}
                    </li>
                  ) : null}

                  {/* _________________________________________________________ */}
                  {/* Address Line 2 */}
                  {contact.address_line_2 ? (
                    <li className="contact-info-row __address-line">
                      {contact.address_line_2}
                    </li>
                  ) : null}

                  {/* _________________________________________________________ */}
                  {/* Social Media */}
                  {config.social_media ? (
                    <li className="contact-info-row __social">
                      <SocialMediaLinks social_media={config.social_media} />
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>

          {/* _________________________________________________________ */}
          {/* Form Column */}
          <div className="section-col __form">
            <div className="section-content-wrap">
              {form_column.headline ? <h3>{form_column.headline}</h3> : null}

              {form_column.description ? (
                <p>{form_column.description}</p>
              ) : null}

              {/* _________________________________________________________ */}
              {/* The form itself */}
              {form_reference ? (
                <GenericForm form_reference={form_reference} />
              ) : null}
            </div>
          </div>
        </InnerGrid>
      </ContactFormStyle>
      {/* _________________________________________________________ */}
      {/* For Debugging */}
      {showDebugger ? (
        <Debugger showSchema={schema} showState={config} expanded />
      ) : null}
    </>
  );
};

// End Component
// __________________________________________________________________________________________
