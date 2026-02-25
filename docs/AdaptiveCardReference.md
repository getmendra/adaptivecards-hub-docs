---
title: "AdaptiveCardReference"
source: "https://adaptivecards.microsoft.com/?topic=AdaptiveCardReference"
topic: "AdaptiveCardReference"
---

AdaptiveCardReference

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A type of reference whose content is an Adaptive Card.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be AdaptiveCardReference. | 1.0 |
| abstract | string | The abstract of the reference, providing a short summary of the reference's content. | 1.5 |
| content | any | Must be an Adaptive Card payload. | 1.5 |
| icon | string | Icon to be displayed in the reference. Valid values: \`msWord\`, \`msExcel\`, \`msPowerPoint\`, \`msOneNote\`, \`msSharePoint\`, \`msVisio\`, \`msLoop\`, \`msWhiteboard\`, \`code\`, \`sketch\`, \`adobeIllustrator\`, \`adobePhotoshop\`, \`adobeInDesign\`, \`adobeFlash\`, \`image\`, \`gif\`, \`video\`, \`sound\`, \`zip\`, \`text\`, \`pdf\` | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| keywords | Array ofstring | Keywords for the reference. Maximum allowed is 3. | 1.5 |
| title | string | Title of the reference. | 1.5 |
| url | string | Optional URL for the reference title. | 1.5 |