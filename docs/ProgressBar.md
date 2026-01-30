---
title: "ProgressBar"
source: "https://adaptivecards.microsoft.com/?topic=ProgressBar"
topic: "ProgressBar"
---

ProgressBar

Works in

![Teams](images/ic_fluent_teams_24_color.svg)

A progress bar element, to represent a value within a range.

The ProgressBar element visually communicates progress or system states with modern, clear design. It helps users quickly assess whether a task is ongoing or a specific state (e.g., error or near-full capacity) exists.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "ProgressBar styles",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "ProgressBar"
    },
    {
      "type": "TextBlock",
      "text": "Indeterminate",
      "spacing": "ExtraSmall",
      "size": "Small"
    },
    {
      "type": "ProgressBar",
      "value": 20,
      "separator": true,
      "spacing": "ExtraLarge"
    },
    {
      "type": "TextBlock",
      "text": "Accent",
      "color": "Accent",
      "spacing": "ExtraSmall",
      "size": "Small"
    },
    {
      "type": "ProgressBar",
      "color": "Good",
      "value": 40,
      "spacing": "Large"
    },
    {
      "type": "TextBlock",
      "text": "Good",
      "color": "Good",
      "spacing": "ExtraSmall",
      "size": "Small"
    },
    {
      "type": "ProgressBar",
      "color": "Warning",
      "value": 60,
      "spacing": "Large"
    },
    {
      "type": "TextBlock",
      "text": "Warning",
      "color": "Warning",
      "spacing": "ExtraSmall",
      "size": "Small"
    },
    {
      "type": "ProgressBar",
      "color": "Attention",
      "value": 80,
      "spacing": "Large"
    },
    {
      "type": "TextBlock",
      "text": "Attention",
      "color": "Attention",
      "spacing": "ExtraSmall",
      "size": "Small"
    }
  ]
}
```

> Important
> 
> -   **Reserve indeterminate feedback for processing:** avoid mixing indeterminate and static states.
> -   **Semantic consistency:** adhere to established color meanings (e.g., red for errors, green for success, yellow for warnings).
> -   **Accompany with text and/or icons:** pair progress bars with textual labels and/or icons (using TextBlock and Icon, for example) to provide context, especially for users with vision impairments.
> -   **Update your card to update your progress bar:** progress bars do not change client-side. To remove an indeterminate progress bar from the card, or to change the value of a static progress bar, use an [update activity](https://learn.microsoft.com/en-us/microsoftteams/platform/bots/build-conversational-capability?tabs=dotnet%2Capp-manifest-v112-or-later%2Cdotnet2%2Cdotnet3%2Cdotnet4%2Cdotnet5%2Ccsharp2%2Cdotnet6%2Ccsharp1#update-messages).

## Indeterminate mode

Use an indeterminate progress bar as an alternative to ProgressRing to indicate that a process is underway. It is ideal for scenarios where:

-   A task is actively processing,
-   Data is loading, and the content of your card might not yet be complete,
-   An operation is ongoing but precise progress cannot be reported.

> Tip
> 
> -   To make a `ProgressBar` indeterminate, do not set its value property.
> -   In indeterminate mode, a `ProgressBar` will always use the `accent` color, regardless of the value of the color property.

## Static mode

Use a `ProgressBar` with static progress bar to provide a snapshot of a system or process state. Typical use cases scenarios are:

-   An ongoing loading operation with progress between 0 and 100%,
-   A gauge indicating the available resources in a system,
-   The number of responses to a question out of total in a survey.

Colors can be used to convey further detail:

-   **Attention**: Conveys error or critical issues,
-   **Warning**: Indicates cautionary conditions, such as nearing storage capacity,
-   **Good**: Suggests success, the completion of a task or a satisfactory condition,
-   **Accent**: Offers a neutral, cohesive design for use cases not tied to semantic messaging.

* * *

## Examples

Let the user know their request is being processed:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Your request has been submitted",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "ProgressBar"
    },
    {
      "type": "TextBlock",
      "text": "Processing your request...",
      "spacing": "ExtraSmall",
      "size": "Small"
    }
  ]
}
```

A task was successfully processed:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Your request completed",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "ProgressBar",
      "value": 100,
      "color": "Good"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "CheckmarkCircle",
              "size": "xxSmall",
              "color": "Good"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "The request was successfully processed",
              "spacing": "ExtraSmall",
              "size": "Small",
              "color": "Good"
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "Small"
        }
      ],
      "spacing": "ExtraSmall"
    }
  ]
}
```

A task failed:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Your request failed",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "ProgressBar",
      "value": 100,
      "color": "Attention"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "ErrorCircle",
              "size": "xxSmall",
              "color": "Attention"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "The request timed out",
              "spacing": "ExtraSmall",
              "size": "Small",
              "color": "Attention"
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "Small"
        }
      ],
      "spacing": "ExtraSmall"
    }
  ]
}
```

Storage space is running is low:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "ProgressBar",
      "value": 80,
      "color": "Warning"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "Warning",
              "size": "xxSmall",
              "color": "Warning"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "Warning: your storage is almost full",
              "spacing": "ExtraSmall",
              "size": "Small",
              "color": "Warning"
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "Small"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "22.5 of 25 MB used",
              "wrap": true,
              "size": "Small"
            }
          ]
        }
      ],
      "spacing": "ExtraSmall"
    }
  ]
}
```

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be ProgressBar. | 1.0 |
| color | string | "Accent" | The color of the progress bar. color has no effect when the ProgressBar is in indeterminate mode, in which case the "accent" color is always used. Valid values: \`Accent\`, \`Good\`, \`Warning\`, \`Attention\` | 1.5 |
| max | number | 100 | The maximum value of the progress bar. | 1.5 |
| value | number | The value of the progress bar. Must be between 0 and max. | 1.5 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
| height | string | "auto" | The height of the element. When set to stretch, the element will use the remaining vertical space in its container. Valid values: \`auto\`, \`stretch\` | 1.1 |
| horizontalAlignment | string | Controls how the element should be horizontally aligned. Valid values: \`Left\`, \`Center\`, \`Right\` | 1.0 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isSortKey | boolean | false | Controls whether the element should be used as a sort key by elements that allow sorting across a collection of elements. | 1.5 |
| isVisible | boolean | true | Controls the visibility of the element. | 1.2 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the element at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| lang | string | The locale associated with the element. | 1.1 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |