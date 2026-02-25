---
title: "Layout.Flow"
source: "https://adaptivecards.microsoft.com/?topic=Layout.Flow"
topic: "Layout.Flow"
---

Layout.Flow

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A layout that spreads elements horizontally and wraps them across multiple rows, as needed.

Use `Layout.Flow` to layout lists of elements such as images without having to worry about the amount of horizontal space available. The width and alignment of elements can be tuned as desired. Each row automatically gets the appropriate height, and spacing between columns and rows is configurable and automatically enforced.

### Examples

**Top-left alignment**

```
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "layouts": [
    {
      "type": "Layout.Flow",
      "maxItemWidth": "130px",
      "horizontalItemsAlignment": "Left"
    }
  ],
  "body": [
    {
      "type": "Image",
      "url": "images/guitar1.jpeg",
      "style": "RoundedCorners",
      "altText": "An electric guitar"
    },
    {
      "type": "Image",
      "url": "images/adaptivecards1.jpeg",
      "style": "RoundedCorners",
      "altText": "A graphic that represents the Adaptive Card framework"
    },
    {
      "type": "Image",
      "url": "images/cup1.jpeg",
      "style": "RoundedCorners",
      "altText": "A cup"
    },
    {
      "type": "Image",
      "url": "images/developer1.jpeg",
      "style": "RoundedCorners",
      "altText": "A developer working on a computer"
    },
    {
      "type": "Image",
      "url": "images/painting1.jpeg",
      "style": "RoundedCorners",
      "altText": "A painting"
    }
  ]
}
```

**Horizontally and vertically centered**

```
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "layouts": [
    {
      "type": "Layout.Flow",
      "maxItemWidth": "80px",
      "horizontalItemsAlignment": "center",
      "verticalItemsAlignment": "center"
    }
  ],
  "body": [
    {
      "type": "Image",
      "url": "images/guitar1.jpeg",
      "style": "RoundedCorners",
      "altText": "An electric guitar"
    },
    {
      "type": "Image",
      "url": "images/adaptivecards1.jpeg",
      "style": "RoundedCorners",
      "altText": "A graphic that represents the Adaptive Card framework"
    },
    {
      "type": "Image",
      "url": "images/painting1.jpeg",
      "style": "RoundedCorners",
      "altText": "A painting"
    },
    {
      "type": "Image",
      "url": "images/cup1.jpeg",
      "style": "RoundedCorners",
      "altText": "A cup"
    }
  ]
}
```

**Always fill the available space on each row**

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "layouts": [
    {
      "type": "Layout.Flow",
      "itemWidth": "150px",
      "itemFit": "Fill",
      "horizontalItemsAlignment": "Left"
    }
  ],
  "body": [
    {
      "type": "Image",
      "url": "images/guitar1.jpeg",
      "style": "RoundedCorners",
      "altText": "An electric guitar"
    },
    {
      "type": "Image",
      "url": "images/adaptivecards1.jpeg",
      "style": "RoundedCorners",
      "altText": "A graphic that represents the Adaptive Card framework"
    },
    {
      "type": "Image",
      "url": "images/painting1.jpeg",
      "style": "RoundedCorners",
      "altText": "A painting"
    },
    {
      "type": "Image",
      "url": "images/guitar2.jpeg",
      "style": "RoundedCorners",
      "altText": "An electric guitar"
    }
  ]
}
```

> Tip
> 
> Don't use the `maxItemWidth` property with `"itemFit": "fill"`. By definition, `maxItemWidth` prevents items from exceeding a certain width, which is incompatible with filling the remaining available space on a row by slightly enlarging each element in that row. Use the `itemWidth` property instead.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Layout.Flow. | 1.5 |
| columnSpacing | string | "Default" | The space between items. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.5 |
| horizontalItemsAlignment | string | "Center" | Controls how the content of the container should be horizontally aligned. Valid values: \`Left\`, \`Center\`, \`Right\` | 1.5 |
| itemFit | string | "Fit" | Controls how item should fit inside the container. Valid values: \`Fit\`, \`Fill\` | 1.5 |
| itemWidth | string | The width, in pixels, of each item, in the <number>px format. Should not be used if maxItemWidth and/or minItemWidth are set. Valid values: \`<number>px\` | 1.5 |
| maxItemWidth | string | The maximum width, in pixels, of each item, in the <number>px format. Should not be used if itemWidth is set. Valid values: \`<number>px\` | 1.5 |
| minItemWidth | string | 0 | The minimum width, in pixels, of each item, in the <number>px format. Should not be used if itemWidth is set. Valid values: \`<number>px\` | 1.5 |
| rowSpacing | string | "Default" | The space between rows of items. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.5 |
| verticalItemsAlignment | string | "Top" | Controls how the content of the container should be vertically aligned. Valid values: \`Top\`, \`Center\`, \`Bottom\` | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| targetWidth | string | Controls for which card width the layout should be used. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.5 |