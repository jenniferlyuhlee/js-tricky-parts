# JavaScript Questions

What is a potential pitfall with using `typeof bar === "object"` to determine if bar is an object? How can this pitfall be avoided?

*   While this is a valid way to check if something is an object, most data types including arrays, sets, and null are also considered objects in Javascript. To avoid this, you can add extra conditions : `(typeof bar === "object" && bar !== null)` or check the constructor type to avoid other non-null data types: `(bar.constructor === Object && bar !== null)`

What will the code below output to the console and why?

```
(function(){  
var a = b = 3;  
})();

console.log("a defined? " + (typeof a !== 'undefined'));  
console.log("b defined? " + (typeof b !== 'undefined'));
```

*   The code will output :  
    a defined? false  
    b defined? true  
    Because the code is shorthand for `b = 3; var a = b` , "b" becomes a globally scoped variable as "var" doesn't precede its declaration. Meanwhile, "a" is declared with "var" which means it's scoped to the function and only accessible within it.

What will the code below output to the console and why?

```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

*   The code will output:  
    outer func: this.foo = bar  
    outer func: self.foo = bar  
    inner func: this.foo = undefined  
    inner func: self.foo = bar  
    In the outer function, both "this" and "self" refer to the object. But in the inner function, "this" no longer refers to the object, but "self" remains in scope to the object.

What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

*   The significance and reason for wrapping the entire content of a JS source file in a function block is to essentially run code immediately and "privately" without variable exposed to the global namespace, which can cause conflicts of unwanted changes.

What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

*   Including `use strict` enforces stricter parsing and error handling, meaning it will help catch more silent errors and precent unsafe actions. For example, it will prevent value assignment to undeclared variables (which are typically treated as global variables), duplicate parameter names, eliminate 'this' binding to global objects, and disallow the use of `delete` on variables and functions.

Consider the two functions below. Will they both return the same thing? Why or why not?

```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```

*   The function "foo1" will return an object `{bar: "hello"}`, while "foo2" will return `undefined` because nothing follows the "return" keyword in the same line. Since JS will automatically insert a ";" at the end of a return statement if nothing follows it.

What will the code below output? Explain your answer.

```
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

*   The code will output:  
    0.30000000.....4  
    false  
    Because numbers are treated with floating point precision, they yield unexpected results. Thus, `0.1 + 0.2` won't actually equal `0.3` and the following line of code will evaluate to `false`.

In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

```
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```

*   The order in which the numbers are printed will be: `1, 4, 3, 2`. The first and fourth line of code will run immediately because they are printed without any delays. The second and third lines include a setTimeout, which means they are added to an event queue. Line 3 has no delay, but the presence of setTimeout means it is added to the queue after all normal events have been handled which is why "4" prints first and "3" comes immediately after.

Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

*   The function below cleans up the word input to not include non-letter characters and makes it case insensitive by converting it to lowercase. It then makes the word to an array to easily reverse its characters and rejoins the characters into a string to compare it to the original.

```
function isPalindrom(word){
word = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
return (word = word.split('').reverse().join(''))
}
```

Write a sum method which will work properly when invoked using either syntax below.  
console.log(sum(2,3)); // Outputs 5  
console.log(sum(2)(3)); // Outputs 5

*   The function below checks for the arguments included, and determines which function to invoke if additional arguments are included/omitted.

```
function sum(x, y) {
  if (y !== undefined) return x+y;
  else{
  return function(y){
      return x+y
  }
  }
}
```

Consider the following code snippet:

```
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

*   (a) When the user clicked on "Button 4", or any button, `5` is printed in the console because "i" is declared with var and is scoped to the entire function. As the for loop completes before the event listener is invoked, the value of "i" persists and will be the same for all buttons at its final increment. (b) To capture the value of "i" one should replace "var" with "let" in the for loop so that it is scoped to its block at each loop.

Assuming d is an “empty” object in scope, say: `var d = {};`  
…what is accomplished using the following code?

```
[ 'zebra', 'horse' ].forEach(function(k) {
    d[k] = undefined;
});
```

*   The code above will set properties to the object "d", where each property is named with items in the array and set to a value of undefined.

What will the code below output to the console and why?

```
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```

*   The code will output:  
    array 1: length=5 last=\["j", "o", "n", "e", "s"\]  
    array 2: length=5 last=\["j", "o", "n", "e", "s"\]  
    They print out the same because `.reverse()` mutates the original array, and declaring `var arr2 = arr1.reverse()` sets the reference to arr2 to also be arr1. So any mutation to arr2 will also occur on arr1 as they refer to the same array.

What will the code below output to the console and why ?

```
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```

*   The code will output:  
    122 (JS treates "+" as a concatenator as strings are present)  
    32 (The second "+" is treated as a unary operator, converting "2" to 2 before concatenating)  
    02 (The second "+" is treated as a unary operator, converting "1" to 1 before concatenating)  
    112 (The first "+" is treated as a unary operator, converting "1" to 1, but ends up concatenating the rest )  
    "NaN2" ("-" cannot operate on strings, so "A" - "B" is NaN and "2" is concatenated to yield a string)  
    NaN ("-" cannot operate on strings and any operation on NaN will always still yield NaN)

The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```

