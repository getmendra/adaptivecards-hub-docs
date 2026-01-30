---
title: "Icon"
source: "https://adaptivecards.microsoft.com/?topic=Icon"
topic: "Icon"
---

Icon

Works in

![Teams](images/ic_fluent_teams_24_color.svg)![Copilot](images/ic_fluent_copilot_24_color.svg)

A standalone icon element. Icons can be picked from the vast Adaptive Card icon catalog.

Use the `Icon` element to enhance your card's visual appeal and usability. All icons in the Icon catalog are available in two styles: regular and filled. They are monochrome but can be colored to match any available font colors. They are available in eight standard sizes, fitting a variety of design needs.

```
{
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Sizes",
      "wrap": true,
      "size": "Large"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "left"
        }
      ],
      "items": [
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xxSmall"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xSmall"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Small"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Standard"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Medium"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "Large"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xLarge"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "size": "xxLarge"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "Regular and filled styles",
      "wrap": true,
      "size": "Large",
      "separator": true,
      "spacing": "large"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "left"
        }
      ],
      "items": [
        {
          "type": "Icon",
          "name": "ImageSparkle",
          "size": "Large"
        },
        {
          "type": "Icon",
          "name": "ImageSparkle",
          "size": "Large",
          "style": "Filled"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "Standard font colors are supported",
      "wrap": true,
      "size": "Large",
      "separator": true,
      "spacing": "large"
    },
    {
      "type": "Container",
      "layouts": [
        {
          "type": "Layout.Flow",
          "horizontalItemsAlignment": "left"
        }
      ],
      "items": [
        {
          "type": "Icon",
          "name": "Calendar",
          "style": "Filled"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "style": "Filled",
          "color": "accent"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "style": "Filled",
          "color": "good"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "style": "Filled",
          "color": "warning"
        },
        {
          "type": "Icon",
          "name": "Calendar",
          "style": "Filled",
          "color": "attention"
        }
      ]
    },
    {
      "type": "TextBlock",
      "text": "Icons on buttons",
      "wrap": true,
      "size": "Large",
      "separator": true,
      "spacing": "large"
    }
  ]
}
```

### Best practices

#### Use Icon whenever possible

Use the Icon element whenever possible versus creating custom image icons. All icons from the Icon catalog are Scalable Vector Graphics (SVGs), ensuring they look sharp and clear at any size. They also automatically adapt to the host application's theme. However, there are times when creating custom image icons may be desired. For more guidance, see using images as icons.

#### Use sparingly and with purpose

Icons plays a crucial role in user interface by providing intuitive visual cues and enhancing the overall user experience.

```
Use to create focus and clarityDon't overload your card
```

#### Maintain a balanced visual hierarchy

Ensure that icons are used purposefully to maintain a balanced visual hierarchy in your design.

```
Scale icons to fit their contextUse excessively large or small icons
```

### Example

The Adaptive Card below illustrates how icons can be implemented in a button, in the card's body, or within a badge element.

```
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
                  "style": "RoundedCorners"
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
                  "type": "Badge",
                  "text": "Approved",
                  "style": "Good",
                  "icon": "CheckmarkCircle",
                  "appearance": "Tint",
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
                      "type": "Badge",
                      "text": "Approved",
                      "style": "Good",
                      "icon": "CheckmarkCircle",
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
              "height": "24px"
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

### Related resources

-   **Creating custom icons for Adaptive Cards**

* * *

Schema

| Name | Type | Default | Description | In version |
| --- | --- | --- | --- | --- |
| type | string | Must be Icon. | 1.0 |
| color | string | "Default" | The color of the icon. Valid values: \`Default\`, \`Dark\`, \`Light\`, \`Accent\`, \`Good\`, \`Warning\`, \`Attention\` | 1.5 |
| name | string | The name of the icon to display. | 1.5 |
| selectAction | object | An Action that will be invoked when the icon is tapped or clicked. Action.ShowCard is not supported. Valid values: \`Action.Execute\`, \`Action.InsertImage\`, \`Action.OpenUrl\`, \`Action.OpenUrlDialog\`, \`Action.Popover\`, \`Action.ResetInputs\`, \`Action.RunCommands\`, \`Action.Submit\`, \`Action.ToggleVisibility\` | 1.5 |
| size | string | "Standard" | The size of the icon. Valid values: \`xxSmall\`, \`xSmall\`, \`Small\`, \`Standard\`, \`Medium\`, \`Large\`, \`xLarge\`, \`xxLarge\` | 1.5 |
| style | string | "Regular" | The style of the icon. Valid values: \`Regular\`, \`Filled\` | 1.5 |
| fallback | One of: objectstring | An alternate element to render if the type of this one is unsupported or if the host application doesn't support all the capabilities specified in the requires property. Valid values: \`Container\`, \`ActionSet\`, \`ColumnSet\`, \`Media\`, \`RichTextBlock\`, \`Table\`, \`TextBlock\`, \`FactSet\`, \`ImageSet\`, \`Image\`, \`Input.Text\`, \`Input.Date\`, \`Input.Time\`, \`Input.Number\`, \`Input.Toggle\`, \`Input.ChoiceSet\`, \`Input.Rating\`, \`Rating\`, \`CompoundButton\`, \`Icon\`, \`Carousel\`, \`TabSet\`, \`Accordion\`, \`Badge\`, \`ProgressRing\`, \`ProgressBar\`, \`LoopComponent\`, \`Chart.Donut\`, \`Chart.Pie\`, \`Chart.VerticalBar.Grouped\`, \`Chart.VerticalBar\`, \`Chart.HorizontalBar\`, \`Chart.HorizontalBar.Stacked\`, \`Chart.Line\`, \`Chart.Gauge\`, \`CodeBlock\`, \`Persona\`, \`PersonaSet\`, \`Graph resource\`, \`File\`, \`Calendar event\`, \`drop\` | 1.2 |
| grid.area | string | The area of a Layout.AreaGrid layout in which an element should be displayed. | 1.5 |
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