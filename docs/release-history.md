---
title: "Release history"
source: "https://adaptivecards.microsoft.com/?topic=release-history"
topic: "release-history"
---

Coming soon...

Exciting developments are on the way! Here are some enhancements that are currently in progress or just around the corner. Stay tuned for more updates!

-   Dynamic properties will make it possible to update an element or action's properties dynamically client-side based on an expression

AdaptiveCard

Updated

An Adaptive Card, containing a free-form body of card elements, and an optional set of actions.

references

Preview

References that can be cited in TextBlock and RichTextBlock elements.

TextBlock

Updated

A block of text, optionally formatted using Markdown.

text.dynamic

Preview

Defines an \[expression\](topic:expression-syntax) whose evaluated value will be used to update the \`text\` property of the TextBlock at runtime.

TextRun

Updated

A block of text inside a RichTextBlock element.

text.dynamic

Preview

Defines an \[expression\](topic:expression-syntax) whose evaluated value will be used to update the \`text\` property of the TextBlock at runtime.

TabSet

Preview

An element that allows the end-user to navigate through pages using a tabbed interface.

Accordion

Preview

An element that allows the end-user to toggle the display of content by expanding or collapsing pages.

LoopComponent

Preview

Represents a Loop Component.

CitationRun

Preview

A citation inside a RichTextBlock element.

text.dynamic

Preview

Defines an \[expression\](topic:expression-syntax) whose evaluated value will be used to update the \`text\` property of the TextBlock at runtime.

Action.Popover

Updated

Shows a popover to display more information to the user.

popoverTitle

Preview

The optional title of the popover, which will only be displayed on mobile devices.

Action.RunCommands

Preview

Runs a set of commands that can call functions provided by the host application.

October 2025

-   Theme-specific images are now supported via:
    -   The `themedUrls` property on both Image and Container,
    -   The `themedIconUrls` on actions such as Action.Submit,
-   A new `ExtraSmall` spacing is now available on all elements,
-   **Split buttons** are now supported via the menuActions property on all action types.

Action.OpenUrlDialog

New

Opens a task module in a modal dialog hosting the content at a provided URL.

![Word](images/ic_fluent_word_24_color.svg)![PowerPoint](images/ic_fluent_powerpoint_24_color.svg)

Action.Popover

New

Shows a popover to display more information to the user.

![Teams](images/ic_fluent_teams_24_color.svg)

AdaptiveCard

Updated

An Adaptive Card, containing a free-form body of card elements, and an optional set of actions.

layouts

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See \[Container layouts\](topic:container-layouts) for more details.

msteams

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Teams-specific metadata associated with the card.

resources

New

![Teams](images/ic_fluent_teams_24_color.svg)

Resources card elements can reference.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Chart.Donut

Updated

A donut chart.

value

New

![Teams](images/ic_fluent_teams_24_color.svg)

The value that should be displayed in the center of a Donut chart. \`value\` is ignored for Pie charts.

valueColor

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the color of the value displayed in the center of a Donut chart.

thickness

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the thickness of the donut segments. Default is \*\*Thick\*\*.

showOutlines

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the outlines of the donut segments are displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.Gauge

Updated

A gauge chart.

showNeedle

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the gauge's needle is displayed. Default is \*\*true\*\*.

showOutlines

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the outlines of the gauge segments are displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.Pie

Updated

A pie chart.

value

New

![Teams](images/ic_fluent_teams_24_color.svg)

The value that should be displayed in the center of a Donut chart. \`value\` is ignored for Pie charts.

valueColor

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the color of the value displayed in the center of a Donut chart.

thickness

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the thickness of the donut segments. Default is \*\*Thick\*\*.

showOutlines

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the outlines of the donut segments are displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Image

Updated

A standalone image element.

style

The style of the image.

Values:

"RoundedCorners"

![Teams](images/ic_fluent_teams_24_color.svg)

msteams

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Teams-specific metadata associated with the image.

themedUrls

New

![Teams](images/ic_fluent_teams_24_color.svg)

A set of theme-specific image URLs.

fitMode

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls how the image should be fitted inside its bounding box. imageFit is only meaningful when both the width and height properties are set. When fitMode is set to contain, the default style is always used.

horizontalContentAlignment

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the horizontal position of the image within its bounding box. horizontalContentAlignment is only meaningful when both the width and height properties are set and fitMode is set to either cover or contain.

verticalContentAlignment

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the vertical position of the image within its bounding box. verticalContentAlignment is only meaningful when both the width and height properties are set and fitMode is set to either cover or contain.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

ProgressBar

New

A progress bar element, to represent a value within a range.

![Teams](images/ic_fluent_teams_24_color.svg)

ProgressRing

New

A spinning ring element, to indicate progress.

![Teams](images/ic_fluent_teams_24_color.svg)

RichTextBlock

Updated

A rich text block that displays formatted text.

labelFor

New

![Teams](images/ic_fluent_teams_24_color.svg)

The Id of the input the RichTextBlock should act as the label of.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

TextBlock

Updated

A block of text, optionally formatted using Markdown.

labelFor

New

![Teams](images/ic_fluent_teams_24_color.svg)

The Id of the input the TextBlock should act as the label of.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

February 2025

Action.InsertImage

New

Inserts an image into the host application's canvas.

![Word](images/ic_fluent_word_24_color.svg)![PowerPoint](images/ic_fluent_powerpoint_24_color.svg)

December 2024

Badge

New

A badge element to show an icon and/or text in a compact form over a colored background.

![Teams](images/ic_fluent_teams_24_color.svg)

Carousel

New

A carousel with sliding pages.

![Teams](images/ic_fluent_teams_24_color.svg)

September 2024

September 2024 has been a month of innovation for Adaptive Cards.

We've added many new features, among which several highly requested ones such as container borders and rounded corners, star rating elements and full suite of chart elements. Check our the list below for a full list of new capabilities.

-   Containers (AdaptiveCard, Container, Column, TableCell) now support flow and grid layouts. See Container layouts for more details
-   Actions now support icons from the vast Adaptive Card icon catalog by setting the `iconUrl` property to a value in the `icon:<icon name>[,regular|filled]` format
-   Inputs now have a `valueChangedAction` property that can be set to an Action.ResetInputs object. With this new property and action type, you can link inputs together

Action.Execute

Updated

Gathers input values, merges them with the data property if specified, and sends them to the Bot via an Invoke activity. The Bot can respond synchronously and return an updated Adaptive Card to be displayed by the client. Action.Execute works in all Adaptive Card hosts.

conditionallyEnabled

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if the action is enabled only if at least one required input has been filled by the user.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Action.ResetInputs

New

Resets the values of the inputs in the card.

![Teams](images/ic_fluent_teams_24_color.svg)

Action.Submit

Updated

Gathers input values, merges them with the data property if specified, and sends them to the Bot via an Invoke activity. The Bot can only acknowledge is has received the request.

conditionallyEnabled

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if the action is enabled only if at least one required input has been filled by the user.

msteams

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Teams-specific metadata associated with the action.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

AdaptiveCard

Updated

An Adaptive Card, containing a free-form body of card elements, and an optional set of actions.

layouts

New

![Teams](images/ic_fluent_teams_24_color.svg)

The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See \[Container layouts\](topic:container-layouts) for more details.

msteams

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Teams-specific metadata associated with the card.

resources

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Resources card elements can reference.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Chart.Donut

New

A donut chart.

value

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

The value that should be displayed in the center of a Donut chart. \`value\` is ignored for Pie charts.

valueColor

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the color of the value displayed in the center of a Donut chart.

thickness

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the thickness of the donut segments. Default is \*\*Thick\*\*.

showOutlines

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the outlines of the donut segments are displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.Gauge

New

A gauge chart.

showNeedle

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the gauge's needle is displayed. Default is \*\*true\*\*.

showOutlines

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the outlines of the gauge segments are displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.HorizontalBar

New

A horizontal bar chart.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.HorizontalBar.Stacked

New

A stacked horizontal bar chart.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.Line

New

A line chart.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.Pie

New

A pie chart.

value

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

The value that should be displayed in the center of a Donut chart. \`value\` is ignored for Pie charts.

valueColor

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the color of the value displayed in the center of a Donut chart.

thickness

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the thickness of the donut segments. Default is \*\*Thick\*\*.

showOutlines

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls whether the outlines of the donut segments are displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.VerticalBar

New

A vertical bar chart.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Chart.VerticalBar.Grouped

New

A grouped vertical bar chart.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

ColumnSet

Updated

Splits the available horizontal space into separate columns, so elements can be organized in a row.

showBorder

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if a border should be displayed around the container.

roundedCorners

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if the container should have rounded corners.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

CompoundButton

New

A special type of button with an icon, title and description.

![Teams](images/ic_fluent_teams_24_color.svg)

Container

Updated

A container for other elements. Use containers for styling purposes and/or to logically group a set of elements together, which can be especially useful when used with Action.ToggleVisibility.

showBorder

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if a border should be displayed around the container.

roundedCorners

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if the container should have rounded corners.

layouts

New

![Teams](images/ic_fluent_teams_24_color.svg)

The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See \[Container layouts\](topic:container-layouts) for more details.

maxHeight

New

![Teams](images/ic_fluent_teams_24_color.svg)

The maximum height, in pixels, of the container, in the \`<number>px\` format. When the content of a container exceeds the container's maximum height, a vertical scrollbar is displayed.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Icon

New

A standalone icon element. Icons can be picked from the vast \[Adaptive Card icon catalog\](topic:icon-catalog).

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

Image

Updated

A standalone image element.

style

The style of the image.

Values:

"RoundedCorners"

![Teams](images/ic_fluent_teams_24_color.svg)

msteams

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Teams-specific metadata associated with the image.

themedUrls

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

A set of theme-specific image URLs.

fitMode

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls how the image should be fitted inside its bounding box. imageFit is only meaningful when both the width and height properties are set. When fitMode is set to contain, the default style is always used.

horizontalContentAlignment

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the horizontal position of the image within its bounding box. horizontalContentAlignment is only meaningful when both the width and height properties are set and fitMode is set to either cover or contain.

verticalContentAlignment

Updated

![Teams](images/ic_fluent_teams_24_color.svg)

Controls the vertical position of the image within its bounding box. verticalContentAlignment is only meaningful when both the width and height properties are set and fitMode is set to either cover or contain.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Input.Rating

New

An input to allow the user to rate something using stars.

![Teams](images/ic_fluent_teams_24_color.svg)

Media

Updated

A media element, that makes it possible to embed videos inside a card.

The `Media` element now supports **YouTube**, **Vimeo** and **Dailymotion** embedded videos.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

Rating

New

A read-only star rating element, to display the rating of something.

![Teams](images/ic_fluent_teams_24_color.svg)

Table

Updated

Use tables to display data in a tabular way, with rows, columns and cells.

showBorder

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if a border should be displayed around the container.

roundedCorners

New

![Teams](images/ic_fluent_teams_24_color.svg)

Controls if the container should have rounded corners.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

December 2023

The `targetWidth` property has been added to all element types to support Responsive Layout.

CodeBlock

New

A formatted and syntax-colored code block.

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

On this page

Coming soon...

October 2025

February 2025

December 2024

September 2024

December 2023