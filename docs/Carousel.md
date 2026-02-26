---
title: "Carousel"
source: "https://adaptivecards.microsoft.com/?topic=Carousel"
topic: "Carousel"
---

Carousel

Works in

![Teams](images/ic_fluent_teams_24_color.svg)

A carousel with sliding pages.

With the Carousel element, you can present a series of related content pages and allow the end-user to navigate between them using a horizontal sliding mechanism. Each page can contain interactive elements, like buttons or links, so users can take action directly from the carousel. This feature is particularly useful for displaying a collection of items, such as product listings, news articles, or image galleries, in a compact and interactive format.

```json
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "Carousel",
      "pages": [
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "TextBlock",
              "text": "PAGE 1",
              "wrap": true,
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "wrap": true
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "accent",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "TextBlock",
              "text": "PAGE 2",
              "wrap": true,
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "wrap": true
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "good",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "TextBlock",
              "text": "PAGE 3",
              "wrap": true,
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "wrap": true
            }
          ]
        }
      ]
    }
  ]
}
```

## Why use Carousel

**The Carousel element can be used in many scenarios, including:**

-   **E-commerce:** Highlight top stories or recent articles.
-   **Travel and hospitality:** Showcase travel destinations or hotel options.
-   **Corporate communications:** Present a series of announcements or updates.

Using the Carousel element can enhance user engagement. It provides a visually appealing and interactive way to display multiple pieces of related content. It also helps to organize information efficiently. Users can explore content without being overwhelmed with too much information at once.

* * *

## Examples

**Product showcase**

