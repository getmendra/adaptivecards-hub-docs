---
title: "Badge"
source: "https://adaptivecards.microsoft.com/?topic=Badge"
topic: "Badge"
---

Badge

Works in

![Teams](images/ic_fluent_teams_24_color.svg)

A badge element to show an icon and/or text in a compact form over a colored background.

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Shapes",
      "wrap": true
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "Left",
          "minItemWidth": "0px"
        }
      ],
      "items": [
        {
          "type": "Badge",
          "text": "Circular",
          "size": "Large",
          "style": "Accent"
        },
        {
          "type": "Badge",
          "text": "Rounded",
          "size": "Large",
          "style": "Accent",
          "shape": "Rounded"
        },
        {
          "type": "Badge",
          "text": "Square",
          "size": "Large",
          "style": "Accent",
          "shape": "Square"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "Sizes",
      "wrap": true,
      "separator": true,
      "spacing": "ExtraLarge"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "Left",
          "minItemWidth": "0px"
        }
      ],
      "items": [
        {
          "type": "Badge",
          "text": "Extra large no icon",
          "size": "ExtraLarge"
        },
        {
          "type": "Badge",
          "text": "Extra large with icon",
          "size": "ExtraLarge",
          "icon": "Calendar"
        },
        {
          "type": "Badge",
          "text": "Extra large with icon on right",
          "size": "ExtraLarge",
          "icon": "Calendar",
          "iconPosition": "After"
        },
        {
          "type": "Badge",
          "size": "ExtraLarge",
          "icon": "Calendar"
        }
      ]
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "Left",
          "minItemWidth": "0px"
        }
      ],
      "items": [
        {
          "type": "Badge",
          "text": "Large no icon",
          "size": "Large"
        },
        {
          "type": "Badge",
          "text": "Large with icon",
          "size": "Large",
          "icon": "Calendar"
        },
        {
          "type": "Badge",
          "text": "Large with icon on right",
          "size": "Large",
          "icon": "Calendar",
          "iconPosition": "After"
        },
        {
          "type": "Badge",
          "size": "Large",
          "icon": "Calendar"
        }
      ],
      "spacing": "Large"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "Left",
          "minItemWidth": "0px"
        }
      ],
      "items": [
        {
          "type": "Badge",
          "text": "Medium no icon"
        },
        {
          "type": "Badge",
          "text": "Medium with icon",
          "icon": "Calendar"
        },
        {
          "type": "Badge",
          "text": "Medium with icon on right",
          "icon": "Calendar",
          "iconPosition": "After"
        },
        {
          "type": "Badge",
          "icon": "Calendar"
        }
      ],
      "spacing": "Large"
    },
    {
      "type": "TextBlock",
      "text": "Styles and colors",
      "wrap": true,
      "separator": true,
      "spacing": "ExtraLarge"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "Left",
          "minItemWidth": "0px"
        }
      ],
      "items": [
        {
          "type": "Badge",
          "text": "Default filled",
          "size": "Large"
        },
        {
          "type": "Badge",
          "text": "Default tint",
          "size": "Large",
          "appearance": "Tint"
        },
        {
          "type": "Badge",
          "text": "Informative filled",
          "size": "Large",
          "style": "Informative"
        },
        {
          "type": "Badge",
          "text": "Informative tint",
          "size": "Large",
          "appearance": "Tint",
          "style": "Informative"
        },
        {
          "type": "Badge",
          "text": "Accent filled",
          "size": "Large",
          "style": "Accent"
        },
        {
          "type": "Badge",
          "text": "Accent tint",
          "size": "Large",
          "appearance": "Tint",
          "style": "Accent"
        },
        {
          "type": "Badge",
          "text": "Good filled",
          "size": "Large",
          "style": "Good"
        },
        {
          "type": "Badge",
          "text": "Good tint",
          "size": "Large",
          "appearance": "Tint",
          "style": "Good"
        },
        {
          "type": "Badge",
          "text": "Attention filled",
          "size": "Large",
          "style": "Attention"
        },
        {
          "type": "Badge",
          "text": "Attention tint",
          "size": "Large",
          "appearance": "Tint",
          "style": "Attention"
        },
        {
          "type": "Badge",
          "text": "Warning filled",
          "size": "Large",
          "style": "Warning"
        },
        {
          "type": "Badge",
          "text": "Warning tint",
          "size": "Large",
          "appearance": "Tint",
          "style": "Warning"
        },
        {
          "type": "Badge",
          "text": "Subtle filled",
          "size": "Large",
          "style": "Subtle"
        },
        {
          "type": "Badge",
          "text": "Subtle tint",
          "size": "Large",
          "appearance": "Tint",
          "style": "Subtle"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "With tooltip",
      "wrap": true,
      "separator": true,
      "spacing": "ExtraLarge"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "Left",
          "minItemWidth": "0px"
        }
      ],
      "items": [
        {
          "type": "Badge",
          "text": "With tooltip",
          "tooltip": "This is the tooltip",
          "size": "Large"
        },
        {
          "type": "Badge",
          "tooltip": "This is the tooltip",
          "size": "Large",
          "icon": "Calendar"
        }
      ]
    }
  ]
}
```

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Badge. | 1.0 |
| appearance | string | "Filled" | Controls the strength of the background color. Valid values: \`Filled\`, \`Tint\` | 1.5 |
| icon | string | The name of an icon from the Adaptive Card icon catalog to display, in the <icon-name>\[,regular|filled\] format. If the style is not specified, the regular style is used. | 1.5 |
| iconPosition | string | "Before" | Controls the position of the icon. Valid values: \`Before\`, \`After\` | 1.5 |
| shape | string | "Circular" | Controls the shape of the badge. Valid values: \`Square\`, \`Rounded\`, \`Circular\` | 1.5 |
| size | string | "Medium" | The size of the badge. Valid values: \`Medium\`, \`Large\`, \`ExtraLarge\` | 1.5 |
| style | string | "Default" | The style of the badge. Valid values: \`Default\`, \`Subtle\`, \`Informative\`, \`Accent\`, \`Good\`, \`Attention\`, \`Warning\` | 1.5 |
| text | string | The text to display. | 1.5 |
| tooltip | string | Controls the tooltip text to display when the badge is hovered over. | 1.5 |
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