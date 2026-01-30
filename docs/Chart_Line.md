---
title: "Chart.Line"
source: "https://adaptivecards.microsoft.com/?topic=Chart.Line"
topic: "Chart.Line"
---

Chart.Line

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

A line chart.

### Time series line chart

If all x values of the x chart are expressed as a number, or if all x values are expressed as a date string in the `YYYY-MM-DD` format, the chart is rendered as a time series chart, i.e. x axis values will span across the minimum x value to maximum x value range and data points on the lines may fall in between x axis values,

> Tip
> 
> In time series charts, the x axis value range is automatically determined, and x values are automatically formatted to optimize legibility.

### Categorical line chart

If x values are represented as a mix of numbers and strings or if at least one x value is a string but not in the `YYYY-MM-DD` format, the chart will be rendered as a categorical chart, i.e. x axis values will be displayed as categories and all data points on the lines will snap to the appropriate category on the x axis.

### Y range determination

If neither the `yMin` nor the `yMax` properties are specified, the y range will be automatically determined in the following way:

-   If the chart only has positive values, the minimum y range will be 0 and the maximum a rounded number above the maximum y value
-   If the chart only has negative values, the maximum y range will be 0 and the minimum a rounded number below the minimum y value
-   If the chart has both positive and negative values:
    -   A horizontal line for y = 0 will always be displayed
    -   As many evenly spaced horizontal lines as necessary will be displayed above and below the 0 line

If the `yMin` and `yMax` properties are specified, the chart will use these values for the y range regardless of the actual data values. That means that y values outside of that range will not be visible on the chart.

## Examples

Time series line chart with x axis values expressed as dates:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Chart.Line",
      "title": "Sample",
      "xAxisTitle": "Date",
      "yAxisTitle": "Sales",
      "colorSet": "categorical",
      "data": [
        {
          "legend": "Outlook",
          "values": [
            {
              "x": "2023-05-01",
              "y": 99
            },
            {
              "x": "2023-05-02",
              "y": 6
            },
            {
              "x": "2023-05-03",
              "y": 63
            },
            {
              "x": "2023-05-04",
              "y": 64
            },
            {
              "x": "2023-05-05",
              "y": 63
            },
            {
              "x": "2023-05-06",
              "y": 78
            }
          ]
        },
        {
          "legend": "Teams",
          "values": [
            {
              "x": "2023-05-01",
              "y": 12
            },
            {
              "x": "2023-05-02",
              "y": 82
            },
            {
              "x": "2023-05-03",
              "y": 12
            },
            {
              "x": "2023-05-04",
              "y": 33
            },
            {
              "x": "2023-05-05",
              "y": 1
            },
            {
              "x": "2023-05-06",
              "y": 80
            }
          ]
        },
        {
          "legend": "Copilot",
          "values": [
            {
              "x": "2023-05-01",
              "y": 96
            },
            {
              "x": "2023-05-02",
              "y": 37
            },
            {
              "x": "2023-05-03",
              "y": 27
            },
            {
              "x": "2023-05-04",
              "y": 5
            },
            {
              "x": "2023-05-05",
              "y": 45
            },
            {
              "x": "2023-05-06",
              "y": 59
            }
          ]
        }
      ]
    }
  ]
}
```

Time series line chart with x axis values expressed as numbers:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Chart.Line",
      "title": "Sample",
      "xAxisTitle": "Days",
      "yAxisTitle": "Sales",
      "data": [
        {
          "legend": "Outlook",
          "values": [
            {
              "x": 1,
              "y": 99
            },
            {
              "x": 8,
              "y": 63
            },
            {
              "x": 10,
              "y": 64
            },
            {
              "x": 15,
              "y": 63
            },
            {
              "x": 21,
              "y": 78
            }
          ]
        },
        {
          "legend": "Teams",
          "values": [
            {
              "x": 1,
              "y": 12
            },
            {
              "x": 6,
              "y": 12
            },
            {
              "x": 12,
              "y": 33
            },
            {
              "x": 15,
              "y": 1
            },
            {
              "x": 18,
              "y": 80
            }
          ]
        },
        {
          "legend": "Copilot",
          "values": [
            {
              "x": 4,
              "y": 96
            },
            {
              "x": 7,
              "y": 27
            },
            {
              "x": 11,
              "y": 5
            },
            {
              "x": 16,
              "y": 45
            },
            {
              "x": 20,
              "y": 59
            }
          ]
        }
      ]
    }
  ]
}
```

