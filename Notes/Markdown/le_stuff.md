---
hide:
  - navigation
---
### Index 



{% macro toc(page) %}

- [{{ page.title }}]({{ page.url }})
{% if page.children %}
  {% for child in page.children %}
    {{ toc(child) }}
  {% endfor %}
{% endif %}

{% endmacro %}

{{ toc(site.pages) }}



??? bug "Bonus"

    <p align="center">
      <img src="img/favicon.jpg" />
    </p>
## **GitPages Search Engine**
É possível procurar cenas no GitPages clicando `F`.

Isto é um teste

ola 2


