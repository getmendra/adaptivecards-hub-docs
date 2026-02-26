---
title: "Chart.Pie"
source: "https://adaptivecards.microsoft.com/?topic=Chart.Pie"
topic: "Chart.Pie"
---

Chart.Pie

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

A pie chart.

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
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
    }
  ]
}
```

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Chart.Pie. | 1.0 |
| colorSet | string | The name of the set of colors to use to render the chart. See Chart colors reference. Valid values: \`categorical\`, \`sequential\`, \`sequentialred\`, \`sequentialgreen\`, \`sequentialyellow\`, \`diverging\` | 1.5 |
| data | Array ofobject | The data to display in the chart. Valid values: \`DonutChartData\` | 1.5 |
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
| maxWidth | string | The maximum width, in pixels, of the chart, in the <number>px format. Valid values: \`<number>px\` | 1.5 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| showLegend | boolean | true | Controls whether the chart's legend should be displayed. | 1.5 |
| showOutlines | boolean | true | Controls whether the outlines of the donut segments are displayed. | 1.5 |
| showTitle | boolean | false | Controls whether the chart's title should be displayed. Defaults to false. | 1.5 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| thickness | string | Controls the thickness of the donut segments. Default is Thick. Valid values: \`Thin\`, \`Thick\` | 1.5 |
| title | string | The title of the chart. | 1.5 |
| value | string | The value that should be displayed in the center of a Donut chart. value is ignored for Pie charts. | 1.5 |
| valueColor | string | Controls the color of the value displayed in the center of a Donut chart. Valid values: \`good\`, \`warning\`, \`attention\`, \`neutral\`, \`categoricalRed\`, \`categoricalPurple\`, \`categoricalLavender\`, \`categoricalBlue\`, \`categoricalLightBlue\`, \`categoricalTeal\`, \`categoricalGreen\`, \`categoricalLime\`, \`categoricalMarigold\`, \`sequential1\`, \`sequential2\`, \`sequential3\`, \`sequential4\`, \`sequential5\`, \`sequential6\`, \`sequential7\`, \`sequential8\`, \`divergingBlue\`, \`divergingLightBlue\`, \`divergingCyan\`, \`divergingTeal\`, \`divergingYellow\`, \`divergingPeach\`, \`divergingLightRed\`, \`divergingRed\`, \`divergingMaroon\`, \`divergingGray\`, \`sequentialRed1\`, \`sequentialRed2\`, \`sequentialRed3\`, \`sequentialRed4\`, \`sequentialRed5\`, \`sequentialRed6\`, \`sequentialRed7\`, \`sequentialRed8\`, \`sequentialGreen1\`, \`sequentialGreen2\`, \`sequentialGreen3\`, \`sequentialGreen4\`, \`sequentialGreen5\`, \`sequentialGreen6\`, \`sequentialGreen7\`, \`sequentialGreen8\`, \`sequentialYellow1\`, \`sequentialYellow2\`, \`sequentialYellow3\`, \`sequentialYellow4\`, \`sequentialYellow5\`, \`sequentialYellow6\`, \`sequentialYellow7\`, \`sequentialYellow8\` | 1.5 |