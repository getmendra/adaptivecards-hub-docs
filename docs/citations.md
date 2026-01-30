---
title: "Citations"
source: "https://adaptivecards.microsoft.com/?topic=citations"
topic: "citations"
---

Citations

Preview

Your card can include citations in TextBlock and RichTextBlock. Citations are displayed as a little callout bubble and display content preview bubble when hover over or clicked.

To include citations:

-   Add references to your card
-   Link to those references in your text by index

There are two types of references:

-   DocumentReference refers to an online document at a given URL.
-   AdaptiveCardReference holds a full Adaptive Card that will be displayed by the host application in a dialog.

You can specify an icon name to visually represent the type of the reference.

### Citations in TextBlock

To include a citation in a TextBlock, use a custom Markdown link in the format `[<displayText>](cite:<index>)` where `displayText` is the text that should be displayed in the little callout bubble and `index` is the index of the reference in the card's references collection.

### Citations in RichTextBlock

To include a citation in a RichTextBlock, use a CitationRun and:

-   Set its referenceIndex to the index of the reference you want to cite in the card's references collection.
-   Set its text to be displayed in the callout bubble

### Example

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "text": "Citations in TextBlock",
      "type": "TextBlock",
      "size": "large"
    },
    {
      "type": "TextBlock",
      "text": "Document citation[1](cite:1) and Adaptive Card citation[2](cite:2)",
      "wrap": true
    },
    {
      "text": "Citations in RichTextBlock",
      "type": "TextBlock",
      "size": "large",
      "spacing": "ExtraLarge",
      "separator": true
    },
    {
      "type": "RichTextBlock",
      "inlines": [
        "Document citation",
        {
          "type": "CitationRun",
          "referenceIndex": 1,
          "text": "1"
        },
        " and Adaptive Card citation",
        {
          "type": "CitationRun",
          "referenceIndex": 2,
          "text": "2"
        }
      ]
    }
  ],
  "references": [
    {
      "type": "DocumentReference",
      "title": "This is a document reference",
      "icon": "text",
      "url": "https://adaptivecards.microsoft.com",
      "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "keywords": [
        "keyword 1",
        "keyword 2",
        "keyword 3"
      ]
    },
    {
      "type": "AdaptiveCardReference",
      "title": "This is an Adaptive Card reference",
      "icon": "image",
      "url": "https://adaptivecards.io",
      "abstract": "Adaptive Cards are platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange. When delivered to a specific app, the JSON is transformed into native UI that automatically adapts to its surroundings",
      "content": {
        "type": "AdaptiveCard",
        "body": [
          {
            "type": "TextBlock",
            "text": "Adaptive Cards are platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange. When delivered to a specific app, the JSON is transformed into native UI that automatically adapts to its surroundings",
            "wrap": true
          }
        ]
      },
      "keywords": [
        "Citations",
        "Adaptive cards",
        "updated 1 day ago"
      ]
    }
  ]
}
```