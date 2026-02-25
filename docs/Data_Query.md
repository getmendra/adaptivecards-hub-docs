---
title: "Data.Query"
source: "https://adaptivecards.microsoft.com/?topic=Data.Query"
topic: "Data.Query"
---

Data.Query

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines a query to dynamically fetch data from a Bot.

The `Invoke` request of type `application/search` your Bot receives for a `Data.Query` includes the values of all in the inputs in the card. This allows you to link a Dynamic Typeahead Search\-enabled Input.ChoiceSet to other inputs in the card and filter the results your Bot returns based on their values.

**Example:**

```
JSON{
    "name": "application/search",
    "type": "invoke",
    "value": {
        "queryText": "some text",
        "queryOptions": {
            "skip": 0,
            "top": 15
        },
        "dataset": "cities",
        "data": {
            "input1": "<value of input1>",
            "input2": "<value of input2>",
            ...
        }
    },
    // …. other fields
}
```

> Tip
> 
> The `Data.Query.dataset` property can be set to `graph.microsoft.com/users` to implement a **People Picker**. See Adding a People Picker to your Adaptive Card for more details.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Data.Query. | 1.0 |
| associatedInputs | string | Controls which inputs are associated with the Data.Query. When a Data.Query is executed, the values of the associated inputs are sent to the Bot, allowing it to perform filtering operations based on the user's input. Valid values: \`auto\`, \`none\` | 1.0 |
| count | number | The maximum number of data items that should be returned by the query. Card authors should not specify this property in their card payload. It is determined by the client and sent to the Bot to enable pagination. | 1.0 |
| dataset | string | The dataset from which to fetch the data. | 1.0 |
| skip | number | The number of data items to be skipped by the query. Card authors should not specify this property in their card payload. It is determined by the client and sent to the Bot to enable pagination. | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |