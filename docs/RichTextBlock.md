---
title: "RichTextBlock"
source: "https://adaptivecards.microsoft.com/?topic=RichTextBlock"
topic: "RichTextBlock"
---

RichTextBlock

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)![Outlook](images/ic_fluent_outlook_24_color.svg)

A rich text block that displays formatted text.

RichTextBlock allows you to break out of the limitations of Markdown and format text with different fonts, font sizes, colors and more. Use RichTextBlock to present dynamic, expressive, and visually appealing text.

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "RichTextBlock",
      "inlines": [
        "RichTextBlock ",
        {
          "type": "TextRun",
          "text": "supports ",
          "color": "accent"
        },
        {
          "type": "TextRun",
          "text": "all ",
          "color": "good"
        },
        {
          "type": "TextRun",
          "text": "text ",
          "color": "attention"
        },
        {
          "type": "TextRun",
          "text": "colors,",
          "color": "warning"
        },
        {
          "type": "TextRun",
          "text": " both regular and subtle. ",
          "isSubtle": true
        },
        {
          "type": "TextRun",
          "text": "Text ",
          "size": "small"
        },
        {
          "type": "TextRun",
          "text": "of ",
          "size": "medium"
        },
        {
          "type": "TextRun",
          "text": "all ",
          "size": "large"
        },
        {
          "type": "TextRun",
          "text": "sizes! ",
          "size": "extraLarge"
        },
        {
          "type": "TextRun",
          "text": "Light weight text. ",
          "weight": "lighter"
        },
        {
          "type": "TextRun",
          "text": "Bold weight text. ",
          "weight": "bolder"
        },
        {
          "type": "TextRun",
          "text": "Highlights.",
          "highlight": true
        },
        " ",
        {
          "type": "TextRun",
          "text": "Italics.",
          "italic": true
        },
        " ",
        {
          "type": "TextRun",
          "text": "Strikethrough.",
          "strikethrough": true
        },
        {
          "type": "TextRun",
          "text": " Monospace too!",
          "fontType": "monospace"
        }
      ]
    },
    {
      "type": "RichTextBlock",
      "inlines": [
        {
          "type": "TextRun",
          "text": "Date-Time parsing: {{DATE(2017-02-14T06:08:39Z,LONG)}} {{TIME(2017-02-14T06:08:39Z)}}"
        }
      ]
    },
    {
      "type": "RichTextBlock",
      "horizontalAlignment": "center",
      "inlines": [
        {
          "type": "TextRun",
          "text": "Rich text blocks also support center alignment. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor "
        }
      ]
    },
    {
      "type": "RichTextBlock",
      "horizontalAlignment": "right",
      "inlines": [
        {
          "type": "TextRun",
          "text": "Rich text blocks also support right alignment. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor "
        }
      ]
    }
  ]
}
```

## Why use RichTextBlock

**The RichTextBlock element enhances your cards with:**

-   **Enhanced visual communication:** Combine various text styles to draw attention to key info.
-   **Expressive content:** Use inline icons or images to add context or illustrate concepts without breaking textual flow.
-   **Improved readability:** Mix styles strategically to break up dense text and emphasize important elements.
-   **Brand consistency:** Apply custom colors and highlights to align text with your overall brand aesthetic.

Use the RichTextBlock element to help create cards that are informative and engaging. Your message will stand out while remaining accessible.

* * *

## Examples

**Flash sale promotion**

This flash sale card features bold headlines, inline icons, a crossed-out original price, and a vibrant sale price. They work together to showcase a promotional offer.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Container",
      "bleed": true,
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/flash_sale/assets/GettyImages-1023642306%202.png",
        "verticalAlignment": "Bottom",
        "horizontalAlignment": "Center"
      },
      "minHeight": "200px",
      "targetWidth": "AtMost:Narrow",
      "items": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "stretch",
              "horizontalAlignment": "Right"
            },
            {
              "type": "Column",
              "width": "auto",
              "spacing": "None",
              "horizontalAlignment": "Right",
              "items": [
                {
                  "type": "Icon",
                  "name": "Flash",
                  "size": "xSmall",
                  "color": "Attention",
                  "horizontalAlignment": "Right"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "FLASH SALE",
                  "wrap": true,
                  "size": "Medium",
                  "weight": "Bolder",
                  "color": "Attention",
                  "spacing": "ExtraSmall",
                  "horizontalAlignment": "Right"
                }
              ],
              "spacing": "None"
            }
          ],
          "horizontalAlignment": "Right"
        }
      ],
      "horizontalAlignment": "Right"
    },
    {
      "type": "Container",
      "backgroundImage": {
        "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/flash_sale/assets/GettyImages-1023642306%202.png",
        "verticalAlignment": "Bottom",
        "horizontalAlignment": "Center"
      },
      "minHeight": "260px",
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
                  "name": "Flash",
                  "size": "Small",
                  "color": "Attention",
                  "horizontalAlignment": "Right"
                }
              ],
              "horizontalAlignment": "Right"
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "FLASH SALE",
                  "wrap": true,
                  "size": "Large",
                  "color": "Attention",
                  "weight": "Bolder"
                }
              ],
              "spacing": "ExtraSmall"
            }
          ],
          "horizontalAlignment": "Right"
        }
      ],
      "bleed": true,
      "targetWidth": "AtLeast:Standard",
      "horizontalAlignment": "Right"
    },
    {
      "type": "Container",
      "style": "emphasis",
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
                  "type": "TextBlock",
                  "text": "Red Rush Trainers",
                  "wrap": true,
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
                          "type": "TextBlock",
                          "text": "$97.70",
                          "wrap": true,
                          "size": "ExtraLarge",
                          "weight": "Bolder"
                        }
                      ]
                    },
                    {
                      "type": "Column",
                      "width": "stretch",
                      "items": [
                        {
                          "type": "RichTextBlock",
                          "wrap": true,
                          "inlines": [
                            {
                              "type": "TextRun",
                              "text": "$124.70",
                              "strikethrough": true,
                              "size": "Large",
                              "color": "Attention"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "spacing": "None"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "ActionSet",
                  "actions": [
                    {
                      "type": "Action.Submit",
                      "title": "Order now"
                    }
                  ]
                }
              ]
            }
          ],
          "horizontalAlignment": "Left"
        }
      ],
      "spacing": "None",
      "verticalContentAlignment": "Center",
      "targetWidth": "AtLeast:Standard"
    },
    {
      "type": "Container",
      "style": "emphasis",
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
                  "type": "TextBlock",
                  "text": "Red Rush Trainers",
                  "wrap": true,
                  "size": "Large",
                  "weight": "Bolder",
                  "horizontalAlignment": "Center"
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
                          "text": "$97.70",
                          "wrap": true,
                          "horizontalAlignment": "Right",
                          "size": "Large",
                          "weight": "Bolder"
                        }
                      ],
                      "verticalContentAlignment": "Center",
                      "horizontalAlignment": "Center"
                    },
                    {
                      "type": "Column",
                      "width": "stretch",
                      "items": [
                        {
                          "type": "RichTextBlock",
                          "wrap": true,
                          "inlines": [
                            {
                              "type": "TextRun",
                              "text": "$124.70",
                              "strikethrough": true,
                              "size": "Default",
                              "color": "Attention"
                            }
                          ]
                        }
                      ],
                      "verticalContentAlignment": "Center",
                      "horizontalAlignment": "Left"
                    }
                  ],
                  "spacing": "None",
                  "horizontalAlignment": "Center"
                }
              ],
              "horizontalAlignment": "Center"
            }
          ],
          "horizontalAlignment": "Center"
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
                      "type": "Action.Submit",
                      "title": "Order now"
                    }
                  ]
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch"
            }
          ]
        }
      ],
      "spacing": "None",
      "targetWidth": "AtMost:Narrow",
      "horizontalAlignment": "Center"
    }
  ]
}
```

**Pull request card**

This card uses underlines, inline images and icons, and mixed colors. It effectively presents the repository details, pull request numbers, and merge information.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "BranchRequest",
              "size": "xSmall",
              "color": "Accent"
            }
          ],
          "verticalContentAlignment": "Center"
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
                  "text": "Pull Request | ",
                  "weight": "Bolder",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": "contoso/ui #29233",
                  "size": "Small",
                  "selectAction": {
                    "type": "Action.OpenUrl",
                    "url": "https://adaptivecards.microsoft.com/designer"
                  }
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "ExtraSmall"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "RFC Extended Design Tokens for UI",
      "wrap": true,
      "size": "Large",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "Description",
      "wrap": true,
      "size": "Small",
      "weight": "Bolder"
    },
    {
      "type": "TextBlock",
      "text": "This RFC outlines implementation details for an expansion of UI token system to enable better cross platforms for consistency integrated across the entire ecosystem",
      "wrap": true,
      "maxLines": 3,
      "targetWidth": "VeryNarrow",
      "size": "Small",
      "spacing": "ExtraSmall"
    },
    {
      "type": "TextBlock",
      "text": "This RFC outlines implementation details for an expansion of UI token system to enable better cross platforms for consistency integrated across the entire ecosystem",
      "wrap": true,
      "maxLines": 2,
      "size": "Small",
      "spacing": "ExtraSmall",
      "targetWidth": "AtLeast:Narrow"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch",
          "spacing": "Large",
          "verticalContentAlignment": "Center",
          "items": [
            {
              "type": "Badge",
              "text": "Merged",
              "style": "Accent",
              "icon": "BranchFork",
              "size": "Large"
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
                      "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/dev_ops/assets/avatar.png",
                      "style": "Person",
                      "width": "25px",
                      "height": "25px"
                    }
                  ],
                  "verticalContentAlignment": "Top"
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
                          "text": "Kayo Miwa",
                          "weight": "Bolder",
                          "size": "Small"
                        },
                        {
                          "type": "TextRun",
                          "text": " wants to merge ",
                          "size": "Small"
                        },
                        {
                          "type": "TextRun",
                          "text": "2 commits",
                          "underline": true,
                          "color": "Default",
                          "size": "Small"
                        },
                        {
                          "type": "TextRun",
                          "text": " from ",
                          "size": "Small"
                        },
                        {
                          "type": "TextRun",
                          "text": "EdSims",
                          "color": "Accent",
                          "size": "Small",
                          "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://github.com/EdSims"
                          }
                        }
                      ]
                    }
                  ],
                  "verticalContentAlignment": "Top",
                  "spacing": "ExtraSmall"
                }
              ]
            }
          ]
        }
      ],
      "targetWidth": "AtMost:Narrow",
      "separator": true,
      "spacing": "ExtraLarge"
    },
    {
      "type": "ColumnSet",
      "separator": true,
      "columns": [
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Badge",
              "text": "Merged",
              "style": "Accent",
              "icon": "BranchFork",
              "size": "Large"
            }
          ],
          "spacing": "Large",
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Image",
              "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/dev_ops/assets/avatar.png",
              "style": "Person",
              "width": "25px",
              "height": "25px"
            }
          ],
          "verticalContentAlignment": "Center"
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
                  "text": "Kayo Miwa",
                  "weight": "Bolder",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " wants to merge ",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": "2 commits",
                  "underline": true,
                  "color": "Default",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " from ",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": "EdSims",
                  "color": "Accent",
                  "size": "Small",
                  "selectAction": {
                    "type": "Action.OpenUrl",
                    "url": "https://github.com/EdSims"
                  }
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "Small"
        }
      ],
      "spacing": "ExtraLarge",
      "targetWidth": "AtLeast:Standard"
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
              "name": "Person",
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
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "0",
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " Reviewers",
                  "size": "Small"
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "ExtraSmall"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": " •",
              "wrap": true,
              "size": "Medium"
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "Small"
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
          "spacing": "Small"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "41",
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " comments",
                  "size": "Small"
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "ExtraSmall"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "TextBlock",
              "text": " •",
              "wrap": true
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "Small"
        },
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
          "verticalContentAlignment": "Center",
          "spacing": "ExtraSmall"
        },
        {
          "type": "Column",
          "width": "stretch",
          "spacing": "ExtraSmall",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "1",
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " Files changed",
                  "size": "Small"
                }
              ]
            }
          ],
          "verticalContentAlignment": "Center"
        }
      ],
      "separator": true,
      "spacing": "ExtraLarge",
      "targetWidth": "AtLeast:Standard"
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
              "name": "Person",
              "size": "xxSmall"
            }
          ],
          "verticalContentAlignment": "Center"
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
                  "text": "0",
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " Reviewers",
                  "size": "Small"
                }
              ]
            }
          ],
          "spacing": "ExtraSmall",
          "horizontalAlignment": "Left"
        }
      ],
      "spacing": "Small",
      "targetWidth": "AtMost:Narrow"
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
              "name": "Comment",
              "size": "xxSmall"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "stretch",
          "spacing": "ExtraSmall",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "41",
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " comments",
                  "size": "Small"
                }
              ]
            }
          ],
          "horizontalAlignment": "Left"
        }
      ],
      "spacing": "Small",
      "targetWidth": "AtMost:Narrow"
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
          "width": "stretch",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "1",
                  "weight": "Bolder",
                  "color": "Accent",
                  "size": "Small"
                },
                {
                  "type": "TextRun",
                  "text": " Files changed",
                  "size": "Small"
                }
              ]
            }
          ],
          "spacing": "ExtraSmall",
          "horizontalAlignment": "Left"
        }
      ],
      "spacing": "Small",
      "targetWidth": "AtMost:Narrow"
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "View pull request"
        }
      ],
      "spacing": "ExtraLarge",
      "separator": true,
      "targetWidth": "AtMost:Narrow"
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "View pull request"
        }
      ],
      "spacing": "ExtraLarge",
      "targetWidth": "AtLeast:Standard"
    }
  ]
}
```

**Inspirational quote card**

This card uses italic formatting and a large quotation mark. Together they deliver a reflective, inspirational message with clear attribution.

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Image",
      "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/quote/assets/mark.png",
      "width": "39px",
      "height": "29px"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": "stretch",
          "verticalContentAlignment": "Center",
          "items": [
            {
              "type": "RichTextBlock",
              "inlines": [
                {
                  "type": "TextRun",
                  "text": "Embracing neurodiversity unlocks the full potential of our teams and drives greater innovation.",
                  "wrap": true,
                  "size": "Large",
                  "weight": "Lighter",
                  "color": "Light",
                  "italic": true
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
              "type": "Image",
              "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/quote/assets/avatar.png",
              "style": "Person",
              "width": "78px",
              "height": "78px"
            }
          ]
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "Amanda Brady",
      "wrap": true,
      "size": "ExtraLarge",
      "color": "Light",
      "weight": "Bolder"
    }
  ],
  "backgroundImage": {
    "url": "https://raw.githubusercontent.com/suzto/StarterCards/refs/heads/main/samples/quote/assets/black_bg_repeat.png"
  }
}
```

* * *

## Best practices

To make the most of the RichTextBlock element, consider these best practices:

-   **Clarity through moderation:** Use rich text formatting purposefully. Overusing multiple styles in a single block can overwhelm users. Choose a single strong style for emphasis and stick to it.
-   **Consistent styling:** Apply design patterns consistently across your cards. For instance, if you highlight critical updates in red, maintain that color to build a coherent user experience.
-   **Accessibility matters:** Ensure any inline images have descriptive alternative text. Verify that color choices offer sufficient contrast for readability, especially in different host environments.
-   **Test across hosts:** Adaptive Cards can render differently depending on the host app. Always preview your cards in the target host to ensure the rich text formatting displays as expected.
-   **Use inline elements intentionally:** Incorporate inline icons or images only when they add value. They should serve as visual cues rather than decorative elements that might distract from the core message.

* * *

## Related topics

-   TextBlock
-   Icon
-   Image

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be RichTextBlock. | 1.0 |
| inlines | Array ofobjectstring | The inlines making up the rich text block. Valid values: \`TextRun\`, \`IconRun\`, \`ImageRun\`, \`CitationRun\` | 1.2 |
| labelFor | string | The Id of the input the RichTextBlock should act as the label of. | 1.5 |
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
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |