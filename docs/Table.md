---
title: "Table"
source: "https://adaptivecards.microsoft.com/?topic=Table"
topic: "Table"
---

Table

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Use tables to display data in a tabular way, with rows, columns and cells.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Table",
      "roundedCorners": true,
      "firstRowAsHeaders": true,
      "columns": [
        {
          "width": 1
        },
        {
          "width": 1
        },
        {
          "width": 3
        }
      ],
      "rows": [
        {
          "type": "TableRow",
          "cells": [
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Name",
                  "wrap": true,
                  "weight": "Bolder"
                }
              ]
            },
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Type",
                  "wrap": true,
                  "weight": "Bolder"
                }
              ]
            },
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Description",
                  "wrap": true,
                  "weight": "Bolder"
                }
              ]
            }
          ]
        },
        {
          "type": "TableRow",
          "cells": [
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "columns",
                  "wrap": true
                }
              ]
            },
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "ColumnDefinition[]",
                  "wrap": true
                }
              ]
            },
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Defines the table's columns (number of columns, and column sizes).",
                  "wrap": true
                }
              ]
            }
          ]
        },
        {
          "type": "TableRow",
          "cells": [
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "rows",
                  "wrap": true
                }
              ]
            },
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "TableRow[]",
                  "wrap": true
                }
              ]
            },
            {
              "type": "TableCell",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Defines the rows of the Table, each being a collection of cells. Rows are not required, which allows empty Tables to be generated via templating without breaking the rendering of the whole card.",
                  "wrap": true
                }
              ]
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
| type | string | Must be Table. | 1.0 |
| columns | Array ofobject | The columns in the table. Valid values: \`ColumnDefinition\` | 1.5 |
| firstRowAsHeaders | boolean | true | Controls whether the first row of the table should be treated as a header. | 1.5 |
| gridStyle | string | The style of the grid lines between cells. Valid values: \`default\`, \`emphasis\`, \`accent\`, \`good\`, \`attention\`, \`warning\` | 1.5 |
| horizontalCellContentAlignment | string | Controls how the content of every cell in the table should be horizontally aligned by default. Valid values: \`Left\`, \`Center\`, \`Right\` | 1.5 |
| minWidth | string | The minimum width of the table in pixels. auto will automatically adjust the table's minimum width according to its content and using the <number>px format will give the table an explicit minimum width in pixels. A scrollbar will be displayed if the available width is less than the specified minimum width. Valid values: \`auto\`, \`<number>px\` | 1.5 |
| rows | Array ofobject | The rows of the table. Valid values: \`TableRow\` | 1.5 |
| showGridLines | boolean | true | Controls if grid lines should be displayed. | 1.5 |
| verticalCellContentAlignment | string | Controls how the content of every cell in the table should be vertically aligned by default. Valid values: \`Top\`, \`Center\`, \`Bottom\` | 1.5 |
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
| roundedCorners | boolean | false | Controls if the container should have rounded corners. | 1.5 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| showBorder | boolean | false | Controls if a border should be displayed around the container. | 1.5 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| style | string | The style of the container. Container styles control the colors of the background, border and text inside the container, in such a way that contrast requirements are always met. Valid values: \`default\`, \`emphasis\`, \`accent\`, \`good\`, \`attention\`, \`warning\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |