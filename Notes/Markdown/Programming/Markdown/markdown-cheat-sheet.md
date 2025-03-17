---
hide:
  - navigation
password: teste
--- 



## **Markdown Equations**
É possivel escrever equações em MarkDown no formato LaTeX:

* `$\sqrt{25}=5$` $\rightarrow$ $\sqrt{25}=5$ 
 


## **Markdown no VSCode**
* `Ctrl+Shift+V` - Ativa o preview do VSCode
* `Ctrl+\` - Split screen
* `Ctrl+J` - Abre terminal 
* `Ctrl+Space` - Aparece um pop up muito util das snippets do VSCode
* `Ctrl+Shift+P: Snippet Ranger` - Extensão muito util para usar snippets, e dá para criar os teus próprios. 


## **Markdown All in One Extension**
<center>

| **Command**            | **Usage**                    |
| ---------------------- | ---------------------------- |
| `Ctrl + B`             | Toggle **bold**              |
| `Ctrl + I`             | Toggle *italic*              |
| `Alt+S (on Windows)`   | Toggle ~~strikethrough1~~    |
| `Ctrl + Shift + ]`     | Toggle heading (uplevel)     |
| `Ctrl + Shift + [`     | Toggle heading (downlevel)   |
| `Ctrl/Cmd + M`         | Toggle math environment      |
| `Alt + C`              | Check/Uncheck task list item |
| `Ctrl/Cmd + Shift + V` | Toggle preview               |
| `Ctrl/Cmd + K V`       | Toggle preview to side       |
| `Alt*Shift+F`          | Align Table                  |

</center>


## **Class Diagram Example / UML**


??? example "UML Image made with [Mermaid](https://mermaid-js.github.io/mermaid-live-editor/edit)"

    [![](https://mermaid.ink/img/pako:eNptkU1PwzAMhv9K5BOI9Q9EXBDbJA477YYqITcxndV8QD40weh_Jy1rGR0-OY_tV2_sEyivCSQogzGuGduAtnaixINji0bcf1WVWGfVXdMtx8M1faYm4B8sxR27JLClJd6nwK4VLTlN4bI4jMQd2pLe3C4KFhNNcLQ92jv9ADGLNoTdozc-zIV4ZDsNlud7RtVN7_5Sb_jYrFcN3iN_0pPbEqUZK3QbTP_Ojyv4NdR4bwTHlyMbPcOQ3WJ2CliBpWCRdbnLqFJDOpClGmRJNYauhtr1pS-_6bKMjebkA8hXNJFWgDn5_YdTIFPINDWdb3vu6r8BaWOZRQ)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNptkU1PwzAMhv9K5BOI9Q9EXBDbJA477YYqITcxndV8QD40weh_Jy1rGR0-OY_tV2_sEyivCSQogzGuGduAtnaixINji0bcf1WVWGfVXdMtx8M1faYm4B8sxR27JLClJd6nwK4VLTlN4bI4jMQd2pLe3C4KFhNNcLQ92jv9ADGLNoTdozc-zIV4ZDsNlud7RtVN7_5Sb_jYrFcN3iN_0pPbEqUZK3QbTP_Ojyv4NdR4bwTHlyMbPcOQ3WJ2CliBpWCRdbnLqFJDOpClGmRJNYauhtr1pS-_6bKMjebkA8hXNJFWgDn5_YdTIFPINDWdb3vu6r8BaWOZRQ)




## **Mkdocs Usage**
* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.
* `mkdocs gh-deploy` - Mete o que escreves no GitPages (este site)


## **Admonitions**

Cenas bué úteis quando queremos chamar a atenção para alguma cena. Eye catching! 

??? examples "Admonitions Examples"

    !!! note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```markdown title="Normal"
    !!! note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```

    !!! note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```markdown  title="Com titulo mudado"
    !!! note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```

    !!! note ""

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```markdown title="Sem título"
    !!! note ""

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```
    ??? note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```markdown title="Hidden"
    ??? note 

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```
    ???+ note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.
    ```markdown title="Expanded"
    ???+ note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ```

    !!! info inline end

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.

    ```markdown title=""
    !!! info inline end

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.

    ```
    !!! info inline

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```markdown title=""
    !!! info inline

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.

    ```
### Admonition Types

??? note inline
    `note`


??? abstract inline
    `abstract`, `summary`,`tldr`

??? info inline
    `info`,`todo`
??? tip inline
    `tip`,`hint`, `important`
??? success inline
    `success`,`done`,`check`
??? question inline
    `question`,`help`,`faq`
??? warning inline
    `warning`,`caution`,`attention`
??? failure inline
    `failure`,`fail`,`missing`
??? danger inline
    `error`,`danger`
??? bug inline
    `bug`
??? example inline
    `example`
??? quote inline
    `quote`

<br><br />
<br><br />
<br><br />
<br><br />


## Butões

<center>

[Também dá para meter butões](https://python-markdown.github.io/extensions/attr_list/){ .md-button .md-button--primary }

</center>
??? example "Código para Butão"
    ```markdown title=""
    [Também dá para meter butões](https://python-markdown.github.io/extensions/attr_list/){ .md-button .md-button--primary }
    ```



# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^