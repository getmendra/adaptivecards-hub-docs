---
title: "CardMetadata"
source: "https://adaptivecards.microsoft.com/?topic=CardMetadata"
topic: "CardMetadata"
---

CardMetadata

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Card-level metadata.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| webUrl | string | The URL the card originates from. When webUrl is set, the card is dubbed an Adaptive Card-based Loop Component and, when pasted in Teams or other Loop Component-capable host applications, the URL will unfurl to the same exact card. | 1.4 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |