---
title: "RefreshDefinition"
source: "https://adaptivecards.microsoft.com/?topic=RefreshDefinition"
topic: "RefreshDefinition"
---

RefreshDefinition

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines how a card can be refreshed by making a request to the target Bot.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| action | object | The Action.Execute action to invoke to refresh the card. Valid values: \`Action.Execute\` | 1.4 |
| userIds | Array ofstring | The list of user Ids for which the card will be automatically refreshed. In Teams, in chats or channels with more than 60 users, the card will automatically refresh only for users specified in the userIds list. Other users will have to manually click on a "refresh" button. In contexts with fewer than 60 users, the card will automatically refresh for all users. | 1.4 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |