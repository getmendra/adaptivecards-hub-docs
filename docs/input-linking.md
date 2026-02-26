---
title: "Linking inputs"
source: "https://adaptivecards.microsoft.com/?topic=input-linking"
topic: "input-linking"
---

Linking inputs

In many scenarios, setting the value of an input in a card should result in the available options of another `Input.ChoiceSet` input to change. For example, consider a card with two `Input.ChoiceSet` inputs, one for selecting a country and the other for selecting a specific city within that country. Selecting a country should result in the list of available cities to change. This type of behavior can be accomplished by linking a dynamic search `Input.ChoiceSet` to one or more other inputs in the card.

### How it works

To link inputs in an Adaptive Card, use the following constructs:

-   The `valueChangedAction` property on any Input element (Input.Text, Input.ChoiceSet, etc.), which allows you to define an action that will trigger when the value of the input changes. Currently, `valueChangedAction` can only be set to an action of type `Action.ResetInputs`
-   The Action.ResetInputs action. This action resets the values of the inputs specified in the `targetInputIds` collection to their default
-   The Data.Query object's `associatedInputs` property. When a `Data.Query` request is made to your Bot, it will include the values of all the inputs in the card, allowing you do filter the response according to those values.

### Example

In the below payload:

-   The "country" input is defined so that whenever its value changes, the value of the "city" input will be reset
-   Because the "city" input is required, resetting its value will force the end user to pick a new city whenever "country" changes
-   As the user starts typing in the "city" input, the `Data.Query`request made to your Bot will include the value of the "country" input, allowing your Bot to return a list of cities for the selected country/region only

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "size": "ExtraLarge",
      "text": "Country Picker",
      "weight": "Bolder",
      "wrap": true,
      "type": "TextBlock"
    },
    {
      "id": "country",
      "type": "Input.ChoiceSet",
      "label": "Select a country or region:",
      "choices": [
        {
          "title": "USA",
          "value": "usa"
        },
        {
          "title": "France",
          "value": "france"
        },
        {
          "title": "India",
          "value": "india"
        }
      ],
      "valueChangedAction": {
        "type": "Action.ResetInputs",
        "targetInputIds": [
          "city"
        ]
      },
      "isRequired": true,
      "errorMessage": "Please select a country or region"
    },
    {
      "style": "filtered",
      "choices.data": {
        "type": "Data.Query",
        "dataset": "cities",
        "associatedInputs": "auto"
      },
      "id": "city",
      "type": "Input.ChoiceSet",
      "label": "Select a city:",
      "placeholder": "Type to search for a city in the selected country",
      "isRequired": true,
      "errorMessage": "Please select a city"
    }
  ],
  "actions": [
    {
      "title": "Submit",
      "type": "Action.Submit"
    }
  ]
}
```

The `Data.Query` request your Bot will receive will look like this:

```
JSON{
    "name": "application/search",
    "type": "invoke",
    "value": {
        "queryText": "india",
        "queryOptions": {
            "skip": 0,
            "top": 15
        },
        "dataset": "cities",
        "data": {
            "country": "<value of the country input>"
        }
    },
    // …. other fields
}
```