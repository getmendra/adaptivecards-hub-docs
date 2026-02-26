---
title: "Creating custom icons"
source: "https://adaptivecards.microsoft.com/?topic=icons"
topic: "icons"
---

Creating custom icons

Adaptive Cards provide a vast catalog of icons that can be used via the Icon element, on action buttons via the iconUrl property and other Adaptive Card constructs. These icons are scalable vector graphics (SVGs), ensuring they look sharp and clear at any size. They are monochrome and come in two variants: regular and filled. They can be colored using standard TextBlock font colors.

**Example**

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "left"
        }
      ],
      "items": [
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xxSmall"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xSmall"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Small"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Standard"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Medium"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Large"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xLarge"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xxLarge"
        }
      ]
    }
  ]
}
```

While our icon catalog is pretty rich, there are times when you might want to create your own custom icons.

### Reasons to create custom icons

-   **Unique branding:** Create icons that align with your brand’s unique colors and style.
-   **Specific iconography:** If the Fluent library doesn't include a suitable icon metaphor, custom icons can fill the gap.
-   **Multi-color icons:** Need more than one color? Custom icons can meet this requirement, as Fluent icons support only a single color.

### Icon design

Ensure your custom icons maintain a consistent style and aesthetic with the overall design of your Adaptive Cards. This helps in creating a cohesive user experience.

-   Keep your icons **simple and recognizable**.
-   Use **clear shapes** (for example: circles, squares, and triangles) to represent concepts.
-   Avoid excessive details that might get lost when scaled down.
-   Design icons within a **square shape** and **maintain their aspect ratios** in your card.

```

```

### Color choice

Use **#818181 (RGB: 129, 129, 129)** as the primary color for button icons (since there is currently no independent theme support). Ensure colorful icons work well in both light and dark modes.

```

```

> Important
> 
> Adaptive Cards currently do not allow using different images for different themes (light or dark). We are working on adding support for this, but in the meantime, **use colors that provide enough contrast when displayed on top of both a dark and light background**.

### Size

Design icons to fit within a **32x32px square** for standard buttons. In general, craft your icon at **twice the size it will be displayed** to ensure it looks crisp on high resolution screens.

### Export as PNG

Ensure your icons have a transparent background (unless the background is intentionally part of the design), and save them as PNG images, a uncompressed format that supports an "alpha channel" (i.e. transparency).

Test your image icons in light and dark themes on various platforms (web, mobile, and desktop) to ensure a great look everywhere.