```json
{
  "type": "AdaptiveCard",
  "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5",
  "body": [
    {
      "type": "Carousel",
      "pages": [
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "ColumnSet",
              "height": "stretch",
              "columns": [
                {
                  "type": "Column",
                  "targetWidth": "Wide",
                  "width": 1,
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/product/assets/Hero1.png",
                      "style": "RoundedCorners"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": 2,
                  "items": [
                    {
                      "type": "Badge",
                      "text": "Hot product",
                      "size": "ExtraLarge",
                      "style": "Attention",
                      "icon": "Fire",
                      "appearance": "Tint"
                    },
                    {
                      "targetWidth": "AtMost:Standard",
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/product/assets/Hero1b.png",
                      "style": "RoundedCorners",
                      "size": "Stretch"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Business Laptop 6",
                      "wrap": true,
                      "size": "ExtraLarge",
                      "weight": "Bolder"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Not just faster. Smarter. The AI-accelerated Business Laptop 6th Edition, an BizAgent+ PC, puts next-generation performance and BizAgent+ experienc...",
                      "wrap": true,
                      "maxLines": 3
                    },
                    {
                      "type": "RichTextBlock",
                      "inlines": [
                        {
                          "type": "TextRun",
                          "text": "Learn more",
                          "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://adaptivecards.microsoft.com/designer"
                          }
                        }
                      ]
                    },
                    {
                      "type": "TextBlock",
                      "text": "Features",
                      "wrap": true,
                      "weight": "Bolder"
                    },
                    {
                      "type": "Table",
                      "targetWidth": "atLeast:Standard",
                      "columns": [
                        {
                          "width": 1
                        },
                        {
                          "width": 1
                        }
                      ],
                      "rows": [
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• High-performance processor",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Lightweight design",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Long battery life",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        }
                      ],
                      "firstRowAsHeaders": false,
                      "showGridLines": false
                    },
                    {
                      "type": "Table",
                      "targetWidth": "atMost:Narrow",
                      "columns": [
                        {
                          "width": 1
                        }
                      ],
                      "rows": [
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• High-performance processor",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Long battery life",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Lightweight design",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        }
                      ],
                      "firstRowAsHeaders": false,
                      "showGridLines": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "ColumnSet",
              "height": "stretch",
              "columns": [
                {
                  "type": "Column",
                  "targetWidth": "Wide",
                  "width": 1,
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/product/assets/Hero2.png",
                      "style": "RoundedCorners"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": 2,
                  "items": [
                    {
                      "type": "Badge",
                      "text": "25% off",
                      "size": "ExtraLarge",
                      "style": "Good",
                      "icon": "Savings",
                      "appearance": "Tint"
                    },
                    {
                      "targetWidth": "AtMost:Standard",
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/product/assets/Hero2b.png",
                      "style": "RoundedCorners"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Whisper Headphones",
                      "wrap": true,
                      "size": "ExtraLarge",
                      "weight": "Bolder"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Our Premium Noise-Cancelling Headphones are designed to provide an immersive audio experience, whether you're working, traveling, or relaxing...",
                      "wrap": true,
                      "maxLines": 3
                    },
                    {
                      "type": "RichTextBlock",
                      "inlines": [
                        {
                          "type": "TextRun",
                          "text": "Learn more",
                          "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://adaptivecards.microsoft.com/designer"
                          }
                        }
                      ]
                    },
                    {
                      "type": "TextBlock",
                      "text": "Features",
                      "wrap": true,
                      "weight": "Bolder"
                    },
                    {
                      "type": "Table",
                      "targetWidth": "atLeast:Standard",
                      "columns": [
                        {
                          "width": 1
                        },
                        {
                          "width": 1
                        }
                      ],
                      "rows": [
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Advanced noise-cancellation",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Comfortable fit",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Wireless connectivity",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• High-fidelity sound",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        }
                      ],
                      "firstRowAsHeaders": false,
                      "showGridLines": false
                    },
                    {
                      "type": "Table",
                      "targetWidth": "atMost:Narrow",
                      "columns": [
                        {
                          "width": 1
                        }
                      ],
                      "rows": [
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Advanced noise-cancellation",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Comfortable fit",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Wireless connectivity",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• High-fidelity sound",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        }
                      ],
                      "firstRowAsHeaders": false,
                      "showGridLines": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "ColumnSet",
              "height": "stretch",
              "columns": [
                {
                  "type": "Column",
                  "targetWidth": "Wide",
                  "width": 1,
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/product/assets/Hero3.png",
                      "style": "RoundedCorners"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": 2,
                  "items": [
                    {
                      "type": "Badge",
                      "text": "Pre-order",
                      "size": "ExtraLarge",
                      "style": "Accent",
                      "icon": "ShoppingBag",
                      "appearance": "Tint"
                    },
                    {
                      "targetWidth": "AtMost:Standard",
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/product/assets/Hero3b.png",
                      "style": "RoundedCorners"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Advanced Smart Watch",
                      "wrap": true,
                      "size": "ExtraLarge",
                      "weight": "Bolder"
                    },
                    {
                      "type": "RichTextBlock",
                      "inlines": [
                        {
                          "type": "TextRun",
                          "text": "Learn more",
                          "selectAction": {
                            "type": "Action.OpenUrl",
                            "url": "https://adaptivecards.microsoft.com/designer"
                          }
                        }
                      ]
                    },
                    {
                      "type": "TextBlock",
                      "text": "Our Advanced Smart Watch is designed to keep you connected and help you monitor your health effortlessly. With a sleek design and a range of...",
                      "wrap": true,
                      "maxLines": 3
                    },
                    {
                      "type": "TextBlock",
                      "text": "Features",
                      "wrap": true,
                      "weight": "Bolder"
                    },
                    {
                      "type": "Table",
                      "targetWidth": "atLeast:Standard",
                      "columns": [
                        {
                          "width": 1
                        },
                        {
                          "width": 1
                        }
                      ],
                      "rows": [
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Heart rate monitoring",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• GPS navigation",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Sleep tracking",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            },
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Long battery life",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        }
                      ],
                      "firstRowAsHeaders": false,
                      "showGridLines": false
                    },
                    {
                      "type": "Table",
                      "targetWidth": "atMost:Narrow",
                      "columns": [
                        {
                          "width": 1
                        }
                      ],
                      "rows": [
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Heart rate monitoring",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• GPS navigation",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Sleep tracking",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        },
                        {
                          "type": "TableRow",
                          "cells": [
                            {
                              "type": "TableCell",
                              "items": [
                                {
                                  "type": "TextBlock",
                                  "text": "• Long battery life",
                                  "wrap": true,
                                  "size": "Small",
                                  "weight": "Bolder"
                                }
                              ]
                            }
                          ],
                          "style": "emphasis"
                        }
                      ],
                      "firstRowAsHeaders": false,
                      "showGridLines": false
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
      "type": "ActionSet",
      "separator": true,
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View Catalog",
          "url": "https://adaptivecards.microsoft.com/designer"
        },
        {
          "type": "Action.OpenUrl",
          "title": "Chat with sales",
          "iconUrl": "icon:Chat",
          "url": "https://adaptivecards.microsoft.com/designer"
        }
      ]
    }
  ]
}
```

