---
title: "CompoundButton"
source: "https://adaptivecards.microsoft.com/?topic=CompoundButton"
topic: "CompoundButton"
---

CompoundButton

Works in

![Teams](images/ic_fluent_teams_24_color.svg)

A special type of button with an icon, title and description.

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "layouts": [
    {
      "type": "Layout.Flow",
      "itemWidth": "200px",
      "itemFit": "Fill",
      "minItemWidth": "0px"
    }
  ],
  "body": [
    {
      "type": "CompoundButton",
      "title": "Summarize",
      "height": "stretch",
      "icon": {
        "name": "TextBulletList"
      },
      "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt..."
    },
    {
      "type": "CompoundButton",
      "title": "Insights",
      "description": "Who's reviewed my latest document?",
      "height": "stretch",
      "icon": {
        "name": "Lightbulb"
      }
    },
    {
      "type": "CompoundButton",
      "title": "Get key info",
      "description": "List key points from my latest document",
      "badge": "New",
      "height": "stretch"
    },
    {
      "type": "CompoundButton",
      "title": "Share meeting notes",
      "description": "Draft an email with notes and action items from my latest meeting",
      "height": "stretch",
      "icon": {
        "name": "Calendar"
      }
    }
  ]
}
```

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be CompoundButton. | 1.0 |
| badge | string | The badge to show on the button. | 1.5 |
| description | string | The description text of the button. | 1.5 |
| icon | object | The icon to show on the button. Valid values: \`IconInfo\` | 1.5 |
| selectAction | object | An Action that will be invoked when the button is tapped or clicked. Action.ShowCard is not supported. Valid values: \`Action.Execute\`, \`Action.InsertImage\`, \`Action.OpenUrl\`, \`Action.OpenUrlDialog\`, \`Action.Popover\`, \`Action.ResetInputs\`, \`Action.RunCommands\`, \`Action.Submit\`, \`Action.ToggleVisibility\` | 1.5 |
| title | string | The title of the button. | 1.5 |
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