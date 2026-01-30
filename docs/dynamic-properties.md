---
title: "Dynamic properties"
source: "https://adaptivecards.microsoft.com/?topic=dynamic-properties"
topic: "dynamic-properties"
---

Dynamic properties

Preview

Some Adaptive Card elements and actions might have "dynamic properties". Dynamic properties are properties whose value is an expression that gets evaluated at the time the card is displayed. Expressions can use variables and functions provided by the host application. The result of the expression evaluation is then used to update another property on the same element or action where the dynamic property was set. Learn more about expressions.

Dynamic properties are named after the property they update, with the added `.dynamic` suffix. Currently, the following dynamic properties are available:

-   On all action types:
    -   title.dynamic
    -   tooltip.dynamic
    -   isEnabled.dynamic
    -   isVisible.dynamic
-   On all elements types:
    -   isVisible.dynamic
-   On `TextBlock`:
    -   text.dynamic

## How it works

Let's imagine the following scenario:

-   The card should initially read "Authorizing user...",
-   If the user is authorized, the card should should update to read "Access granted" and display an action button,
-   If the user isn't authorized, the card should update to read "Access denied".

To build this card, we will rely on an example function called `authorizeUser`, whose implementation is below. Note this function is **not available in host applications** and is only used for illustration purposes here:

```
TypeScriptasync function authorizeUser() {
  // Simulate a 3 second delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Math.random() <= 0.85;
}
```

Now we can define a card that leverages that function, alongside the standard `if` function:

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "wrap": true,
      "text": "Authorizing user...",
      "text.dynamic": "if(authorizeUser(), 'Access granted', 'Access denied')"
    }
  ],
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Click me",
      "isVisible": false,
      "isVisible.dynamic": "authorizeUser()"
    }
  ]
}
```

In the above card, note how both the `TextBlock` and `Action.OpenUrl` use dynamic properties:

-   The `TextBlock` defines its default `text` and uses `text.dynamic` to update `text` to "Access granted" or "Accedd denied" according to the result of `authorizeUser()`,
-   The `Action.OpenUrl` is initially invisible, and its visibility is updated dynamically via the `isVisible.dynamic` property which also calls the `authorizeUser()` function.