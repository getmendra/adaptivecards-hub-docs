---
title: "Expression syntax"
source: "https://adaptivecards.microsoft.com/?topic=expression-syntax"
topic: "expression-syntax"
---

Expression syntax

Preview

This guide covers the syntax for writing expressions that can be evaluated dynamically. Expressions provide a powerful way to perform calculations, access data, call functions, and manipulate values. Expressions can be used by Dynamic Properties as well as Action.RunCommands.

## Basic Data Types

Expressions support the following data types:

-   **Strings**: Enclosed in double or single quotes, e.g., `"Hello World"` or `'Hello World'`
-   **Numbers**: Integer or decimal values, e.g., `42`, `3.14`, `-10`
-   **Booleans**: `true` or `false`
-   **Arrays**: Comma-separated values in square brackets, e.g., `[1, 2, 3]`, `["a", "b", "c"]`
-   **Objects**: Accessed through property paths (see Data Access section)

## Data Access

### Context Variables

Expressions can access several built-in context variables:

-   `$root` - The root data object
-   `$var` - Variables assigned within expressions

### Property Access

Access object properties using dot notation:

```
Expression$root.name
$root.users.length
person.address.city
```

You can also access root properties directly by using an identifier without any prefix. For example, `name` is a shortcut for `$root.name`:

```
Expressionname              // Shortcut for $root.name
users.length      // Shortcut for $root.users.length
```

### Array/Object Indexing

Access array elements or object properties by index/key:

```
Expressionitems[0]           // First array element
users[2]           // Array element at specific index
data["property"]   // Object property with string key
```

### Complex Path Navigation

Combine different access methods:

```
Expression$root.users[0].profile.name
items[2].properties["status"]
```

## Operators

### Arithmetic Operators

-   `+` - Addition (also concatenates arrays)
-   `-` - Subtraction
-   `*` - Multiplication
-   `/` - Division

Examples:

```
Expressionprice * quantity
total - discount
[1, 2] + [3, 4]    // Results in [1, 2, 3, 4]
```

### Comparison Operators

-   `==` - Equal to
-   `!=` - Not equal to
-   `<` - Less than
-   `<=` - Less than or equal to
-   `>` - Greater than
-   `>=` - Greater than or equal to

Examples:

```
Expressionage >= 18
status == "active"
count != 0
```

### Logical Operators

-   `&&` - Logical AND
-   `||` - Logical OR

Examples:

```
Expressionage >= 18 && status == "verified"
role == "admin" || role == "moderator"
```

### Membership Operator

-   `in` - Check if value exists in array

Examples:

```
Expression"apple" in fruits
userId in activeUsers
```

## Function Calls

Functions can be called with zero or more parameters:

```
Expressionlength(userName)
round(3.14159)
if(age >= 18, "adult", "minor")
```

Functions can be namespaced using dot notation:

```
ExpressionDate.format(timestamp, "long")
Time.format(timestamp)
JSON.parse(jsonString)
```

### Built-in Functions

The following functions are available out of the box:

#### String Functions

-   **`substr(input, start, end?)`** - Extracts a substring from a string
    
    ```
    Expressionsubstr("Hello World", 0, 5)    // Returns "Hello"
    substr("Hello World", 6)       // Returns "World"
    ```
    
-   **`toUpper(input)`** - Converts a string to uppercase
    
    ```
    ExpressiontoUpper("hello")     // Returns "HELLO"
    ```
    
-   **`toLower(input)`** - Converts a string to lowercase
    
    ```
    ExpressiontoLower("HELLO")     // Returns "hello"
    ```
    
-   **`toString(input)`** - Converts any value to a string
    
    ```
    ExpressiontoString(42)         // Returns "42"
    toString(true)       // Returns "true"
    ```
    

#### Math Functions

-   **`round(input)`** - Rounds a number to the nearest integer
    
    ```
    Expressionround(3.14159)       // Returns 3
    round(3.7)           // Returns 4
    ```
    
-   **`ceil(input)`** - Rounds a number up to the nearest integer
    
    ```
    Expressionceil(3.1)            // Returns 4
    ceil(3.9)            // Returns 4
    ```
    
-   **`floor(input)`** - Rounds a number down to the nearest integer
    
    ```
    Expressionfloor(3.1)           // Returns 3
    floor(3.9)           // Returns 3
    ```
    

#### Parsing Functions

-   **`parseFloat(input)`** - Converts a string or number to a floating-point number
    
    ```
    ExpressionparseFloat("3.14")   // Returns 3.14
    parseFloat("42")     // Returns 42
    ```
    
-   **`parseInt(input, radix?)`** - Converts a string to an integer
    
    ```
    ExpressionparseInt("42")       // Returns 42
    parseInt("1010", 2)  // Returns 10 (binary)
    parseInt("FF", 16)   // Returns 255 (hexadecimal)
    ```
    

#### Date and Time Functions

-   **`Date.format(input, format?)`** - Formats a date timestamp or string
    
    Available formats:
    
    -   `"compact"` (default) - Short date format (e.g., "1/1/2022")
    -   `"short"` - Short weekday/month format (e.g., "Sat, Jan 1, 2022")
    -   `"long"` - Long weekday/month format (e.g., "Saturday, January 1, 2022")
    
    ```
    ExpressionDate.format(1641024000000)           // Returns compact format date
    Date.format("2022-01-01", "long")    // Returns "Saturday, January 1, 2022"
    Date.format(timestamp, "short")      // Returns "Sat, Jan 1, 2022"
    Date.format(timestamp, "compact")    // Returns "1/1/2022"
    ```
    
-   **`Time.format(input)`** - Formats a time from timestamp or string
    
    Returns time in 12-hour format with AM/PM (e.g., "10:30 AM")
    
    ```
    ExpressionTime.format(1641024000000)           // Returns formatted time like "12:00 AM"
    Time.format("2022-01-01T10:30:00Z")  // Returns "10:30 AM"
    ```
    

#### Utility Functions

-   **`length(input)`** - Returns the length of a string or array
    
    ```
    Expressionlength("hello")      // Returns 5
    length([1, 2, 3])    // Returns 3
    ```
    
-   **`if(condition, ifTrue, ifFalse)`** - Conditional expression
    
    ```
    Expressionif(age >= 18, "adult", "minor")      // Returns "adult" or "minor"
    if(score > 90, "A", "B")             // Grade assignment
    ```
    
-   **`JSON.parse(input)`** - Parses a JSON string into an object
    
    ```
    ExpressionJSON.parse('{"name": "John"}')       // Returns object {name: "John"}
    ```
    

## Arrays

### Array Literals

Create arrays using square brackets:

```
Expression[1, 2, 3]
["red", "green", "blue"]
[user.name, user.email, user.age]
```

### Array Operations

Arrays support concatenation with the `+` operator:

```
Expression[1, 2] + [3, 4]        // Results in [1, 2, 3, 4]
existingArray + [newItem]  // Append item to array
[newItem] + existingArray  // Prepend item to array
```

## Operator Precedence

Operators are evaluated in the following order (highest to lowest precedence):

1.  **Multiplication and Division**: `*`, `/`
2.  **Addition and Subtraction**: `+`, `-`
3.  **Comparison**: `==`, `!=`, `<`, `<=`, `>`, `>=`
4.  **Logical AND**: `&&`
5.  **Logical OR**: `||`
6.  **Membership**: `in`

Use parentheses to override default precedence:

```
Expression(price + tax) * quantity
result == (expected || fallback)
```

## Unary Operators

### Unary Plus and Minus

-   `+value` - Unary plus (explicit positive)
-   `-value` - Unary minus (negation)

Examples:

```
Expression-balance          // Negate the balance
+stringNumber     // Convert to positive number
```

## Complex Expressions

### Parentheses for Grouping

Use parentheses to group sub-expressions:

```
Expression(subtotal + tax) * (1 - discount)
(user.role == "admin") && (user.active == true)
```

### Nested Function Calls

Functions can be nested within other function calls:

```
Expressionround(parseFloat("3.14159"))
toUpper(substr(userName, 0, 1))
```

### Mixed Operations

Combine different types of operations:

```
Expressionusers[0].name
length(items) > 0
```

## Variable Assignment

When assignment is enabled, you can assign expression results to variables:

```
ExpressionmyVar := calculation(value1, value2)
result := (total > threshold) && (status == "ready")
```

Assigned variables can then be used in subsequent expressions via `$var.variableName`.

## Best Practices

### Readability

-   Use parentheses to make operator precedence explicit
-   Break complex expressions into smaller parts using variable assignment
-   Use meaningful property names and function calls

### Performance

-   Access properties directly when possible instead of using complex path navigation
-   Consider caching frequently-accessed values in variables

### Error Handling

-   Be aware that accessing undefined properties returns `undefined`
-   Use logical operators to provide fallback values: `user.name || "Unknown"`
-   Check array bounds when using index access

## Examples

### Simple Calculations

```
Expressionprice * 1.08                    // Add 8% tax
(subtotal + shipping) - coupon  // Order total with discount
```

### Conditional Logic

```
Expressionage >= 21 && country == "US"    // Legal drinking age check
status == "premium" || purchases > 100  // Premium user check
```

### Data Navigation

```
Expression$root.settings.theme.colors.primary     // Deep property access
users[0].profile.displayName             // Array and object access
items[0].metadata["last-modified"]       // Array and object access
```

### Array Manipulation

```
Expression"red" in availableColors        // Check if color is available
categories + ["Other"]          // Add category to list
[selectedItem] + recommendations // Combine selections
```

### Function Integration

```
ExpressiontoString(round(price * 1.08))           // Convert rounded price to string
if(length(userName) > 0, toUpper(userName), "Guest")  // Conditional formatting
Date.format(timestamp, "long")          // Date formatting
```