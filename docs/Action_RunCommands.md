---
title: "Action.RunCommands"
source: "https://adaptivecards.microsoft.com/?topic=Action.RunCommands"
topic: "Action.RunCommands"
---

Action.RunCommands

Preview

Runs a set of commands that can call functions provided by the host application.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Action.RunCommands. | 1.0 |
| commands | Array ofstring | The commands to run. Individual commands are executed one after the other. If a command fails, subsequent commands will not be executed. A command fails when its execution throws an error. Each command can start with an assignment clause, in the format <variable-name> := <\[expression\](topic:expression-syntax)>. After the command is successfully executed, its result is stored in $var.<variable-name> and can be used in subsequent commands by subsequent commands, as well as in the onFailure event (keep in mind that in the onFailure event the variable may not be defined). Variable names can be any alphanumerical (including underscore) identifier. They must start with a letter or underscore, and they are case-sensitive. If several commands in the script assign the same variable, the last command to assign it will take precedence. | 1.5 |
| onFailure | string | The command to run if any of the main commands fails. | 1.5 |
| fallback | One of: objectstring | An alternate action to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Action.Submit\`, \`Action.OpenUrl\`, \`Action.Execute\`, \`Action.ToggleVisibility\`, \`Action.ShowCard\`, \`Action.ResetInputs\`, \`Action.Popover\`, \`Action.OpenUrlDialog\`, \`Action.InsertImage\`, \`Action.RunCommands\`, \`drop\` | 1.2 |
| iconUrl | string | A URL (or Base64-encoded Data URI) to a PNG, GIF, JPEG or SVG image to be displayed on the left of the action's title. iconUrl also accepts the <icon-name>\[,regular|filled\] format to display an icon from the vast Adaptive Card icon catalog instead of an image. | 1.1 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isEnabled | boolean | true | Controls the enabled state of the action. A disabled action cannot be clicked. If the action is represented as a button, the button's style will reflect this state. | 1.5 |
| isEnabled.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isEnabled property of the action at runtime. | 1.5 |
| isVisible | boolean | true | (Preview) Controls the visibility of the action. | 1.5 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the action at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| menuActions | Array ofobject | The actions to display in the overflow menu of a Split action button. Valid values: \`Action.Execute\`, \`Action.InsertImage\`, \`Action.OpenUrl\`, \`Action.OpenUrlDialog\`, \`Action.ResetInputs\`, \`Action.RunCommands\`, \`Action.Submit\`, \`Action.ToggleVisibility\` | 1.5 |
| mode | string | "primary" | Controls if the action is primary or secondary. Secondary actions appear in an overflow menu. Valid values: \`primary\`, \`secondary\` | 1.5 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| style | string | "default" | Control the style of the action, affecting its visual and spoken representations. Valid values: \`default\`, \`positive\`, \`destructive\` | 1.2 |
| themedIconUrls | Array ofobject | A set of theme-specific icon URLs. Valid values: \`ThemedUrl\` | 1.5 |
| title | string | The title of the action, as it appears on buttons. | 1.0 |
| title.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the title property of the action at runtime. | 1.5 |
| tooltip | string | The tooltip text to display when the action is hovered over. | 1.5 |
| tooltip.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the tooltip property of the action at runtime. | 1.5 |