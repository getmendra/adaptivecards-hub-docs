---
title: "TeamsCardProperties"
source: "https://adaptivecards.microsoft.com/?topic=TeamsCardProperties"
topic: "TeamsCardProperties"
---

TeamsCardProperties

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents a set of Teams-specific properties on a card.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| entities | Array ofobject | The Teams-specific entities associated with the card. Valid values: \`mention\` | 1.0 |
| width | string | Controls the width of the card in a Teams chat. Note that setting width to "full" will not actually stretch the card to the "full width" of the chat pane. It will only make the card wider than when the width property isn't set. Valid values: \`full\` | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |