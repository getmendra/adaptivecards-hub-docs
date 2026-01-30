---
title: "Dynamic typeahead search"
source: "https://adaptivecards.microsoft.com/?topic=dynamic-typeahead"
topic: "dynamic-typeahead"
---

Dynamic typeahead search

Input.ChoiceSet can be configured to support dynamic typeahead search, which allows it to retrieve its choices dynamically from your Bot as the user types. This is particularly useful when the set of valid choices is large and/or changes frequently, and can therefore not be embedded in the Adaptive Card payload.

To configure an **Input.ChoiceSet** to support dynamic typeahead search:

-   Set its `choices.data` property to a Data.Query object,
-   Set the `Data.Query`'s `dataset` property to a name of your choice. Your Bot will use that dataset name to fetch choices from the right place,
-   You can also add static choices via the `choices` property. Static choices will complement choices retrieved dynamically.

### Example

```
{
  "type": "AdaptiveCard",
  "body": [
    {
      "text": "Please fill out the below form to send a game purchase request.",
      "wrap": true,
      "type": "TextBlock",
      "style": "heading"
    },
    {
      "columns": [
        {
          "width": "stretch",
          "items": [
            {
              "choices": [
                {
                  "title": "Call of Duty",
                  "value": "call_of_duty"
                },
                {
                  "title": "Death's Door",
                  "value": "deaths_door"
                },
                {
                  "title": "Grand Theft Auto V",
                  "value": "grand_theft"
                },
                {
                  "title": "Minecraft",
                  "value": "minecraft"
                }
              ],
              "choices.data": {
                "type": "Data.Query",
                "dataset": "games"
              },
              "style": "filtered",
              "placeholder": "Search for a game",
              "id": "choiceGameSingle",
              "type": "Input.ChoiceSet",
              "label": "Game:"
            }
          ],
          "type": "Column"
        }
      ],
      "type": "ColumnSet"
    }
  ],
  "actions": [
    {
      "title": "Request purchase",
      "type": "Action.Submit"
    }
  ],
  "version": "1.5"
}
```

When your Bot is called to process a `Data.Query`, it will receive an **Invoke** request such as the one below:

```
JSON{
    "name": "application/search",
    "type": "invoke",
    "value": {
        "queryText": "mine",
        "queryOptions": {
            "skip": 0,
            "top": 15
        },
        "dataset": "games"
    },
    "locale": "en-US",
    "localTimezone": "America/Los_Angeles",
    // …. other fields
}
```

Here is how your Bot can handle that request:

```
C#class Game {
    string title;
    string value;
}

protected override async Task<InvokeResponse> OnInvokeActivityAsync(
    ITurnContext<IInvokeActivity> turnContext,
    CancellationToken cancellationToken)
{
    if (turnContext.Activity.Name == "application/search")
    {
        var searchResults = new List<SearchResult>();

        // Filter games based on turnContext.Activity.Value.QueryText
        List<Game> games = Games.GetGames(turnContext.Activity.Value.QueryText);

        var searchResponseData = new {
            type = "application/vnd.microsoft.search.searchResponse",
            value = new { results = games }
        };

        var jsonString = JsonConvert.SerializeObject(searchResponseData);

        JObject jsonData = JObject.Parse(jsonString);

        return new InvokeResponse() {
            Status = 200,
            Body = jsonData
        };
    }

    return null;
}
```

```
JavaScriptasync onInvokeActivity(context) {
    if (context._activity.name == 'application/search') {
        // Filter games based on turnContext.Activity.Value.QueryText
        var games = getGames(context._activity.value.queryText);

        // games should be an array of objects with title and value properties

        return {
            status: 200,
            body: {
                type: "application/vnd.microsoft.search.searchResponse",
                value: {
                    results: games
                }
            }
        }
    }

    return null;
}
```