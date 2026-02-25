---
title: "mention"
source: "https://adaptivecards.microsoft.com/?topic=mention"
topic: "mention"
---

mention

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents a mention to a person.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be mention. | 1.0 |
| mentioned | object | Defines the entity being mentioned. Valid values: \`MentionedEntity\` | 1.0 |
| text | string | The text that will be substituted with the mention. | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |