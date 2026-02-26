---
title: "Layout.AreaGrid"
source: "https://adaptivecards.microsoft.com/?topic=Layout.AreaGrid"
topic: "Layout.AreaGrid"
---

Layout.AreaGrid

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A layout that divides a container into named areas into which elements can be placed.

Use `Layout.AreaGrid` to easily organize elements in a container (be it the AdaptiveCard itself, a Container, a Column or a TableCell) into a grid. `Layout.AreaGrid` is particularly useful for easily designing responsive cards: define multiple `Layout.AreaGrid` layouts on a single container and target them at different card widths to automatically switch from one layout to another at runtime according to the available width. See Container layouts for more details.

To use `Layout.AreaGrid`:

-   Include a `Layout.AreaGrid` object in the `layouts` collection of the target container
-   Optionally define explicit columns for the grid. Columns can be defined in terms of percentage of the available width or in pixels using the `<number>px` format,
-   Define areas in the grid using the `column`, `row`, `columnSpan` and `rowSpan` properties,
-   Assign elements in the container to specific areas by setting their `grid.area` property to match the name of one of the defined areas.

The below example:

-   Explicitly defines one column that will use 20% of the available horizontal space
-   Defines three areas:
    -   The first covers the first column on the first row of the grid
    -   The second covers the the second column (whose width is implicitly the remaining horizontal space) on the first row
    -   The third covers the first two columns on the second row

```
JSON"layouts": [
    {
        "type": "Layout.AreaGrid",
        "columns": [ 20 ],
        "areas": [
            {
                "name": "area1"
            },
            {
                "name": "area2",
                "column": 2
            },
            {
                "name": "area2",
                "row": 2,
                "columnSpan": 2
            }
        ]
    }
]
```

> Tip
> 
> It is not required to explicitly define columns in the `Layout.AreaGrid`. Any implicit column as per the defined areas will use an equal portion of the remaining horizontal space in the grid.

> Important
> 
> -   Defining columns using pixels can lead to your card rendering poorly on narrower surfaces. Make sure to define alternate layouts to ensure your card always looks great. See Responsive Layout and Container Layouts for more details.
> -   If you assign multiple elements to the same grid area via their `grid.area` property, they will effectively be rendered on top of each other. This can be useful if used in conjunction with the `isVisible` or `targetWidth` properties, as well as Action.ToggleVisibility. In all other cases, **it should be avoided**.

**Example**

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "layouts": [
    {
      "type": "Layout.AreaGrid",
      "targetWidth": "atLeast:Standard",
      "columns": [
        20,
        40
      ],
      "areas": [
        {
          "name": "area1",
          "columnSpan": 2
        },
        {
          "name": "area2",
          "column": 3
        },
        {
          "name": "area3",
          "row": 2
        },
        {
          "name": "area4",
          "column": 2,
          "row": 2
        },
        {
          "name": "area5",
          "column": 3,
          "row": 2
        }
      ]
    },
    {
      "type": "Layout.AreaGrid",
      "targetWidth": "atLeast:narrow",
      "columns": [
        50
      ],
      "areas": [
        {
          "name": "area1",
          "columnSpan": 2
        },
        {
          "name": "area2",
          "row": 2
        },
        {
          "name": "area3",
          "row": 2,
          "column": 2
        },
        {
          "name": "area4",
          "row": 3
        },
        {
          "name": "area5",
          "row": 3,
          "column": 2
        }
      ]
    }
  ],
  "body": [
    {
      "type": "Container",
      "grid.area": "area1",
      "style": "emphasis",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "TextBlock",
          "text": "Area 1",
          "wrap": true
        },
        {
          "type": "TextBlock",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "wrap": true
        }
      ]
    },
    {
      "type": "Container",
      "grid.area": "area2",
      "style": "good",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "TextBlock",
          "text": "Area 2",
          "wrap": true
        }
      ],
      "height": "stretch"
    },
    {
      "type": "Container",
      "grid.area": "area3",
      "style": "accent",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "TextBlock",
          "text": "Area 3",
          "wrap": true
        }
      ]
    },
    {
      "type": "Container",
      "grid.area": "area4",
      "style": "attention",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "TextBlock",
          "text": "Area 4",
          "wrap": true
        }
      ]
    },
    {
      "type": "Container",
      "grid.area": "area5",
      "style": "warning",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "TextBlock",
          "text": "Area 5",
          "wrap": true
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
| type | string | Must be Layout.AreaGrid. | 1.5 |
| areas | Array ofobject | The areas in the grid layout. Valid values: \`GridArea\` | 1.5 |
| columns | Array ofnumberstring | The columns in the grid layout, defined as a percentage of the available width or in pixels using the <number>px format. | 1.5 |
| columnSpacing | string | "Default" | The space between columns. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.5 |
| rowSpacing | string | "Default" | The space between rows. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| targetWidth | string | Controls for which card width the layout should be used. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.5 |