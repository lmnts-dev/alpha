// Core
import React from "react";

// Styles
import {
  FullscreenFormDisplayConfirmationGlobalStyles,
  FullscreenFormDisplayStyle,
  FullscreenFormDisplayGlobalStyles,
} from "./styles.scss";

// Types
import {
  LMNTS_Form,
  LMNTS_Form_Fields_Supported,
  LMNTS_Form_Field_Dropdown_Option,
} from "../../constants/types";
import {
  AirtableForm,
  LMNTS_AirtableForm_DisplayComponent,
} from "../../components/lib/AirtableForm";

// Constants
import { Settings } from "../../constants/site/Settings";
import { SanityOptions } from "../../clients";

// Components
import LazyImage from "../../utils/lazyImage";
import Link from "next/link";
import { Icon } from "../../components/lib/Icon";
import BlockContent from "@sanity/block-content-to-react";

// Moment Vendor Package:
// For formatting dates
// @see http://react-day-picker.js.org/
import moment from "moment";

// Begin Component
// ___________________________________________________________________________________________________

// Component-specific types.
export type LMNTS_Schema_FullscreenFormDisplay = {
  _type: "form_display";
  form_reference: LMNTS_Form;
};

export type LMNTS_Section_FullscreenFormDisplay = {
  schema: LMNTS_Schema_FullscreenFormDisplay;
};

/**
 * ____________________________________________________________________________
 * @name FullScreenForm
 * @description Our FullScreenForm component.
 *
 */
const FullScreenForm: React.FunctionComponent<LMNTS_AirtableForm_DisplayComponent> = ({
  step,
  handleChange,
  handleOptionChange,
  handleDateChange,
  currentState,
  canProceed,
  isLastStep,
  proceedToNextStep,
  submitForm,
  isNotFirstStep,
  proceedToPreviousStep,
  isComplete,
  hasError,
  DayPicker,
}) => {
  let { headline, fields } = step;
  let { disclaimer, confirmation_settings } = currentState;
  let success_page = confirmation_settings
    ? confirmation_settings.success_page
    : null;

  if (currentState) {
    return (
      <FullscreenFormDisplayStyle
        className={`fs-form-display ${isComplete ? "__success-screen" : ""}`}
      >
        {/* __________________________________________________ */}
        {/* Global Styles */}
        <FullscreenFormDisplayGlobalStyles />

        {/* __________________________________________________ */}
        {/* Branding */}
        <span className="branding">
          <LazyImage
            src="/covered-logomark.svg"
            alt={Settings.siteTitleShort}
            title={Settings.siteTitleShort}
          />
        </span>

        {isComplete ? (
          // ______________________________________________________________
          // Success State
          <div className="fs-form-display-inner">
            <FullscreenFormDisplayConfirmationGlobalStyles />

            {success_page ? (
              <>
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
              </>
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
            <div className="fs-form-display-inner">
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
                      // Check & display different fields for different scenarios
                      switch (field._type) {
                        // __________________________________________________
                        // Dropdowns
                        case "field_dropdown":
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
                                value={currentValue ? currentValue : undefined}
                                autoComplete="off"
                                className="__input-dropdown"
                                required
                                disabled
                                key={_key}
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

                              {/* __________________________________________________ */}
                              {/* Field Label */}
                              <label htmlFor={_key}>{placeholder}</label>
                            </div>
                          );

                        // __________________________________________________
                        // Date Pickers
                        case "field_date_picker":
                          let parsedDate = currentValue
                            ? moment(currentValue).format("ddd, MMMM Do YYYY")
                            : "";

                          return (
                            <div
                              className={`form-group __form-group-dropdown __form-group-date-picker ${
                                currentValue != "" ? "__selected" : ""
                              }`}
                              key={idx}
                              style={{ zIndex: 666 + idx * -1 }}
                            >
                              <input
                                name={_key}
                                value={parsedDate ? parsedDate : undefined}
                                autoComplete="off"
                                className="__input-dropdown"
                                key={_key}
                                required
                                disabled
                              />

                              {/* __________________________________________________ */}
                              {/* The date picker itself */}
                              <div className="__input-options">
                                <DayPicker
                                  onDayClick={(day: Date, { selected }: any) =>
                                    handleDateChange(
                                      day,
                                      { selected },
                                      idx,
                                      currentState.current_step
                                    )
                                  }
                                  selectedDays={
                                    currentValue ? currentValue : false
                                  }
                                  disabledDays={[
                                    {
                                      daysOfWeek: [0, 6],
                                    },
                                    {
                                      before: new Date(),
                                    },
                                  ]}
                                />
                              </div>

                              {/* __________________________________________________ */}
                              {/* Field Label */}
                              <label htmlFor={_key}>{placeholder}</label>
                            </div>
                          );

                        // __________________________________________________
                        // Default
                        default:
                          return (
                            <div className="form-group" key={idx}>
                              <input
                                name={_key}
                                key={_key}
                                value={currentValue}
                                onChange={(e) =>
                                  handleChange(
                                    e,
                                    idx,
                                    currentState.current_step
                                  )
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
                Complete Form
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
      </FullscreenFormDisplayStyle>
    );
  } else {
    let err = "🚫 FullScreenFormDisplay: Somethings wrong.";

    console.error(err, currentState);

    return null;
  }
};

/**
 * ____________________________________________________________________________
 * @name FullscreenFormDisplay
 * @description Load our display component above into the AirtableForm state.
 *
 */
export const FullscreenFormDisplay: React.FunctionComponent<LMNTS_Section_FullscreenFormDisplay> = ({
  schema,
}) => {
  let { _type } = schema;

  return (
    <AirtableForm
      FormReference={schema.form_reference}
      DisplayComponent={FullScreenForm}
      addClass={`__${_type}`}
    />
  );
};
