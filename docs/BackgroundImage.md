---
title: "Background images"
source: "https://adaptivecards.microsoft.com/?topic=BackgroundImage"
topic: "BackgroundImage"
---

Background images

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Background images in containers offer flexible sizing, positioning and styling options

Container elements such as Container or Column may have a background image defined via the backgroundImage property. Background images offer a lot of flexibility in terms of sizing and positioning. Combined with the ability to define the exact height of a container by setting both its minHeight and maxHeight properties, using a background image on an empty container sometimes is preferable to using an Image element.

#### Example

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "128px",
          "backgroundImage": {
            "url": "images/painting3.jpeg",
            "horizontalAlignment": "Center",
            "verticalAlignment": "Center"
          },
          "minHeight": "128px",
          "roundedCorners": true
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "wrap": true
            }
          ],
          "verticalContentAlignment": "Center"
        }
      ]
    }
  ]
}
```

> Important
> 
> -   **Background images are for presentation only**. They are completely ignored by assistive technology such as screen readers. If it is important for you that an image be surfaced by a screen reader, use an Image element instead.
> -   Adaptive Cards **don't currently support theme-specific images**. This feature is coming soon with the themedUrls property.

### Fill modes and alignment options

The fillMode property controls how the image should fill its container. Allowed values are:

| Value | Effect |
| --- | --- |
| `cover` | The image is stretched as appropriate to cover the whole container while preserving its aspect ratio. The image may be clipped its aspect ration and that of its container differ. This is the default mode. |
| `repeatHorizontally` | The image is displayed at its original size and aspect ratio and is repeated horizontally to cover the container’s width. |
| `repeatVertically` | The image is displayed at its original size and aspect ratio and is repeated vertically to cover the container’s height. |
| `repeat` | The image is displayed at its original size and aspect ratio and is repeated both horizontally and then vertically to cover the entire container. |

Fill modes, combined with horizontalAlignment and verticalAlignment properties, allow precise positioning and sizing of background images.

**Try it!**

```
fillModeCoverhorizontalAlignmentCenterverticalAlignmentCenterThis example uses this landscape orientated image:Change the values of fillMode, horizontalAlignment and verticalAlignment on the left to see their effect on the background image below!
```

```
fillModeCoverhorizontalAlignmentCenterverticalAlignmentCenterThis example uses this portrait orientated image:Change the values of fillMode, horizontalAlignment and verticalAlignment on the left to see their effect on the background image below!
```

A container's size will vary based on the device and screen size. Ensure fill mode and horizontal/vertical alignment of background images are set so the image always looks great. For example, set both `horizontalAlignment` and `verticalAlignment` to `center` to display the most important part of the image (usually its center) in the container's center.

### Maintaining text visibility on backgrounds

When adding TextBlock elements to a container with a background image, ensure the text remains visible regardless of the color theme used by the host application. If your background image is light, set the TextBlock's color property to `dark`. If the image is dark, set it to `light`. The `light` color is always light regardless of the host application's theme, while the `dark` color is always dark. This ensures readability in all circumstances.

#### Examples

In the Adaptive Card below, the **"MAY 31"** text on the top dark background image uses the `light` font color:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-StarterCardsSetThree/samples/simple-event/assets/eventHero.png"
      },
      "minHeight": "200px",
      "verticalContentAlignment": "Bottom",
      "items": [
        {
          "type": "TextBlock",
          "text": "MAY",
          "wrap": true,
          "color": "Light",
          "size": "Large"
        },
        {
          "type": "TextBlock",
          "text": "31",
          "wrap": true,
          "color": "Light",
          "size": "ExtraLarge",
          "spacing": "None",
          "weight": "Bolder"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "AI",
      "wrap": true,
      "size": "Small",
      "weight": "Bolder",
      "isSubtle": true
    },
    {
      "type": "TextBlock",
      "text": "AI Reality Check: Accessibility and Personalization ",
      "wrap": true,
      "weight": "Bolder",
      "spacing": "None"
    },
    {
      "type": "TextBlock",
      "text": "Fri, Aug 23, 12:00 PM",
      "wrap": true,
      "size": "Small",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "Online (Teams)",
      "wrap": true,
      "size": "Small",
      "isSubtle": true,
      "spacing": "None"
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Register",
          "style": "positive"
        }
      ]
    }
  ]
}
```

