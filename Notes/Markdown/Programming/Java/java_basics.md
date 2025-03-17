---
ignore_macros: true
---

<center>
 
![picture 9](img/9f6b6e90460a47abc5a9ddc1e32af62b761f4550eee90f0590d02b454ebad3e7.png)  

 
</center>

## Java "Rules"

* Java is case-sensitive: "MyClass" and "myclass" has different meaning.
* Every line of code that runs in Java must be inside a class.
*  A class should always start with an uppercase first letter.
*  The name of the java file must match the class name.



## Strings
### String Length 
Retorna o tamanho da String.
```java
String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("The length of the txt string is: " + txt.length());
```
### toUpperCase() & toLowerCase()
```java
String txt = "Hello World";
System.out.println(txt.toUpperCase());   // Outputs "HELLO WORLD"
System.out.println(txt.toLowerCase());   // Outputs "hello world"
```
### indexOf()
```java
String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.indexOf("locate")); // Outputs 7
```
### String Concatenation 
Existem 2 métodos: 
```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```
```java
String firstName = "John ";
String lastName = "Doe";
System.out.println(firstName.concat(lastName));
```
**Nota:** Se adicionarmos um número e uma string, o resultado será uma string concatenation. (o inteiro passa a string).
```java
String x = "10";
int y = 20;
String z = x + y;  // z will be 1020 (a String)
```
----------

## Java Math

<center>

| Método          | Descrição                                     |
| --------------- | --------------------------------------------- |
| `Math.max(x,y)` | Retorna valor máximo entre x e y              |
| `Math.min(x,y)` | Retorna valor minimo entre x e y              |
| `Math.sqrt(x)`  | Retorna a raiz quadrada de `x`                |
| `Math.abs(x)`   | Retorna o módulo de `x`                       |
| `Math.random()` | Retorna um numero entre 0.0 (inclusive) e 1.0 |

</center>

----------
## Short If..Else
```java
variable = (condition) ? expressionTrue :  expressionFalse;
```
```java
int time = 20;
String result = (time < 18) ? "Good day." : "Good evening.";
System.out.println(result);
```

----------
## For Each Loop
```java
for (type variableName : arrayName) {
  // code block to be executed
}
```
```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}
```

----------
## Multidimensional Arrays

```java

class apples{
    public static void main(String[] args) {
        int firstarray[][]={{8,9,10,11},{12,13,14,15}};
        int secondarray[][]={{30,31,32,33},{34},{35,36}}

        System.out.println("This is the first array");
        display(firstarray);
        System.out.println("This is the second array");
        display(secondarray);
    }
    //cicle through the array
    public static void display(int x[][] /*receives the multidimensional array like this*/) {
        for(int row=0; row < x.length; row++){ 
            //x.length gives the number the arrays the MD array has.
            // firstarray.length=2, second array.length=3
            //ou seja, isto diz quantas linhas é que o MD array tem
            for(int col=0; col<x[row].length; col++){
                //se fizermos firstarray[0].length = 4, logo temos
                //4 colunas olhando para a primeira linha do MD Array
                System.out.print(x[row][col]+"\t");
            }
            System.out.println(); //new line (mete um \n basically)
        }
    }
}
```

----------

## Classes and Objects

Classes and objects are the two main aspects of object-oriented programming.

![picture 6](img/e508fe71a2d8c8d64b37e10fca027cc58b8220501a2420e60b649f4211a1873a.png)  



So, a class is a template for objects, and an object is an instance of a class.

When the individual objects are created, they inherit all the variables and methods from the class.


<center>

### Class

</center>

Class named  <span style="color:red">"Main"</span> with a variable x:

```java
public class Main {
  int x = 5;
}
```

<center>

### Object

</center>

Um objeto é criado a partir de uma classe. Neste caso vamos criar um **objeto** da classe *Main* chamado myObj.

```java
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();  // Object 1
    Main myObj2 = new Main();  // Object 2
    System.out.println(myObj1.x);
    System.out.println(myObj2.x);
  }
}
```
Podem ser criados mais do que um objeto da mesma classe.

## Multiple Classes

É possível criar uma classe a aceder a esta noutra classe. Isto é útil em termos de **organizar** as classes.

Exemplo: Uma classe tem todos os atributos e métodos e outra tem a `main()`, onde está o código a ser executado.

```java
Main.java
public class Main {
  int x = 5;
}   
```
```java
Second.java
class Second {
  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
```

## Java Attributes

As "variáveis" das classes, na verdade, são atributos das classes. 

Por exemplo, uma classe, `Main()`, que tem dois atributos, `x` e `y`:

```java
public class Main {
  int x = 5;
  int y = 3;
}
```
### Accessing Attributes

Podemos aceder a atributos das classes, primeiramente criando um objeto da mesma e depois usando o operador `.`. Por exemplo, aqui estamos a aceder ao atributo `x` do objeto `myObj` da classe `Main`.

```java
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
```
### Modifying Attributes

```java
public class Main {
  int x;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 40;
    System.out.println(myObj.x);
  }
}
```
Caso `x` já tivesse um valor, por exemplo `int x = 5;` este seria reescrito com o valor 40.

**SE** não quisermos que o valor seja editável então declaramos o atributo como `final`: 

```java
final int x = 10;
```

### Multiple Objects and Attributes

Se criarmos vários objetos de uma classe, os valores dos seus atributos não são partilhados, são independentes, logo podemos mudar os atributos de um objeto sem alterar os dos restantes.

```java
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();  // Object 1
    Main myObj2 = new Main();  // Object 2
    myObj2.x = 25;
    System.out.println(myObj1.x);  // Outputs 5
    System.out.println(myObj2.x);  // Outputs 25
  }
}
 ```

### Multiple Attributes

Podem ser criados tantos atributos quanto quisermos.

```java
public class Main {
  String fname = "John";
  String lname = "Doe";
  int age = 24;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Age: " + myObj.age);
  }
}
```

----------

## Java Methods

???+ quote inline

    *A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions. Why use methods? To reuse code: define the code once, and use it many times.*

Os métodos são declarados dentro das classes. Kinda like funções em C.

```java title="Método em Java"
public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod();
  }
}

// Outputs "I just got executed!"
```

### Method Parameters

É possível passar parâmetros (argumentos) para métodos, isto faz-se facilmente inserindo o parâmetro a passar nos `()` do método:

!!! example

```java title="Passagem de Parâmetros"
        public class Main {
            static void myMethod(String fname) {
                System.out.println(fname + " Refsnes");
            }

            public static void main(String[] args) {
                myMethod("Liam");
                myMethod("Jenny");
                myMethod("Anja");
            }
        }
        // Liam Refsnes
        // Jenny Refsnes
        // Anja Refsnes
```



