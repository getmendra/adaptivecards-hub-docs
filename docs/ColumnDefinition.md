---
title: "ColumnDefinition"
source: "https://adaptivecards.microsoft.com/?topic=ColumnDefinition"
topic: "ColumnDefinition"
---

ColumnDefinition

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines a column in a Table element.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| horizontalCellContentAlignment | string | Controls how the content of every cell in the table should be horizontally aligned by default. This property overrides the horizontalCellContentAlignment property of the table. Valid values: \`Left\`, \`Center\`, \`Right\` | 1.5 |
| verticalCellContentAlignment | string | Controls how the content of every cell in the column should be vertically aligned by default. This property overrides the verticalCellContentAlignment property of the table. Valid values: \`Top\`, \`Center\`, \`Bottom\` | 1.5 |
| width | One of: stringnumber | The width of the column in the table. If expressed as a number, represents the relative weight of the column in the table. If expressed as a string, auto will automatically adjust the column's width according to its content and using the <number>px format will give the column an explicit width in pixels. Valid values: \`auto\`, \`<number>px\` | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |