---
title: "MessageBackSubmitActionData"
source: "https://adaptivecards.microsoft.com/?topic=MessageBackSubmitActionData"
topic: "MessageBackSubmitActionData"
---

MessageBackSubmitActionData

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents Teams-specific data in an Action.Submit to send a message back to the Bot.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be messageBack. | 1.0 |
| displayText | string | The optional text that will be displayed as a new message in the conversation, as if the end-user sent it. displayText is not sent to the Bot. | 1.0 |
| text | string | The text that will be sent to the Bot. | 1.0 |
| value | any | Optional additional value that will be sent to the Bot. For instance, value can encode specific context for the action, such as unique identifiers or a JSON object. | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |