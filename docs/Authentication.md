---
title: "Authentication"
source: "https://adaptivecards.microsoft.com/?topic=Authentication"
topic: "Authentication"
---

Authentication

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines authentication information associated with a card. For more information, refer to the [Bot Framework OAuthCard type](https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.oauthcard)

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| buttons | Array ofobject | The buttons that should be displayed to the user when prompting for authentication. The array MUST contain one button of type “signin”. Other button types are not currently supported. Valid values: \`AuthCardButton\` | 1.4 |
| connectionName | string | The identifier for registered OAuth connection setting information. | 1.4 |
| text | string | The text that can be displayed to the end user when prompting them to authenticate. | 1.4 |
| tokenExchangeResource | object | Provides information required to enable on-behalf-of single sign-on user authentication. Valid values: \`TokenExchangeResource\` | 1.4 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |