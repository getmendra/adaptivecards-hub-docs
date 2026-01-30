---
title: "Action.Popover"
source: "https://adaptivecards.microsoft.com/?topic=Action.Popover"
topic: "Action.Popover"
---

Action.Popover

Works in

![Teams](images/ic_fluent_teams_24_color.svg)

Shows a popover to display more information to the user.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Click the button below to open a popover"
    }
  ],
  "actions": [
    {
      "type": "Action.Popover",
      "title": "Click me!",
      "maxPopoverWidth": "350px",
      "content": {
        "type": "Container",
        "items": [
          {
            "type": "TextBlock",
            "weight": "bolder",
            "size": "large",
            "text": "This is a popover"
          },
          {
            "type": "TextBlock",
            "text": "This popover is made with Adaptive Card elements. It can contain anything like charts and even action buttons!"
          },
          {
            "type": "Chart.Pie",
            "colorSet": "categorical",
            "data": [
              {
                "legend": "Pear",
                "value": 59
              },
              {
                "legend": "Banana",
                "value": 292
              },
              {
                "legend": "Apple",
                "value": 143
              },
              {
                "legend": "Peach",
                "value": 98
              },
              {
                "legend": "Kiwi",
                "value": 179
              },
              {
                "legend": "Grapefruit",
                "value": 50
              },
              {
                "legend": "Orange",
                "value": 212
              },
              {
                "legend": "Cantaloupe",
                "value": 68
              }
            ]
          },
          {
            "type": "ActionSet",
            "actions": [
              {
                "type": "Action.OpenUrl",
                "title": "Open URL",
                "tooltip": "Click me",
                "url": "https://www.microsoft.com"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

Use `Action.Popover` to show additional information to the end-user in a "popover bubble" that displays on top of the card when the element it is associated with is clicked. The content of the popover bubble can be made of any Adaptive Card elements.

`Action.Popover` is particularly useful for scenarios such as:

-   Showing help or additional details such as a definition or a chart
-   Showing a confirmation dialog for destructive actions

### Example:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "weight": "bolder",
      "size": "large",
      "text": "Please review your order"
    },
    {
      "type": "FactSet",
      "facts": [
        {
          "title": "Item:",
          "value": "Zombie Halloween costume"
        },
        {
          "title": "Quantity:",
          "value": "1"
        },
        {
          "title": "Price:",
          "value": "$14.99"
        }
      ]
    }
  ],
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Confirm"
    },
    {
      "type": "Action.Popover",
      "title": "Cancel",
      "displayArrow": true,
      "content": {
        "type": "Container",
        "items": [
          {
            "type": "TextBlock",
            "text": "Are you sure you want to cancel this order?"
          },
          {
            "type": "ActionSet",
            "actions": [
              {
                "type": "Action.Submit",
                "title": "Yes, cancel my order"
              },
              {
                "type": "Action.Submit",
                "title": "No, keep my order"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

> Important
> 
> -   Only use `Action.Popover` for non-essential information.
> -   Use `Action.Popover` only when really necessary.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Action.Popover. | 1.0 |
| content | object | The content of the popover, which can be any element. Valid values: \`Accordion\`, \`ActionSet\`, \`Badge\`, \`Carousel\`, \`Chart.Donut\`, \`Chart.Gauge\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Pie\`, \`Chart.VerticalBar\`, \`Chart.VerticalBar.Grouped\`, \`CitationRun\`, \`CodeBlock\`, \`ColumnSet\`, \`Calendar event\`, \`File\`, \`Graph resource\`, \`Persona\`, \`PersonaSet\`, \`CompoundButton\`, \`Container\`, \`FactSet\`, \`Icon\`, \`IconRun\`, \`Image\`, \`ImageRun\`, \`ImageSet\`, \`Input.ChoiceSet\`, \`Input.Date\`, \`Input.Number\`, \`Input.Rating\`, \`Input.Text\`, \`Input.Time\`, \`Input.Toggle\`, \`LoopComponent\`, \`Media\`, \`ProgressBar\`, \`ProgressRing\`, \`Rating\`, \`RichTextBlock\`, \`Table\`, \`TabSet\`, \`TextBlock\`, \`TextRun\` | 1.5 |
| displayArrow | boolean | true | Controls if an arrow should be displayed towards the element that triggered the popover. | 1.5 |
| maxPopoverWidth | string | The maximum width of the popover in pixels, in the <number>px format Valid values: \`<number>px\` | 1.5 |
| popoverTitle | string | (Preview) The optional title of the popover, which will only be displayed on mobile devices. | 1.5 |
| position | string | "Above" | Controls where the popover should be displayed with regards to the element that triggered it. Valid values: \`Above\`, \`Below\`, \`Before\`, \`After\` | 1.5 |
| fallback | One of: objectstring | An alternate action to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Action.Submit\`, \`Action.OpenUrl\`, \`Action.Execute\`, \`Action.ToggleVisibility\`, \`Action.ShowCard\`, \`Action.ResetInputs\`, \`Action.Popover\`, \`Action.OpenUrlDialog\`, \`Action.InsertImage\`, \`Action.RunCommands\`, \`drop\` | 1.2 |
| iconUrl | string | A URL (or Base64-encoded Data URI) to a PNG, GIF, JPEG or SVG image to be displayed on the left of the action's title. iconUrl also accepts the <icon-name>\[,regular|filled\] format to display an icon from the vast Adaptive Card icon catalog instead of an image. | 1.1 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isEnabled | boolean | true | Controls the enabled state of the action. A disabled action cannot be clicked. If the action is represented as a button, the button's style will reflect this state. | 1.5 |
| isEnabled.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isEnabled property of the action at runtime. | 1.5 |
| isVisible | boolean | true | (Preview) Controls the visibility of the action. | 1.5 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the action at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| mode | string | "primary" | Controls if the action is primary or secondary. Secondary actions appear in an overflow menu. Valid values: \`primary\`, \`secondary\` | 1.5 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| style | string | "default" | Control the style of the action, affecting its visual and spoken representations. Valid values: \`default\`, \`positive\`, \`destructive\` | 1.2 |
| themedIconUrls | Array ofobject | A set of theme-specific icon URLs. Valid values: \`ThemedUrl\` | 1.5 |
| title | string | The title of the action, as it appears on buttons. | 1.0 |
| title.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the title property of the action at runtime. | 1.5 |
| tooltip | string | The tooltip text to display when the action is hovered over. | 1.5 |
| tooltip.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the tooltip property of the action at runtime. | 1.5 |