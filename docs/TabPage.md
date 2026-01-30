---
title: "TabPage"
source: "https://adaptivecards.microsoft.com/?topic=TabPage"
topic: "TabPage"
---

TabPage

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A page inside a TabSet element.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be TabPage. | 1.0 |
| iconName | string | The name of the icon to display in the tab. | 1.5 |
| items | Array ofobject | The elements in the page. Valid values: \`Accordion\`, \`ActionSet\`, \`Badge\`, \`Carousel\`, \`Chart.Donut\`, \`Chart.Gauge\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Pie\`, \`Chart.VerticalBar\`, \`Chart.VerticalBar.Grouped\`, \`CodeBlock\`, \`ColumnSet\`, \`Calendar event\`, \`File\`, \`Graph resource\`, \`Persona\`, \`PersonaSet\`, \`CompoundButton\`, \`Container\`, \`FactSet\`, \`Icon\`, \`Image\`, \`ImageSet\`, \`Input.ChoiceSet\`, \`Input.Date\`, \`Input.Number\`, \`Input.Rating\`, \`Input.Text\`, \`Input.Time\`, \`Input.Toggle\`, \`LoopComponent\`, \`Media\`, \`ProgressBar\`, \`ProgressRing\`, \`Rating\`, \`RichTextBlock\`, \`Table\`, \`TabSet\`, \`TextBlock\` | 1.0 |
| tabStyle | string | "IconAndText" | The style of the tab. If the style is IconOnly, only the icon will be displayed, but the title will still be used for accessibility purposes. Valid values: \`IconOnly\`, \`IconAndText\` | 1.5 |
| title | string | The title of the tab page, as it appears on tabs. | 1.5 |
| backgroundImage | One of: stringobject | Defines the container's background image. Valid values: \`BackgroundImage\` | 1.0 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
| height | string | "auto" | The height of the element. When set to stretch, the element will use the remaining vertical space in its container. Valid values: \`auto\`, \`stretch\` | 1.1 |
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
| showBorder | boolean | false | Controls if a border should be displayed around the container. | 1.5 |
| style | string | The style of the container. Container styles control the colors of the background, border and text inside the container, in such a way that contrast requirements are always met. Valid values: \`default\`, \`emphasis\`, \`accent\`, \`good\`, \`attention\`, \`warning\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |
| verticalContentAlignment | string | Controls how the container's content should be vertically aligned. Valid values: \`Top\`, \`Center\`, \`Bottom\` | 1.1 |