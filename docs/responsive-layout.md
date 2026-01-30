---
title: "Build responsive layouts"
source: "https://adaptivecards.microsoft.com/?topic=responsive-layout"
topic: "responsive-layout"
---

Build responsive layouts

## Responsive layout

The width of an Adaptive Card is imposed by the host application that displays it, and that width can change depending on the context in which the card is being displayed. The Adaptive Card framework supports four width groups:

| Group | Where applicable |
| --- | --- |
| **Wide** | Mobile device or tablet in landscape orientation, as well as in chats and channels when the full width option is used. |
| **Standard** | Chats on desktop, representing the typical user experience. |
| **Narrow** | Mobile devices in portrait orientation. |
| **Very narrow** | Compact side panels such as the meeting chat pane in Teams, where space is constrained. |

The following graphic illustrates the width groups and their respective physical size brackets in Teams:

![Teams width groups](images/responsive-sizes-light.png)

While Adaptive Cards automatically adapt their look and feel to the host application's style, special attention need to be paid to ensure their layout is optimal in each of those width groups. This is referred to as **making a card responsive**, which is essential to ensure it will look great across various surfaces such as Teams chats, channels, and meeting chats.

### Using Container layouts

Container layouts make it easy to dynamically change the layout of a container according to the card's width.

### Using the `targetWidth` property

The `targetWidth` property can be set on any element to show it or hide it depending on the card's width. By setting different target widths on different elements, you can create different layouts that will look great across all card widths. The following table lists the available `targetWidth` values:

| Value | Description |
| --- | --- |
| `veryNarrow` | The element is visible when the Adaptive Card's width is very narrow such as in a meeting chat. |
| `narrow` | The element is visible when the Adaptive Card's width is narrow such as on a mobile phone in portrait mode. |
| `standard` | The element is visible when the Adaptive Card's width is standard such as on a mobile phone in landscape mode, on a tablet in portrait mode, or in a chat on desktop. |
| `wide` | The element is visible when the Adaptive Card's width is wide such as on a tablet in landscape mode, in a channel or chat on desktop when you set your card to be full width. |

You can also set the `targetWidth` property to make an element visible for a range of card widths using the `atLeast` and `atMost` prefixes. For example, you can make an element visible only when the card width is 'standard or above' or only when the card width is 'narrow or below'. The following table provides guidance on how to make an element visible for a range of card widths:

| Example | Description |
| --- | --- |
| `atLeast:standard` | The element is visible only when the Adaptive Card's width is at least standard, which means standard or wide. |
| `atMost:narrow` | The element is visible only when the Adaptive Card's width is at most narrow, which means very narrow or narrow. |

> Tip
> 
> -   You don't have to set `targetWidth` on all elements. If you don't set `targetWidth` for an element, the element is always visible irrespective of the card's width.
> -   Using `targetWidth` in conjunction with Container layouts offers an even greater level of flexibility.

**Example**

Here's an Adaptive Card designed without using `targetWidth`:

```
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "verticalContentAlignment": "center",
          "items": [
            {
              "type": "Image",
              "style": "Person",
              "url": "https://aka.ms/AAp9xo4",
              "size": "Small",
              "altText": "Portrait of David Claux"
            }
          ],
          "width": "auto"
        },
        {
          "type": "Column",
          "spacing": "medium",
          "verticalContentAlignment": "center",
          "items": [
            {
              "type": "TextBlock",
              "weight": "Bolder",
              "text": "David Claux",
              "wrap": true
            }
          ],
          "width": "auto"
        },
        {
          "type": "Column",
          "spacing": "medium",
          "verticalContentAlignment": "center",
          "items": [
            {
              "type": "TextBlock",
              "text": "Principal Platform Architect at Microsoft",
              "isSubtle": true,
              "wrap": true
            }
          ],
          "width": "stretch"
        }
      ]
    }
  ],
  "version": "1.5"
}
```

As you can see:

-   When the card's width is **standard** or **wide**, it looks good.
-   When the card's width is **narrow**, the role is squished.
-   When the card's width is **very narrow**, the name and role are significantly squished.

Now here's the same card updated to be responsive using `targetWidth`:

```
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "verticalContentAlignment": "center",
          "targetWidth": "atLeast:narrow",
          "items": [
            {
              "type": "Image",
              "style": "Person",
              "url": "https://aka.ms/AAp9xo4",
              "size": "Small",
              "altText": "Portrait of David Claux"
            }
          ],
          "width": "auto"
        },
        {
          "type": "Column",
          "spacing": "medium",
          "verticalContentAlignment": "center",
          "items": [
            {
              "type": "TextBlock",
              "weight": "Bolder",
              "text": "David Claux",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "targetWidth": "atMost:narrow",
              "spacing": "None",
              "text": "Principal Platform Architect at Microsoft",
              "isSubtle": true,
              "wrap": true
            }
          ],
          "width": "auto"
        },
        {
          "type": "Column",
          "targetWidth": "atLeast:standard",
          "spacing": "medium",
          "items": [
            {
              "type": "TextBlock",
              "text": "Principal Platform Architect at Microsoft",
              "isSubtle": true,
              "wrap": true
            }
          ],
          "width": "stretch",
          "verticalContentAlignment": "center"
        }
      ]
    }
  ],
  "version": "1.5"
}
```

Now the card's layout adapts to the available width:

-   When the card's width is **standard** or **wide**, it still looks good.
-   When the card's width is **narrow**, the role is moved under the name as there's not enough horizontal space to show them side-by-side.
-   When the card's width is **very narrow**, we can hide the image and only keep the most meaningful information.