---
title: "Input validation"
source: "https://adaptivecards.microsoft.com/?topic=input-validation"
topic: "input-validation"
---

Input validation

All Adaptive Card input elements support validation via the `isRequired` and `errorMessage` properties (for instance, Input.Text.isRequired and Input.Text.errorMessage)

Validation enforces the following:

-   At the very least, a required input must have a value
-   Depending on the type of input, additional checks may be done, such as:
    -   Validating that an Input.Text's value matches that input's regex if specified
    -   Validating that an Input.Number's value is between that input's min and min if specified

> Note
> 
> Constraints defined using Input.Text.maxLength or `min` and `max` properties on other inputs may be enforced by the input control itself as the user types, preventing them from even entering an invalid value.

## When does validation happen?

Inputs are validated when the user clicks on an Action.Submit or Action.Execute action in the card. All inputs whose values will be sent to the Bot as part in the associated Invoke request are validated. If they pass validation, the Bot is invoked. Otherwise:

-   Any input that has failed validation will display its `errorMessage`, if provided,
-   Focus will be placed in the first input that failed validation, in order to allow the end user to easily update it and so assistive technology can immediately notify the user of the validation error

> Important
> 
> -   Inputs in a collapsed Action.ShowCard will **not** be validated nor submitted to the Bot.
> -   **Always** set the `id` property of any input, required or not. Inputs without Ids will not be validated and their values will not be sent to the Bot.
> -   **Always** set the `errorMessage` property of a required input. This ensures an optimal end-user experience including for those who use assistive technology.
> -   **Always** set the `label` property for all inputs, required or not. The label ensure an optimal experience for users of assistive technology.
> -   It is **not recommended** to include required inputs in parts of the card that are not always visible, such as in containers whose visibility might change via the use of Action.ToggleVisibiliy. In such a setting, error messages and visual indications that an input is invalid will not be visible, providing a bad user experience.

## Bypassing input validation

In some cases, an Action.Submit or Action.Execute should bypass input validation. For instance, there might be a "Cancel" or "Delete" action in your card that should work even if inputs are not valid.

To bypass input validation, set your action's associatedInput property to `"none"`.

## Example

```
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Input.Text",
      "label": "Required Input.Text",
      "placeholder": "Enter some text",
      "id": "text",
      "isRequired": true,
      "errorMessage": "Please enter a value"
    },
    {
      "type": "Input.Date",
      "label": "Required Input.Date",
      "id": "date",
      "isRequired": true,
      "errorMessage": "Please select a date"
    },
    {
      "type": "Input.Number",
      "label": "Required Input.Number",
      "placeholder": "Enter a number",
      "id": "number",
      "isRequired": true,
      "errorMessage": "Please enter a number"
    }
  ],
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Submit"
    },
    {
      "type": "Action.Submit",
      "title": "Cancel (bypasses validation)",
      "associatedInputs": "none"
    }
  ]
}
```