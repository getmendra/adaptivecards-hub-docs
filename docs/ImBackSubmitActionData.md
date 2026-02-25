---
title: "ImBackSubmitActionData"
source: "https://adaptivecards.microsoft.com/?topic=ImBackSubmitActionData"
topic: "ImBackSubmitActionData"
---

ImBackSubmitActionData

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents Teams-specific data in an Action.Submit to send an Instant Message back to the Bot.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be imBack. | 1.0 |
| value | string | The value that will be sent to the Bot. | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |