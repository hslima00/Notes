!!! quote
        OOP stands for Object-Oriented Programming.

        Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.

        Object-oriented programming has several advantages over procedural programming:

        OOP is faster and easier to execute
        OOP provides a clear structure for the programs
        OOP helps to keep the Java code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
        OOP makes it possible to create full reusable applications with less code and shorter development time

??? tip

    The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.


## Static VS Non-Static

* Static: Não precisa de um objeto para chamar o método.
* Non-Static: Precisa de ser chamado por um objeto, posteriormente criado.

```java
public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  // Main method
  public static void main(String[] args) {
    myStaticMethod(); // Call the static method
    // myPublicMethod(); This would compile an error

    Main myObj = new Main(); // Create an object of Main
    myObj.myPublicMethod(); // Call the public method on the object
  }
}
```

## Java Constructors

Um consctructor é usado para inicializar objetos. Ou seja, quando criamos um objeto com: 

```java title=""
Main myObj = new Main();
```
Temos também que criar o construtor para este, exemplo:

```java title=""
  // Create a class constructor for the Main class
  public Main() {
    x = 5;  // Set the initial value for the class attribute x
  }
```

!!! warning
    Note that the constructor name must match the class name, and it cannot have a return type (like void).

    Also note that the constructor is called when the object is created.

    All classes have constructors by default: if you do not create a class constructor yourself, Java creates one for you. However, then you are not able to set initial values for object attributes.

!!! example
```java
public class Main {
  int modelYear;
  String modelName;

  public Main(int year, String name) {
    modelYear = year;
    modelName = name;
  }

  public static void main(String[] args) {
    Main myCar = new Main(1969, "Mustang");
    System.out.println(myCar.modelYear + " " + myCar.modelName);
  }
}

// Outputs 1969 Mustang
```

## Java Modifiers

* Access Modifiers - controls the access level
* Non-Access Modifiers - do not control access level, but provides other functionality

### Access Modifiers

Para **classes**:

| Modificador | Descrição                                                            |
| ----------- | -------------------------------------------------------------------- |
| `public`    | A *class* é alcançável por todas as classes                          |
| *default*   | A *class* só é alcançável por classes que estejam no mesmo *package* |

Para **atributos**, **métodos** e **construtores**: 

| Modificador | Descrição                                                        |
| ----------- | ---------------------------------------------------------------- |
| `public`    | O código é alcançavel por todas as classes                       |
| `private`   | O código só é acedido dentro da classe que o declarou            |
| *default*   | O código é alcançavel dentro do mesmo *package*                  |
| `protected` | O código é alcançável dentro do mesmo *package* e **subclasses** |

<span style="color:green">

### Non-Access Modifiers 

</span>

Para **classes**:

| Modificador | Descrição                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| `final`     | A *class* não pode ser herdada por outras classes, ou seja, se fizermos `extend` dessa classe vai dar erro. |
| `abstract`  | Uma classe que não pode criar objetos.                                                                      |



Para **atributos**, **métodos** e **construtores**: 

| Modificador | Descrição                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `final`     | Atributos e métodos não podem ser modificados/overriden                                                                                                              |
| `static`    | Atributos e métodos pertencem à *class* e não ao objeto                                                                                                              |
| `abstract`  | Só podem ser usados numa *class* do tipo `abstract`. Só podem ser usados em métodos. O método não tem "corpo", este é definido nas subclasses da *class* `abstract`. |

Existem ainda `transient`, `syncronized` e `volatile`, porém isto não foi muito falado em aula nem usado em nenhum exercício/lab e usam threads, coisa que não foi falada em POO tb.

??? example "Os 3 fields mencionados acima"

    | Modificador    | Descrição                                                                                         |
    | -------------- | ------------------------------------------------------------------------------------------------- |
    | `transient`    | Attributes and methods are skipped when serializing the object containing them                    |
    | `synchronized` | Methods can only be accessed by one thread at a time                                              |
    | `volatile`     | The value of an attribute is not cached thread-locally, and is always read from the "main memory" |

### Exemplos


??? example "Final"
    ```java
    public class Main {
    final int x = 10;
    final double PI = 3.14;

    public static void main(String[] args) {
        Main myObj = new Main();
        myObj.x = 50; // will generate an error: cannot assign a value to a final variable
        myObj.PI = 25; // will generate an error: cannot assign a value to a final variable
        System.out.println(myObj.x);
    }
    }
    ```
??? example "Static"
    ```java
    public class Main {
    // Static method
    static void myStaticMethod() {
        System.out.println("Static methods can be called without creating objects");
    }

    // Public method
    public void myPublicMethod() {
        System.out.println("Public methods must be called by creating objects");
    }

    // Main method
    public static void main(String[ ] args) {
        myStaticMethod(); // Call the static method
        // myPublicMethod(); This would output an error

        Main myObj = new Main(); // Create an object of Main
        myObj.myPublicMethod(); // Call the public method
    }
    }
    ```
??? example "Abstract"
    ```java
    // Code from filename: Main.java
    // abstract class
    abstract class Main {
    public String fname = "John";
    public int age = 24;
    public abstract void study(); // abstract method
    }

    // Subclass (inherit from Main)
    class Student extends Main {
    public int graduationYear = 2018;
    public void study() { // the body of the abstract method is provided here
        System.out.println("Studying all day long");
    }
    }
    // End code from filename: Main.java

    // Code from filename: Second.java
    class Second {
    public static void main(String[] args) {
        // create an object of the Student class (which inherits attributes and methods from Main)
        Student myObj = new Student();

        System.out.println("Name: " + myObj.fname);
        System.out.println("Age: " + myObj.age);
        System.out.println("Graduation Year: " + myObj.graduationYear);
        myObj.study(); // call abstract method
    }
    }
    ```

## Encapsulation




**Encapsulation** serve para esconder "sensitive" data ao utilizador. Para isto devemos: 

- [x] Declarar as variáveis/atributos da classe `private`.
- [x] Aceder e atualizar valores de variáveis `private` recorrendo aos métodos `get()` e `set()`.
  
### Get and Set

* **Getter** - retorna o valor de um atributo/variável sem mudar o valor.
* **Setter** - atualiza/muda o valor de um atributo/variável.
  
=== "person.java"
    ```java
    public class Person {
    private String name; // private = restricted access

    // Getter
    public String getName() {
        return name;
    }

    // Setter
    public void setName(String newName) {
        this.name = newName;
    }
    }
    ```
=== "main.java (erro)"
    ```java hl_lines="4 5"
    public class Main {
    public static void main(String[] args) {
        Person myObj = new Person();
        myObj.name = "John";  //error (1)
        System.out.println(myObj.name); // error 
        //as the name variable is declared as private, we cannot access it from outside this class  
    }
    }
    ```
=== "main.java (correct)"
    ```java hl_lines="4 5"
    public class Main {
    public static void main(String[] args) {
        Person myObj = new Person();
        myObj.setName("John"); // Set the value of the name variable to "John"
        System.out.println(myObj.getName());
    }
    }

    // Outputs "John"
    ```
??? question "Porquê Encapsulation?"
    * Better control of class attributes and methods
    * Class attributes can be made read-only (if you only use the get method), or write-only (if you only use the set method)
    * Flexible: the programmer can change one part of the code without affecting other parts
    * Increased security of data

## Java Packages
Um *package* em Java é utilizado para "guardar" classes semelhantes no mesmo sítio. 

