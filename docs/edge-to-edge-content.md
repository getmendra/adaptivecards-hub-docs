---
title: "Edge-to-edge content"
source: "https://adaptivecards.microsoft.com/?topic=edge-to-edge-content"
topic: "edge-to-edge-content"
---

Edge-to-edge content

Elements can span the full width or height of an Adaptive Card for enhanced visual impact.

Edge-to-edge content in Adaptive Cards lets certain elements span the full width or height of the card. This creates a more immersive and visually engaging experience. This feature is particularly useful for creating impactful designs or highlighting specific information.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Order #1292",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "Thank you for your order. We will ship as soon as possible. Please see below for a summary of your order and item details.",
      "wrap": true,
      "spacing": "ExtraSmall"
    },
    {
      "type": "Container",
      "bleed": true,
      "style": "emphasis",
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
                  "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/laptop.png",
                  "width": "190px"
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "Badge",
                  "text": "Pending",
                  "style": "Subtle",
                  "size": "Large",
                  "spacing": "None"
                },
                {
                  "type": "TextBlock",
                  "text": "Business Laptop 6",
                  "wrap": true,
                  "size": "Large",
                  "weight": "Bolder",
                  "spacing": "Small"
                },
                {
                  "type": "TextBlock",
                  "text": "Not just faster. Smarter. The AI-accelerated Surface Laptop 7th Edition, a Bizagent + PC, puts next-generation performance and Bizagent + experiences at your fingertips. With cutting-edge technology and seamless integration, it empowers you to achieve more with less effort. Experience unparalleled productivity and innovation with every use.",
                  "wrap": true,
                  "id": "truncatedText",
                  "maxLines": 3
                },
                {
                  "type": "TextBlock",
                  "text": "Not just faster. Smarter. The AI-accelerated Surface Laptop 7th Edition, a Bizagent + PC, puts next-generation performance and Bizagent + experiences at your fingertips. With cutting-edge technology and seamless integration, it empowers you to achieve more with less effort. Experience unparalleled productivity and innovation with every use.",
                  "wrap": true,
                  "isVisible": false,
                  "id": "fullText"
                },
                {
                  "type": "RichTextBlock",
                  "id": "showMore",
                  "spacing": "ExtraSmall",
                  "inlines": [
                    {
                      "type": "TextRun",
                      "text": "Show more",
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "truncatedText",
                          "fullText",
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
                  "spacing": "ExtraSmall",
                  "inlines": [
                    {
                      "type": "TextRun",
                      "text": "Show less",
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "truncatedText",
                          "fullText",
                          "showMore",
                          "showLess"
                        ]
                      }
                    }
                  ],
                  "isVisible": false
                },
                {
                  "type": "Container",
                  "items": [
                    {
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "90px",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Order date",
                              "wrap": true,
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
                              "text": "May 21, 2025",
                              "wrap": true
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "Container",
                      "items": [
                        {
                          "type": "ColumnSet",
                          "columns": [
                            {
                              "type": "Column",
                              "width": "90px",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "Delivery est.",
                                  "wrap": true,
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
                                  "text": "May 29, 2025",
                                  "wrap": true
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "ColumnSet",
                          "columns": [
                            {
                              "type": "Column",
                              "width": "90px",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "Ordered by",
                                  "wrap": true,
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "Column",
                              "width": "auto",
                              "items": [
                                {
                                  "type": "Image",
                                  "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/avatar_small.png",
                                  "width": "20px",
                                  "height": "20px"
                                }
                              ]
                            },
                            {
                              "type": "Column",
                              "width": "stretch",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "Ray Tanaka",
                                  "wrap": true
                                }
                              ],
                              "spacing": "Small"
                            }
                          ],
                          "spacing": "Small"
                        }
                      ],
                      "spacing": "Small"
                    }
                  ],
                  "targetWidth": "Standard"
                },
                {
                  "type": "Container",
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
                              "text": "Order date",
                              "wrap": true,
                              "weight": "Bolder"
                            },
                            {
                              "type": "TextBlock",
                              "text": "May 21, 2025",
                              "wrap": true,
                              "spacing": "ExtraSmall"
                            },
                            {
                              "type": "TextBlock",
                              "text": "Estimated delivery",
                              "wrap": true,
                              "weight": "Bolder"
                            },
                            {
                              "type": "TextBlock",
                              "text": "May 29, 2025",
                              "wrap": true,
                              "spacing": "ExtraSmall"
                            },
                            {
                              "type": "TextBlock",
                              "text": "Ordered by",
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
                                      "type": "Image",
                                      "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/avatar_small.png",
                                      "width": "20px",
                                      "height": "20px"
                                    }
                                  ]
                                },
                                {
                                  "type": "Column",
                                  "width": "stretch",
                                  "items": [
                                    {
                                      "type": "TextBlock",
                                      "text": "Ray Tanaka",
                                      "wrap": true
                                    }
                                  ],
                                  "spacing": "Small"
                                }
                              ],
                              "spacing": "ExtraSmall"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "isVisible": false
                },
                {
                  "type": "Container",
                  "items": [
                    {
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "135px",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Order date",
                              "wrap": true,
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
                              "text": "May 21, 2025",
                              "wrap": true
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "135px",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Estimated delivery",
                              "wrap": true,
                              "weight": "Bolder",
                              "spacing": "ExtraSmall",
                              "maxLines": 2
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "May 29, 2025",
                              "wrap": true,
                              "spacing": "ExtraSmall"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "135px",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Ordered by",
                              "wrap": true,
                              "weight": "Bolder",
                              "spacing": "ExtraSmall"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Image",
                              "style": "Person",
                              "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/avatar_small.png",
                              "width": "20px",
                              "height": "20px"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Ray Tanaka",
                              "wrap": true
                            }
                          ],
                          "spacing": "Small"
                        }
                      ]
                    }
                  ],
                  "targetWidth": "Wide"
                }
              ]
            }
          ]
        }
      ],
      "targetWidth": "AtLeast:Standard"
    },
    {
      "type": "Container",
      "bleed": true,
      "style": "emphasis",
      "items": [
        {
          "type": "Image",
          "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/laptop.png",
          "width": "190px"
        },
        {
          "type": "Badge",
          "text": "Pending",
          "size": "Large",
          "style": "Subtle"
        },
        {
          "type": "TextBlock",
          "text": "Business Laptop 6",
          "wrap": true,
          "size": "Large",
          "weight": "Bolder"
        },
        {
          "type": "TextBlock",
          "text": "Not just faster. Smarter. The AI-accelerated Surface Laptop 7th Edition, a Bizagent + PC, puts next-generation performance and Bizagent + experiences...",
          "wrap": true,
          "id": "truncatedText2",
          "maxLines": 3
        },
        {
          "type": "TextBlock",
          "text": "Not just faster. Smarter. The AI-accelerated Surface Laptop 7th Edition, a Bizagent + PC, puts next-generation performance and Bizagent + experiences at your fingertips. With cutting-edge technology and seamless integration, it empowers you to achieve more with less effort. Experience unparalleled productivity and innovation with every use.",
          "wrap": true,
          "isVisible": false,
          "id": "fullText2"
        },
        {
          "type": "RichTextBlock",
          "id": "showMore2",
          "spacing": "ExtraSmall",
          "inlines": [
            {
              "type": "TextRun",
              "text": "Show more",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "truncatedText2",
                  "fullText2",
                  "showMore2",
                  "showLess2"
                ]
              }
            }
          ]
        },
        {
          "type": "RichTextBlock",
          "id": "showLess2",
          "spacing": "ExtraSmall",
          "inlines": [
            {
              "type": "TextRun",
              "text": "Show less",
              "selectAction": {
                "type": "Action.ToggleVisibility",
                "targetElements": [
                  "truncatedText2",
                  "fullText2",
                  "showMore2",
                  "showLess2"
                ]
              }
            }
          ],
          "isVisible": false
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
                  "text": "Order date",
                  "wrap": true,
                  "weight": "Bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "May 21, 2025",
                  "wrap": true,
                  "spacing": "None"
                },
                {
                  "type": "TextBlock",
                  "text": "Estimated delivery",
                  "wrap": true,
                  "weight": "Bolder",
                  "spacing": "Small"
                },
                {
                  "type": "TextBlock",
                  "text": "May 29, 2025",
                  "wrap": true,
                  "spacing": "None"
                },
                {
                  "type": "TextBlock",
                  "text": "Ordered by",
                  "wrap": true,
                  "weight": "Bolder",
                  "spacing": "Small"
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
                          "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/avatar_small.png",
                          "width": "20px",
                          "height": "20px"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "stretch",
                      "spacing": "Small",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Ray Tanaka",
                          "wrap": true
                        }
                      ]
                    }
                  ],
                  "spacing": "ExtraSmall"
                }
              ]
            }
          ],
          "targetWidth": "VeryNarrow",
          "spacing": "Large"
        },
        {
          "type": "ColumnSet",
          "spacing": "Large",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Order date",
                  "wrap": true,
                  "weight": "Bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "Estimated delivery",
                  "wrap": true,
                  "weight": "Bolder",
                  "spacing": "ExtraSmall"
                },
                {
                  "type": "TextBlock",
                  "text": "Ordered by",
                  "wrap": true,
                  "spacing": "ExtraSmall",
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
                  "text": "May 21, 2025",
                  "wrap": true
                },
                {
                  "type": "TextBlock",
                  "text": "May 29, 2025",
                  "wrap": true,
                  "spacing": "ExtraSmall"
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
                          "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Product_showcase/avatar_small.png",
                          "width": "20px",
                          "height": "20px"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "stretch",
                      "items": [
                        {
                          "type": "TextBlock",
                          "text": "Ray Tanaka",
                          "wrap": true
                        }
                      ],
                      "spacing": "Small"
                    }
                  ],
                  "spacing": "ExtraSmall"
                }
              ]
            }
          ],
          "targetWidth": "Narrow"
        }
      ],
      "targetWidth": "AtMost:Narrow"
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View order",
          "id": "order",
          "url": "https://adaptivecards.microsoft.com/"
        },
        {
          "type": "Action.OpenUrl",
          "title": "Chat with agent",
          "iconUrl": "icon:Chat",
          "url": "https://adaptivecards.microsoft.com/"
        }
      ]
    }
  ]
}
```

## Why use edge-to-edge content?

**Edge-to-edge content is ideal for:**

-   **Creating impactful visuals:** Full-width backgrounds and images draw attention.
-   **Segmenting sections:** Extending containers or columns to visually separate parts of the card makes it easier to read.
-   **Highlighting information:** Edge-to-edge sections can act as banners or callouts.

To create edge-to-edge content, use the bleed property on container elements alongside the backgroundImage or style properties, which both cause the container to have a background. When `bleed` is set to `true`, that background will extend into the container's parent’s padding, creating a cohesive and visually impactful design.

## Examples

### `bleed` combined with `backgroundImage`

**Single hero image**

-   The following example shows a background image with a text overlay, creating a hero banner feel. Use this common pattern to highlight key messages or announcements with a visually impactful design.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "minHeight": "300px",
  "body": [
    {
      "type": "Container",
      "targetWidth": "VeryNarrow",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Editorial_2/hero.png",
        "horizontalAlignment": "Center",
        "verticalAlignment": "Center"
      },
      "minHeight": "230px",
      "items": [
        {
          "type": "TextBlock",
          "text": "CODING SERIES",
          "wrap": true,
          "weight": "Bolder",
          "size": "Small"
        }
      ],
      "verticalContentAlignment": "Bottom"
    },
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Editorial_2/hero.png",
        "verticalAlignment": "Center"
      },
      "targetWidth": "Wide",
      "minHeight": "200px",
      "items": [
        {
          "type": "TextBlock",
          "text": "CODING SERIES",
          "wrap": true,
          "weight": "Bolder"
        }
      ],
      "verticalContentAlignment": "Top"
    },
    {
      "type": "Container",
      "backgroundImage": {
        "horizontalAlignment": "Center",
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Editorial_2/hero.png"
      },
      "bleed": true,
      "minHeight": "290px",
      "items": [
        {
          "type": "TextBlock",
          "text": "CODING SERIES",
          "wrap": true,
          "weight": "Bolder",
          "color": "Dark"
        }
      ],
      "verticalContentAlignment": "Bottom",
      "targetWidth": "Standard"
    },
    {
      "type": "Container",
      "backgroundImage": {
        "horizontalAlignment": "Center",
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/Editorial_2/hero.png"
      },
      "bleed": true,
      "minHeight": "230px",
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "8px"
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "CODING SERIES",
                  "wrap": true,
                  "weight": "Bolder",
                  "color": "Dark",
                  "spacing": "None"
                }
              ],
              "spacing": "None"
            }
          ]
        },
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "stretch"
            }
          ]
        }
      ],
      "verticalContentAlignment": "Bottom",
      "targetWidth": "Narrow"
    },
    {
      "type": "TextBlock",
      "text": "Master the Art of Coding",
      "wrap": true,
      "horizontalAlignment": "Center",
      "size": "ExtraLarge",
      "weight": "Bolder",
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "TextBlock",
      "text": "Master the Art of Coding",
      "wrap": true,
      "horizontalAlignment": "Center",
      "size": "ExtraLarge",
      "weight": "Bolder",
      "targetWidth": "AtLeast:Narrow",
      "spacing": "Large"
    },
    {
      "type": "TextBlock",
      "text": "Join our coding series to explore interactive classes and insightful articles that help you build your coding skills from the ground up.",
      "wrap": true,
      "horizontalAlignment": "Center",
      "size": "Large",
      "color": "Default",
      "isSubtle": true,
      "targetWidth": "AtLeast:Narrow"
    },
    {
      "type": "TextBlock",
      "text": "Join our coding series to explore interactive classes and insightful articles that help you build your coding skills from the ground up.",
      "wrap": true,
      "horizontalAlignment": "Center",
      "color": "Default",
      "isSubtle": true,
      "targetWidth": "VeryNarrow",
      "spacing": "Small"
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
          "width": "auto",
          "items": [
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Register",
                  "url": "https://adaptivecards.microsoft.com/",
                  "style": "positive"
                }
              ]
            }
          ],
          "spacing": "None"
        },
        {
          "type": "Column",
          "width": "stretch",
          "spacing": "None"
        }
      ],
      "horizontalAlignment": "Center",
      "spacing": "Large"
    }
  ]
}
```

