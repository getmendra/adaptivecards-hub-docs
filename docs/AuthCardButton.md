---
title: "AuthCardButton"
source: "https://adaptivecards.microsoft.com/?topic=AuthCardButton"
topic: "AuthCardButton"
---

AuthCardButton

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines a button as displayed when prompting a user to authenticate. For more information, refer to the [Bot Framework CardAction type](https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.cardaction).

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be signin. | 1.4 |
| image | string | A URL to an image to display alongside the button’s caption. | 1.4 |
| title | string | The caption of the button. | 1.4 |
| value | string | The value associated with the button. The meaning of value depends on the button’s type. | 1.4 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |