# Lab1

[Enunciado do Lab1](files/lab1_en22.pdf) `Ctrl+Click`

# If Else

```python
#If elif else example
x = 10
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('It is Zero')
elif x == 1:
    print('It is One')
else:
    print('It is More than one')
```

# For and Range

```python
# Count the letters in some strings:
words = ['car', 'skate', 'bicycle']
for w in words:
    print(w, len(w))
```

```python
#for range example
for i in range(1, 10, 2):
    print(i)
```

# Functions 

```python
def fib(n):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
```

```python
fib(1000)
```

# Dictionaries 

```python
## Create a new Dictionary 
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)
```

```python
## Can build up a dict by starting with the the empty dict {}
## and storing key/value pairs into the dict like this:
## dict[key] = value-for-that-key
dictTest = {}
dictTest['a'] = 'alpha'
dictTest['g'] = 'gamma'
dictTest['o'] = 'omega'

print (dictTest)  ## {'a': 'alpha', 'o': 'omega', 'g': 'gamma'}
```

```python
print (dictTest['a'])     	## Simple lookup, returns 'alpha'
dictTest['a'] = 6       	## Put new key/value into dict
print('a' in dictTest)      ## True
##print(dictTest['z'])      ## Throws KeyError
if 'z' in dictTest: 
	print(dictTest['z'])    ## Avoid KeyError
print(dictTest.get('z'))  	## None (instead of KeyError)
```

```python
## By default, iterating over a dict iterates over its keys.
## Note that the keys are in a random order.
for key in dictTest: print(key)
## prints a g o
```

```python
## Exactly the same as above
for key in dictTest.keys(): print(key)
```

```python
## Get the .keys() list:
print(dictTest.keys())  ## ['a', 'o', 'g']
```

```python
## Likewise, there's a .values() list of values
print(dictTest.values())  ## ['alpha', 'omega', 'gamma']
```

```python
## .items() is the dict expressed as (key, value) tuples
print(dictTest.items())  ##  [('a', 'alpha'), ('o', 'omega'), ('g', 'gamma')]
```

```python
## Common case -- loop over the keys in sorted order,
## accessing each key/value
for key in sorted(dictTest.keys()):
    print(key, dictTest[key])
```

```python
## This loop syntax accesses the whole dict by looping
## over the .items() tuple list, accessing one (key, value)
## pair on each iteration.
for k, v in dictTest.items(): print(k, '>', v)
## a > alpha    o > omega     g > gamma

```

# Numpy Arrays 

```python
#numpy array creation with elements
import numpy as np
a = np.arange(15).reshape(3, 5)
print(a)
#array([[ 0,  1,  2,  3,  4],
#       [ 5,  6,  7,  8,  9],
#       [10, 11, 12, 13, 14]])
```

```python
#create a array with zeros
b = np.zeros((3, 4))
print(b)
```

```python
#Find the shape of the array
sh = a.shape
print("shape is:", sh)
```

```python
#Find the dimension of the array
nd = a.ndim
print("ndim is:",nd)

```

```python
#Find the number of elements in the array
sh = a.size
print("size is:",sh)
```

```python
#Find the type of a variable
tp = type(a)
print("type is:", tp)

```

```python
#Find the type of a element in the array
tpa = a.dtype
print("dtype is:", tpa)
```

```python
#Find the sum of all elements in the array
su = a.sum()
print("sum is:", su)
```

```python
#Find the maximum of all elements in the array
mx = a.max()
print("Max is:", mx)
```

```python
#There are many  fucntions to perform
#Find the square root of all elements in the array
sq = np.sqrt(a)
print("sqrt is:", sq)
```