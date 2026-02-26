---
title: "Input.Rating"
source: "https://adaptivecards.microsoft.com/?topic=Input.Rating"
topic: "Input.Rating"
---

Input.Rating

Works in

![Teams](images/ic_fluent_teams_24_color.svg)

An input to allow the user to rate something using stars.

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Input.Rating",
      "id": "rating1",
      "label": "Pick a rating",
      "size": "medium",
      "isRequired": true,
      "errorMessage": "Please pick a rating"
    },
    {
      "type": "Input.Rating",
      "id": "rating2",
      "label": "Pick a rating",
      "allowHalfSteps": true,
      "size": "large",
      "isRequired": true,
      "errorMessage": "Please pick a rating",
      "color": "marigold",
      "value": 3
    }
  ]
}
```

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Input.Rating. | 1.0 |
| allowHalfSteps | boolean | false | Controls if the user can select half stars. | 1.5 |
| color | string | "Neutral" | The color of the stars. Valid values: \`Neutral\`, \`Marigold\` | 1.5 |
| max | number | 5 | The number of stars to display. | 1.5 |
| size | string | "Large" | The size of the stars. Valid values: \`Medium\`, \`Large\` | 1.5 |
| value | number | The default value of the input. | 1.5 |
| errorMessage | string | The error message to display when the input fails validation. See Input validation for more details. | 1.3 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
| height | string | "auto" | The height of the element. When set to stretch, the element will use the remaining vertical space in its container. Valid values: \`auto\`, \`stretch\` | 1.1 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isRequired | boolean | false | Controls whether the input is required. See Input validation for more details. | 1.3 |
| isSortKey | boolean | false | Controls whether the element should be used as a sort key by elements that allow sorting across a collection of elements. | 1.5 |
| isVisible | boolean | true | Controls the visibility of the element. | 1.2 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the element at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| label | string | The label of the input. A label should always be provided to ensure the best user experience especially for users of assistive technology. | 1.3 |
| lang | string | The locale associated with the element. | 1.1 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| valueChangedAction | object | An Action.ResetInputs action that will be executed when the value of the input changes. Valid values: \`Action.OpenUrlDialog\`, \`Action.Popover\`, \`Action.ResetInputs\`, \`Action.RunCommands\` | 1.5 |