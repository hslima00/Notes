# mkdocs-macro

Esta cena permite basicamente ter funções Python a rodar em Markdown. Loco.

## Macro

!!! note "Definição de macro, segundo o mkdocs-macro"
    A macro is, simply stated, a Python function with arguments that returns a string.

    Macros are called from markdown pages. The result of each call to a macro is then embedded into the page, before mkdocs renders that page into a HTML page.

    A macro may contain all the logic required; it could be as simple as a button, or as sophisticated as making a query from a database and formatting the results as markdown or HTML.

    Macros bring to mkdocs the power and flexibility of macros from wiki engines, without their complexity.

    [Source](https://mkdocs-macros-plugin.readthedocs.io/en/latest/why/#use-case-overcoming-the-intrinsic-limitations-of-markdown-syntax)

!!! danger "Macros"
    "A macro is, simply stated, a Python function with arguments that returns a string."
    Esta string pode ser código Markdown! Ou HTML!

### Macro Global 
Fazes no `main.py`.

### Macro Local - Linguagem Jinja2 

Exemplo da documentação oficial da Jinja2

    {.% macro input(name, value='', type='text', size=20) -%}
        <input type="{{ type }}" name="{{ name }}" value="{{
            value|e }}" size="{{ size }}">
    {.%- endmacro %}

E na página podemos usar esse mesmo macro:

    <p>{.{ input('username') }}</p>
    <p>{.{ input('password', type='password') }}</p>

Resultado: 

{% macro input(name, value='', type='text', size=20) -%}
    <input type="{{ type }}" name="{{ name }}" value="{{
        value|e }}" size="{{ size }}">
{%- endmacro %}

<center>
<p>{{ input('username') }}</p>
<p>{{ input('password', type='password') }}</p>
</center>

## Filter

## Variáveis 

### Variáveis Globais
Nas configurações do mkdocs.yml:


```yaml
extra:
    price: 12.50
    company:
        name: Acme
        address: ....
        website: www.acme.com
```

E depois pode-se usar globalmente as variáveis nos ficheiros markdown assim: 



    The price of the product is {price}.

    See [more information on the website]({company.website }).

    See <a href="{company.website}">more information on the website</a>.

### Variáveis locais

São definidas dentro do documento Markdown:


    {.% set acme = 'Acme Company Ltd' %.} # Sem ponto!

    Please buy the great products from {{ acme }}!


## mkdocs.yml



## main.py (exemplo)

??? note "main.py"

        """
        Basic example of a Mkdocs-macros module
        """

        import math

        def define_env(env):
            """
            This is the hook for defining variables, macros and filters

            - variables: the dictionary that contains the environment variables
            - macro: a decorator function, to declare a macro.
            - filter: a function with one of more arguments,
                used to perform a transformation
            """

            # add to the dictionary of variables available to markdown pages:
            env.variables['baz'] = "John Doe"

            # NOTE: you may also treat env.variables as a namespace,
            #       with the dot notation:
            env.variables.baz = "John Doe"

            @env.macro
            def bar(x):
                return (2.3 * x) + 7

            # If you wish, you can  declare a macro with a different name:
            def f(x):
                return x * x
            env.macro(f, 'barbaz')

            # or to export some predefined function
            env.macro(math.floor) # will be exported as 'floor'


            # create a jinja2 filter
            @env.filter
            def reverse(x):
                "Reverse a string (and uppercase)"
                return x.upper()[::-1]

??? tip "Mudar o nome do main.py"

    Para isto temos de adicionar isto no mkdocs.yml, neste caso o nome do ficheiro .py seria "source_code":

        plugins:
            ...
            - macros:
                 module_name: source_code




# testes


{{ git.short_commit}} ({{ git.date}}) by {{ git.author}}

{{ git.raw }}

{{ git.date.strftime("%b %d, %Y %H:%M:%S") }}

{{ context(git)| pretty }}