**Multiple background images**

-   The following example shows multiple background images on a card to visually separate sections. This design is useful for presenting different options or categories. Each one has its own background image to visually define the sections.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Top hotel suggestions for Woodinville",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "Fri, 8 Dec 2023 - Thu, 14 Dec",
      "wrap": true,
      "spacing": "ExtraSmall",
      "size": "Small",
      "color": "Default",
      "isSubtle": true
    },
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/hotel_suggestions/hotel1.png",
        "horizontalAlignment": "Center",
        "verticalAlignment": "Center"
      },
      "minHeight": "134px"
    },
    {
      "type": "Container",
      "bleed": true,
      "style": "emphasis",
      "spacing": "None",
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "stretch",
              "verticalContentAlignment": "Center",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Alpine Ski House",
                  "wrap": true,
                  "size": "Large"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Rating",
                  "max": 1,
                  "value": 4.5,
                  "color": "Marigold",
                  "size": "Medium"
                }
              ],
              "verticalContentAlignment": "Center"
            }
          ]
        },
        {
          "type": "TextBlock",
          "text": "123 Main Avenue North, South Lake, Woodinville",
          "wrap": true,
          "size": "Small",
          "spacing": "Small"
        },
        {
          "type": "TextBlock",
          "text": "Distance from center: 11.8km",
          "wrap": true,
          "spacing": "None",
          "size": "Small"
        },
        {
          "type": "TextBlock",
          "text": "Single room · Free cancelation  ",
          "wrap": true,
          "size": "Small",
          "weight": "Bolder"
        },
        {
          "type": "Container",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "LockClosedKey",
                                      "size": "xxSmall"
                                    }
                                  ]
                                },
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "TextBlock",
                                      "text": "Safe box",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ],
                                  "spacing": "ExtraSmall"
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "VehicleCarParking",
                                      "size": "xxSmall"
                                    }
                                  ]
                                },
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "spacing": "ExtraSmall",
                                  "items": [
                                    {
                                      "type": "TextBlock",
                                      "text": "Paid parking",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "Dumbbell",
                                      "size": "xxSmall"
                                    }
                                  ]
                                },
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "spacing": "Small",
                                  "items": [
                                    {
                                      "type": "TextBlock",
                                      "text": "Gym",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "Food",
                                      "size": "xxSmall"
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
                                      "text": "Restaurant",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
                                }
                              ]
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
          "spacing": "Small",
          "targetWidth": "AtLeast:Standard",
          "bleed": true
        },
        {
          "type": "Container",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
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
                              "name": "LockClosedKey",
                              "size": "xxSmall"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "spacing": "ExtraSmall",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Safe box",
                              "wrap": true,
                              "size": "Small",
                              "color": "Default",
                              "isSubtle": true
                            }
                          ]
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
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "VehicleCarParking",
                              "size": "xxSmall"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "spacing": "ExtraSmall",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Paid parking",
                              "wrap": true,
                              "size": "Small",
                              "color": "Default",
                              "isSubtle": true
                            }
                          ]
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
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "Dumbbell",
                              "size": "xxSmall"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "spacing": "Small",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Gym",
                              "wrap": true,
                              "size": "Small",
                              "color": "Default",
                              "isSubtle": true
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
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
                      "name": "Food",
                      "size": "xxSmall"
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
                      "text": "Restaurant",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
            }
          ],
          "targetWidth": "Narrow",
          "spacing": "Small"
        },
        {
          "type": "Container",
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
                      "name": "LockClosedKey",
                      "size": "xxSmall"
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
                      "text": "Safe box",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ]
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
                      "name": "VehicleCarParking",
                      "size": "xxSmall"
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
                      "text": "Paid parking",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
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
                      "name": "Dumbbell",
                      "size": "xxSmall"
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
                      "text": "Gym",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
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
                      "name": "Food",
                      "size": "xxSmall"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Restaurant",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ],
                  "spacing": "ExtraSmall"
                }
              ],
              "spacing": "Small"
            }
          ],
          "targetWidth": "VeryNarrow",
          "spacing": "Small"
        },
        {
          "type": "Container",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "ActionSet",
                      "actions": [
                        {
                          "type": "Action.OpenUrl",
                          "title": "Book",
                          "url": "https://adaptivecards.microsoft.com/"
                        },
                        {
                          "type": "Action.OpenUrl",
                          "title": "Share",
                          "iconUrl": "icon:Share",
                          "url": "https://adaptivecards.microsoft.com/"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "From $1,634.87 ",
                      "wrap": true,
                      "size": "Large"
                    }
                  ],
                  "horizontalAlignment": "Right"
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center",
          "targetWidth": "AtLeast:Narrow",
          "spacing": "Large"
        },
        {
          "type": "Container",
          "items": [
            {
              "type": "TextBlock",
              "text": "From $1,634.87 ",
              "wrap": true,
              "size": "Large",
              "weight": "Default",
              "spacing": "Large"
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Book",
                  "url": "https://adaptivecards.microsoft.com/"
                },
                {
                  "type": "Action.OpenUrl",
                  "title": "Share",
                  "iconUrl": "icon:Share",
                  "url": "https://adaptivecards.microsoft.com/"
                }
              ],
              "spacing": "Small"
            }
          ],
          "targetWidth": "VeryNarrow",
          "spacing": "Large"
        }
      ]
    },
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/hotel_suggestions/hotel2.png",
        "verticalAlignment": "Bottom"
      },
      "id": "hotel2",
      "minHeight": "134px",
      "spacing": "None"
    },
    {
      "type": "Container",
      "bleed": true,
      "style": "emphasis",
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
                  "text": "Munson's Pickles and Preserves Farm",
                  "wrap": true,
                  "size": "Large"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Rating",
                  "max": 1,
                  "value": 4,
                  "color": "Marigold",
                  "size": "Medium"
                }
              ],
              "horizontalAlignment": "Right"
            }
          ]
        },
        {
          "type": "TextBlock",
          "text": "213 Fifth Avenue, North Lake, Woodinville ",
          "wrap": true,
          "size": "Small",
          "spacing": "Small"
        },
        {
          "type": "TextBlock",
          "text": "Distance from center: 12.2km",
          "wrap": true,
          "spacing": "None",
          "size": "Small"
        },
        {
          "type": "TextBlock",
          "text": "Single room · Breakfast included · Free cancelation  ",
          "wrap": true,
          "size": "Small",
          "weight": "Bolder"
        },
        {
          "type": "Container",
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
                      "name": "LockClosedKey",
                      "size": "xxSmall"
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
                      "text": "Safe box",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
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
                      "name": "VehicleCarParking",
                      "size": "xxSmall"
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
                      "text": "Paid parking",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
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
                      "name": "Dumbbell",
                      "size": "xxSmall"
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
                      "text": "Gym",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
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
                      "name": "Food",
                      "size": "xxSmall"
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
                      "text": "Restaurant",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
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
                      "name": "AnimalDog",
                      "size": "xxSmall"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Pet friendly",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ],
                  "spacing": "ExtraSmall"
                }
              ],
              "spacing": "Small"
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
                      "name": "DrinkBottleOff",
                      "size": "xxSmall"
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
                      "text": "Alcohol-free",
                      "wrap": true,
                      "size": "Small",
                      "color": "Default",
                      "isSubtle": true
                    }
                  ]
                }
              ],
              "spacing": "Small"
            }
          ],
          "targetWidth": "VeryNarrow",
          "spacing": "Small"
        },
        {
          "type": "Container",
          "bleed": true,
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "LockClosedKey",
                                      "size": "xxSmall"
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
                                      "text": "Safe box",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "VehicleCarParking",
                                      "size": "xxSmall"
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
                                      "text": "Paid parking",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "Dumbbell",
                                      "size": "xxSmall"
                                    }
                                  ]
                                },
                                {
                                  "type": "Column",
                                  "width": "stretch",
                                  "spacing": "Small",
                                  "items": [
                                    {
                                      "type": "TextBlock",
                                      "text": "Gym",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "Food",
                                      "size": "xxSmall"
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
                                      "text": "Restaurant",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "ColumnSet",
              "columns": [
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "AnimalDog",
                                      "size": "xxSmall"
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
                                      "text": "Pet friendly",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "DrinkBottleOff",
                                      "size": "xxSmall"
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
                                      "text": "Alcohol-free",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
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
              "spacing": "Small"
            }
          ],
          "targetWidth": "AtLeast:Standard"
        },
        {
          "type": "Container",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
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
                                              "name": "LockClosedKey",
                                              "size": "xxSmall"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "Column",
                                          "width": "auto",
                                          "spacing": "ExtraSmall",
                                          "items": [
                                            {
                                              "type": "TextBlock",
                                              "text": "Safe box",
                                              "wrap": true,
                                              "size": "Small",
                                              "color": "Default",
                                              "isSubtle": true
                                            }
                                          ]
                                        }
                                      ]
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
                                          "width": "auto",
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
                                                      "name": "VehicleCarParking",
                                                      "size": "xxSmall"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "type": "Column",
                                                  "width": "auto",
                                                  "spacing": "ExtraSmall",
                                                  "items": [
                                                    {
                                                      "type": "TextBlock",
                                                      "text": "Paid parking",
                                                      "wrap": true,
                                                      "size": "Small",
                                                      "color": "Default",
                                                      "isSubtle": true
                                                    }
                                                  ]
                                                }
                                              ]
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
                                                      "type": "ColumnSet",
                                                      "columns": [
                                                        {
                                                          "type": "Column",
                                                          "width": "auto",
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
                                                                      "name": "Dumbbell",
                                                                      "size": "xxSmall"
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  "type": "Column",
                                                                  "width": "auto",
                                                                  "spacing": "Small",
                                                                  "items": [
                                                                    {
                                                                      "type": "TextBlock",
                                                                      "text": "Gym",
                                                                      "wrap": true,
                                                                      "size": "Small",
                                                                      "color": "Default",
                                                                      "isSubtle": true
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "ColumnSet",
              "columns": [
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
                              "type": "ColumnSet",
                              "columns": [
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "items": [
                                    {
                                      "type": "Icon",
                                      "name": "Food",
                                      "size": "xxSmall"
                                    }
                                  ]
                                },
                                {
                                  "type": "Column",
                                  "width": "auto",
                                  "spacing": "ExtraSmall",
                                  "items": [
                                    {
                                      "type": "TextBlock",
                                      "text": "Restaurant",
                                      "wrap": true,
                                      "size": "Small",
                                      "color": "Default",
                                      "isSubtle": true
                                    }
                                  ]
                                }
                              ]
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
                                  "width": "auto",
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
                                              "name": "AnimalDog",
                                              "size": "xxSmall"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "Column",
                                          "width": "auto",
                                          "spacing": "ExtraSmall",
                                          "items": [
                                            {
                                              "type": "TextBlock",
                                              "text": "Pet friendly",
                                              "wrap": true,
                                              "size": "Small",
                                              "color": "Default",
                                              "isSubtle": true
                                            }
                                          ]
                                        }
                                      ]
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
                                          "width": "auto",
                                          "items": [
                                            {
                                              "type": "Icon",
                                              "name": "DrinkBottleOff",
                                              "size": "xxSmall"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "Column",
                                          "width": "auto",
                                          "spacing": "ExtraSmall",
                                          "items": [
                                            {
                                              "type": "TextBlock",
                                              "text": "Alcohol-free",
                                              "wrap": true,
                                              "size": "Small",
                                              "color": "Default",
                                              "isSubtle": true
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
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
          "targetWidth": "Narrow"
        },
        {
          "type": "Container",
          "spacing": "Large",
          "items": [
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "ActionSet",
                      "actions": [
                        {
                          "type": "Action.OpenUrl",
                          "title": "Book",
                          "url": "https://adaptivecards.microsoft.com/"
                        },
                        {
                          "type": "Action.OpenUrl",
                          "title": "Share",
                          "url": "https://adaptivecards.microsoft.com/",
                          "iconUrl": "icon:Share"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "From $1,342.24",
                      "wrap": true,
                      "size": "Large"
                    }
                  ],
                  "horizontalAlignment": "Right"
                }
              ]
            }
          ],
          "targetWidth": "AtLeast:Narrow",
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Container",
          "targetWidth": "VeryNarrow",
          "spacing": "Large",
          "items": [
            {
              "type": "TextBlock",
              "text": "From $1,342.24",
              "wrap": true,
              "spacing": "Small",
              "size": "Large"
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Book",
                  "url": "https://adaptivecards.microsoft.com/"
                },
                {
                  "type": "Action.OpenUrl",
                  "title": "Share",
                  "iconUrl": "icon:Share",
                  "url": "https://adaptivecards.microsoft.com/"
                }
              ],
              "spacing": "Small"
            }
          ]
        }
      ],
      "spacing": "None"
    }
  ]
}
```

### `bleed` combined with `style`

The following card uses full-width column sets with an accent color to present detailed information. Organizing and displaying content in this way makes it easy for users to understand.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Your 'Travel to Bankok' expenses are pending",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "Your Bankok expenses have been received and is under review. We'll notify you once it's processed.",
      "wrap": true,
      "spacing": "ExtraSmall"
    },
    {
      "type": "Container",
      "targetWidth": "AtMost:Narrow",
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
                  "style": "RoundedCorners",
                  "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/travel_invoice/bankok-image.png"
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Travel to Bankok",
                  "wrap": true,
                  "weight": "Bolder",
                  "maxLines": 3
                },
                {
                  "type": "ColumnSet",
                  "columns": [
                    {
                      "type": "Column",
                      "width": "auto",
                      "items": [
                        {
                          "type": "Badge",
                          "text": "Pending",
                          "style": "Accent",
                          "appearance": "Tint",
                          "icon": "ClipboardClock",
                          "spacing": "Small"
                        }
                      ],
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
          "spacing": "Small"
        },
        {
          "type": "TextBlock",
          "text": "Business trip to meet potential clients.",
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
              "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/travel_invoice/bankok-image.png",
              "style": "RoundedCorners"
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
                      "text": "Travel to Bankok",
                      "wrap": true,
                      "weight": "Bolder",
                      "maxLines": 2
                    }
                  ],
                  "verticalContentAlignment": "Bottom"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "verticalContentAlignment": "Center"
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "items": [
                    {
                      "type": "Badge",
                      "text": "Pending",
                      "size": "Large",
                      "style": "Accent",
                      "icon": "ClipboardClock",
                      "appearance": "Tint"
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
              "text": "Business trip to meet potential clients.",
              "wrap": true,
              "spacing": "ExtraSmall",
              "isSubtle": true,
              "size": "Small"
            }
          ]
        }
      ],
      "targetWidth": "AtLeast:Standard",
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
              "size": "xxSmall",
              "horizontalAlignment": "Right"
            }
          ],
          "verticalContentAlignment": "Center",
          "horizontalAlignment": "Right"
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
          "verticalContentAlignment": "Center",
          "horizontalAlignment": "Right"
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
          "verticalContentAlignment": "Center",
          "horizontalAlignment": "Right"
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
          "verticalContentAlignment": "Center",
          "horizontalAlignment": "Right"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": "$1084.38",
              "wrap": true,
              "weight": "Bolder",
              "size": "Small"
            }
          ],
          "spacing": "Medium",
          "verticalContentAlignment": "Center",
          "horizontalAlignment": "Right"
        }
      ],
      "horizontalAlignment": "Right",
      "spacing": "ExtraLarge",
      "separator": true
    },
    {
      "type": "Container",
      "style": "accent",
      "items": [
        {
          "type": "Container",
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
                      "text": "Receipts and itineraries",
                      "wrap": true,
                      "size": "Small"
                    },
                    {
                      "type": "TextBlock",
                      "text": "$1459.38",
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
                      "text": "$1459.38",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                }
              ]
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
                }
              ],
              "separator": true
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
                      "text": "Cash advance",
                      "wrap": true,
                      "size": "Small"
                    },
                    {
                      "type": "TextBlock",
                      "text": "$275.00",
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
                      "text": "$275.00",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                }
              ],
              "separator": true
            },
            {
              "type": "ColumnSet",
              "columns": [
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
                              "name": "Money",
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
                              "text": "Total reimbursement requested",
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
                              "name": "Money",
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
                              "text": "$1084.38",
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
                      "text": "$1084.38",
                      "wrap": true,
                      "weight": "Bolder",
                      "size": "Small"
                    }
                  ],
                  "targetWidth": "AtLeast:Narrow"
                }
              ],
              "separator": true
            }
          ],
          "style": "accent",
          "roundedCorners": true,
          "bleed": true
        }
      ],
      "id": "reimbursement",
      "spacing": "Small",
      "bleed": true
    },
    {
      "type": "ActionSet",
      "spacing": "Medium",
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View expenses",
          "url": "https://github.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples"
        }
      ]
    }
  ]
}
```

* * *

## Best practices

-   **Keep it meaningful:** Ensure edge-to-edge elements add value to the card's content and design.
-   **Use with moderation:** Overusing edge-to-edge content can make cards visually overwhelming.

## Related topics

-   Background images