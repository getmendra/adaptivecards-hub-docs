---
title: "Date and time formatting"
source: "https://adaptivecards.microsoft.com/?topic=date-time-formatting"
topic: "date-time-formatting"
---

Date and time formatting

You can use the `DATE` and `TIME` formatting functions in TextBlock to ensure date and times are formatted and localized according to the region of the system rendering the Adaptive Card.

| Function | Syntax |
| --- | --- |
| **DATE** | `{{DATE(<date>|<date-time>[,COMPACT|SHORT|LONG])}}` - default format is **COMPACT** |
| **TIME** | `{{TIME(<time>|<date-time>)}}` |

Where:

-   `<date-time>` is a date and time expressed in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format (e.g. `2017-02-14T06:00:00Z`)
-   `<date>` is the date part (e.g. `2017-02-14`)
-   `<time>` is the time part (e.g. `06:00:00Z`).

> Tip
> 
> -   A time specified without a time zone offset is assumed to be in the target system's time zone.
> -   If no time is specified in the **DATE** function, it is assumed to be midnight (00:00:00) in the target system's time zone.
> -   To ensure a date is displayed without time zone conversion applied, either do not specify a time or specify a time without a time zone offset.

**Example:**

```json
{
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "Compact date: **{{DATE(2017-02-14T06:00:00Z)}}**",
      "wrap": true
    },
    {
      "type": "TextBlock",
      "text": "Short date: **{{DATE(2017-02-14T06:00:00Z,SHORT)}}**",
      "wrap": true
    },
    {
      "type": "TextBlock",
      "text": "Long date: **{{DATE(2017-02-14T06:00:00Z,LONG)}}**",
      "wrap": true
    },
    {
      "type": "TextBlock",
      "text": "Date and time: **{{DATE(2017-02-14T06:00:00Z,LONG)}}, {{TIME(2017-02-14T06:00:00Z)}}**",
      "wrap": true
    }
  ]
}
```