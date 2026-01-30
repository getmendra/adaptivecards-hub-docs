---
title: "Design best practices"
source: "https://adaptivecards.microsoft.com/?topic=design-best-practices"
topic: "design-best-practices"
---

# Design best practices

### Enhance your card designs with essential guidelines and strategies.

![Hero image](images/hero-light.jpg)

## Overview

When designing Adaptive Cards, it's essential to keep them concise, visually appealing, and user-friendly. The following are some guidelines to achieve that.

## Card layouts

Choose an appropriate card layout based on the content and context.

```
HeroIdeal for sharing articles or scenarios where an image tells most of the story.ThumbnailUse for simple actionable messages. It's compact and suitable for quick interactions.ListGreat for scenarios where users need to pick an item from a list. Keep explanations concise.DigestUse for news digests or round-up posts.Video/MediaCombines text and media (for example audio and video).FormCollects quick inputs from users to create tasks or tickets.Quick inputCollects quick inputs from users to create tasks or tickets.ExpandableAllows users to select buttons and gather additional input from the same card.
```

* * *

## Clarity and simplicity

Design your card to engage users, provide valuable insights, and help them complete tasks efficiently. Focus on the essential functions and guide users to a task module or the full application for more complex interactions.

```
Prioritize important contentOnly include details that are crucial to the context and actions.Don't clutter the card with unnecessary elementsToo many elements create an unfocused and confusing user experience.
```

* * *

## Visual hierarchy

Use font size, color, and placement to create clear hierarchy. The most critical information (such as the main message or call-to-action) should be prominent and easily scannable.

```
Create clear structureUse font size and style to make key information stand out and establish order.Don't treat all elements equalDon't present all elements with equal prominence.
```

* * *

## Interactivity

Incorporate buttons and input fields to increase engagement and help users complete tasks within the card.

```
Emphasize intuitive and simple interactionsGuide users through the card's functionality with clear, straightforward interactions.Don't overload your card with too many interactionsToo many buttons and input fields can overwhelm users and reduce the card's effectiveness.
```

* * *

## Accessibility

The Adaptive Cards framework is built with accessibility in mind, but in some cases, such as text over a background image, it's your responsibility to ensure contrast is sufficient.

```
Ensure text is readableChoose text colors that have at least a 4.5:1 contrast ratio for readability (for example, use the `light` and `dark` colors).Don't use low-contrast textAvoid text colors that blend into the background, as this reduces readability and accessibility.
```

* * *

## Localization

The Adaptive Card framework doesn't currently support fully localization. However, date and times can be automatically formatted to honor the user's regional settings. Always ensure date and times are properly formatted by using the `DATE` and `TIME` formatting functions (see TextBlock for more details).

* * *

## Responsive design

The Adaptive Card framework supports four breakpoints to accommodate various card widths. Design your cards to ensure content and interactions are appropriate for each breakpoint. See Responsive layout for more details.

```
Consider all breakpointsDesign different layouts and content for wide, standard, narrow and very narrow card widths.Don't ignore card width variationsAvoid using a single layout for all card widths without validating its appearance and usability.
```

* * *

## Progressive disclosure

Lead with the most relevant information, encouraging users to uncover more as they wish. Use truncation, "Show more/Show less" options, and collapsible sections for an organized layout.

```
Embrace clarityUse progressive disclosure to present information clearly and manageably.Don't overload your cardAvoid overwhelming users with too much information at once.
```

* * *

## Illustrations

The Adaptive Card framework doesn't yet support using theme-specific images. Follow these guidelines to create illustrations that function well in both light and dark modes.

```
Simplify illustration visualsEnsure colors work in both themesTry neutral colorsSkip image shadows
```

* * *

## Primary buttons

Use primary buttons for significant actions related to the card content, such as submitting forms, approvals, confirmations, and critical tasks. For common or less critical actions, consider using secondary buttons.

```
Utilize effectivelyUse primary buttons for main events, like finalizing forms or making big decisions.Don't use unnecessarilyAvoid overusing primary buttons, as they can overwhelm users and reduce interface clarity.
```

* * *

## Icons

Icons provide intuitive visual cues and enhance user experience. We recommend using icons from the Adaptive Card catalog for their simplicity and recognizability, ensuring consistency and familiarity. If creating custom icons, follow the guidelines below.

### Icon design

-   Use icons from the vast Adaptive Card icon catalog in most cases. They automatically adapt to the theme and scale perfectly across all screens.
-   Keep your icons **simple and recognizable**.
-   Use **clear shapes** (for example: circles, squares and triangles) to represent concepts.
-   Avoid excessive details that might get lost when scaled down.

### Color choice

The Adaptive Card framework doesn't currently support using different images for the light and dark themes. When designing your custom icons:

-   For mostly monochrome icons, use **#818181** (RGB 129, 129, 129) as the primary color.
-   For more colorful icons, be sure to validate they work well in both light and dark themes.

### Export as PNG

-   In most cases, it is recommended to design you icons with a **transparent background**.
-   Save your icons as PNG files to maintain the transparency layer. Other formats such as JPG do not support transparency.
-   Crafst them at 2x the size you actually need to ensure they scale well on high dpi screens.

Test your image icons on both light and dark themes, as well as on various platforms (desktop, mobile) to ensure they look great in any circumstance.

```
Use icons from the catalogKeep designs simple and consistentChoose theme-friendly colorsUse a transparent background and save as PNG
```

* * *

## Documentation and guidelines

Provide developers with detailed design specs, including color, font, sizes, styles, and spacing. Highlight any layout or design differences across breakpoints and create separate specs as needed.

Check out a simple example below:

![documentation and guidelines](images/doc-and-guidelines-light.png)

* * *

## Testing and iteration

Once your Adaptive Card is in production, regularly check in with users to gather their feedback. Listen to their experiences and make necessary adjustments to enhance the card’s usefulness and usability. Continuous improvement based on user input ensures your design remains effective and relevant.

* * *

## Resources

-   [**Solutions and scenarios best practices**](https://developer.microsoft.com/en-us/microsoft-teams/app-development-resources?filter=all): Gain inspiration from industry samples and teamwork solutions.
-   [**Starter card collection**](https://github.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/tree/main): Use pre-built card templates as a starting point to build upon or modify.
-   [**Microsoft Teams UI Kit**](https://www.figma.com/community/file/916836509871353159): Explore components and patterns designed specifically for building Adaptive Cards.
-   **Icon catalog**: Browse a large catalog of consistent, scalable, and automatically themed icons for your card designs.