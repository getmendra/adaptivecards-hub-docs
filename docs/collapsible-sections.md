---
title: "Create collapsible sections"
source: "https://adaptivecards.microsoft.com/?topic=collapsible-sections"
topic: "collapsible-sections"
---

Create collapsible sections

Creating collapsible sections in Adaptive Cards enhances user experience by allowing content to be shown or hidden interactively. The Action.ShowCard and Action.ToggleVisibility features offer unique ways to present information dynamically. This section explores when to use each feature and how to design your cards for optimal performance across different devices and screen sizes.

### Using Action.ShowCard

Action.ShowCard displays an embedded card within your Adaptive Card. This feature is ideal for scenarios where you want to reveal additional information or options without navigating away from the current card. It’s particularly useful for multi-step processes or detailed forms.

#### When to use Action.ShowCard

-   **Detail expansion:** When you need to provide more context or details that don’t fit within the initial view.
-   **Multi-step forms:** For forms that require additional input fields or steps.
-   **Progressive disclosure:** To gradually reveal information based on user interaction.

**Examples**

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-StarterCardsSetThree/samples/simple-event/assets/eventHero.png",
        "verticalAlignment": "Center"
      },
      "minHeight": "200px",
      "verticalContentAlignment": "Bottom",
      "items": [
        {
          "type": "TextBlock",
          "text": "MAY",
          "wrap": true,
          "color": "Light",
          "size": "Large"
        },
        {
          "type": "TextBlock",
          "text": "31",
          "wrap": true,
          "color": "Light",
          "size": "ExtraLarge",
          "spacing": "None",
          "weight": "Bolder"
        }
      ],
      "targetWidth": "Standard"
    },
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-StarterCardsSetThree/samples/simple-event/assets/eventHero.png",
        "verticalAlignment": "Center"
      },
      "minHeight": "200px",
      "verticalContentAlignment": "Bottom",
      "items": [
        {
          "type": "TextBlock",
          "text": "MAY",
          "wrap": true,
          "color": "Light",
          "size": "Large"
        },
        {
          "type": "TextBlock",
          "text": "31",
          "wrap": true,
          "color": "Light",
          "size": "ExtraLarge",
          "spacing": "None",
          "weight": "Bolder"
        }
      ],
      "targetWidth": "Wide"
    },
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-StarterCardsSetThree/samples/simple-event/assets/eventHero.png"
      },
      "minHeight": "200px",
      "verticalContentAlignment": "Bottom",
      "items": [
        {
          "type": "TextBlock",
          "text": "MAY",
          "wrap": true,
          "color": "Light",
          "size": "Large"
        },
        {
          "type": "TextBlock",
          "text": "31",
          "wrap": true,
          "color": "Light",
          "size": "ExtraLarge",
          "spacing": "None",
          "weight": "Bolder"
        }
      ],
      "targetWidth": "Narrow"
    },
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-StarterCardsSetThree/samples/simple-event/assets/eventHero.png"
      },
      "minHeight": "200px",
      "verticalContentAlignment": "Bottom",
      "items": [
        {
          "type": "TextBlock",
          "text": "MAY",
          "wrap": true,
          "color": "Light",
          "size": "Large"
        },
        {
          "type": "TextBlock",
          "text": "31",
          "wrap": true,
          "color": "Light",
          "size": "ExtraLarge",
          "spacing": "None",
          "weight": "Bolder"
        }
      ],
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "TextBlock",
      "text": "AI",
      "wrap": true,
      "size": "Small",
      "weight": "Bolder",
      "isSubtle": true
    },
    {
      "type": "TextBlock",
      "text": "AI Reality Check: Accessibility and Personalization ",
      "wrap": true,
      "weight": "Bolder",
      "spacing": "None"
    },
    {
      "type": "TextBlock",
      "text": "Fri, Aug 23, 12:00 PM",
      "wrap": true,
      "size": "Small",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "Online (Teams)",
      "wrap": true,
      "size": "Small",
      "isSubtle": true,
      "spacing": "None"
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.ShowCard",
          "card": {
            "type": "AdaptiveCard",
            "body": [
              {
                "type": "Input.Text",
                "id": "name",
                "placeholder": "Enter your full name",
                "label": "Name",
                "isRequired": true,
                "errorMessage": "A name is required"
              },
              {
                "type": "Input.Text",
                "id": "email",
                "placeholder": "Enter your email address",
                "label": "Email address",
                "isRequired": true,
                "errorMessage": "An email is required"
              },
              {
                "type": "ActionSet",
                "actions": [
                  {
                    "type": "Action.Submit",
                    "title": "Submit",
                    "style": "positive"
                  }
                ]
              }
            ],
            "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.5"
          },
          "title": "Reserve a seat",
          "style": "positive"
        }
      ]
    }
  ],
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json"
}
```

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Credit limit details",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "StellarEdge Outdoor Equipment",
              "wrap": true,
              "weight": "Bolder",
              "size": "Default"
            },
            {
              "type": "Badge",
              "text": "Approved",
              "size": "ExtraLarge",
              "style": "Good",
              "appearance": "Tint",
              "icon": "CheckmarkCircle"
            }
          ]
        }
      ],
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "StellarEdge Outdoor Equipment",
              "wrap": true,
              "size": "Default",
              "weight": "Bolder"
            }
          ]
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "Badge",
              "text": "Approved",
              "size": "ExtraLarge",
              "style": "Good",
              "appearance": "Tint",
              "icon": "CheckmarkCircle",
              "horizontalAlignment": "Right"
            }
          ]
        }
      ],
      "targetWidth": "AtLeast:Narrow"
    },
    {
      "type": "ColumnSet",
      "spacing": "ExtraLarge",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "Current Risk Class",
              "wrap": true,
              "size": "Small",
              "weight": "Bolder"
            },
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Icon",
                      "name": "CheckmarkCircle",
                      "style": "Filled",
                      "color": "Good",
                      "size": "xSmall"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "E (Low Risk)",
                      "wrap": true,
                      "spacing": "None",
                      "size": "Small"
                    }
                  ],
                  "spacing": "ExtraSmall"
                }
              ],
              "spacing": "ExtraSmall"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "Requested by",
              "wrap": true,
              "size": "Small",
              "weight": "Bolder"
            },
            {
              "type": "ColumnSet",
              "spacing": "ExtraSmall",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-requestor.png",
                      "style": "Person",
                      "size": "Small",
                      "width": "20px"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Mark Fullbright",
                      "wrap": true,
                      "size": "Small"
                    }
                  ],
                  "spacing": "Small"
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "ExtraLarge"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "Approvers",
              "wrap": true,
              "size": "Small",
              "weight": "Bolder"
            },
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-approver1.png",
                      "width": "20px",
                      "style": "Person"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-approver2.png",
                      "width": "20px",
                      "style": "Person"
                    }
                  ],
                  "spacing": "Small"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-approver3.png",
                      "width": "20px",
                      "style": "Person"
                    }
                  ],
                  "spacing": "Small"
                }
              ],
              "spacing": "ExtraSmall"
            }
          ],
          "spacing": "ExtraLarge"
        }
      ],
      "targetWidth": "AtLeast:Narrow"
    },
    {
      "type": "Container",
      "items": [
        {
          "type": "TextBlock",
          "text": "Current Risk Class",
          "wrap": true,
          "size": "Small",
          "weight": "Bolder",
          "color": "Default"
        },
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Icon",
                  "name": "CheckmarkCircle",
                  "size": "xSmall",
                  "style": "Filled",
                  "color": "Good"
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "spacing": "ExtraSmall",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "E (Low Risk)",
                  "wrap": true,
                  "size": "Small",
                  "color": "Default"
                }
              ]
            }
          ],
          "spacing": "ExtraSmall"
        },
        {
          "type": "TextBlock",
          "text": "Requested by",
          "wrap": true,
          "size": "Small",
          "weight": "Bolder",
          "color": "Default"
        },
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Image",
                  "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-requestor.png",
                  "width": "20px",
                  "style": "Person"
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Mark Fullbright",
                  "wrap": true,
                  "size": "Small",
                  "color": "Default"
                }
              ],
              "spacing": "Small"
            }
          ],
          "spacing": "ExtraSmall"
        },
        {
          "type": "TextBlock",
          "text": "Approvers",
          "wrap": true,
          "size": "Small",
          "weight": "Bolder",
          "color": "Default"
        },
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Image",
                  "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-approver1.png",
                  "width": "20px",
                  "style": "Person"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "spacing": "ExtraSmall",
              "items": [
                {
                  "type": "Image",
                  "width": "20px",
                  "style": "Person",
                  "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-approver2.png"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "spacing": "ExtraSmall",
              "items": [
                {
                  "type": "Image",
                  "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/refs/heads/Suz-ChartReveal/samples/insights/assets/avatar-approver3.png",
                  "width": "20px"
                }
              ]
            }
          ],
          "spacing": "ExtraSmall"
        }
      ],
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "TextBlock",
      "text": "Current Credit Management Data",
      "wrap": true,
      "spacing": "ExtraLarge",
      "size": "Small",
      "weight": "Bolder"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "Container",
              "targetWidth": "AtLeast:VeryNarrow",
              "items": [
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "stretch",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Current Credit Limit",
                          "wrap": true,
                          "size": "Small",
                          "color": "Default",
                          "isSubtle": true
                        },
                        {
                          "type": "TextBlock",
                          "text": "50.000.000 USD",
                          "wrap": true,
                          "spacing": "ExtraSmall",
                          "size": "Small",
                          "weight": "Bolder",
                          "color": "Default"
                        },
                        {
                          "type": "TextBlock",
                          "text": "Credit Exposure",
                          "wrap": true,
                          "size": "Small",
                          "color": "Default",
                          "isSubtle": true
                        },
                        {
                          "type": "TextBlock",
                          "text": "34.184 USD",
                          "wrap": true,
                          "spacing": "ExtraSmall",
                          "weight": "Bolder",
                          "size": "Small"
                        },
                        {
                          "type": "TextBlock",
                          "text": "Limit Utilization",
                          "wrap": true,
                          "size": "Small",
                          "color": "Default",
                          "isSubtle": true
                        },
                        {
                          "type": "TextBlock",
                          "text": "68,4",
                          "wrap": true,
                          "spacing": "ExtraSmall",
                          "size": "Small",
                          "weight": "Bolder",
                          "color": "Default"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "Current Credit Limit",
              "wrap": true,
              "size": "Small",
              "color": "Default",
              "isSubtle": true
            },
            {
              "type": "TextBlock",
              "text": "50.000.000 USD",
              "wrap": true,
              "spacing": "ExtraSmall",
              "size": "Small",
              "weight": "Bolder"
            }
          ]
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "Credit Exposure",
              "wrap": true,
              "size": "Small",
              "color": "Default",
              "isSubtle": true
            },
            {
              "type": "TextBlock",
              "text": "34.184 USD",
              "wrap": true,
              "spacing": "ExtraSmall",
              "size": "Small",
              "weight": "Bolder"
            }
          ]
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "Limit Utilization",
              "wrap": true,
              "size": "Small",
              "color": "Default",
              "isSubtle": true
            },
            {
              "type": "TextBlock",
              "text": "68,4",
              "wrap": true,
              "spacing": "ExtraSmall",
              "size": "Small",
              "weight": "Bolder"
            }
          ]
        }
      ],
      "targetWidth": "AtLeast:Narrow"
    },
    {
      "type": "ActionSet",
      "spacing": "ExtraLarge",
      "actions": [
        {
          "type": "Action.ShowCard",
          "title": "Show graphical data",
          "card": {
            "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.5",
            "body": [
              {
                "type": "ColumnSet",
                "columns": [
                  {
                    "type": "Column",
                    "width": 1,
                    "items": [
                      {
                        "type": "Chart.Donut",
                        "data": [
                          {
                            "legend": "Limit",
                            "value": 100
                          },
                          {
                            "legend": "Exposure",
                            "value": 700
                          },
                          {
                            "legend": "Utilization",
                            "value": 1600
                          }
                        ]
                      },
                      {
                        "type": "ActionSet",
                        "actions": [
                          {
                            "type": "Action.OpenUrl",
                            "title": "Open analyzer",
                            "url": "https://www.microsoft.com/en-us/"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### Using Action.ToggleVisibility

Action.ToggleVisibility allows elements within the card to be shown or hidden based on user interaction. This feature is perfect for creating a dynamic user experience without increasing the card's visual complexity.

#### When to use Action.ToggleVisibility

-   **Saving space:** For sections of content that can be collapsed by default, saving space. This is especially useful when targeting the very narrow layout.
-   **Interactive elements:** When you want to hide or reveal elements like buttons, images, or text blocks in response to user actions.

**Examples**

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Time off request",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder",
      "spacing": "None"
    },
    {
      "type": "Image",
      "url": "https://github.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/blob/pabloas/set-2/samples/time-off-request/assets/hero-image-default.png?raw=true",
      "style": "RoundedCorners",
      "targetWidth": "AtMost:Standard"
    },
    {
      "type": "Image",
      "targetWidth": "Wide",
      "url": "https://github.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/blob/pabloas/set-2/samples/time-off-request/assets/hero-wide.png?raw=true",
      "style": "RoundedCorners"
    },
    {
      "type": "TextBlock",
      "text": "Current balance",
      "wrap": true,
      "weight": "Bolder",
      "color": "Accent",
      "targetWidth": "AtLeast:Narrow"
    },
    {
      "type": "Container",
      "style": "accent",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "24h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "ExtraLarge",
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "HeartPulse",
                          "color": "Accent",
                          "size": "xSmall"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Sick Days",
                          "wrap": true,
                          "weight": "Bolder",
                          "size": "Default"
                        }
                      ],
                      "spacing": "ExtraSmall"
                    }
                  ],
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "Accrued at eight hours per three months.",
                  "wrap": true,
                  "isSubtle": true,
                  "size": "Small",
                  "spacing": "ExtraSmall"
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "12h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "ExtraLarge",
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "LeafOne",
                          "color": "Accent",
                          "size": "xSmall"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Wellness",
                          "wrap": true,
                          "weight": "Bolder"
                        }
                      ],
                      "spacing": "ExtraSmall"
                    }
                  ],
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "One time 5 day affordance for the year",
                  "wrap": true,
                  "isSubtle": true,
                  "size": "Small",
                  "spacing": "ExtraSmall"
                }
              ],
              "spacing": "ExtraLarge"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "32h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "ExtraLarge",
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "Beach",
                          "color": "Accent",
                          "size": "xSmall"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Paid time off",
                          "wrap": true,
                          "weight": "Bolder"
                        }
                      ],
                      "spacing": "ExtraSmall"
                    }
                  ],
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "Accrued at eight hours per one month.",
                  "wrap": true,
                  "isSubtle": true,
                  "size": "Small",
                  "spacing": "ExtraSmall"
                }
              ],
              "spacing": "ExtraLarge"
            }
          ]
        }
      ],
      "spacing": "ExtraSmall",
      "targetWidth": "Wide",
      "horizontalAlignment": "Center"
    },
    {
      "type": "Container",
      "style": "accent",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "24h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "ExtraLarge",
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "HeartPulse",
                          "color": "Accent",
                          "size": "xSmall"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Sick Days",
                          "wrap": true,
                          "weight": "Bolder"
                        }
                      ],
                      "spacing": "ExtraSmall"
                    }
                  ],
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "Accrued at eight hours per three months.",
                  "wrap": true,
                  "isSubtle": true,
                  "size": "Small",
                  "spacing": "ExtraSmall"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "12h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "ExtraLarge",
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "LeafOne",
                          "color": "Accent",
                          "size": "xSmall"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Wellness",
                          "wrap": true,
                          "weight": "Bolder"
                        }
                      ],
                      "spacing": "ExtraSmall"
                    }
                  ],
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "One time 5 day affordance for the year",
                  "wrap": true,
                  "isSubtle": true,
                  "size": "Small",
                  "spacing": "ExtraSmall"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "32h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "ExtraLarge",
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "Beach",
                          "color": "Accent",
                          "size": "xSmall"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Paid time off",
                          "wrap": true,
                          "weight": "Bolder"
                        }
                      ],
                      "spacing": "ExtraSmall"
                    }
                  ],
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "Accrued at eight hours per one month.",
                  "wrap": true,
                  "isSubtle": true,
                  "size": "Small",
                  "spacing": "ExtraSmall"
                }
              ]
            }
          ]
        }
      ],
      "spacing": "ExtraSmall",
      "targetWidth": "Standard"
    },
    {
      "type": "Container",
      "style": "accent",
      "showBorder": true,
      "roundedCorners": true,
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "Icon",
                  "name": "HeartPulse",
                  "color": "Accent",
                  "horizontalAlignment": "Center",
                  "size": "Small"
                },
                {
                  "type": "TextBlock",
                  "text": "24h",
                  "wrap": true,
                  "size": "Large",
                  "color": "Accent",
                  "weight": "Bolder",
                  "spacing": "None"
                },
                {
                  "type": "TextBlock",
                  "text": "Sick days",
                  "wrap": true,
                  "weight": "Bolder",
                  "spacing": "None",
                  "size": "Small",
                  "color": "Default"
                }
              ],
              "horizontalAlignment": "Center"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "Icon",
                  "name": "LeafOne",
                  "color": "Accent",
                  "horizontalAlignment": "Center",
                  "size": "Small"
                },
                {
                  "type": "TextBlock",
                  "text": "12h",
                  "wrap": true,
                  "size": "Large",
                  "color": "Accent",
                  "weight": "Bolder",
                  "spacing": "None"
                },
                {
                  "type": "TextBlock",
                  "text": "Wellness",
                  "wrap": true,
                  "weight": "Bolder",
                  "spacing": "None",
                  "size": "Small",
                  "color": "Default"
                }
              ],
              "horizontalAlignment": "Center"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "Icon",
                  "horizontalAlignment": "Center",
                  "name": "Beach",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextBlock",
                  "text": "32h",
                  "wrap": true,
                  "color": "Accent",
                  "size": "Large",
                  "weight": "Bolder",
                  "spacing": "None"
                },
                {
                  "type": "TextBlock",
                  "text": "Paid time off",
                  "wrap": true,
                  "weight": "Bolder",
                  "spacing": "None",
                  "size": "Small",
                  "color": "Default"
                }
              ],
              "horizontalAlignment": "Center"
            }
          ]
        }
      ],
      "spacing": "ExtraSmall",
      "targetWidth": "Narrow",
      "horizontalAlignment": "Center"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "View current balance",
                  "selectAction": {
                    "type": "Action.ToggleVisibility",
                    "targetElements": [
                      "vNarrowBalance",
                      "balanceDown",
                      "balanceUp"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "ChevronDown",
              "size": "xxSmall",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "vNarrowBalance",
                  "balanceDown",
                  "balanceUp"
                ]
              },
              "color": "Accent",
              "id": "balanceDown"
            },
            {
              "type": "Icon",
              "isVisible": false,
              "id": "balanceUp",
              "name": "ChevronUp",
              "size": "xxSmall",
              "color": "Accent",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "vNarrowBalance",
                  "balanceDown",
                  "balanceUp"
                ]
              }
            }
          ],
          "verticalContentAlignment": "Bottom",
          "spacing": "ExtraSmall"
        }
      ],
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "Container",
      "style": "accent",
      "bleed": true,
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "40px",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "24h",
                  "wrap": true,
                  "size": "Large",
                  "weight": "Bolder",
                  "color": "Accent"
                }
              ],
              "verticalContentAlignment": "Center"
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Icon",
                  "color": "Accent",
                  "name": "HeartPulse",
                  "size": "xSmall"
                }
              ],
              "verticalContentAlignment": "Center",
              "spacing": "Small"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Sick days",
                  "wrap": true,
                  "weight": "Bolder",
                  "size": "Small",
                  "color": "Default"
                }
              ],
              "verticalContentAlignment": "Center",
              "spacing": "ExtraSmall"
            }
          ],
          "horizontalAlignment": "Left"
        },
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "40px",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "12h",
                  "wrap": true,
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Large"
                }
              ],
              "verticalContentAlignment": "Center"
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Icon",
                  "color": "Accent",
                  "name": "LeafOne",
                  "size": "xSmall"
                }
              ],
              "verticalContentAlignment": "Center",
              "spacing": "Small"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Wellness",
                  "wrap": true,
                  "size": "Small",
                  "weight": "Bolder",
                  "color": "Default"
                }
              ],
              "verticalContentAlignment": "Center",
              "spacing": "ExtraSmall"
            }
          ],
          "spacing": "ExtraSmall"
        },
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "40px",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "32h",
                  "wrap": true,
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Large"
                }
              ],
              "verticalContentAlignment": "Center"
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Icon",
                  "color": "Accent",
                  "name": "Beach",
                  "size": "xSmall"
                }
              ],
              "verticalContentAlignment": "Center",
              "spacing": "Small"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Paid time off",
                  "wrap": true,
                  "size": "Small",
                  "weight": "Bolder",
                  "color": "Default"
                }
              ],
              "verticalContentAlignment": "Center",
              "spacing": "ExtraSmall"
            }
          ],
          "spacing": "ExtraSmall"
        }
      ],
      "spacing": "Small",
      "isVisible": false,
      "id": "vNarrowBalance",
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "Input.ChoiceSet",
      "label": "Reason for leave",
      "choices": [
        {
          "title": "Vacation",
          "value": "Vacation"
        },
        {
          "title": "Sick Day",
          "value": "Sick Day"
        },
        {
          "title": "Sick Leave",
          "value": "Sick Leave"
        },
        {
          "title": "Other",
          "value": "Other"
        }
      ],
      "value": "Vacation",
      "id": "leave_reason",
      "spacing": "Medium"
    },
    {
      "type": "Input.Toggle",
      "title": "All day (8hrs)",
      "id": "all_day",
      "spacing": "Small"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "verticalItemsAlignment": "Bottom",
          "minItemWidth": "0px",
          "itemFit": "Fill"
        }
      ],
      "items": [
        {
          "type": "Input.Date",
          "label": "Date",
          "id": "date",
          "isRequired": true,
          "errorMessage": "Date is required"
        }
      ]
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch"
        },
        {
          "type": "Column",
          "width": "stretch",
          "spacing": "Small",
          "verticalContentAlignment": "Bottom"
        }
      ]
    },
    {
      "type": "Input.Number",
      "label": "Estimated days off",
      "placeholder": "Select how many days",
      "id": "days_off",
      "spacing": "Medium"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "Add comments",
                  "selectAction": {
                    "type": "Action.ToggleVisibility",
                    "targetElements": [
                      "comments",
                      "chevronDown",
                      "chevronUp"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "ChevronDown",
              "size": "xxSmall",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "comments",
                  "chevronDown",
                  "chevronUp"
                ]
              },
              "color": "Accent",
              "id": "chevronDown"
            },
            {
              "type": "Icon",
              "isVisible": false,
              "id": "chevronUp",
              "name": "ChevronUp",
              "size": "xxSmall",
              "color": "Accent",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "comments",
                  "chevronDown",
                  "chevronUp"
                ]
              }
            }
          ],
          "verticalContentAlignment": "Bottom",
          "spacing": "ExtraSmall"
        }
      ]
    },
    {
      "type": "Input.Text",
      "placeholder": "Enter any comments",
      "id": "comments",
      "isVisible": false,
      "isMultiline": true
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Submit",
          "style": "positive"
        }
      ],
      "separator": true,
      "spacing": "ExtraLarge"
    }
  ]
}
```

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Your 'Travel to Seattle' expenses have been approved!",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "Container",
      "targetWidth": "VeryNarrow",
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Image",
                  "width": "44px",
                  "height": "44px",
                  "url": "https://github.com/OfficeDev/Microsoft-Teams-Card-Samples/blob/pabloas/set-2/samples/expense-report/assets/seattle.png?raw=true",
                  "style": "RoundedCorners",
                  "altText": ""
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Travel to Seattle",
                  "wrap": true,
                  "weight": "Bolder"
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Icon",
                          "name": "CheckmarkCircle",
                          "size": "xxSmall",
                          "color": "Good"
                        }
                      ],
                      "verticalContentAlignment": "Center"
                    },
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Approved",
                          "wrap": true,
                          "size": "Small",
                          "weight": "Bolder",
                          "color": "Good"
                        }
                      ],
                      "spacing": "None",
                      "verticalContentAlignment": "Center"
                    }
                  ],
                  "spacing": "ExtraSmall"
                }
              ]
            }
          ]
        },
        {
          "type": "TextBlock",
          "text": "Fri, 7 Aug 2024 - Tue, 21 Aug 2024",
          "wrap": true,
          "size": "Small",
          "isSubtle": false,
          "color": "Default",
          "weight": "Bolder",
          "spacing": "ExtraSmall"
        },
        {
          "type": "TextBlock",
          "text": "Business trip to meet client to sign final contracts.",
          "wrap": true,
          "spacing": "ExtraSmall",
          "size": "Small",
          "isSubtle": true
        }
      ],
      "separator": true,
      "spacing": "Medium"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Image",
              "width": "44px",
              "height": "44px",
              "url": "https://github.com/OfficeDev/Microsoft-Teams-Card-Samples/blob/pabloas/set-2/samples/expense-report/assets/seattle.png?raw=true",
              "style": "RoundedCorners",
              "altText": ""
            }
          ]
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Travel to Seattle",
                      "wrap": true,
                      "weight": "Bolder"
                    }
                  ],
                  "verticalContentAlignment": "Bottom"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Icon",
                      "name": "CheckmarkCircle",
                      "size": "xxSmall",
                      "color": "Good"
                    }
                  ],
                  "verticalContentAlignment": "Center"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Approved",
                      "wrap": true,
                      "size": "Small",
                      "weight": "Bolder",
                      "color": "Good"
                    }
                  ],
                  "spacing": "None",
                  "verticalContentAlignment": "Center"
                }
              ]
            },
            {
              "type": "TextBlock",
              "text": "Fri, 7 Aug 2024 - Tue, 21 Aug 2024",
              "wrap": true,
              "size": "Small",
              "isSubtle": false,
              "weight": "Bolder",
              "color": "Default",
              "spacing": "ExtraSmall"
            },
            {
              "type": "TextBlock",
              "text": "Business trip to meet client to sign final contracts.",
              "wrap": true,
              "spacing": "ExtraSmall",
              "isSubtle": true,
              "size": "Small"
            }
          ]
        }
      ],
      "targetWidth": "AtLeast:Narrow",
      "spacing": "Medium"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "Receipt",
              "size": "xxSmall"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "2",
              "wrap": true,
              "size": "Small",
              "weight": "Bolder",
              "color": "Default"
            }
          ],
          "spacing": "ExtraSmall",
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "Comment",
              "size": "xxSmall"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "4",
              "wrap": true,
              "size": "Small",
              "weight": "Bolder",
              "color": "Default"
            }
          ],
          "spacing": "ExtraSmall",
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "$790.00",
              "wrap": true,
              "weight": "Bolder",
              "size": "Small"
            }
          ],
          "spacing": "Medium",
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "ChevronDown",
              "size": "xSmall",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "reimbursement",
                  "chevronUp",
                  "chevronDown"
                ]
              },
              "id": "chevronDown"
            },
            {
              "type": "Icon",
              "name": "ChevronUp",
              "size": "xSmall",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "reimbursement",
                  "chevronUp",
                  "chevronDown"
                ]
              },
              "id": "chevronUp",
              "isVisible": false
            }
          ],
          "spacing": "ExtraSmall"
        }
      ],
      "horizontalAlignment": "Right",
      "spacing": "ExtraLarge",
      "separator": true
    },
    {
      "type": "Container",
      "style": "emphasis",
      "roundedCorners": true,
      "showBorder": true,
      "items": [
        {
          "type": "TextBlock",
          "text": "Reimbursement #238-29",
          "wrap": true,
          "size": "Small"
        },
        {
          "type": "Container",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto"
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Receipts and itineraries",
                      "wrap": true,
                      "size": "Small"
                    },
                    {
                      "type": "TextBlock",
                      "text": "$890.00",
                      "wrap": true,
                      "targetWidth": "VeryNarrow",
                      "weight": "Bolder",
                      "spacing": "ExtraSmall",
                      "size": "Small"
                    }
                  ],
                  "spacing": "Small"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "horizontalAlignment": "Right",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "$890.00",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "spacing": "Small"
                }
              ]
            },
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto"
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Non-reimbursable amount",
                      "wrap": true,
                      "size": "Small"
                    },
                    {
                      "type": "TextBlock",
                      "text": "$100.00",
                      "wrap": true,
                      "weight": "Bolder",
                      "spacing": "ExtraSmall",
                      "targetWidth": "VeryNarrow",
                      "size": "Small"
                    }
                  ],
                  "spacing": "Small"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "horizontalAlignment": "Right",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "$100.00",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "spacing": "Small"
                }
              ],
              "separator": true
            },
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto"
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Cash advance",
                      "wrap": true,
                      "size": "Small"
                    },
                    {
                      "type": "TextBlock",
                      "text": "$50.00",
                      "wrap": true,
                      "spacing": "ExtraSmall",
                      "weight": "Bolder",
                      "targetWidth": "VeryNarrow",
                      "size": "Small"
                    }
                  ],
                  "spacing": "Small"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "horizontalAlignment": "Right",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "$50.00",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "spacing": "Small"
                }
              ],
              "separator": true
            },
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto"
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "CheckmarkCircle",
                              "size": "xxSmall",
                              "color": "Good",
                              "spacing": "None"
                            }
                          ],
                          "targetWidth": "AtLeast:Narrow",
                          "spacing": "None"
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Total reimbursement",
                              "wrap": true,
                              "weight": "Bolder",
                              "size": "Small",
                              "spacing": "None"
                            }
                          ],
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "spacing": "None"
                    },
                    {
                      "type": "ColumnSet",
                      "spacing": "ExtraSmall",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "CheckmarkCircle",
                              "size": "xxSmall",
                              "color": "Good"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "$790.00",
                              "wrap": true,
                              "weight": "Bolder",
                              "size": "Small"
                            }
                          ],
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "targetWidth": "VeryNarrow"
                    }
                  ],
                  "spacing": "Small"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "horizontalAlignment": "Right",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "$790.00",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "spacing": "Small"
                }
              ],
              "separator": true
            }
          ],
          "style": "default",
          "roundedCorners": true
        }
      ],
      "id": "reimbursement",
      "spacing": "Small",
      "isVisible": false
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Image",
              "style": "Person",
              "url": "https://github.com/OfficeDev/Microsoft-Teams-Card-Samples/blob/pabloas/set-2/samples/expense-report/assets/Avatar.png?raw=true",
              "width": "24px",
              "height": "24px",
              "altText": ""
            }
          ]
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "Approved by ",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": "Mona Kane",
                  "size": "Small",
                  "weight": "Bolder"
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center"
        }
      ],
      "spacing": "ExtraLarge",
      "separator": true
    },
    {
      "type": "ActionSet",
      "spacing": "Large",
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View statement",
          "url": "https://github.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples"
        }
      ]
    }
  ]
}
```

```json
{
  "type": "AdaptiveCard",
  "speak": "Apricot-chile glazed chicken recipe",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Image",
      "altText": "Image of Apricot-Chile Glazed Chicken",
      "size": "Stretch",
      "url": "https://onedrive.live.com/embed?resid=EBE108865B49234E%21142072&authkey=%21AIH0yXnxgH5RoCY&width=840&height=360",
      "style": "RoundedCorners"
    },
    {
      "type": "TextBlock",
      "text": "Apricot-Chile Glazed Chicken",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder",
      "color": "Default"
    },
    {
      "type": "TextBlock",
      "text": "15 min · 215 calories · 29g protein",
      "wrap": true,
      "spacing": "None",
      "fontType": "Default",
      "size": "Small",
      "weight": "Default",
      "isSubtle": true,
      "color": "Default"
    },
    {
      "type": "TextBlock",
      "id": "truncatedText",
      "text": "This sweet apricot-chile glazed broccoli recipe marries fruit and chiles to make this dish mouthwateringly special. Use organic jam in place of preserves for a smoother, prettier glaze if you are into spicy food, then this will be right up your alley.\n\nThe recipe calls for 1/4 cup of the chili sauce which gives the chicken quite a bite on the palate. But for all you heat lovers, it's definitely a good feel.",
      "wrap": true,
      "maxLines": 3
    },
    {
      "type": "TextBlock",
      "id": "fullText1",
      "text": "This sweet apricot-chile glazed broccoli recipe marries fruit and chiles to make this dish mouthwateringly special. Use organic jam in place of preserves for a smoother, prettier glaze if you are into spicy food, then this will be right up your alley.",
      "wrap": true,
      "isVisible": false
    },
    {
      "type": "TextBlock",
      "id": "fullText2",
      "text": "The recipe calls for 1/4 cup of the chili sauce which gives the chicken quite a bite on the palate. But for all you heat lovers, it's definitely a good feel.",
      "wrap": true,
      "isVisible": false
    },
    {
      "type": "RichTextBlock",
      "id": "showMore",
      "targetWidth": "AtLeast:Narrow",
      "inlines": [
        {
          "type": "TextRun",
          "text": "Show more",
          "selectAction": {
            "type": "Action.ToggleVisibility",
            "targetElements": [
              "truncatedText",
              "fullText1",
              "fullText2",
              "showMore",
              "showLess"
            ]
          }
        }
      ]
    },
    {
      "type": "RichTextBlock",
      "id": "showLess",
      "targetWidth": "AtLeast:Narrow",
      "inlines": [
        {
          "type": "TextRun",
          "text": "Show less",
          "selectAction": {
            "type": "Action.ToggleVisibility",
            "targetElements": [
              "truncatedText",
              "fullText1",
              "fullText2",
              "showMore",
              "showLess"
            ]
          }
        }
      ],
      "isVisible": false
    },
    {
      "type": "ActionSet",
      "targetWidth": "AtLeast:Narrow",
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View recipe",
          "url": "https://www.tasteofhome.com/recipes/spicy-apricot-glazed-chicken/"
        },
        {
          "type": "Action.Submit",
          "title": "Add to cart",
          "iconUrl": "icon:Cart"
        }
      ],
      "spacing": "Medium"
    },
    {
      "type": "ActionSet",
      "targetWidth": "VeryNarrow",
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View recipe",
          "url": "https://www.tasteofhome.com/recipes/spicy-apricot-glazed-chicken/"
        },
        {
          "type": "Action.Submit",
          "iconUrl": "icon:Cart"
        }
      ],
      "spacing": "Medium"
    }
  ]
}
```

* * *

### Design considerations

-   **User experience:** Think about the user's journey and how these features can simplify or enhance their interaction with the card.
-   **Clarity:** Ensure that the actions are intuitive and clearly indicate their purpose (e.g., use icons or text labels like “More Details” or “Show/Hide”).
-   **Responsiveness:** Test your card on different devices and screen sizes to ensure the features work seamlessly.

By carefully considering when and how to use Action.ShowCard and Action.ToggleVisibility, you can create engaging and efficient Adaptive Card designs that cater to various user needs.