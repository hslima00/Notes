
``` { .yaml .annotate }
    theme:
    features:
        - content.code.annotate # (1)
```

1.  :man_raising_hand: I'm a code annotation! I can contain `code`, **formatted
    text**, images, ... basically anything that can be expressed in Markdown.

-   [x] item 1
    -   [x] item A
    -   [ ] item B
            more text
        -   [x] item a
        -   [ ] item b
        -   [x] item c
    -   [x] item C
-   [ ] item 2
-   [ ] item 3

=== "Bash"

    ```bash
    #!/bin/bash

    echo "Hello world!"
    ```

=== "Explanation"

    This is only a short example of how to make tabs.

- [x] text
- [x] text
- [ ] text


    #!/bin/bash
    grep $1 $2

#!/bin/bash
grep $1 $2


```python hl_lines="3 4"
""" Bubble sort """
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

```python title="Bubble sort" hl_lines="3 4"
""" Bubble sort """
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
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

<!-- prettier-ignore -->
blockdiag {
  // branching edges to multiple children
  A -> B, C;
  // branching edges from multiple parents
  D, E -> F;
}

 ++ctrl+alt+del++