Categorical line chart:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Chart.Line",
      "title": "Sample",
      "xAxisTitle": "Days",
      "yAxisTitle": "Sales",
      "colorSet": "diverging",
      "data": [
        {
          "legend": "Outlook",
          "values": [
            {
              "x": "Day 1",
              "y": 99
            },
            {
              "x": "Day 2",
              "y": 63
            },
            {
              "x": "Day 3",
              "y": 64
            },
            {
              "x": "Day 4",
              "y": 63
            },
            {
              "x": "Day 5",
              "y": 78
            }
          ]
        },
        {
          "legend": "Teams",
          "values": [
            {
              "x": "Day 1",
              "y": 12
            },
            {
              "x": "Day 2",
              "y": 12
            },
            {
              "x": "Day 3",
              "y": 33
            },
            {
              "x": "Day 4",
              "y": 1
            },
            {
              "x": "Day 5",
              "y": 80
            }
          ]
        },
        {
          "legend": "Copilot",
          "values": [
            {
              "x": "Day 1",
              "y": 96
            },
            {
              "x": "Day 2",
              "y": 27
            },
            {
              "x": "Day 3",
              "y": 5
            },
            {
              "x": "Day 4",
              "y": 45
            },
            {
              "x": "Day 5",
              "y": 59
            }
          ]
        }
      ]
    }
  ]
}
```

Explicit y range:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Chart.Line",
      "title": "Sample",
      "xAxisTitle": "Date",
      "yAxisTitle": "Sales",
      "colorSet": "categorical",
      "yMin": 20,
      "yMax": 130,
      "data": [
        {
          "legend": "Outlook",
          "values": [
            {
              "x": "2023-05-01",
              "y": 99
            },
            {
              "x": "2023-05-02",
              "y": 63
            },
            {
              "x": "2023-05-03",
              "y": 112
            },
            {
              "x": "2023-05-04",
              "y": 32
            },
            {
              "x": "2023-05-05",
              "y": 75
            },
            {
              "x": "2023-05-06",
              "y": 44
            }
          ]
        },
        {
          "legend": "Teams",
          "values": [
            {
              "x": "2023-05-01",
              "y": 48
            },
            {
              "x": "2023-05-02",
              "y": 82
            },
            {
              "x": "2023-05-03",
              "y": 39
            },
            {
              "x": "2023-05-04",
              "y": 101
            },
            {
              "x": "2023-05-05",
              "y": 43
            },
            {
              "x": "2023-05-06",
              "y": 80
            }
          ]
        },
        {
          "legend": "Copilot",
          "values": [
            {
              "x": "2023-05-01",
              "y": 96
            },
            {
              "x": "2023-05-02",
              "y": 123
            },
            {
              "x": "2023-05-03",
              "y": 27
            },
            {
              "x": "2023-05-04",
              "y": 54
            },
            {
              "x": "2023-05-05",
              "y": 45
            },
            {
              "x": "2023-05-06",
              "y": 62
            }
          ]
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
| type | string | Must be Chart.Line. | 1.0 |
| color | string | The color to use for all data points. See Chart colors reference. Valid values: \`good\`, \`warning\`, \`attention\`, \`neutral\`, \`categoricalRed\`, \`categoricalPurple\`, \`categoricalLavender\`, \`categoricalBlue\`, \`categoricalLightBlue\`, \`categoricalTeal\`, \`categoricalGreen\`, \`categoricalLime\`, \`categoricalMarigold\`, \`sequential1\`, \`sequential2\`, \`sequential3\`, \`sequential4\`, \`sequential5\`, \`sequential6\`, \`sequential7\`, \`sequential8\`, \`divergingBlue\`, \`divergingLightBlue\`, \`divergingCyan\`, \`divergingTeal\`, \`divergingYellow\`, \`divergingPeach\`, \`divergingLightRed\`, \`divergingRed\`, \`divergingMaroon\`, \`divergingGray\`, \`sequentialRed1\`, \`sequentialRed2\`, \`sequentialRed3\`, \`sequentialRed4\`, \`sequentialRed5\`, \`sequentialRed6\`, \`sequentialRed7\`, \`sequentialRed8\`, \`sequentialGreen1\`, \`sequentialGreen2\`, \`sequentialGreen3\`, \`sequentialGreen4\`, \`sequentialGreen5\`, \`sequentialGreen6\`, \`sequentialGreen7\`, \`sequentialGreen8\`, \`sequentialYellow1\`, \`sequentialYellow2\`, \`sequentialYellow3\`, \`sequentialYellow4\`, \`sequentialYellow5\`, \`sequentialYellow6\`, \`sequentialYellow7\`, \`sequentialYellow8\` | 1.5 |
| colorSet | string | The name of the set of colors to use to render the chart. See Chart colors reference. Valid values: \`categorical\`, \`sequential\`, \`sequentialred\`, \`sequentialgreen\`, \`sequentialyellow\`, \`diverging\` | 1.5 |
| data | Array ofobject | The data point series in the line chart. Valid values: \`LineChartData\` | 1.5 |
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
| showTitle | boolean | false | Controls whether the chart's title should be displayed. Defaults to false. | 1.5 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| title | string | The title of the chart. | 1.5 |
| xAxisTitle | string | The title of the x axis. | 1.5 |
| yAxisTitle | string | The title of the y axis. | 1.5 |
| yMax | number | The minimum y range. | 1.5 |
| yMin | number | The maximum y range. | 1.5 |