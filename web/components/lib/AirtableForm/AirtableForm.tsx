// Core
import React, { PureComponent } from "react";

// Styles
import { AirtableFormStyle } from "./styles.scss";

// Types
import {
  LMNTS_Form,
  LMNTS_Form_Fields_Supported,
  LMNTS_Form_Step,
  LMNTS_Form_State,
} from "../../../constants/types";

// Utils
import { Airtable } from "../../../clients";

// Components
import { Debugger } from "../../../components/core/Debugger";
import { GlobalFormStyles } from "../../../constants/styles/Forms";
import { Airtable_DefaultRecord } from "../../../constants/types/Airtable";
import { Loader } from "../../core/Loader";

// Daypicker Vendor Package
// @see http://react-day-picker.js.org/
import DayPicker from "react-day-picker";

// Begin Component
// _______________________________________________________________________________________________

// Component-specific types.
export type LMNTS_AirtableForm = {
  FormReference: LMNTS_Form;
  DisplayComponent: React.FunctionComponent<
    LMNTS_AirtableForm_DisplayComponent
  >;
  addClass?: string;
};

type LMNTS_AirtableForm_State = LMNTS_Form & LMNTS_Form_State;

// ________________________________________________________________________________
// The required typing for any form display components.
export type LMNTS_AirtableForm_DisplayComponent = {
  // Current step & overall form state
  step: LMNTS_Form_Step;
  currentState: LMNTS_AirtableForm_State;

  // Handlers to update information
  handleChange: (
    e: { target: { value: string } },
    fieldIndex: number,
    stepIndex: number
  ) => void;
  handleOptionChange: (
    optionValue: any,
    fieldIndex: number,
    stepIndex: number
  ) => void;

  handleDateChange: (
    day: Date,
    { selected }: any,
    fieldIndex: number,
    stepIndex: number
  ) => void;

  // Status Checks
  canProceed: boolean;
  isLastStep: boolean;
  isNotFirstStep: boolean;
  isComplete: boolean;
  hasError: boolean;

  // Components
  DayPicker: any;

  // Actions
  submitForm: () => void;
  proceedToNextStep: () => void;
  proceedToPreviousStep: () => void;
};

/**
 * ______________________________________________________________________________________
 * @name AirtableForm
 * @description Basic FormDisplay component.
 *
 */
export class AirtableForm extends PureComponent<
  LMNTS_AirtableForm,
  LMNTS_AirtableForm_State
