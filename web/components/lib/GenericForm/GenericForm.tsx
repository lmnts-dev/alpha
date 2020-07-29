// Core
import React from "react";

// Styles
import {
  GenericFormDisplayConfirmationGlobalStyles,
  GenericFormDisplayStyle,
  GenericFormDisplayGlobalStyles,
} from "./styles.scss";

// Types
import {
  LMNTS_Form,
  LMNTS_Form_Fields_Supported,
  LMNTS_Form_Field_Dropdown_Option,
} from "../../../constants/types";
import {
  AirtableForm,
  LMNTS_AirtableForm_DisplayComponent,
} from "../AirtableForm";

// Constants
import { SanityOptions } from "../../../clients";

// Components
import Link from "next/link";
import { Icon } from "../Icon";
import BlockContent from "@sanity/block-content-to-react";

// Begin Component
// ___________________________________________________________________________________________________

// Component-specific types.
export type LMNTS_GenericForm = {
  addClass?: string;
  form_reference: LMNTS_Form;
};

/**
 * ____________________________________________________________________________
 * @name GenericFormDisplay
 * @description Our GenericFormDisplay component.
 *
 */
const GenericFormDisplay: React.FunctionComponent<LMNTS_AirtableForm_DisplayComponent> = ({
  step,
  handleChange,
  handleOptionChange,
  currentState,
  canProceed,
  isLastStep,
  proceedToNextStep,
  submitForm,
  isNotFirstStep,
  proceedToPreviousStep,
  isComplete,
  hasError,
}) => {
  let { headline, fields } = step;
  let { disclaimer, confirmation_settings } = currentState;
  let success_page = confirmation_settings
    ? confirmation_settings.success_page
    : null;

  if (currentState) {
    return (
      <GenericFormDisplayStyle
        className={`generic-form-display ${
          isComplete ? "__success" : ""
        }`}
      >
        {/* __________________________________________________ */}
        {/* Global Styles */}
        <GenericFormDisplayGlobalStyles />

        {isComplete ? (
          // ______________________________________________________________
          // Success State
          <div className="generic-form-display-inner">
            <GenericFormDisplayConfirmationGlobalStyles />

            {success_page ? (
              <div className="generic-form-display-inner">
                <h1 className="form-display-headline">
                  {success_page.headline ? success_page.headline : "Success!"}
                </h1>
                <div className="form-display-success-content">
                  {success_page.description ? (
                    <BlockContent
                      blocks={success_page.description}
                      projectId={SanityOptions.projectId}
                      dataset={SanityOptions.dataset}
                    />
                  ) : (
                    "Thanks for your request! We'll be in touch soon."
                  )}
                </div>
                {success_page.cta ? (
                  <Link
                    href={success_page.cta.href}
                    as={success_page.cta.as ? success_page.cta.as : undefined}
                  >
                    <a className={`btn`}>{success_page.cta.label}</a>
                  </Link>
                ) : null}
                {/* __________________________________________________ */}
                {/* Form Disclaimer */}
                {disclaimer ? (
                  <div className="form-disclaimer">
                    <BlockContent
                      blocks={disclaimer}
                      projectId={SanityOptions.projectId}
                      dataset={SanityOptions.dataset}
                    />
                  </div>
                ) : null}{" "}
              </div>
            ) : null}
          </div>
        ) : (
          // _______________________________________________________________
          // The Form Flow
          <>
            {/* __________________________________________________ */}
            {/* Previous Step Button */}
            {isNotFirstStep ? (
              <button
                className="__btn-previous"
                onClick={proceedToPreviousStep}
              >
                <Icon name="arrow" />
              </button>
            ) : null}

            {/* __________________________________________________ */}
            {/* The form display itself */}
            <div className="generic-form-display-inner">
              {/* __________________________________________________ */}
              {/* Step headline */}
              {headline !== "" ? (
                <h1 className="form-display-headline">{headline}</h1>
              ) : null}

              {/* __________________________________________________ */}
              {/* The form loop */}
              {fields.length > 0
                ? fields.map(
                    (field: LMNTS_Form_Fields_Supported, idx: number) => {
                      // __________________________________________________
                      // Variables
                      let { _key, placeholder } = field;
                      let currentValue = currentState.steps
                        ? currentState.steps[currentState.current_step].fields[
                            idx
                          ].value
                        : undefined;

                      // __________________________________________________
                      // Dropdown Fields
                      if (field._type == "field_dropdown") {
                        let { options } = field;

                        return (
                          <div
                            className={`form-group __form-group-dropdown ${
                              currentValue != "" ? "__selected" : ""
                            }`}
                            key={idx}
                            style={{ zIndex: 666 + idx * -1 }}
                          >
                            <input
                              name={_key}
                              value={currentValue}
                              autoComplete="off"
                              className="__input-dropdown"
                              disabled
                            />

                            {/* __________________________________________________ */}
                            {/* The dropdowns themselves */}
                            <ul className="__input-options">
                              {options.map(
                                (
                                  option: LMNTS_Form_Field_Dropdown_Option,
                                  idxx: number
                                ) => (
                                  <li
                                    key={idxx}
                                    onClick={() =>
                                      handleOptionChange(
                                        option.value,
                                        idx,
                                        currentState.current_step
                                      )
                                    }
                                  >
                                    {option.value}
                                  </li>
                                )
                              )}
                            </ul>
                            <label htmlFor={_key}>{placeholder}</label>
                          </div>
                        );
                      }

                      // __________________________________________________
                      // Default Text Fields
                      else {
                        return (
                          <div className="form-group" key={idx}>
                            <input
                              name={_key}
                              value={currentValue}
                              onChange={(e) =>
                                handleChange(e, idx, currentState.current_step)
                              }
                              autoComplete="off"
                              required
                            />
                            <label htmlFor={_key}>{placeholder}</label>
                          </div>
                        );
                      }
                    }
                  )
                : null}
            </div>

            {/* __________________________________________________ */}
            {/* Next / Submit Button */}
            {!isLastStep ? (
              <button
                className={`btn __theme-btn-covered-green ${
                  canProceed ? "" : "__btn-disabled"
                }`}
                onClick={submitForm}
              >
                {confirmation_settings
                  ? confirmation_settings.submit_button
                    ? confirmation_settings.submit_button.label
                      ? confirmation_settings.submit_button.label
                      : "Complete Form"
                    : "Complete Form"
                  : "Complete Form"}
              </button>
            ) : (
              <button
                className={`btn __theme-btn-covered-green ${
                  canProceed ? "" : "__btn-disabled"
                }`}
                onClick={proceedToNextStep}
              >
                Next Step
              </button>
            )}

            {/* __________________________________________________ */}
            {/* Form Disclaimer */}
            {disclaimer ? (
              <div className="form-disclaimer">
                <BlockContent
                  blocks={disclaimer}
                  projectId={SanityOptions.projectId}
                  dataset={SanityOptions.dataset}
                />
              </div>
            ) : null}

            {/* __________________________________________________ */}
            {/* Error Handling */}
            {hasError ? (
              <p className="form-error">⚠️ Somethings wrong.</p>
            ) : null}
          </>
        )}
      </GenericFormDisplayStyle>
    );
  } else {
    let err = "🚫 GenericFormDisplay: Somethings wrong.";

    console.error(err, currentState);

    return null;
  }
};

/**
 * ____________________________________________________________________________
 * @name GenericForm
 * @description Load our display component above into the AirtableForm state.
 *
 */
export const GenericForm: React.FunctionComponent<LMNTS_GenericForm> = ({
  addClass,
  form_reference,
}) => {
  return (
    <AirtableForm
      FormReference={form_reference}
      DisplayComponent={GenericFormDisplay}
      addClass={addClass}
    />
  );
};