*   A fix to this issue would be to use setTimeout and set the delay to 0. This will leave the callstack clear and add these operations to the event queue. When the event queue runs each function, a timer is set again to invoke the function.

```
var list = readHugeList();

var nextListItem = function() {  
var item = list.pop();
if (item) {
    // process the list item...
    setTimeout( nextListItem, 0);
}
};
```

What is a “closure” in JavaScript? Provide an example.

*   Closure refers to the ability for inner functions to remember variables defined in outer functions, long after the outer function has returned. In the example below, `start` is accessible in the inner function when `generate()` is invoked even though `idGenerator()` has already completed runnning and returned a function.

```
function idGenerator() {
    let start = 0;
    return function generate() {
        start++;
        return start;
    };
}
const getNextId = idGenerator()
getNextId() //1
getNextId() //2
```

What would the following lines of code output to the console?

```
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```

*   The output will be:  
        0 || 1 = 1 (returns first true value, which is 1)  
        1 || 2 = 1 (returns first true value, which is 1, ignoring 2)  
        0 && 1 = 0 (returns value of entire operation, which is false, returning 0)  
        1 && 2 = 2 (returns value of entire operation, which is true only after 2, returning 2)

What will be the output when the following code is executed? Explain.

```
console.log(false == '0')
console.log(false === '0')
```

*   The output will be:  
        true (the "==" ignores type and treates "0" as 0, a falsy value)  
        false (the "===" considers type AND value, treating "0" as a non-empty string, which is a true value)

What is the output out of the following code? Explain your answer.

```
var a={},
b={key:'b'},
c={key:'c'};
a[b]=123;
a[c]=456;
console.log(a[b]);
```

*   The output will be: \`456\`. The reason being that both "b" and "c" will both be stringified as a property in object a. They can be used interchangeably, and setting \`a\[c\]\` will overwrite what was set at \`a\[b\]\`.

What will the following code output to the console:

```
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
```

*   The code will essentially print out 10! as it calls f(n-1) recursively until n reaches 1.

Consider the code snippet below. What will the console output be and why?

```
(function(x) {
return (function(y) {
console.log(x);
})(2)
})(1);
```

*   The console output will be: `1`. This is an example of closure, where the inner function has access to variable "x".

What will the following code output to the console and why:

```
var hero = {  
    _name: 'John Doe',  
    getSecretIdentity: function (){  
        return this._name;  
    }  
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());  
console.log(hero.getSecretIdentity());
```

*   The output will be:  
    undefined ('this' isn't binded to an object, but the window)  
    John Doe ('this' refers to the object hero)  
    To fix this you can bind this to the object:  
    `var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);`

Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be: a DOM element, a callback function that takes a DOM element as its argument.

*   The below function uses recursion to visit children elements of elements

```
function visitDescendents(element, callback){
    callback(element)
    let children = element.children;
    for (let child of children){
        visitDescendents(child, callback);
    }
}
```

Testing your this knowledge in JavaScript: What is the output of the following code?

```
var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```

*   The output is:  
    10 (scope of this refers to window var length, which is 10)  
    2 (scope refers to arguments array, which was length of 2)

Consider the following code. What will the output be, and why?

```
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```

*   The output will be :  
    1 (var x is hoisted to top of its scope before value initialization)  
    undefined (x only exists within the catch block)  
    2 (y scoped globally, so accessible at any level)

What will be the output of this code?

```
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
```

* The output is `undefined` because of the behavior of variable hoisting. First, the line `var x = 21` is virtually ignored because a variable x exists in the function scope, `var x = 20`. However, because of hoisting, "x" is declared, but not initialized a value. And since `console.log(x)` runs first, it can refer to an x, but there is no value, thus returning `undefined`.

What will this code print?
```
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```
* The output will be:
    0
    1
    2
    3
    4
    because "let" is used.

What do the following lines output, and why?
```
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

* The output will be:
    true (evaluates as true < 3, JS converts true to 1, 1 < 3)
    false (evaluates as true > 1, JS converts true to 1, 1 > 1)

How do you add an element at the begining of an array? How do you add one at the end?

* To add an element at the beginning of an array you can use the method `.unshift()` and at the end, `.push()`.

Imagine you have this code:

`var a = [1, 2, 3];`

* (a) `a[10]=99` will not result in a crash, but instead make empty slots in up until index 10. (b)`console.log(a[6])` will result in `undefined`.

What is the value of typeof undefined == typeof NULL?

* This will results in `true` because the typeof undefined is undefined, and the typeof NULL, an undefined variable, is also undefined.

What would following code return?

```
console.log(typeof typeof 1);
```

* `typeof` returns a string of the data type. So the code is essentially `type of("number")`, which will return "string".

What will be the output of the following code:
```
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
```
* The output will be:
    5
    5
    5
    5
    5
    Because i is initalized with "var", it will be scoped to the loop and its value will increment through the loops before the setTimeout callback is called. When setTimeout runs, i will be 5.

What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
* NaN represents "not a number", which results from operations that couldn't be performed because of mixed data types. Its type is actually a `Number`. To reliably test is a value is NaN, using `Number.isNan()` is helpful.

