---
title: "SubmitActionData"
source: "https://adaptivecards.microsoft.com/?topic=SubmitActionData"
topic: "SubmitActionData"
---

SubmitActionData

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents the data of an Action.Submit.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| msteams | object | Defines the optional Teams-specific portion of the action's data. Valid values: \`ImBackSubmitActionData\`, \`InvokeSubmitActionData\`, \`MessageBackSubmitActionData\`, \`SigninSubmitActionData\`, \`TaskFetchSubmitActionData\` | 1.0 |
| msTeams | object | Defines the optional Teams-specific portion of the action's data. Equivalent to msteams. Valid values: \`ImBackSubmitActionData\`, \`InvokeSubmitActionData\`, \`MessageBackSubmitActionData\`, \`SigninSubmitActionData\`, \`TaskFetchSubmitActionData\` | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| \[key: string\] | any |