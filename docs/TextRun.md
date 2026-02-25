---
title: "TextRun"
source: "https://adaptivecards.microsoft.com/?topic=TextRun"
topic: "TextRun"
---

TextRun

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A block of text inside a RichTextBlock element.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be TextRun. | 1.0 |
| highlight | boolean | false | Controls if the text should be highlighted. | 1.2 |
| italic | boolean | false | Controls if the text should be italicized. | 1.2 |
| strikethrough | boolean | false | Controls if the text should be struck through. | 1.2 |
| underline | boolean | false | Controls if the text should be underlined. | 1.3 |
| color | string | The color of the text. Valid values: \`Default\`, \`Dark\`, \`Light\`, \`Accent\`, \`Good\`, \`Warning\`, \`Attention\` | 1.0 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| fontType | string | The type of font to use for rendering. Valid values: \`Default\`, \`Monospace\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isSortKey | boolean | false | Controls whether the element should be used as a sort key by elements that allow sorting across a collection of elements. | 1.5 |
| isSubtle | boolean | Controls whether the text should be renderer using a subtler variant of the select color. | 1.0 |
| isVisible | boolean | true | Controls the visibility of the element. | 1.2 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the element at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| lang | string | The locale associated with the element. | 1.1 |
| selectAction | object | An Action that will be invoked when the text is tapped or clicked. Action.ShowCard is not supported. Valid values: \`Action.Execute\`, \`Action.InsertImage\`, \`Action.OpenUrl\`, \`Action.OpenUrlDialog\`, \`Action.Popover\`, \`Action.ResetInputs\`, \`Action.RunCommands\`, \`Action.Submit\`, \`Action.ToggleVisibility\` | 1.1 |
| size | string | The size of the text. Valid values: \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\` | 1.0 |
| text | string | The text to display. A subset of markdown is supported. | 1.0 |
| text.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the text property of the TextBlock at runtime. | 1.5 |
| weight | string | The weight of the text. Valid values: \`Lighter\`, \`Default\`, \`Bolder\` | 1.0 |