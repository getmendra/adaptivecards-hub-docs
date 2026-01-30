---
title: "Markdown"
source: "https://adaptivecards.microsoft.com/?topic=text-formatting"
topic: "text-formatting"
---

Markdown

TextBlock elements can be formatted using Markdown with support for the below features.

# Basic features

| Feature | Syntax | Result |
| --- | --- | --- |
| Bold | `**Bold**` or `__Bold__` | **Bold** |
| Italic | `*Italic*` or `_Italic_` | _Italic_ |
| Strikethrough | `~~Strikethrough~~` | ~Strikethrough~ |
| Headings 1 to 6 | `# Heading 1`, `## Heading 2`, etc. |  |
| Links | `[Adaptive Cards](https://adaptivecards.microsoft.com)` | [Adaptive Cards](https://adaptivecards.microsoft.com) |
| Auto links | [https://adaptivecards.microsoft.com](https://adaptivecards.microsoft.com) |  |
| Inline images | `![UI Kit](/images/ic_fluent_teams_24_color.svg)` | ![UI Kit](/images/ic_fluent_teams_24_color.svg) |
| Horizontal rule | `---` |  |
| Line breaks | `\n` or `<br>` |  |

# Advanced features

## Lists

Unordered:

```
Markdown- Item 1
- Item 2
- Item 3
```

Ordered:

```
Markdown1. Item 1
2. Item 2
3. Item 3
```

Tasks:

```
Markdown- [x] Task 1
- [ ] Task 2
- [ ] Task 3
```

Example:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "- Item 1\n- Item 2\n- Item 3"
    },
    {
      "type": "TextBlock",
      "text": "1. Item 1\n2. Item 2\n3. Item 3"
    },
    {
      "type": "TextBlock",
      "text": "- [x] Task 1\n- [ ] Task 2\n- [ ] Task 3"
    }
  ]
}
```

## Tables

```
Markdown| Column 1 | Column 2 | Column 3 |
|---|---|---|
| Lorem ipsum dolor sit amet | Sed ut perspiciatis unde omnis | Excepteur sint occaecat cupidatat |
```

Example:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "| Column 1 | Column 2 | Column 3 |\n|---|---|---|\n| Lorem ipsum dolor sit amet | Sed ut perspiciatis unde omnis | Excepteur sint occaecat cupidatat |"
    }
  ]
}
```

## Block quotes

```
Markdown> Quoted text
```

Example:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "> Quoted text"
    }
  ]
}
```

## Code blocks and inline code

**Supported languages codes:** bash, c, cpp, csharp, css, dos, go, graphql, html, java, javascript, json, objectivec, perl, php, powershell, python, sql, typescript, vbnet, verilog, vhdl, plaintext.

Inline code:

```
Markdown`inline code`
```

Code block:

```
Markdown```typescript
function sayHello() {
    console.log("Hello!");
}
```
```

Example:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "`Inline code`"
    },
    {
      "type": "TextBlock",
      "text": "```typescript\nfunction sayHello() {\n    console.log('Hello!');\n}\n```"
    }
  ]
}
```

## Footnotes

```
MarkdownFirst footnote[^1]
Second footnote[^2]
[^1]: Content of the first footnote
[^2]: Content of the second footnote
```

Example:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "`Inline code`"
    },
    {
      "type": "TextBlock",
      "text": "First footnote[^1]\nSecond footnote[^2]\n[^1]: Content of the first footnote\n[^2]: Content of the second footnote"
    }
  ]
}
```