> {
  constructor(props: LMNTS_AirtableForm) {
    super(props);

    this.state = {
      // Core
      _type: "form",
      name: undefined,
      is_loading: true,

      // Airtable
      airtable_table_name: undefined,
      airtable_submitted_record_id: undefined,

      // Progression
      current_step: 0,
      is_complete: false,

      // Errors
      has_error: false,
      error_messages: [],

      // Data
      confirmation_settings: undefined,
      steps: undefined,
      disclaimer: undefined,
    };

    // Bind our functions
    // -- Form Navigation & Submission
    this.proceedToNextStep = this.proceedToNextStep.bind(this);
    this.proceedToPreviousStep = this.proceedToPreviousStep.bind(this);
    this.submitForm = this.submitForm.bind(this);

    // -- Airtable Record submission & changes
    this.createRecord = this.createRecord.bind(this);
    this.updateRecord = this.updateRecord.bind(this);

    // -- Input Changes
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    // -- Initialization
    this.isInitialized = this.isInitialized.bind(this);
  }

  /**
   *
   * @name isInitialized
   * @description Checks if we can show the form or not
   *
   */
  isInitialized = () => {
    let initializationCheck =
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0;

    return initializationCheck;
  };

  /**
   *
   * @name componentDidMount
   * @description Part of React's lifecycle.
   *
   */
  componentDidMount() {
    let form = this.props.FormReference ? this.props.FormReference : false;

    if (form) {
      this.setState({
        // Core
        _type: "form",
        name: form.name,
        is_loading: false,

        // Airtable
        airtable_table_name: form.airtable_table_name,

        // Data
        confirmation_settings: form.confirmation_settings,
        steps: form.steps
          ? form.steps.map((step: LMNTS_Form_Step) => ({
              ...step,
              fields: step.fields
                ? step.fields.map((field: LMNTS_Form_Fields_Supported) => ({
                    ...field,
                    value: "",
                  }))
                : [],
            }))
          : [],
        disclaimer: form.disclaimer,
      });
    } else {
      let err = "🚫 AirtableForm: Form reference not valid.";

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
      // return;
    }
  }

  /**
   *
   * @name proceedToNextStep
   * @description Checks if we can advance to next step, and updates the current_step.
   *
   */
  proceedToNextStep() {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      let totalSteps = this.state.steps.length;
      // let currentFields = this.state.steps[this.state.current_step].fields;
      // let needsEmailValidation =
      //   currentFields.filter((field: any) => field.type == "email").length > 0;
      let canProceed = this.state.current_step + 1 < totalSteps;

      if (canProceed) {
        if (!this.state.airtable_submitted_record_id) {
          this.createRecord();
        } else {
          this.updateRecord(false);
        }

        this.setState({
          current_step: this.state.current_step + 1,
        });
      }
    } else {
      let err = `🚫 AirtableForm.proceedToNextStep()`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
      // return;
    }
  }

  /**
   *
   * @name proceedToPreviousStep
   * @description Checks if we can advance to previous step, and updates the current_step.
   *
   */
  proceedToPreviousStep() {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      let canProceed = this.state.current_step - 1 >= 0;

      if (canProceed) {
        this.setState({
          current_step: this.state.current_step - 1,
        });
      }
    } else {
      let err = `🚫 AirtableForm.proceedToPreviousStep():
      Something went wrong with
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
      // return;
    }
  }

  /**
   *
   * @name submitForm
   * @description Submits the form to Airtable.
   *
   */
  submitForm() {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      if (!this.state.airtable_submitted_record_id) {
        console.log(`✅ AirtableForm.submitForm: Submitted & created record`);
        // @TODO: Logic & consolidated state for canProceed
        let canProceed = true;

        if (canProceed) {
          this.createRecord();

          this.setState({
            is_complete: true,
          });
        }
      } else {
        console.log(
          `✅ AirtableForm.submitForm: Submitted record by updating existing`
        );
        // @TODO: Logic & consolidated state for canProceed
        let canProceed = true;

        if (canProceed) {
          this.updateRecord(true);

          this.setState({
            is_complete: true,
          });
        }
      }
    } else {
      let err = `🚫 AirtableForm.submitForm`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
      // return;
    }
  }

  /**
   *
   * @name handleChange
   * @description Handles our text changes.
   * @param e : object : The event emitted from onChange
   * @param fieldIndex : number : The form field's `index` within it's `step`
   * @param stepIndex : number : The form field's parent `step` `index`
   *
   */
  handleChange(
    e: { target: { value: string } },
    fieldIndex: number,
    stepIndex: number
  ) {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      // 1. Make a shallow copy of the items
      let updatedSteps = [...this.state.steps];
      // 2. Make a shallow copy of the item we want to mutate
      let stepToUpdate = { ...updatedSteps[stepIndex] };
      // 3. Replace the property we're interested in
      stepToUpdate.fields[fieldIndex].value = e.target.value;
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      updatedSteps[stepIndex] = stepToUpdate;

      // 5. Set the state to our new copy
      this.setState({
        steps: updatedSteps,
      });
    } else {
      let err = `🚫 AirtableForm.handleChange()`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
    }
  }

  /**
   *
   * @name handleDateChange
   * @description Handles our date selecting between options.
   *
   */
  handleDateChange(
    day: Date,
    { selected }: any,
    fieldIndex: number,
    stepIndex: number
  ) {
    selected;

    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      // Parse our date with Moment.js
      // let parsedDate = moment(day).format();

      // 1. Make a shallow copy of the items
      let updatedSteps = [...this.state.steps];
      // 2. Make a shallow copy of the item we want to mutate
      let stepToUpdate = { ...updatedSteps[stepIndex] };
      // 3. Replace the property we're interested in
      stepToUpdate.fields[fieldIndex].value = day;
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      updatedSteps[stepIndex] = stepToUpdate;

      // 5. Set the state to our new copy
      this.setState({
        steps: updatedSteps,
      });
    } else {
      let err = `🚫 AirtableForm.handleChange()`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
    }

    // console.log("day:", day);
    // console.log("fieldIndex:", fieldIndex);
    // console.log("stepIndex:", stepIndex);
    // console.log("parsedDate:", parsedDate);
    // console.log("Date():", new Date());
  }

  /**
   *
   * @name handleOptionChange
   * @description Handles our selecting between options.
   * @param optionValue : string : The optionValue to update to.
   * @param fieldIndex : number : The form field's `index` within it's `step`
   * @param stepIndex : number : The form field's parent `step` `index`
   *
   */
  handleOptionChange(
    optionValue: any,
    fieldIndex: number,
    stepIndex: number
  ) {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      // 1. Make a shallow copy of the items
      let updatedSteps = [...this.state.steps];
      // 2. Make a shallow copy of the item we want to mutate
      let stepToUpdate = { ...updatedSteps[stepIndex] };
      // 3. Replace the property we're interested in
      stepToUpdate.fields[fieldIndex].value = optionValue;
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      updatedSteps[stepIndex] = stepToUpdate;

      // 5. Set the state to our new copy
      this.setState({
        steps: updatedSteps,
      });

      // Force update our component to hide the dropdown menu.
      // this.forceUpdate();
    } else {
      let err = `🚫 AirtableForm.handleOptionChange()`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
    }
  }

  /**
   *
   * @name createRecord
   * @description Creates a new record in Airtable.
   *
   */
  createRecord() {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      // Serialize our form data
      let fieldsToUpdate: LMNTS_Form_Fields_Supported[] = [];
      let serializedFields: any = {};

      this.state.steps[this.state.current_step].fields.map(
        (field: LMNTS_Form_Fields_Supported) => {
          fieldsToUpdate.push(field);
        }
      );

      fieldsToUpdate.map((field: LMNTS_Form_Fields_Supported) => {
        if (field.recordId) {
          serializedFields[field.recordId] = field.value;
        }
      });

      Airtable(this.state.airtable_table_name).create(
        [
          {
            fields: serializedFields,
          },
        ],
        { typecast: true },
        (err: any, records: Airtable_DefaultRecord[]) => {
          if (err) {
            this.setState({
              has_error: true,
              error_messages: [err],
            });

            let errorMessage = `🚫 AirtableForm.createRecord()`;

            this.setState({
              has_error: true,
              error_messages: [err],
            });

            console.error(errorMessage, this.state.error_messages);

            return false;
          } else {
            console.log("👍 Submitted Successfully", records);

            this.setState({
              airtable_submitted_record_id: records[0].id,
            });

            return true; // Successful
          }
        }
      );
    } else {
      let err = `🚫 AirtableForm.createRecord()`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
    }
  }

  /**
   *
   * @name updateRecord
   * @description Updates the current record in Airtable.
   * @param isConfirmed : boolean : Whether or not to confirm the submission.
   *
   */
  updateRecord(isConfirmed: boolean) {
    if (
      !this.state.has_error &&
      !this.state.is_loading &&
      this.state.steps &&
      this.state.steps.length > 0
    ) {
      // Serialize our form data
      let fieldsToUpdate: LMNTS_Form_Fields_Supported[] = [];
      let serializedFields: any = {};

      this.state.steps[this.state.current_step].fields.map(
        (field: LMNTS_Form_Fields_Supported) => {
          fieldsToUpdate.push(field);
        }
      );

      fieldsToUpdate.map((field: LMNTS_Form_Fields_Supported) => {
        if (field.recordId) {
          serializedFields[field.recordId] = field.value;
        }
      });

      if (isConfirmed) {
        serializedFields["Form Completed"] = true;
      } else {
        serializedFields["Form Completed"] = false;
      }

      // Update our record
      Airtable(this.state.airtable_table_name).update(
        [
          {
            id: this.state.airtable_submitted_record_id,
            fields: serializedFields,
          },
        ],
        { typecast: true },
        (err: any, records: Airtable_DefaultRecord[]) => {
          if (err) {
            this.setState({
              has_error: true,
              error_messages: [err],
            });

            console.error("🚫 updateRecord(): ", this.state.error_messages);

            return false;
          } else {
            console.log("👍 Updated Successfully", records);

            this.setState({
              airtable_submitted_record_id: records[0].id,
            });

            return true; // Successful
          }
        }
      );
    } else {
      let err = `🚫 AirtableForm.handleOptionChange()`;

      this.setState({
        has_error: true,
        error_messages: [err],
      });

      console.error(err);
      // return;
    }
  }

  render() {
    // ________________________________________________________
    // Settings
    let showDebugger = true;

    // ________________________________________________________
    // High Order Variables
    let { has_error } = this.state;
    let { addClass, DisplayComponent } = this.props;

    if (this.state.steps && this.state.steps.length > 0) {
      // ________________________________________________________
      // Primary Variables
      let totalSteps = this.state.steps.length;
      let isLastStep = this.state.current_step + 1 < totalSteps;
      let isNotFirstStep = this.state.current_step - 1 >= 0;
      let isComplete = this.state.is_complete;
      let currentFields = this.state.steps[this.state.current_step].fields;
      let canProceed =
        currentFields.filter(
          (field: LMNTS_Form_Fields_Supported) => field.value == ""
        ).length === 0;

      return (
        <AirtableFormStyle className={`__at-form ${addClass ? addClass : ``}`}>
          <GlobalFormStyles />

          <DisplayComponent
            step={this.state.steps[this.state.current_step]}
            handleChange={this.handleChange}
            handleOptionChange={this.handleOptionChange}
            handleDateChange={this.handleDateChange}
            currentState={this.state}
            canProceed={canProceed}
            proceedToNextStep={this.proceedToNextStep}
            proceedToPreviousStep={this.proceedToPreviousStep}
            submitForm={this.submitForm}
            isLastStep={isLastStep}
            isNotFirstStep={isNotFirstStep}
            isComplete={isComplete}
            hasError={has_error}
            DayPicker={DayPicker}
          />

          {/* _________________________________________________________ */}
          {/* For Debugging */}
          {showDebugger ? (
            <Debugger showSchema={this.props} showState={this.state} expanded />
          ) : null}
        </AirtableFormStyle>
      );
    } else {
      return <Loader />;
    }
  }
}
