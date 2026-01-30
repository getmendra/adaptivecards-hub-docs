---
title: "TextBlock"
source: "https://adaptivecards.microsoft.com/?topic=TextBlock"
topic: "TextBlock"
---

TextBlock

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A block of text, optionally formatted using Markdown.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Lorem ipsum dolor",
      "wrap": true,
      "size": "Small"
    },
    {
      "type": "TextBlock",
      "text": "Lorem ipsum dolor",
      "wrap": true,
      "size": "Default"
    },
    {
      "type": "TextBlock",
      "text": "Lorem ipsum dolor",
      "wrap": true,
      "size": "Large"
    },
    {
      "type": "TextBlock",
      "text": "Lorem ipsum dolor",
      "wrap": true,
      "size": "ExtraLarge"
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
          "type": "TextBlock",
          "text": "Default",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "Accent",
          "wrap": true,
          "color": "Accent"
        },
        {
          "type": "TextBlock",
          "text": "Good",
          "wrap": true,
          "color": "Good"
        },
        {
          "type": "TextBlock",
          "text": "Warning",
          "wrap": true,
          "color": "Warning"
        },
        {
          "type": "TextBlock",
          "text": "Attention",
          "wrap": true,
          "color": "Attention"
        }
      ],
      "separator": true,
      "spacing": "ExtraLarge"
    },
    {
      "type": "TextBlock",
      "text": "Monospace",
      "wrap": true,
      "fontType": "Monospace",
      "size": "Large",
      "separator": true,
      "spacing": "ExtraLarge"
    }
  ]
}
```

## Formatting text

**TextBlock** elements can be formatted in multiple ways. Please refer to the following topics:

-   Markdown
-   Date and time formatting
-   At mentions
-   Citations

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be TextBlock. | 1.0 |
| labelFor | string | The Id of the input the TextBlock should act as the label of. | 1.5 |
| maxLines | number | The maximum number of lines to display. | 1.0 |
| style | string | The style of the text. Valid values: \`default\`, \`columnHeader\`, \`heading\` | 1.5 |
| wrap | boolean | false | Controls if the text should wrap. | 1.0 |
| color | string | The color of the text. Valid values: \`Default\`, \`Dark\`, \`Light\`, \`Accent\`, \`Good\`, \`Warning\`, \`Attention\` | 1.0 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| fontType | string | The type of font to use for rendering. Valid values: \`Default\`, \`Monospace\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
| height | string | "auto" | The height of the element. When set to stretch, the element will use the remaining vertical space in its container. Valid values: \`auto\`, \`stretch\` | 1.1 |
| horizontalAlignment | string | Controls how the element should be horizontally aligned. Valid values: \`Left\`, \`Center\`, \`Right\` | 1.0 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isSortKey | boolean | false | Controls whether the element should be used as a sort key by elements that allow sorting across a collection of elements. | 1.5 |
| isSubtle | boolean | Controls whether the text should be renderer using a subtler variant of the select color. | 1.0 |
| isVisible | boolean | true | Controls the visibility of the element. | 1.2 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the element at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| lang | string | The locale associated with the element. | 1.1 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| size | string | The size of the text. Valid values: \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\` | 1.0 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| text | string | The text to display. A subset of markdown is supported. | 1.0 |
| text.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the text property of the TextBlock at runtime. | 1.5 |
| weight | string | The weight of the text. Valid values: \`Lighter\`, \`Default\`, \`Bolder\` | 1.0 |