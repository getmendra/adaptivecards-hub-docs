---
title: "StringResource"
source: "https://adaptivecards.microsoft.com/?topic=StringResource"
topic: "StringResource"
---

StringResource

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Defines the replacement string values.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| defaultValue | string | The default value of the string, which is used when no matching localized value is found. | 1.5 |
| localizedValues | Dictionary ofstring | Localized values of the string, where keys represent the locale (e.g. en-US) in the <ISO 639-1>(-<ISO 3166-1 alpha-2>) format. <ISO 639-1> is the 2-letter language code and <ISO 3166-1 alpha-2> is the optional 2-letter country code. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |