---
title: "People Picker"
source: "https://adaptivecards.microsoft.com/?topic=people-picker"
topic: "people-picker"
---

People Picker

Use a People Picker in your card to allow the user to select a user from the organization's global address list. To add a People Picker to your card, use an Input.ChoiceSet and set its `choices.data` property to a Data.Query object that points to the appropriate dataset:

| Dataset name | Scope |
| --- | --- |
| `graph.microsoft.com/users` | This will scope the People Picker to all members across the organization. |
| `graph.microsoft.com/users?scope=currentContext` | This will scope the People Picker to the members of the current conversation, such as chat or channel in which the particular card is sent. |

**Example:**

```
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Input.ChoiceSet",
      "label": "Select users in the whole organization",
      "choices": [],
      "choices.data": {
        "type": "Data.Query",
        "dataset": "graph.microsoft.com/users"
      },
      "id": "people-picker",
      "isMultiSelect": true,
      "value": "user1,user2"
    }
  ],
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Submit"
    }
  ],
  "version": "1.2"
}
```

> Tip
> 
> You can also include static choices to a People Picker via the `Input.ChoiceSet.choices` property. This allows end users to select custom identities in addition to those pulled from the organization's global address list.

> Note
> 
> -   Like any other `Input.ChoiceSet`, People Picker supports multi-selection via the `Input.ChoiceSet.isMultiselect` property.
> -   You can preselect one or more users by setting the `Input.ChoiceSet.value` property to a valid Microsoft Entra Id (or a list of Microsoft Entra Ids if the `isMultiSelect` separated by a comma.)
> -   When the value of a People Picker is sent to your Bot via an Action.Submit or Action.Execute, your Bot will receive the **Microsoft Entra Ids** of the selected user(s).