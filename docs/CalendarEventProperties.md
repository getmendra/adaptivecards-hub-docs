---
title: "CalendarEventProperties"
source: "https://adaptivecards.microsoft.com/?topic=CalendarEventProperties"
topic: "CalendarEventProperties"
---

CalendarEventProperties

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

The properties of a calendar event.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| attendees | Array ofobject | The attendees of the event. Valid values: \`CalendarEventAttendee\` | 1.0 |
| end | string | The end date and time of the event. | 1.0 |
| extension | string | The extension of the event. | 1.0 |
| id | string | The ID of the event. | 1.0 |
| isAllDay | boolean | Indicates if the event is all day. | 1.0 |
| locations | Array ofstring | The locations of the event. | 1.0 |
| onlineMeetingUrl | string | The URL of the online meeting. | 1.0 |
| organizer | object | The organizer of the event. Valid values: \`CalendarEventAttendee\` | 1.0 |
| start | string | The start date and time of the event. | 1.0 |
| status | string | The status of the event. | 1.0 |
| title | string | The title of the event. | 1.0 |
| url | string | The URL of the event. | 1.0 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |