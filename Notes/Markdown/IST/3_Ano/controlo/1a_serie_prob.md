## 2)

![picture 1](%24%7Bpath%7D/img/78ca1bbb288f1b5b80d2f310ce3f88a2bfe5a325672013a028b13b90149f415b.png)  

??? note "Equação diferencial"
    Equação diferencial é uma equação cuja incógnita é uma função que aparece na equação sob a forma das respectivas derivadas.

??? note "Resolução"

    ### a)

    O que é pedido é uma equação diferencial que relacione a tensão de entrada com a tensão de saída. 

    Usaremos para isso: 

    - Equação das Malhas 
    - Equação do Condensador 



    $$
    v_i(t)= Ri(t)+v_o(t)
    $$

    $$  
    i(t)=C*\frac{dv_o(t)}{dt}
    $$

    Substituindo a equação de $i(t)$ na de $v_i(t)$ ficamos com: 

    $$
    v_i(t)=RC*\frac{dv_o(t)}{dt}+v_o(t)
    $$

    A equação de cima por si só já é uma equação diferencial. Podemos obter a equação "clássica" para um circuito RC dividindo tudo por $RC$.

    $$
    \frac{1}{RC}v_i(t)=\frac{dv_o(t)}{dt}+\frac{1}{RC}v_o(t) 
    $$

    ### b)

    Aqui pretende-se obter a transformada de laplace $H(s)=\frac{V_o(s)}{V_i(s)}$. Para isto basta pegar na equação resolvida em **a)** uma vez que relaciona as duas. 

    $TL^{-1}$:

    $$
    \frac{1}{RC}V_i(s)=sV_o(t)+\frac{1}{RC}V_o(s)
    $$

    $$
    \equiv
    $$

    $$
    H(S)=\frac{V_o(s)}{V_i(s)}=\frac{\frac{1}{RC}}{s+\frac{1}{RC}}
    $$


    ### c)

    Determinar a resposta no tempo de $v_o(t)$ um escalão unitário basicamente ver qual é a resposta de $V_o(s)$ a um $V_i(s)=\frac{1}{s}$. 

    Ficaria portanto:

    $$
    V_o(s)=\frac{\frac{1}{RC}}{s+\frac{1}{RC}}V_i(s)\ \ \ \And \ \ \ V_i(s)=\frac{1}{s}
    $$

    $$
    V_o(s)=\frac{\frac{1}{RC}}{s(s+\frac{1}{RC})}
    $$

    Agora temos de decompor esta função em frações simples: 

    ??? tip "Resolução em frações simples"

        ![picture 2](%24%7Bpath%7D/img/19f7c038a8c3c680000eae8939d59b1b13db47d131a18c863ca8ef0befd3edbe.png)  


    Ficando portanto:

    $$
    V_o(s)=\frac{1}{s}-\frac{1}{s-\frac{1}{RC}}
    $$

    Fazendo a transformada inversa de Laplace $TL^{-1}$ de $V_o(t)$:

    $$
    v_o(t)=u(t)+e^{-\frac{1}{RC}}u(t) % (1)
    $$

    ??? note

        ![picture 3](%24%7Bpath%7D/img/fe42e55b268c75695fd0ea5821a7bda24e1f1ad85e358b4808f314c04bd9ca79.png)  

    ![picture 4](%24%7Bpath%7D/img/88d9679516f6e8d9fa512d0d310862118340240b73a2d9aac76357251314f241.png)  

    ### d) 

    O que é q acontece à resposta temporal de $v_o(t)$ caso $RC$ aumente ou diminua? 

    Se olharmos para $H(s)$ e o projetarmos num eixo imaginário 
    $$
    H(jw) = \frac{\frac{1}{RC}}{j\omega+\frac{1}{RC}}
    $$

    ![picture 5](%24%7Bpath%7D/img/31f1b6ed5b7913765a1c357b35ec5ffc0dd3cffcb3f338d33983a8397934755d.png)  

    ![picture 6](%24%7Bpath%7D/img/8bbc8455a8851d00deb32f8a102c9cb3fdba89f8849b98e2a2d7e888709d009a.png)  

    ![picture 7](%24%7Bpath%7D/img/e9cc1c8b2444f45b9f8c1228816e37141eafef2fa4f06f1622dcb77beaa50611.png)  

    ![picture 8](%24%7Bpath%7D/img/a73d77120bef44395ad2f66326fbf12f1cd5b4714c115ed6bd6a4119064d5a0a.png)  

    Quando o polo se distancia da origem a frequência de corte aumenta!!! 

    ![picture 9](%24%7Bpath%7D/img/6db5ed8fe7eb6f72f65019db16da9ab4b39681f59e1d2af1a8ea03e7da835ec3.png) 

    Se a $f_c$ aumenta, o sistema responde mais rápido:

    ![picture 10](%24%7Bpath%7D/img/0be1c024c0a17b42ae5e7b54c8478aba9aeb11897225d0562acacc3af02ea07f.png)  

    Como seria de esperar, se RC aumentar, verifica-se o efeito inverso.

## 4)

![picture 1](%24%7Bpath%7D/img/87477b289f34490f807c5bd1f7798889a550556f63dc6c812afd754b3e6d45b5.png)  


### a)

??? note "Resolução"

    ![picture 3](%24%7Bpath%7D/img/3dc019bfd4c34f55c7d9477f0a66801b5596e76ae8984299b086b880600831b5.png)  

### b)

??? note "Resolução"

    ![picture 2](%24%7Bpath%7D/img/963e176ec07a4dfa1ef126713dc796c28837d89b504ee699460095f4180673cc.png)  


## Problema 5

![picture 4](%24%7Bpath%7D/img/5f46638b9dcad46f91b65d48b76ad2f49eecfe3806161c887f1039fd5096773e.png)  

![picture 5](%24%7Bpath%7D/img/f8e4d0113e8c3c8d2600c5a33245beaa43952473ec617e18067cd5a9823d386b.png)  
** **