---
title: "At mentions"
source: "https://adaptivecards.microsoft.com/?topic=at-mentions"
topic: "at-mentions"
---

At mentions

> Note
> 
> Channel and team mentions aren't supported in bot messages.

To include an @mention, your card needs to include the following:

-   A `TextBlock` element whose `text` property contains one or more @mention(s) in the `<at>any text</at>` format
-   Matching mention objects in the `entities` collection of the card's msTeams property. Each object must include:
    -   The `text` property that matches the @mention as included in the `TextBlock`'s text (e.g. "<at>any text</at>")
    -   The `mentioned.id` property, uniquely identifying the user being mentioned (see [Get the Microsoft Entra user ID, user ID, team ID, or channel ID](https://learn.microsoft.com/en-us/microsoftteams/platform/bots/how-to/conversations/send-proactive-messages?tabs=dotnet#get-the-microsoft-entra-user-id-user-id-team-id-or-channel-id)),

Teams allows you to use the following types of Ids in @mentions:

| Id type | Example |
| --- | --- |
| Microsoft Entra Object ID | 49c4641c-ab91-4248-aebb-6a7de286397b |
| Microsoft Entra UPN | `john.smith@microsoft.com` |

**Example**

```json
{
  "version": "1.0",
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "TextBlock",
      "text": "Mention using UPN: <at>Adele UPN</at>"
    },
    {
      "type": "TextBlock",
      "text": "Mention using Entra ID: <at>Adele Microsoft Entra ID</at>"
    }
  ],
  "msteams": {
    "entities": [
      {
        "type": "mention",
        "text": "<at>Adele UPN</at>",
        "mentioned": {
          "id": "AdeleV@contoso.onmicrosoft.com",
          "name": "Adele Vance"
        }
      },
      {
        "type": "mention",
        "text": "<at>Adele Microsoft Entra ID</at>",
        "mentioned": {
          "id": "87d349ed-44d7-43e1-9a83-5f2406dee5bd",
          "name": "Adele Vance"
        }
      }
    ]
  }
}
```