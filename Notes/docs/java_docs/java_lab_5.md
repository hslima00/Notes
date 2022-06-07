??? abstract "Instruções do Lab5"

    We intend to create a simple tool in Java to create images constituted by characters, called ASCII Art.

    The class Shape is abstract and it is extended by a Rectangle, a Circle, a Triangle or an Aggregate. An Aggregate is a complex form that combines two or more shapes. This form allows to create complex shapes in a modular way, for instance, it allows to create a house aggregate which is then used in a city aggregate. The method intersection receives an integer y and returns an array of integers which represents the x points such that (x,y) belongs to the respective shape.

    The class Image has the methods to obtain the ASCII art from combined shapes:

    The method line receives the number y of the line and returns a String which corresponds to the y-th line of the image of characters.
    The method toString returns the string with the full image of characters.
    (a) Implement it in Java.

    (b) Test your program (in a main method).
<center>
 
[UML](https://hslima00.github.io/notes/java_docs/img/asciiart.geom.en.jpg){ .md-button .md-button--primary target=_blank}
 
</center>

!!! note
    No código a classe "Shape" de que a professora fala no enunciado é "Form".

Primeiramente temos uma classe `abstract` chamada de `"Form"`. Isto porque uma forma é abstrata, mas tem algumas coisas em comum, como por exemplo posição `x` e `y`.

```java title="abstract class Form" hl_lines="3 8"
package asciiart.geom;

public abstract class Form {
	
	protected int pos_y;
	protected int pos_x;
	
	public Form(int pos_x,int pos_y){ 
        //click me -> (1)
		this.pos_x=pos_x;
		this.pos_y=pos_y;
	}

	public abstract int[] intersection(int y);	
}
```

1. Como é uma `abstract` class e não uma `interface` esta pode ter um *constructor*. Classes    abstract têm constructors, interfaces não.
   
As classes `Rectangle`, `Triangle` e `Circumference` são todas Formas, isto é vão fazer `extend` à classe `Form`:

```java title=""
public class Rectangle extends Form{
```


 
