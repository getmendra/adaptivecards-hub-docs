---
title: "LineChartValue"
source: "https://adaptivecards.microsoft.com/?topic=LineChartValue"
topic: "LineChartValue"
---

LineChartValue

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Represents a single data point in a line chart.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| x | One of: numberstring | The x axis value of the data point. If all x values of the x Chart.Line are expressed as a number, or if all x values are expressed as a date string in the YYYY-MM-DD format, the chart will be rendered as a time series chart, i.e. x axis values will span across the minimum x value to maximum x value range. Otherwise, if x values are represented as a mix of numbers and strings or if at least one x value isn't in the YYYY-MM-DD format, the chart will be rendered as a categorical chart, i.e. x axis values will be displayed as categories. | 1.5 |
| y | number | 0 | The y axis value of the data point. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |