---
date: 2025-03-17
title: testando...
authors:
  - hslima
---

# Markdown Tests

## Icon Search

<div class="mdx-iconsearch" data-mdx-component="iconsearch">
  <input
    class="md-input md-input--stretch mdx-iconsearch__input"
    placeholder="Search the icon and emoji database"
    data-mdx-component="iconsearch-query"
  />
  <div class="mdx-iconsearch-result" data-mdx-component="iconsearch-result">
    <div class="mdx-iconsearch-result__meta"></div>
    <ol class="mdx-iconsearch-result__list"></ol>
  </div>
</div>
<small>
  :octicons-light-bulb-16:
  **Tip:** Enter some keywords to find icons and emojis and click on the
  shortcode to copy it to your clipboard.
</small>

## Annotations

=== "Result"
    Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
    { .annotate }

    1.  :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
        text__, images, ... basically anything that can be expressed in Markdown.

=== "Code"
    ```markdown
    Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
    { .annotate }

    1.  :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
        text__, images, ... basically anything that can be expressed in Markdown.
    ```

## Math

=== "Result"
    $$
    \int_0^\infty \frac{x^3}{e^x} \, dx = \frac{\pi^4}{15}
    $$

=== "Code"
    ```markdown
    $$
    \int_0^\infty \frac{x^3}{e^x} \, dx = \frac{\pi^4}{15}
    $$
    ```

## Code

=== "Result"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "Code"

    ``` markdown
      ``` c++
      #include <iostream>

      int main(void) {
        std::cout << "Hello world!" << std::endl;
        return 0;
      }
      ```
    ```

## Mermaid

=== "Result"
    ``` mermaid
    graph LR
      A[Start] --> B{Error?};
      B -->|Yes| C[Hmm...];
      C --> D[Debug];
      D --> B;
      B ---->|No| E[Yay!];
    ```

=== "Code"
    ```markdown
      ``` mermaid
      graph LR
        A[Start] --> B{Error?};
        B -->|Yes| C[Hmm...];
        C --> D[Debug];
        D --> B;
        B ---->|No| E[Yay!];
      ```
    ```

## Tabs

=== "Result"

  === "Bash"

      ```bash
      #!/bin/bash

      echo "Hello world!"
      ```

  === "Explanation"

      This is only a short example of how to make tabs. 

=== "Code"

    ```markdown
      === "Bash"

          ```bash
          #!/bin/bash

          echo "Hello world!"
          ```

      === "Explanation"

          This is only a short example of how to make tabs.
    ```
    
## Lists

=== "Result"
    - [x] text
    - [x] text
    - [ ] text

    1. First item
    2. Second item
    3. Third item

    * Unordered item 1
    * Unordered item 2
    * Unordered item 3

=== "Code"
    ```markdown
      - [x] text
      - [x] text
      - [ ] text

      1. First item
      2. Second item
      3. Third item

      * Unordered item 1
      * Unordered item 2
      * Unordered item 3
    ```


## Code

=== "Result"

    ```python hl_lines="3 4"
    """ Bubble sort """
    def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

=== "Code"
    ```markdown
      ```python title="Bubble sort" hl_lines="3 4"
      """ Bubble sort """
      def bubble_sort(items):
      for i in range(len(items)):
          for j in range(len(items) - 1 - i):
              if items[j] > items[j + 1]:
                  items[j], items[j + 1] = items[j + 1], items[j]
      ```
    ```






[=0% "0%"]
[=5% "5%"]
[=25% "25%"]
[=45% "45%"]
[=65% "65%"]
[=85% "85%"]
[=100% "100% ready"]

[=50%]{: .thin}

blockdiag {
    A -> B -> C -> D;
    A -> E -> F -> G;
}

blockdiag {
   A [label = "foo"];
   B [label = "bar"];
   C [label = "baz"];

   A -> B [label = "click bar", textcolor="red"];
   B -> C [label = "click baz"];
   C -> A;
}

<!-- prettier-ignore -->
blockdiag {
   // Set labels to nodes.
   A [label = "foo"];
   B [label = "bar"];
   // And set text-color
   C [label = "baz"];

   // Set labels to edges. (short text only)
   A -> B [label = "click bar", textcolor="red"];
   B -> C [label = "click baz"];
   C -> A;
}

<!-- prettier-ignore -->
```
blockdiag {
   // Set boder-style, backgroun-color and text-color to nodes.
   A [style = dotted];
   B [style = dashed];
   C [color = pink, style = "3,3,3,3,15,3"]; //dashed_array format style
   D [color = "#888888", textcolor="#FFFFFF"];
   // Set border-style and color to edges.
   A -> B [style = dotted];
   B -> C [style = dashed];
   C -> D [color = "red", style = "3,3,3,3,15,3"]; //dashed_array format style
   // Set numbered-badge to nodes.
   E [numbered = 99];
   // Set arrow direction to edges.
   E -> F [dir = none];
   F -> G [dir = forward];
   G -> H [dir = back];
   H -> I [dir = both];
   // Set width and height to nodes.
   K [width = 192]; // default value is 128
   L [height = 64]; // default value is 40
   // Use thick line
   J -> K [thick]
   K -> L;
}
``` 

<!-- prettier-ignore -->
blockdiag {
  // branching edges to multiple children
  A -> B, C;
  // branching edges from multiple parents
  D, E -> F;
}

 ++ctrl+alt+del++



