---
title: "Column"
source: "https://adaptivecards.microsoft.com/?topic=Column"
topic: "Column"
---

Column

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A column in a ColumnSet element.

## Using ColumnSet and Column efficiently

ColumnSet makes it possible to organize a card into several columns. This is very important for many scenarios, but it can also lead to cards that do not look great and aren't very usable especially on narrower surfaces like a phone in portrait mode. Here are recommendations you should follow to avoid these types of problem.

**Do**

-   Limit the number of columns in a ColumnSet. Usually, a **maximum of 3 columns** is preferable.
-   Prefer the `auto`, `stretch` and weighted column sizes. Only use explicit column sizes in pixels for narrow columns that, for instance, contain an avatar picture, small thumbnail or very short text.
-   Test your card at all widths, especially narrow and very narrow, when using ColumnSet. If your card doesn't look good at narrow width, update it to adapt to the available width by using responsive layout features.

**Don't**

-   Use ColumnSet to display multi-row tabular information. Multiple ColumnSets cannot "work together" to ensure their columns are sized the same way unless you only use `stretch` and weighted sizes. For multi-row tabular information, use Table
-   Use nested ColumnSets unless absolutely necessary

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Optional. If specified, must be Column. | 1.0 |
| items | Array ofobject | The elements in the column. Valid values: \`Accordion\`, \`ActionSet\`, \`Badge\`, \`Carousel\`, \`Chart.Donut\`, \`Chart.Gauge\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Pie\`, \`Chart.VerticalBar\`, \`Chart.VerticalBar.Grouped\`, \`CodeBlock\`, \`ColumnSet\`, \`Calendar event\`, \`File\`, \`Graph resource\`, \`Persona\`, \`PersonaSet\`, \`CompoundButton\`, \`Container\`, \`FactSet\`, \`Icon\`, \`Image\`, \`ImageSet\`, \`Input.ChoiceSet\`, \`Input.Date\`, \`Input.Number\`, \`Input.Rating\`, \`Input.Text\`, \`Input.Time\`, \`Input.Toggle\`, \`LoopComponent\`, \`Media\`, \`ProgressBar\`, \`ProgressRing\`, \`Rating\`, \`RichTextBlock\`, \`Table\`, \`TabSet\`, \`TextBlock\` | 1.0 |
| width | One of: stringnumber | "stretch" | The width of the column. If expressed as a number, represents the relative weight of the column in the set. If expressed as a string, auto will automatically adjust the column's width according to its content, stretch will make the column use the remaining horizontal space (shared with other columns with width set to stretch) and using the <number>px format will give the column an explicit width in pixels. Valid values: \`auto\`, \`stretch\`, \`<number>px\` | 1.0 |
| backgroundImage | One of: stringobject | Defines the container's background image. Valid values: \`BackgroundImage\` | 1.0 |
| bleed | boolean | false | Controls if the container should bleed into its parent. A bleeding container extends into its parent's padding. | 1.2 |
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
| layouts | Array ofobject | The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See Container layouts for more details. Valid values: \`Layout.Stack\`, \`Layout.Flow\`, \`Layout.AreaGrid\` | 1.5 |
| maxHeight | string | The maximum height, in pixels, of the container, in the <number>px format. When the content of a container exceeds the container's maximum height, a vertical scrollbar is displayed. Valid values: \`<number>px\` | 1.5 |
| minHeight | string | The minimum height, in pixels, of the container, in the <number>px format. Valid values: \`<number>px\` | 1.2 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| roundedCorners | boolean | false | Controls if the container should have rounded corners. | 1.5 |
| rtl | boolean | Controls if the content of the card is to be rendered left-to-right or right-to-left. | 1.0 |
| selectAction | object | An Action that will be invoked when the element is tapped or clicked. Action.ShowCard is not supported. Valid values: \`Action.Execute\`, \`Action.InsertImage\`, \`Action.OpenUrl\`, \`Action.OpenUrlDialog\`, \`Action.Popover\`, \`Action.ResetInputs\`, \`Action.RunCommands\`, \`Action.Submit\`, \`Action.ToggleVisibility\` | 1.1 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| showBorder | boolean | false | Controls if a border should be displayed around the container. | 1.5 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| style | string | The style of the container. Container styles control the colors of the background, border and text inside the container, in such a way that contrast requirements are always met. Valid values: \`default\`, \`emphasis\`, \`accent\`, \`good\`, \`attention\`, \`warning\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| verticalContentAlignment | string | Controls how the container's content should be vertically aligned. Valid values: \`Top\`, \`Center\`, \`Bottom\` | 1.1 |