Existem *packeges* pré-feitos pela Oracle, que podem ser encontrados [aqui](https://docs.oracle.com/javase/8/docs/api/).

Podemos importar classes especificas ou o *package* inteiro:
```java
import package.name.Class;   // Import a single class
import package.name.*;   // Import the whole package
import java.util.Scanner;
```
No exemplo acima `java.util` é o *package* e `Scanner` é a *class*.

### Creating a package
```
└── root
  └── mypack
    └── MyPackageClass.java
```
```java title="MyPackageClass.java"
package mypack;
class MyPackageClass {
  public static void main(String[] args) {
    System.out.println("This is my package!");
  }
}
```
#### Compiling with a package

1. Compilar o .java
2. Compilar o package
3. Correr
   
Ou seja:

1. `C:\Users\Your Name>javac MyPackageClass.java`
2. `C:\Users\Your Name>javac -d . MyPackageClass.java`
3. `C:\Users\Your Name>java mypack.MyPackageClass`

O output seria: `This is my package!`.

## Java Inheritance

Em Java é possível que uma classe herde atributos e métodos de outra, criando assim uma hierarquia.

Podemos separar a hierarquia em dois tipos de classes:
* **subclass** - class que herda os atributos e métodos
* **superclass** - class dá herança

Para uma classe herdar de outra usa-se o `extends`.

???+ example "Herança"
    ```java
    class Vehicle {
    protected String brand = "Ford";        // Vehicle attribute
    public void honk() {                    // Vehicle method
        System.out.println("Tuut, tuut!");
    }
    }

    class Car extends Vehicle {
    private String modelName = "Mustang";    // Car attribute
    public static void main(String[] args) {

        // Create a myCar object
        Car myCar = new Car();

        // Call the honk() method (from the Vehicle class) on the myCar object
        myCar.honk();

        // Display the value of the brand attribute (from the Vehicle class) and the value of the modelName from the Car class
        System.out.println(myCar.brand + " " + myCar.modelName);
    }
    }
    ```

## Java Polymorphism

O polimorfismo acontece quando temos várias classes relacionadas umas com as outras hierarquicamente. 

Por exemplo, uma superclass chamada `Animal` que tem subclasses como `Porco`, `Gato`, etc. Todos os animais têm um `animalSound()` distinto entre eles.

```java title="Polimorfismo"
class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}

class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object
    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}
```

----------

## Java Abstraction 

Basicamente é a cena das classes poderem levar o modificador `abstract`.

Por exemplo, um veículo é uma "coisa" abstrata, mas todos os veículos têm por exemplo uma `velocidadeMedia()` etc.

```java
// Abstract class
abstract class Animal {
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep() {
    System.out.println("Zzz");
  }
}

// Subclass (inherit from Animal)
class Pig extends Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}
```
## Java Interfaces

Usar interfaces é outra maneira de criar abstração em Java. Uma interface é uma classe "completely abstract" usada para agrupar métodos sem corpo.

??? example "Interface"
    ```java title="Interface"
    // interface
    interface Animal {
    public void animalSound(); // interface method (does not have a body)
    public void run(); // interface method (does not have a body)
    }
    ```

Para uma classe aceder aos métodos de uma interface usa-se o `implements`.

??? example "`implements`"
    ```java
    // Interface
    interface Animal {
    public void animalSound(); // interface method (does not have a body)
    public void sleep(); // interface method (does not have a body)
    }

    // Pig "implements" the Animal interface
    class Pig implements Animal {
    public void animalSound() {
        // The body of animalSound() is provided here
        System.out.println("The pig says: wee wee");
    }
    public void sleep() {
        // The body of sleep() is provided here
        System.out.println("Zzz");
    }
    }

    class Main {
    public static void main(String[] args) {
        Pig myPig = new Pig();  // Create a Pig object
        myPig.animalSound();
        myPig.sleep();
    }
    }
    ```

???+ note
* Interfaces **não** podem criar objetos, uma vez que são classes `abstract`.
* Os métodos das interfaces não têm corpo, este é posteriormente definido pelas classes que fazem o `implements` da interface.
* Os métodos de uma interface são `public` e `abstract`.
* Os atributos de uma interface são `public`, `static` e `final`.
* Uma interface não tem constructor, uma vez que não cria objetos.

??? example "Exemplo com múltiplas interfaces"
    ```java
    interface FirstInterface {
    public void myMethod(); // interface method
    }

    interface SecondInterface {
    public void myOtherMethod(); // interface method
    }

    class DemoClass implements FirstInterface, SecondInterface {
    public void myMethod() {
        System.out.println("Some text..");
    }
    public void myOtherMethod() {
        System.out.println("Some other text...");
    }
    }

    class Main {
    public static void main(String[] args) {
        DemoClass myObj = new DemoClass();
        myObj.myMethod();
        myObj.myOtherMethod();
    }
    }
    ```

----------
## Enum
```java title="Enum example" 
public class Main {
  enum Level {
    LOW,
    MEDIUM,
    HIGH
  }

  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; 
    System.out.println(myVar);
  }
}
```
!!! warning
    Os valores de um `enum` são constantes e imutáveis, como se fossem definidos com o modificador `final`.

??? example "Switch-Case Enum"

    ```java
    enum Level {
    LOW,
    MEDIUM,
    HIGH
    }

    public class Main {
    public static void main(String[] args) {
        Level myVar = Level.MEDIUM;

        switch(myVar) {
        case LOW:
            System.out.println("Low level");
            break;
        case MEDIUM:
            System.out.println("Medium level");
            break;
        case HIGH:
            System.out.println("High level");
            break;
        }
    }
    }
    ```

??? example "For each Enum"
    ```java
    for (Level myVar : Level.values()) {
        System.out.println(myVar);
    }
    ```

## User Input

??? example "User Input"

    ```java
        import java.util.Scanner;

        class Main {
        public static void main(String[] args) {
            Scanner myObj = new Scanner(System.in);

            System.out.println("Enter name, age and salary:");

            // String input
            String name = myObj.nextLine();

            // Numerical input
            int age = myObj.nextInt();
            double salary = myObj.nextDouble();

            // Output input by user
            System.out.println("Name: " + name);
            System.out.println("Age: " + age);
            System.out.println("Salary: " + salary);
        }
        }
    ```

## ArrayList

Uma `ArrayList` é um array mas "resizable" que pertence ao package java.util.

A diferença entre um array dito normal e um ArrayList é q o tamanho de um array normal não pode ser modificado, se queremos meter mais um elemento no array temos de fazer um novo, copiar o array antigo e meter outro elemento na ultima posição por exemplo. No caso do ArrayList podemos adicionar ou remover elementos sem problema.

!!! warning "A syntax é diferente que num array normal!" 

```java title="Uma `ArrayList` que vai guardar strings"
import java.util.ArrayList; // import the ArrayList class

ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object
```
### Adicionar elementos

??? example "add( )"
    ```java
    import java.util.ArrayList;

    public class Main {
      public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        System.out.println(cars);
      }
    }
    ```

### Aceder a um elemento por index

??? example "get( )"
    `cars.get(0);`

### Modificar elementos numa ArrayList

??? example "set( )"
    `cars.set(0, "Opel");`

### Remover um elemento da ArrayList

??? example "remove( )"
    `cars.remove(0);`

### Remover todos os elementos da ArrayList

??? example "clear( )"
    `cars.clear();` 

### Tamanho de uma ArrayList

`cars.size()`

### Loop de uma ArrayList

```java title="For" hl_lines="8 9 10"
public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }
  }
}
```

Também se pode usar o For-Each

```java title="For-Each" hl_lines="8 9 10"
public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    for (String i : cars) {
      System.out.println(i);
    }
  }
}
```

### Sort ArrayList

Existe uma class no package java.util chamada `Collections` que inclui a funcionalidade `sort()` e que pode ser usada numa ArrayList, ordenando-a alfabeticamente ou numericamente.

???example "Sort( )"
    ```java title="Sort alfabeticamente"
    import java.util.ArrayList;
    import java.util.Collections;  // Import the Collections class

    public class Main {
      public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        Collections.sort(cars);  // Sort cars
        for (String i : cars) {
          System.out.println(i);
        }
      }
    }
    ```

    ```java title="Sort Numericamente"
    import java.util.ArrayList;
    import java.util.Collections;  // Import the Collections class

    public class Main {
      public static void main(String[] args) {
        ArrayList<Integer> myNumbers = new ArrayList<Integer>();
        myNumbers.add(33);
        myNumbers.add(15);
        myNumbers.add(20);
        myNumbers.add(34);
        myNumbers.add(8);
        myNumbers.add(12);

        Collections.sort(myNumbers);  // Sort myNumbers

        for (int i : myNumbers) {
          System.out.println(i);
        }
      }
    }
    ```

## LinkedList
Uma `LinkedList` é muito parecida a uma `ArrayList` (até porque usam a mesma interface `List`) porem são construidas de formas muito diferentes.

Uma `ArrayList` tem um array normal dentro dela.

Uma `LinkedList` guarda os seus item dentro de "containers". A List tem um link para o primeiro container, e cada container tem um link para o próximo. Tipo nodes em AED. 

Normalmente a `ArrayList` é mais eficiente uma vez que o seu uso foca-se mais em aceder a index's random da lista, mas a `LinkedList` tem métodos mais eficientes para alguns casos:

| Método        | Descrição                           |
| ------------- | ----------------------------------- |
| addFirst()    | Adiciona um item ao inicio da lista |
| addLast()     | Adiciona um item ao fim da lista    |
| removeFirst() | Remove um item do inicio da lista   |
| removeLast()  | Remove um item do fim da lista      |
| getFirst()    | Obtém o primeiro item da lista      |
| getLast()     | Obtém o ultimo item da lista        |

!!!*** tip "Quando usar?"
    Usa-se a `ArrayList` para guardar e aceder a dados, e a `LinkedList` para manipular dados.

??? example
    ```java
    import java.util.LinkedList;

    public class Main {
      public static void main(String[] args) {
        LinkedList<String> cars = new LinkedList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        
        // Use getLast() to display the last item in the list
        System.out.println(cars.getFirst()); //Output: Volvo
        cars.addFirst("Hola");
        System.out.println(cars.getFirst()); //Output: Hola
      }
    }
    ```
    