**Company news**

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
              "name": "MegaphoneLoud",
              "color": "Accent",
              "size": "Small"
            }
          ],
          "verticalContentAlignment": "Center"
        },
        {
          "type": "Column",
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "Lucerne Publishing News",
              "wrap": true,
              "weight": "Bolder",
              "size": "Large"
            }
          ],
          "verticalContentAlignment": "Center",
          "spacing": "ExtraSmall"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "Stay updated with the latest news, book launches, and employee achievements.",
      "wrap": true
    },
    {
      "type": "Carousel",
      "pages": [
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "Badge",
              "text": "News",
              "icon": "News",
              "appearance": "Tint",
              "style": "Informative",
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Celebrating Lucerne Publishing's 50 Years",
              "size": "Large",
              "weight": "Bolder",
              "wrap": true
            },
            {
              "type": "Image",
              "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/news/assets/Hero1.png",
              "style": "RoundedCorners"
            },
            {
              "type": "TextBlock",
              "text": "Join us in celebrating Lucerne Publishing's 50th anniversary this Tuesday @4pm. Our CEO will share inspiring remarks about our journey and future.",
              "wrap": true,
              "maxLines": 5
            },
            {
              "type": "ActionSet",
              "targetWidth": "atLeast:Narrow",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Watch livestream",
                  "iconUrl": "icon:Live",
                  "url": "https://adaptivecards.microsoft.com/designer"
                },
                {
                  "type": "Action.OpenUrl",
                  "title": "Share",
                  "iconUrl": "icon:Share",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ]
            },
            {
              "type": "ActionSet",
              "targetWidth": "VeryNarrow",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Watch live",
                  "iconUrl": "icon:Live",
                  "url": "https://adaptivecards.microsoft.com/designer"
                },
                {
                  "type": "Action.OpenUrl",
                  "title": "Share",
                  "iconUrl": "icon:Share",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ]
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "Badge",
              "text": "Recent book launches",
              "icon": "Rocket",
              "appearance": "Tint",
              "style": "Good",
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Maurice and Maralyn",
              "size": "Large",
              "weight": "Bolder",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "text": "by **Sophie Elmhirst**",
              "size": "Small",
              "spacing": "None",
              "wrap": true
            },
            {
              "type": "Image",
              "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/news/assets/Hero2.png",
              "style": "RoundedCorners"
            },
            {
              "type": "TextBlock",
              "text": "A true story of a couple lost at sea for 118 days.",
              "targetWidth": "atMost:Standard",
              "wrap": true
            },
            {
              "type": "ColumnSet",
              "spacing": "ExtraSmall",
              "columns": [
                {
                  "type": "Column",
                  "width": "auto",
                  "targetWidth": "Wide",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "A true story of a couple lost at sea for 118 days.",
                      "wrap": true
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "verticalContentAlignment": "Center",
                  "items": [
                    {
                      "type": "Icon",
                      "color": "Warning",
                      "name": "Trophy",
                      "size": "xSmall",
                      "spacing": "None"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "auto",
                  "spacing": "ExtraSmall",
                  "verticalContentAlignment": "Center",
                  "items": [
                    {
                      "type": "TextBlock",
                      "text": "Winner of the Nero Gold prize.",
                      "wrap": true
                    }
                  ]
                }
              ]
            },
            {
              "type": "TextBlock",
              "text": "Maurice and Maralyn couldn’t have been more different: he was cautious and awkward, she was charismatic and daring. But their yin-yang romance worked: she gave him confidence, he gave her freedom. Deeply bored by suburban English life, Maralyn suggested they sell their house...",
              "wrap": true,
              "size": "Small",
              "maxLines": 5
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "View all books",
                  "iconUrl": "icon:Library",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ],
              "separator": true
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "emphasis",
          "showBorder": true,
          "roundedCorners": true,
          "items": [
            {
              "type": "Badge",
              "targetWidth": "atLeast:Narrow",
              "text": "Employee achievements",
              "icon": "Star",
              "appearance": "Tint",
              "style": "Accent",
              "size": "Large"
            },
            {
              "type": "Badge",
              "targetWidth": "VeryNarrow",
              "text": "Achievements",
              "icon": "Star",
              "appearance": "Tint",
              "style": "Accent",
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Cyril's Journey Across Sub-Saharan Africa",
              "size": "Large",
              "weight": "Bolder",
              "wrap": true
            },
            {
              "type": "TextBlock",
              "text": "Editorial Assistant to Chief Editor ",
              "size": "Small",
              "spacing": "None",
              "wrap": true
            },
            {
              "type": "Image",
              "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/news/assets/Hero3.png",
              "style": "RoundedCorners"
            },
            {
              "type": "TextBlock",
              "text": "Cyril started their career at Lucerne Publishing as an editorial assistant, meticulously reviewing manuscripts and supporting the editorial team. Over the years, Cyril's dedication and innovative approach led them to become the Chief Editor. Cyril's adventurous spirit included a journey across Sub-Saharan Africa, where there was...",
              "wrap": true,
              "maxLines": 5
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "See interview",
                  "iconUrl": "icon:Video",
                  "url": "https://adaptivecards.microsoft.com/designer"
                },
                {
                  "type": "Action.OpenUrl",
                  "title": "Connect",
                  "iconUrl": "icon:People",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

**Onborading**

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
          "width": "stretch",
          "items": [
            {
              "type": "TextBlock",
              "text": "New employee onboarding",
              "wrap": true,
              "weight": "Bolder",
              "size": "Large"
            }
          ]
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [
            {
              "type": "Icon",
              "name": "PeopleTeam",
              "style": "Filled",
              "color": "Accent",
              "size": "Small"
            }
          ]
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "**Welcome to Wingtip Toys**! We’re excited to have you join our team. To ensure a smooth transition into your role, we’ve compiled these essential resources to help you get started and feel at home.",
      "wrap": true,
      "targetWidth": "AtLeast:Standard"
    },
    {
      "type": "TextBlock",
      "text": "**Welcome to Wingtip Toys**! We’re excited to have you join our team. We’ve compiled a few essential resources to help you get started.",
      "wrap": true,
      "targetWidth": "Narrow"
    },
    {
      "type": "TextBlock",
      "text": "**Welcome to Wingtip Toys**! We’ve compiled a few essential resources to help you get started.",
      "wrap": true,
      "targetWidth": "VeryNarrow"
    },
    {
      "type": "Carousel",
      "pages": [
        {
          "type": "CarouselPage",
          "style": "emphasis",
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
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "NumberCircle1",
                              "color": "Accent",
                              "style": "Filled",
                              "targetWidth": "AtLeast:Narrow"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Welcome kit",
                              "wrap": true,
                              "size": "ExtraLarge",
                              "weight": "Bolder"
                            }
                          ],
                          "spacing": "Small"
                        }
                      ]
                    },
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/onboarding/assets/Hero1b.png",
                      "targetWidth": "AtMost:Standard",
                      "style": "RoundedCorners"
                    },
                    {
                      "type": "TextBlock",
                      "text": "An introduction to our company culture, values, and what to expect in your first few weeks.",
                      "wrap": true,
                      "weight": "Bolder"
                    },
                    {
                      "type": "TextBlock",
                      "targetWidth": "AtLeast:Narrow",
                      "text": "At Windtip Toys, we believe in creativity, innovation, and teamwork. Our welcoming environment is designed to help you thrive and contribute to our mission of bringing joy to children through imaginative play.",
                      "wrap": true,
                      "weight": "Default"
                    },
                    {
                      "type": "ColumnSet",
                      "id": "closedState1",
                      "targetWidth": "VeryNarrow",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "See more",
                              "wrap": true,
                              "color": "Accent"
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
                              "color": "Accent"
                            }
                          ],
                          "verticalContentAlignment": "Center",
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "content1",
                          "openState1",
                          "closedState1"
                        ]
                      }
                    },
                    {
                      "id": "openState1",
                      "type": "ColumnSet",
                      "targetWidth": "VeryNarrow",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "See less",
                              "wrap": true,
                              "color": "Accent"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "ChevronUp",
                              "size": "xxSmall",
                              "color": "Accent"
                            }
                          ],
                          "verticalContentAlignment": "Center",
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "content1",
                          "openState1",
                          "closedState1"
                        ]
                      },
                      "isVisible": false
                    },
                    {
                      "id": "content1",
                      "type": "TextBlock",
                      "text": "At Windtip Toys, we believe in creativity, innovation, and teamwork. Our welcoming environment is designed to help you thrive and contribute to our mission of bringing joy to children through imaginative play.",
                      "wrap": true,
                      "isVisible": false,
                      "targetWidth": "VeryNarrow"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "targetWidth": "Wide",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/onboarding/assets/Hero1.png",
                      "style": "RoundedCorners"
                    }
                  ]
                }
              ],
              "height": "stretch"
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Download kit",
                  "style": "positive",
                  "iconUrl": "icon:ArrowDownload",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ]
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "emphasis",
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
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "NumberCircle2",
                              "color": "Accent",
                              "style": "Filled",
                              "targetWidth": "AtLeast:Narrow"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Setting up your work space",
                              "wrap": true,
                              "size": "ExtraLarge",
                              "weight": "Bolder"
                            }
                          ],
                          "spacing": "Small"
                        }
                      ]
                    },
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/onboarding/assets/Hero2b.png",
                      "targetWidth": "AtMost:Standard",
                      "style": "RoundedCorners"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Step-by-step instructions on how to set up your workstation, including necessary software and tools.",
                      "wrap": true,
                      "weight": "Bolder"
                    },
                    {
                      "type": "TextBlock",
                      "targetWidth": "AtLeast:Narrow",
                      "text": "From configuring your computer to accessing our internal systems, this guide will ensure you have everything you need to start your journey at Windtip Toys.",
                      "wrap": true,
                      "weight": "Default"
                    },
                    {
                      "type": "ColumnSet",
                      "id": "closedState2",
                      "targetWidth": "VeryNarrow",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "See more",
                              "wrap": true,
                              "color": "Accent"
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
                              "color": "Accent"
                            }
                          ],
                          "verticalContentAlignment": "Center",
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "content2",
                          "openState2",
                          "closedState2"
                        ]
                      }
                    },
                    {
                      "id": "openState2",
                      "type": "ColumnSet",
                      "targetWidth": "VeryNarrow",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "See less",
                              "wrap": true,
                              "color": "Accent"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "ChevronUp",
                              "size": "xxSmall",
                              "color": "Accent"
                            }
                          ],
                          "verticalContentAlignment": "Center",
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "content2",
                          "openState2",
                          "closedState2"
                        ]
                      },
                      "isVisible": false
                    },
                    {
                      "id": "content2",
                      "type": "TextBlock",
                      "text": "From configuring your computer to accessing our internal systems, this guide will ensure you have everything you need to start your journey at Windtip Toys.",
                      "wrap": true,
                      "isVisible": false,
                      "targetWidth": "VeryNarrow"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "targetWidth": "Wide",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/onboarding/assets/Hero2.png",
                      "style": "RoundedCorners"
                    }
                  ]
                }
              ],
              "height": "stretch"
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "Visit site",
                  "style": "positive",
                  "iconUrl": "icon:Open",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ]
            }
          ]
        },
        {
          "type": "CarouselPage",
          "style": "emphasis",
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
                      "type": "ColumnSet",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "NumberCircle3",
                              "color": "Accent",
                              "style": "Filled",
                              "targetWidth": "AtLeast:Narrow"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "stretch",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "Meet the team",
                              "wrap": true,
                              "size": "ExtraLarge",
                              "weight": "Bolder"
                            }
                          ],
                          "spacing": "Small"
                        }
                      ]
                    },
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/onboarding/assets/Hero3b.png",
                      "targetWidth": "AtMost:Standard",
                      "style": "RoundedCorners"
                    },
                    {
                      "type": "TextBlock",
                      "text": "Get to know your colleagues and learn about their roles and how you will collaborate.",
                      "wrap": true,
                      "weight": "Bolder"
                    },
                    {
                      "type": "TextBlock",
                      "targetWidth": "AtLeast:Narrow",
                      "text": "Our team is made up of talented individuals who are passionate about creating innovative toys. Discover how each member contributes to our success and how you can work together.",
                      "wrap": true,
                      "weight": "Default"
                    },
                    {
                      "type": "ColumnSet",
                      "id": "closedState3",
                      "targetWidth": "VeryNarrow",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "See more",
                              "wrap": true,
                              "color": "Accent"
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
                              "color": "Accent"
                            }
                          ],
                          "verticalContentAlignment": "Center",
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "content3",
                          "openState3",
                          "closedState3"
                        ]
                      }
                    },
                    {
                      "id": "openState3",
                      "type": "ColumnSet",
                      "targetWidth": "VeryNarrow",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "See less",
                              "wrap": true,
                              "color": "Accent"
                            }
                          ]
                        },
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "Icon",
                              "name": "ChevronUp",
                              "size": "xxSmall",
                              "color": "Accent"
                            }
                          ],
                          "verticalContentAlignment": "Center",
                          "spacing": "ExtraSmall"
                        }
                      ],
                      "selectAction": {
                        "type": "Action.ToggleVisibility",
                        "targetElements": [
                          "content3",
                          "openState3",
                          "closedState3"
                        ]
                      },
                      "isVisible": false
                    },
                    {
                      "id": "content3",
                      "type": "TextBlock",
                      "text": "Our team is made up of talented individuals who are passionate about creating innovative toys. Discover how each member contributes to our success and how you can work together.",
                      "wrap": true,
                      "isVisible": false,
                      "targetWidth": "VeryNarrow"
                    }
                  ]
                },
                {
                  "type": "Column",
                  "width": "stretch",
                  "targetWidth": "Wide",
                  "items": [
                    {
                      "type": "Image",
                      "url": "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Adaptive-Card-Samples/pabloas/carousel/samples/onboarding/assets/Hero3.png",
                      "style": "RoundedCorners"
                    }
                  ]
                }
              ],
              "height": "stretch"
            },
            {
              "type": "ActionSet",
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "title": "View your team",
                  "style": "positive",
                  "iconUrl": "icon:PeopleAdd",
                  "url": "https://adaptivecards.microsoft.com/designer"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "ActionSet",
      "separator": true,
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "Visit Wingtip Toys",
          "url": "https://adaptivecards.microsoft.com/designer"
        },
        {
          "type": "Action.OpenUrl",
          "title": "Contact HR",
          "iconUrl": "icon:MailEdit",
          "url": "https://adaptivecards.microsoft.com/designer"
        }
      ]
    }
  ]
}
```

* * *

## Best practices

To make the most of the Carousel element, consider the following best practices:

-   **Keep it simple:** Each page should have focused and relevant info to avoid overwhelming users.
-   **Limit the number of pages:** If the carousel has more than five pages, consider using a "See all" button to link to the full content at an external URL.
-   **Consistent design:** Make sure all pages have a consistent design and layout to maintain a cohesive look and feel. Use variations in design intentionally. For example, to highlight specific content.
-   **Interactive elements:** Incorporate buttons or links in the pages so users can take action directly from the carousel. This can enhance user engagement and provide a seamless experience.
-   **Use high-quality images:** Images should be high-quality and optimized for fast loading.
-   **Maintain accessibility:** Provide alternative text for images. Use background images with the appropriate Dark or Light font colors for text overlays. Ensure readability through proper contrast. See Background images for more details.

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Carousel. | 1.0 |
| pageAnimation | string | "Slide" | Controls the type of animation to use to navigate between pages. Valid values: \`Slide\`, \`CrossFade\`, \`None\` | 1.5 |
| pages | Array ofobject | The pages in the carousel. Valid values: \`CarouselPage\` |  |
| bleed | boolean | false | Controls if the container should bleed into its parent. A bleeding container extends into its parent's padding. | 1.2 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
| height | string | "auto" | The height of the element. When set to stretch, the element will use the remaining vertical space in its container. Valid values: \`auto\`, \`stretch\` | 1.1 |
| id | string | A unique identifier for the element or action. Input elements must have an id, otherwise they will not be validated and their values will not be sent to the Bot. | 1.0 |
| isSortKey | boolean | false | Controls whether the element should be used as a sort key by elements that allow sorting across a collection of elements. | 1.5 |
| isVisible | boolean | true | Controls the visibility of the element. | 1.2 |
| isVisible.dynamic | string | (Preview) Defines an expression whose evaluated value will be used to update the isVisible property of the element at runtime. | 1.5 |
| key | string | Defines an optional key for the object. Keys are seldom needed, but in some scenarios, specifying keys can help maintain visual state in the host application. | 1.0 |
| lang | string | The locale associated with the element. | 1.1 |
| minHeight | string | The minimum height, in pixels, of the container, in the <number>px format. Valid values: \`<number>px\` | 1.2 |
| requires | object | {} | A list of capabilities the element requires the host application to support. If the host application doesn't support at least one of the listed capabilities, the element is not rendered (or its fallback is rendered if provided). Valid values: \`HostCapabilities\` | 1.2 |
| separator | boolean | false | Controls whether a separator line should be displayed above the element to visually separate it from the previous element. No separator will be displayed for the first element in a container, even if this property is set to true. | 1.0 |
| spacing | string | "Default" | Controls the amount of space between this element and the previous one. No space will be added for the first element in a container. Valid values: \`None\`, \`ExtraSmall\`, \`Small\`, \`Default\`, \`Medium\`, \`Large\`, \`ExtraLarge\`, \`Padding\` | 1.0 |
| targetWidth | string | Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space. For more details, see Responsive layout. Valid values: \`VeryNarrow\`, \`Narrow\`, \`Standard\`, \`Wide\`, \`atLeast:VeryNarrow\`, \`atMost:VeryNarrow\`, \`atLeast:Narrow\`, \`atMost:Narrow\`, \`atLeast:Standard\`, \`atMost:Standard\`, \`atLeast:Wide\`, \`atMost:Wide\` | 1.0 |