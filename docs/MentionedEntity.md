---
title: "MentionedEntity"
source: "https://adaptivecards.microsoft.com/?topic=MentionedEntity"
topic: "MentionedEntity"
---

MentionedEntity

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents a mentioned person or tag.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| id | string | The Id of a person (typically a Microsoft Entra user Id) or tag. | 1.0 |
| mentionType | string | "Person" | The type of the mentioned entity. Valid values: \`Person\`, \`Tag\` | 1.0 |
| name | string | The name of the mentioned entity. | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |