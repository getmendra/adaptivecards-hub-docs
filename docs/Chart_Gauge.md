---
title: "Chart.Gauge"
source: "https://adaptivecards.microsoft.com/?topic=Chart.Gauge"
topic: "Chart.Gauge"
---

Chart.Gauge

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

A gauge chart.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Chart.Gauge",
      "title": "Basic gauge",
      "showTitle": true,
      "value": 50,
      "segments": [
        {
          "legend": "Low risk",
          "size": 33,
          "color": "good"
        },
        {
          "legend": "Medium risk",
          "size": 34,
          "color": "warning"
        },
        {
          "legend": "High risk",
          "size": 33,
          "color": "attention"
        }
      ]
    },
    {
      "type": "Chart.Gauge",
      "spacing": "large",
      "separator": true,
      "title": "Single value",
      "showTitle": true,
      "value": 35,
      "valueFormat": "fraction",
      "segments": [
        {
          "legend": "Used",
          "size": 35
        },
        {
          "legend": "Unused",
          "size": 65,
          "color": "neutral"
        }
      ]
    },
    {
      "type": "Chart.Gauge",
      "spacing": "large",
      "separator": true,
      "title": "Minimal",
      "showTitle": false,
      "value": 35,
      "valueFormat": "fraction",
      "showLegend": false,
      "showMinMax": false,
      "showNeedle": false,
      "showOutlines": false,
      "maxWidth": "80px",
      "segments": [
        {
          "legend": "Used",
          "size": 35
        },
        {
          "legend": "Unused",
          "size": 65,
          "color": "neutral"
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
| type | string | Must be Chart.Gauge. | 1.0 |
| colorSet | string | The name of the set of colors to use to render the chart. See Chart colors reference. Valid values: \`categorical\`, \`sequential\`, \`sequentialred\`, \`sequentialgreen\`, \`sequentialyellow\`, \`diverging\` | 1.5 |
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
| max | number | The maximum value of the gauge. | 1.5 |
| maxWidth | string | The maximum width, in pixels, of the chart, in the <number>px format. Valid values: \`<number>px\` | 1.5 |
| min | number | 0 | The minimum value of the gauge. | 1.5 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| segments | Array ofobject | The segments to display in the gauge. Valid values: \`GaugeChartLegend\` | 1.5 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| showLegend | boolean | true | Controls whether the chart's legend should be displayed. | 1.5 |
| showMinMax | boolean | true | Controls whether the min/max values should be displayed. | 1.5 |
| showNeedle | boolean | true | Controls whether the gauge's needle is displayed. Default is true. | 1.5 |
| showOutlines | boolean | true | Controls whether the outlines of the gauge segments are displayed. | 1.5 |
| showTitle | boolean | false | Controls whether the chart's title should be displayed. Defaults to false. | 1.5 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| subLabel | string | The sub-label of the gauge. | 1.5 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| title | string | The title of the chart. | 1.5 |
| value | number | 0 | The value of the gauge. | 1.5 |
| valueFormat | string | "Percentage" | The format used to display the gauge's value. Valid values: \`Percentage\`, \`Fraction\` | 1.5 |