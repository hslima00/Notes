## Data Types

<center>

$$
1 byte (B) = 8 bits
$$

| **Data Type** | **Size** | **Description**                                                                   |
| ------------- | -------- | --------------------------------------------------------------------------------- |
| byte          | 1 byte   | Stores whole numbers from -128 to 127                                             |
| short         | 2 bytes  | Stores whole numbers from -32,768 to 32,767                                       |
| int           | 4 bytes  | Stores whole numbers from -2,147,483,648 to 2,147,483,647                         |
| long          | 8 bytes  | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float         | 4 bytes  | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits           |
| double        | 8 bytes  | Stores fractional numbers. Sufficient for storing 15 decimal digits               |
| boolean       | 1 bit    | Stores true or false values                                                       |
| char          | 2 bytes  | Stores a single character/letter or ASCII values                                  |

</center>

## Byte
The byte data type can store whole numbers from -128 to 127. This can be used instead of int or other integer types to save memory when you are certain that the value will be within -128 and 127.

## Short
The short data type can store whole numbers from -32768 to 32767.

## Int
The int data type can store whole numbers from -2147483648 to 2147483647. In general, the int data type is the preferred data type when we create variables with a numeric value.

## Long
The long data type can store whole numbers from -9223372036854775808 to 9223372036854775807. This is used when int is not large enough to store the value. Note that you should end the value with an "L" (Java):

```java
(java)
long myNum = 15000000000L;
```
## Floating Point Types

You should use a floating point type whenever you need a number with a decimal, such as 9.99 or 3.14515.

The float and double data types can store fractional numbers. Note that you should end the value with an "f" for floats and "d" for doubles:

```java
(java)
double myNum = 19.99d;
float myNum = 5.75f;
``` 

## Scientific Numbers

A floating point number can also be a scientific number with an "e" to indicate the power of 10:

```java
float f1 = 35e3f;
```