/**
 *
 * @name Form Sanity.io Schema
 * @author Peter Laxalt
 * @description lmnts-6 Site Form Data Model
 *
 */

import { DefaultSection } from "../scaffold/DefaultSection";
import { ThemeDropdown } from "../scaffold/Theme";
import { DefaultCTA } from "../scaffold/DefaultCTA";

// __________________________________________________________________________________________

/**
 *
 * @name DefaultFormField
 * @description Default fields for any form field entry.
 *
 */
export const DefaultFormField = [
  {
    name: "placeholder",
    title: "Field Placeholder",
    description: "Default placeholder displayed before content is entered.",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "field_label",
    title: "Field Label",
    description: "Optional. Label displayed above the field.",
    type: "string",
  },
  {
    name: "isRequired",
    title: "Make field required?",
    description:
      "Require field entry before proceeding to next step or submission.",
    type: "boolean",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "recordId",
    title: "Airtable Record Field Name",
    description:
      "The name of the column to submit your Airtable data to. This much match exactly to your Airtable Field name - it is case sensitive. Displayed at the top of your views. I.e. 'Email Address.'",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
];

/**
 *
 * @name DefaultFormField
 * @description Default fields for any form field entry.
 *
 */
export const DefaultTimePickerField = [
  {
    name: "hour",
    title: "Hour",
    description: "Select hour.",
    type: "number",
    validation: (Rule) => Rule.required(),
    options: {
      list: [
        { title: "1", value: 1 },
        { title: "2", value: 2 },
        { title: "3", value: 3 },
        { title: "4", value: 4 },
        { title: "5", value: 5 },
        { title: "6", value: 6 },
        { title: "7", value: 7 },
        { title: "8", value: 8 },
        { title: "9", value: 9 },
        { title: "10", value: 10 },
        { title: "11", value: 11 },
        { title: "12", value: 12 },
      ],
    },
  },
  {
    name: "minute",
    title: "Minute",
    description: "Select minutes.",
    type: "number",
    validation: (Rule) => Rule.required(),
    options: {
      list: [
        { title: ":00", value: 0 },
        { title: ":15", value: 15 },
        { title: ":30", value: 30 },
        { title: ":45", value: 45 },
      ],
    },
  },
  {
    name: "period",
    title: "Period",
    description: "Select period.",
    type: "string",
    validation: (Rule) => Rule.required(),
    options: {
      list: [
        { title: "AM", value: "AM" },
        { title: "PM", value: "PM" },
      ],
    },
  },
];

/**
 *
 * @name Form
 * @description Form builder content model.
 *
 */

export const FormRegistry = {
  name: "form",
  title: "Form",
  type: "document",
};

export const Form = {
  ...FormRegistry,
  fields: [
    {
      name: "name",
      title: "Form Name",
      description: "Purely for organization - this does not display anywhere.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headline",
      title: "Form Headline",
      description: "Optional. Displayed above your steps throughout the whole process. You can also use different headlines or hide the headline per step by editing the step fields below.",
      type: "string",
    },
    {
      name: "airtable_table_name",
      title: "Airtable Table Name",
      description:
        "The table name in which you'd like to submit your form request to. This is case sensitive. Edit your Airtable API Settings in the Settings tab to the left.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "steps",
      title: "Form Steps",
      description:
        "Create your structure of steps to take in your form. Once you add a step, you can add fields. Adding multiple steps is optional. Each new step adds a previous & back button so you can incrementally gather data throughout each step.",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "step",
          title: "Step",
          type: "object",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: "name",
              title: "Step Name",
              description:
                "Purely for organization - this does not display anywhere.",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "headline",
              title: "Step Headline",
              type: "string",
              description: "Optional. Displayed above your fields",
            },
            {
              name: "description",
              title: "Step Description",
              type: "string",
              description:
                "Optional. Displayed above your fields but below your headline.",
            },
            {
              name: "fields",
              type: "array",
              description:
                "Build your form fields. Currently we only support fields listed individual fields as rows.",
              of: [
                {
                  name: "field_text",
                  title: "Text Field",
                  type: "object",
                  fields: [...DefaultFormField],
                },
                {
                  name: "field_email",
                  title: "Email Field",
                  type: "object",
                  fields: [...DefaultFormField],
                },
                {
                  name: "field_dropdown",
                  title: "Dropdown Field",
                  type: "object",
                  validation: (Rule) => Rule.required(),
                  fields: [
                    ...DefaultFormField,
                    {
                      name: "options",
                      type: "array",
                      description: "Enter your dropdown options below.",
                      of: [
                        {
                          name: "option",
                          type: "object",
                          title: "Option",
                          fields: [
                            {
                              name: "label",
                              title: "Label",
                              type: "string",
                            },
                            {
                              name: "value",
                              title: "Value",
                              type: "string",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "field_textarea",
                  title: "Textarea Field",
                  type: "object",
                  fields: [...DefaultFormField],
                },
                {
                  name: "field_date_picker",
                  title: "Date Picker Field",
                  type: "object",
                  fields: [...DefaultFormField],
                },
                {
                  name: "field_time_range_picker",
                  title: "Time Picker (Range) Field",
                  type: "object",
                  fields: [
                    ...DefaultFormField,
                    {
                      name: "start_time",
                      type: "object",
                      description: "Select a start time.",
                      fields: [...DefaultTimePickerField],
                    },
                    {
                      name: "end_time",
                      type: "object",
                      description: "Select an end time.",
                      fields: [...DefaultTimePickerField],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "confirmation_settings",
      title: "Confirmation Settings",
      description:
        "Edit how your users will be redirected after completing the form process.",
      type: "object",
      options: {
        collapsible: false,
        collapsed: false,
      },
      fields: [
        {
          name: "submit_button",
          title: "Submit Button",
          description: "Edit your submit button.",
          type: "object",
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: "label",
              title: "Submit Button Label",
              type: "string",
              description:
                "Edit what your submit button's label says. Defaults to 'Submit'",
            },
            ...ThemeDropdown,
          ],
        },
        {
          name: "success_page",
          title: "Success Page",
          description: "Edit your Success Page.",
          type: "object",
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: "headline",
              title: "Success Page Headline",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: "Optional. Displayed above your fields",
            },
            {
              name: "description",
              title: "Success Page Description",
              type: "array",
              validation: (Rule) => Rule.required(),
              of: [{ type: "block" }],
              description:
                "Optional. Displayed above your fields but below your headline.",
            },
            ...DefaultCTA(),
            ...ThemeDropdown,
          ],
        },
      ],
    },
    {
      name: "disclaimer",
      title: "Form Disclaimer",
      description: "Displayed below the form.",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

// __________________________________________________________________________________________
