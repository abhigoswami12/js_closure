## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);
//output
undefined undefined "no one" //Global functions/variables declared with var(not let or const) becomes the property of the global object
```

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));//My interpratation:- window is an object which has a key named "fullName" which accepts two parameters.So, output will be
"AryaStark"
```

3. Make an Execution Context Diagram for the following JS and write the output.

```js
function addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);
//Output
1 2
```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
function addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);
//Output
1 2
```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
function addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);
//Output
1
2
```

6. Make an Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
//output
Cannot access 'addOne' before initialization//if let addOne: addOne is not defined.If const addOne: addOne is not a function 
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
//output
Cannot access 'addOne' before initialization
```

8. What will be the output of the following

```js
function isAwesome() {
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
//output
undefined
```

9. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
//output
true
```

10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
//output
undefined
```

11. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
//output
"AryaStark"
```

12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
//output
"AryaStark"
```

13. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = "Arya Stark";
}
sayHello();

console.log(name);
//output
There will be an Error showing `name is not defined`.We know that `let` is block scope.So, its scope will be within the function sayHello only.We cannot access it from outside.
```

14. Guess the output of the code below with a reason.

```js
if (true) {
  var name = "Arya Stark";
}
console.log(name);
//output
"Arya Stark".Because `var` is functional scope i.e. if defined within a function, it cannot be accessed from outside that function. But `var` can be accessed outside the blocked scope.
```

15. Guess the output of the code below with a reason.

```js
if (true) {
  let name = "Arya Stark";
}
console.log(name);
//output
There will be an Error showing `name is not defined`.We know that `let` is block scope.So, its scope will be within the if statement only.We cannot access it from outside.
```

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);
//output
20
//var can be accessed outside a blocked scope(here for loop)
```

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);
//output
i is not defined
//let cannot be accessed outside a blocked scope(here for loop)
```

18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
20 second
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first
20 first//20 times 


```

19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
//for console "second", there will be an error
i is not defined//since "i" is block scope
0 first
1 first
2 first
3 first
4 first
5 first
6 first
7 first
8 first
9 first
10 first
11 first
12 first
13 first
14 first
15 first
16 first
17 first
18 first
19 first 


```

20. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = "John Snow";
  }
  console.log(username);
}
//output
'John Snow'
//if(true) will always be executed and thus username will store "John Snow"
```

21. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = "John Snow";
  }
  console.log(username);
}
//output
'John Snow'
//if(true) will always be executed and thus username will store "John Snow"
```

22. Guess the output and the reason behind that.

```js
function sample() {
  var username = "Arya Stark";
  if (true) {
    var username = "John Snow";
    console.log(username);
  }
  console.log(username, "second");
}
//output
"John Snow"
"John Snow second"

//var can be accessed outside a block scope(here, outside if statement). So, value at username will change from "Arya Stark" to "John Snow" and when accessed, it will show the later.
```

23. Guess the output and the reason behind that.

```js
function sample() {
  let username = "Arya Stark";
  if (true) {
    let username = "John Snow";
    console.log(username, "first");
  }
  console.log(username, "second");
}
//output
"John Snow"
"Arya Stark second"
//let is a  blocked scope element.So, whatever is defined in a block (here if), cannot be accessed from outside.First Console is within the if block. So, username "John Snow" will be logged. Whereas, when we come outside the if statement, we can no longer access that username. So, username "Arya Stark" will be logged in the second console.
```

24. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");
//output
Hello I am First
Hello I am Second
Hello I am Third
//...args in argument take the parameters which are defined and put them into an array.So, after ...args,parameters will look like `function sample(["First", "Second", "Third"])`. Now we have applied for loop and displayed each element of the array adding some lines to it.
```

25. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");
//output
Hello I am First
Hello I am Second
Hello I am Third
//...args in argument take the parameters which are defined and put them into an array.So, after ...args,parameters will look like `function sample(["First", "Second", "Third"])`. Now we have applied for loop and displayed each element of the array adding some lines to it.
```

26. Guess the output and the reason behind that.

```js
if (true) {
  const myFunc = function() {
    console.log(username, "Second");
  };
  console.log(username, "First");
  let username = "Hello World!";
  myFunc();
}
// output
Cannot access 'username' before initialization//console.log(username, "first") is executed this time.
// if we remove console.log(username, "first"), output will be "Hello World! Second" due to console.log(username, "second")

```

27. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    console.log(`I love this movie called ${movie.toUpperCase()}`);
  }
  inner();
}

outer();
//output
"I love this movie called MAD MAX: FURY ROAD"
```

28. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();
//output
"I love this movie called BEFORE SUNRISE"
```

29. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    function extraInner() {
      let movie = "Gone Girl";
      console.log("I love this movie called ${movie.toUpperCase()}");
    }
    extraInner();
  }
  inner();
}

outer();
//output
"I love this movie called GONE GIRL"
```

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, sub, multiply, divide];
//output
allfunctions.map(e => e(4, 2))//[6,2,6,2]
```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];
```