In the Adaptive Card below, the **"DESIGN TALK SERIES"** text on the top light background image uses the `dark` font color:

```
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "backgroundImage": {
    "horizontalAlignment": "Center"
  },
  "body": [
    {
      "type": "Container",
      "backgroundImage": {
        "horizontalAlignment": "Left",
        "verticalAlignment": "Center",
        "url": "images/ai-design-thinking.png"
      },
      "bleed": true,
      "minHeight": "280px",
      "verticalContentAlignment": "Bottom",
      "items": [
        {
          "type": "TextBlock",
          "wrap": true,
          "size": "Medium",
          "weight": "Bolder",
          "color": "Dark",
          "text": "DESIGN TALK SERIES"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "AI-DESIGN THINKING",
      "wrap": true,
      "horizontalAlignment": "Center",
      "size": "Small",
      "weight": "Bolder",
      "color": "Good",
      "spacing": "Medium"
    },
    {
      "type": "TextBlock",
      "text": "Behind the design: Meet Pointe",
      "wrap": true,
      "horizontalAlignment": "Center",
      "size": "ExtraLarge",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "When the system is the product: on crafting the next generation of home based experiences.",
      "wrap": true,
      "horizontalAlignment": "Center",
      "size": "Large",
      "color": "Default",
      "isSubtle": true
    },
    {
      "type": "Icon",
      "horizontalAlignment": "Center",
      "name": "ArrowCircleRight",
      "size": "Medium",
      "color": "Good",
      "style": "Filled"
    }
  ]
}
```

In the Adaptive Card below, the card features a background image with an overlaid container that also uses a solid background color (a white PNG image in this example). Text is then added on top of the container. This approach is useful when neither the `light` nor `dark` font colors can ensure readability against the background image.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "backgroundImage": {
        "url": "images/working-on-hamac.png"
      },
      "minHeight": "200px",
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column"
            },
            {
              "type": "Column",
              "width": "auto",
              "style": "accent",
              "roundedCorners": true,
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Take a break",
                  "wrap": true,
                  "size": "ExtraLarge",
                  "color": "Dark",
                  "weight": "Bolder"
                }
              ],
              "backgroundImage": {
                "url": "images/white-6x6.png"
              }
            }
          ]
        }
      ],
      "roundedCorners": true
    },
    {
      "type": "Input.ChoiceSet",
      "choices": [
        {
          "title": "Vacation",
          "value": "value1"
        },
        {
          "title": "Family leave",
          "value": "value2"
        },
        {
          "title": "Medical leave"
        },
        {
          "title": "Short term disability"
        }
      ],
      "placeholder": "Enter a reason",
      "label": "Reason for leave",
      "isRequired": true,
      "value": "Vacation"
    },
    {
      "type": "Input.Date",
      "label": "Date",
      "isRequired": true
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Submit",
          "style": "positive"
        }
      ]
    }
  ]
}
```

### Relate resources

-   **Build responside layouts**

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| fillMode | string | "Cover" | Controls how the image should fill the area. Valid values: \`Cover\`, \`RepeatHorizontally\`, \`RepeatVertically\`, \`Repeat\` | 1.2 |
| horizontalAlignment | string | "Left" | Controls how the image should be aligned if it must be cropped or if using repeat fill mode. Valid values: \`Left\`, \`Center\`, \`Right\` | 1.2 |
| themedUrls | Array ofobject | A set of theme-specific image URLs. Valid values: \`ThemedUrl\` | 1.5 |
| url | string | The URL (or Base64-encoded Data URI) of the image. Acceptable formats are PNG, JPEG, GIF and SVG. | 1.0 |
| verticalAlignment | string | "Top" | Controls how the image should be aligned if it must be cropped or if using repeat fill mode. Valid values: \`Top\`, \`Center\`, \`Bottom\` | 1.2 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |