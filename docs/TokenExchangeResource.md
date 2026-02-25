---
title: "TokenExchangeResource"
source: "https://adaptivecards.microsoft.com/?topic=TokenExchangeResource"
topic: "TokenExchangeResource"
---

TokenExchangeResource

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines information required to enable on-behalf-of single sign-on user authentication. For more information, refer to the [Bot Framework TokenExchangeResource type](https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.tokenexchangeresource)

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| id | string | The unique identified of this token exchange instance. | 1.4 |
| providerId | string | An identifier for the identity provider with which to attempt a token exchange. | 1.4 |
| uri | string | An application ID or resource identifier with which to exchange a token on behalf of. This property is identity provider- and application-specific. | 1.4 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |