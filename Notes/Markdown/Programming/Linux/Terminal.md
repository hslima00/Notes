### Formato do terminal

`<username>@<hostname><current working directory>$` 

### Home dir & Root dir 

Se estivermos na dir `/home` a `<current working directory>` vai ter um `~` à frente. Quando abrimos o terminal ele por definição vai ser inicializado nesta diretoria. Caso mudemos de terminal para a `/root` por exemplo, esta vai ter um `/` apenas. 

Por exemplo: 

![picture 5](%24%7Bpath%7D/img/d656dca0af1c901f51917f61e1befad7bb957770bb0948d9da8f016057501ed6.png)  

### Root user 

Para fazer alguma coisa com permissões `root`, o comando é `sudo`, e a sessão BASH (Borne Again Shell) vai ter um `#` à frente do user invés de um `$`: 

![picture 6](%24%7Bpath%7D/img/ef46a1da8ab3ba2bdcf635e0a5d3ce177ec0d7d6ce362250faf1ad04b7b43012.png)  


### Documentação de um comando 

Para aceder à documentação de um comando existem várias opções, tais como: 

- `man <command>`
- `<command> -h` ou `<command> --help`
- `apropos <command>` 

Uma ferramenta muito útil para perceber o que é que cada argumento de um comando faz é a [Explain Shell](https://explainshell.com/): 

![picture 1](%24%7Bpath%7D/img/afd2a910010e97ca69e7b06015ad3dd4a154d6cbec979031106a43c3eec99ad6.png)  


