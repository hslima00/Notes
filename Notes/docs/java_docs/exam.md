### Provide six differences, confronting each other, between abstract classes and interfaces.

- Abstract classes can have abstract and non-abstract methods. Interfaces can only have abstract methods.
- Abstract classes don’t support multiple inheritance, only single inheritance. Interfaces do support multiple inheritance.
- An abstract class can extend a concrete class or an abstract class. An interface can only extend an interface.
- In abstract classes the keyword “abstract” is mandatory to declare a method as abstract. In interfaces the keyword “abstract” is optional.
- An abstract class can have non-public abstract methods. An interface can only have public abstract methods.
- An abstract class can have non-static fields, whereas an interface can only have public static final fields.

### Tickets - UML

??? example

    ![picture 1](%24%7Bpath%7D/img/caa3571fdad4453fe9d24672103714c9f5ff8ac7f9679d7b10e5466ef70537c9.png)  

    ![picture 2](%24%7Bpath%7D/img/a9a62da702a3efebb396c485da11114e0b387f678d6a188cba1518c8b5abeb03.png)  


###  In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:

-  Inheritance

### The concept of multiple inheritance is implemented in Java by
- II. Extending one class and implementing one or more interfaces.
- III. Implementing two or more interfaces.

### What is printed to the terminal ?

```java
Integer i = new Integer(2);
Integer j = new Integer(2);
System.out.print(i==j);
System.out.print(i.equals(j));

FALSE TRUE
```

###  When does method overriding is determined?

- At run time.

###  Which interface one should implement to define a natural order?

- `Comparable` 