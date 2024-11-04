# Variables

Javascript is a loosely or dynamically typed language. It means while declaring a variable you don’t have to explicitly mention what type of data you are going to store. Javascript uses automatic type casting or type conversion to do so. It is smart enough to figure out what you have assigned to it and when you make changes it adapts accordingly. In most of the famous and older languages like java, c++ you have to specify what data type(Numbers, Strings, Float, etc) a variable will contain.

A Variable is like a container for storing values like String, Number, Boolean, etc and complex data structure(Arrays, Objects) and even the entire function. 

To declare a variable use let or var or const keyword before your variable name. When we declare a variable, it is stored in the memory by Javascript engine with the **default value of undefined** ( if we don’t assign any value at the time of declaration)

There are different types of data we can store in variables.
```js
Primitives Types:
 
String ===> let name = “jenny”, strings are immutable in JavaScript i.e. we cannot update the individual characters
Number ===> let age = 25 // positive, negative, whole numbers, integer and decimal
Boolean ===> let isActive = true
Undefined ===> JS engine sets the variable value to undefined if we declare the variable but don't initialise it. We never set it ourselves
Null ===> When we want to explicitly specify the value of variable to be empty
Array ===> const colors = [“blue”,”red”]
Objects ===> let person = { name: “jenny”, age: 25 }
```

If you try to access the variable that doesn’t exist, you will get an error message.

```js
console.log(company) // Uncaught ReferenceError: company is not defined
```

NaN is a special value in JS - The global NaN property is a value representing Not-A-Number.
The global property Infinity is a numeric value representing infinity.

```js
0/0  // NaN
5 + NaN // Nan
1/0 // Infinity
0
-0 // it is a value in JS
```

|                                         |                     let                     |                     const                     |                                        var                                        |
|-----------------------------------------|:-------------------------------------------:|:---------------------------------------------:|:---------------------------------------------------------------------------------:|
| Usage                                   | variable which can change value             | constant, you cannot  update/change the value | variable which can change value                                                   |
| Needs  Initialisation?                  | No, default undefined                       | Yes                                           | no, default undefined                                                             |
| History                                 | introduced in  ES2015(ES6)                  | introduced in  ES2015(ES6)                    | When Javascript was created from very beginning, the only way to declare variable |
| Scope                                   | block closest set of  curly braces {}       | block closest set of  curly braces {}         | function-scoped/  globally-scoped                                                 |
| Redeclarion                             | cannot be redeclared  within the same scope | cannot be re-declared  in the same scope      | can be redeclared in the same scope will override the existing variable           |
| hoisted (can access before declaration) | not hoisted                                 | not hoisted                                   | Yes                                                                               |


```js

let total =  100;
total++; // total= 101, increase the value and assign it to total
total + 5; // total= 101, it won't change total value as we are not assigning to it

```

### parseInt & parseFloat

Use to parse strings into numbers, mostly used in handling form data as they are in form of string.

```js
parseInt('34.55') // 34
parseFloat('25.22') // 25.22
parseFloat('90 a1') // NaN
parseInt('18cents') //18 - because if a strings starts with a number, it consider it as valid and goes until the valid number is there
```

### Boolean

Boolean in JavaScript has two values - true or false 

```
let isLoggedIn = true;
```

### String

text in JavScript is represented in the form of String and we can use '' or "" to wrap the string value, we just should be conistent with the same. Also + operator has special meaning when it comes to Strings, we can use this operator to concatenate two strings in JS.

```
let name = "Preeti";
let surname = "Wadhwani";

let fullName = name + " " + surname; // console output: Preeti Wadhwani

```


### Note

Variables in JavaScript can change type based on values assigned to them as JavaScript is a dynamically typed language. You can use `typeof` on a variable to know its type.

```
let isLoggedIn = true; /// value is boolean true here
isLoggedIn = 'Preeti' /// value is string Preeti here
isLoggedIn = 'false'  /// value is boolean false here


If we want strict typing like other languages, we can achieve it by using [TypeScript](https://www.typescriptlang.org/) in our codebase

for eg

```js
let pi = 123; // typeof pi --> is a number
pi = 'hello'; // typeof pi --> is a string
```

