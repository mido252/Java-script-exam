/* // Abdulrahman Notes ^-^
TODO    Important to know
  (i.g.) means: in other words
  (e.g.) means: for example
  (ex) a shorthand for: example
  (adv ex) a shorthand for: advanced example
  (op) stands for: optional
  (mn/md) stands for: mandatory
  (etc...) stands for et cetera, which mean (till the end), (and the rest) and such...
TODO

To style the output of a console.log method, place '%c' before what you want to style, and then comma ',' followed by the style as below:
  console.log("%cHey!", "font-size: 2em; color: cyan");

*Data Types:-
  1) String: "Hello"
  2) Number: 564,85
  3) Object: [a, b, c] or [1, 2, 3] or {name: "ex", age: 17}
  4) Boolean: true or false
  5) Undefined: undefined
  6) Null: null
  ?- typeof something > recognizes the data type
      ex: typeof 'a';         // returns: 'string'

*Variables:-
  ? Declaring a variable syntax:
    var variable-name  assignment operator(e.g. =) value
      ex: var user = "Saru";
  ? Declaring with Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [The variable is added to the window object] ()
  - Block Or Scope Function
  ? Declaring with Let
  - Redeclare (No => causes an error)
  - Access Before Declare (causes an error)
  - Variable Scope Drama ()
  - Block Or Scope Function
  ? Declaring with Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

*Character:-
  • \c : character escape (i.g. treat the character as a string not a code)
      ex: console.log('don\'t forget to try');      // outputs: 'don't forget to try'
  • c\ new line : continue the line and don't make a new one
      ex: console.log('s\
          s\
          s')                      // outputs: 's        s        s'
  • \n : make a new line
      ex: console.log('this is \na new line')       //outputs: 'this is
­                                                              a new line'

*Concatenation:-
  let a = "hello"; let b = "there"  >  console.log(a + ' ' + b)   |or|   console.log(`${a} ${b}`)
      outputs: 'hello there'

*Increment(++): increase the value of a number by one before printing(pre) or after(post)
  1) Pre-increment: increase the value by 1 then print or return it.
      ex: let a = 1;    >    ++a   |   console.log(a)  // outputs: 2
  2) Post-increment: Print or return the value then increase it.
      ex: let a = 1;    >    a++   |   console.log(a)  // outputs: 1   |   console.log(a)    //    outputs: 2  
*Decrement(--) decrease the value of a number by one before printing or after
  Same examples.

*Unary:-
  Unary Plus: converts a string back into a number if it exists and duplicate it with (+)
    ex: console.log(+"100")    // outputs: 100     |   console.log(+null)  // outputs: 0
  Unary Negation: converts a string back into a number if there is and duplicate it with (-)
    ex: console.log(-"100")    // outputs: -100    |   console.log(-true)  // outputs: -1

*Type Coercion:-
  If we want the lang to treat a string as a number we add a unary plus (+) or a unary plus negation (-);
  The Type Coercion in javascript is a serious and a strange matter that you should search about.

*Assignment Operators:-
  (+=) , (-=) , (*=) or (/=)
  a += 10: is the same as: a = a + 10; (the variable is equal to itself + 10)
    ex: let a = 10    >     a += 10     >    console.log(a)   // outputs: 20

*Number Methods:-
  • toString(): Converts a number into a string
      ex: console.log((100).toString())    =>    '100'
  •   toFixed(): Converts a number into a string with the closest 2 decimals
      ex: console.log(100.626262.toFixed(2))    =>    '100.63'
  • parseInt(): Returns the number in a string if it has a number
      ex: console.log(parseInt("100.66 Osama"))    =>    100
  • parseFloat(): Same as parseInt(), but doesn't remove the decimals
      ex: console.log(parseFloat(100.66 Osama"))    =>    100.66
  • Number.isInteger(): Checks if the argument is an integer number
      ex: console.log(Number.isInteger("100"))    =>    true
  • Number.isNaN(): Checks if the argument is not a number
      ex: console.log(Number.isNaN('a' / 2))    =>    true

*Math Objects:-
  • Math.round(): returns the nearest integer
      ex: Math.round(10.3)   =>   10       |       Math.round(10.6)   =>   11
  • Math.ceil(): returns the nearest integer UP
      ex: Math.ceil(10.3)   =>   11
  • Math.floor(): returns the nearest integer DOWN
      ex: Math.floor(10.9)   =>   10
  • Math.min(): returns the minimum number in value of a group of numbers
      ex: Math.min(1, 10, 2, -1)   =>   -1
  • Math.max(): returns the maximum  number in value of a group of numbers
      ex: Math.max(1, 10, 2, -1)   =>   10
  • Math.pow(): returns the value of x to the power of y (x^y)     (i.g. أُس العدد)
      ex: Math.pow(2, 3)   =>   8
  • Math.random(): returns a random number from 0 up to but not including 1
      ex: Math.random()   =>   0.579604510422786
      To get a random number between 2 values, multiply the random method by the bigger value
        ex: let arr = [1, 2, 3, 4];   >   Math.random * arr.length   =>   generates a random number between 0 ~ 3
  • Math.trunc(): removes the decimals completely
      ex: Math.trunc(7.89)    =>   7

*String Methods:-
  • 'String'[index]: Searches for a character by its index
      ex: 'Saru'[0]     =>    'S'
  • 'String'.charAt(index): Searches for a character by its index like the previous one but this one is preferred
      ex: 'Saru'.charAt(0)     =>    'S'
  • 'String'.length: Returns the length of a string
      ex: 'Saru'.length     =>    4
  • 'String'.trim(): removes the spaces before and after the string 
      ex: '  Saru  '.trim()     =>    'Saru'
  • 'String'.toUpperCase(): converts a string to uppercase letters.
      ex: '  Saru  '.toUpperCase().trim()     =>    'SARU'
  • 'String'.toLowerCase(): converts a string to lowercase letters.
      ex: '  Saru  '.toLowerCase().trim()     =>    'saru'
  • 'String'.indexOf(value, start'op'): Searches for a certain character, you can specify where to start or leave it blank so that it starts from the beginning
      ex: 'Saru'.indexOf('r')     =>    2
  • 'String'.lastIndexOf(): Same as indexOf(), but instead returns the last index of the character you're looking for.
      ex: 'Sarur'.indexOf('r')     =>    4
  • 'String'.slice(start, end'op'): makes a slice from the string where you specify the start and the end, leave the end blank and it'll slice till the end of the string 
      ex: 'Saru'.slice(2, 3)     =>    'r'
  • 'String'.split(Separator'op', Limit'op'): splits the string where you specify to split and returns the result in an array.
      ex: 'Saru'.split('')              =>    ['S', 'a', 'r', 'u']
      ­    'Saru tobi'.split(' ')        =>    ['Saru', 'tobi']
      ­    'S-a-r-u'.split('-', 2)       =>    ['S', 'a']
  • 'String'.repeat(): repeats the string for a given number of times
      ex: 'Saru'.repeat(7)     =>    'SaruSaruSaruSaruSaruSaruSaru'
  • 'String'.substring(start, end'op'): makes a slice from the string, just like the slice() method. There are some differences which you can search for in google.
      ex: 'Saru'.substring(2)     =>    'ru'
  • 'String'.substr(start, # of characters'op'):  Same as the substring() method, but instead of providing an index indicating the end, it receives a number which indicates how many characters to slice.
      ex: 'Saru'.substr(2, 2)     =>    'ru'
  • 'String'.includes(value, start'op'): Checks if a certain character exists, and you can specify where to start searching from.
      ex: 'Saru'.includes('r', 2)     =>    true        |        'Saru'.includes('r', 3)     =>    false
  • 'String'.startsWith(value, start'op'): Checks if the string starts with a certain character, and you can specify where to start searching from.
      ex: 'Saru'.startsWith('S')     =>    true        |        'Saru'.startsWith('S', 1)     =>    false        |        'Saru'.startsWith('r', 2)     =>    true
  • 'String'.endsWith(value, length): Checks if the string ends with a certain character, and you can specify where to start searching from.
      ex: 'Saru'.endsWith('u')     =>    true        |        'Saru'.endsWith('u', 4)     =>    true       |        'Saru'.endsWith('r', 3)     =>    true

*Operators:-
  • (==): Equal to          • (!=): Not equal to
  • (===): Identical        • (!==): Not Identical
  • (>): Bigger than        • (>=): Bigger than or equal to
  • (!): Not
      ex: console.log(!(10 == "10"))    =>    result: false
  • (&&): The 'And' operator, used to add another condition
      console.log(10 == 10 && 10 > 20)    =>    result: false
  • (||): The 'Or' operator, used to add an optional condition
      console.log(10 == 10 && 10 > 20)    =>    result: true
  • (^): Indicates that two variables have to be different, else the condition is falsy.
      let a = 4; b = 4;   >   a ^ b ? console.log('they are the same')    =>    result: 'they are the same'

*Conditions:-
  ? Normal if condition, if the condition is true the code executes, otherwise the 'else' code executes.
    if (condition) {
      block of code
    } else if (condition) {
      block of code
    } else {
      block of code
    }
  ? Nested if conditions:
    if (condition) {
      if () {
        block of code
      } else () {
        block of code
      }
    } else {
      block of code
    }
  ? If Ternary (Ternary operator: a shorthand for if):
    • Normal ternary:
        condition ? if true : if false;
    • Nested ternary:
        condition ? if true : condition ? if true : else;
          ex: let age = 10;
          age >= 30 ? console.log("30 and older") : age < 30 ? console.log("younger than 30") : null;
          Outputs: 'younger than 30'
  ? Logical OR operator (||)
    - The logical or operator is used to return a secondary value if the primary value is 'null', 'undefined' or a falsy value,
      but what is a falsy value? It's any value that returns 'false', such as 0, an empty string '', the 'false' boolean or 'null'.
        ex: console.log(0 || 200)             =>    200
        ­    console.log('' || 200)            =>    200
        ­    console.log(null || 200)          =>    200
        ­    console.log(undefined || 200)     =>    200
        ­    console.log(false || 200)         =>    200
        ­    console.log(1 || 200)             =>    1
        ­    console.log('a' || 200)           =>    'a'
        ­    console.log(true || 200)          =>    true
  ? Nullish Coalescing operator (??)
    - The nullish coalescing operator is used to return a secondary value if the primary value is 'null' or 'undefined' ONLY.
        ex: console.log(0 ?? 200)             =>    0
        ­    console.log('' ?? 200)            =>    ''
        ­    console.log(null ?? 200)          =>    200
        ­    console.log(undefined ?? 200)     =>    200
        ­    console.log(false ?? 200)         =>    false
        ­    console.log(1 ?? 200)             =>    1
        ­    console.log('a' ?? 200)           =>    'a'
        ­    console.log(true ?? 200)          =>    true
  ? Switch statement:
    - Syntax:
        switch (var) {
        case smth:
          block of code
          break;
        case smth:
          block of code
          break;
        default:
          code
        }
    - The switch statement is used when we want to write conditions of a single variable, where the 'case' keyword indicates the condition.
    - The 'break' keyword stops the execution for the rest of the cases if the condition is met, otherwise if you removed it the execution continues.
    - The 'default' keyword indicates the default action to take if no cases (conditions) are met.
      ex: let test = 1 
        switch (test) {
          case 0:
            console.log('test value is 0');
            break;
          case 1:
            console.log('test value is 1');
            break;
          default:
            console.log('test value is something else');
        }
        Outputs: 'test value is 1

*Arrays:-
  Array = [0, 1, [a, b]]  >  Array[2][1] = b
  • To change an element's value > Array[2][0] = new value
  • To edit last value no matter what the length is:
      Array[Array.length - 1] = "new value";
  ? Array Methods:
  • Array.isArray(arr): Returns true if the argument is an array.
  • Array.length: Returns the array's length
  • Array.unshift("New Element"): Adds an element or more to the beginning of an array.
  • Array.push("New Element"): Adds an element or more to the end of an array.
      Another way to add an element to the end of an array is: Array[Array.length] = New Element
  • Array.shift(): Removes an element from the beginning of an array.
  • Array.pop(): Removes an element from the end of an array.
      - Both 'shift()' and 'pop() return the removed element as a value.
  • indexOf(element, start'op'): Returns the index of an element, you can specify the search start point or leave it blank to search from the beginning.
      ex: [1, 2, 3, 1].indexOf(1)     =>     returns: 0
  • lastIndexOf() > Same as indexOf() but starts searching from the end of the array.
      ex: [1, 2, 3, 1].lastIndexOf(1)     =>     returns: 3
      - If the Element doesn't exist when using indexOf(), it returns -1
  • Array.includes(smth): Checks if the array includes something, if so returns 'true', else 'false'.
  • Array.sort(): Sorts the array in an ascending order as default.
      - The sort() method receives a compare function that determines the sorting order. Search deeper for more knowledge.
  • Array.reverse(): Reverses the array's order.
  • Array.slice(start, end'op'): Makes a slice of the array, and you specify where to start and end.
  • Array.splice(start, delete count'op', items to add'op'): Removes an element(s) and/or adds another element(s).
      ex: let arr = ['a', 'b', 'c', 'd']    >    arr.splice(1, 2, 1, 2)    console.log(arr)     =>     ['a', 1, 2, 'd']
  • Array1.concat(Array2): Merges an array with another array(s) and return an array that contains both combined.
      ex: [1,2].concat([3,4])     =>     [1, 2, 3, 4]      |     Array1.concat(Array2, [1, 2], "String")
  • Array.join(seperator): Wraps an array's elements together as a string output, you can provide a seperator to seperate between them or leave it blank and they'll stick together.
      ex: Array = ["One", "Two"]   >   Array.join(" - ")   >   'One - Two'
  ? Higher Order Functions:
    A Higher order function is a function that receives a callback function as an argument.
  • Array.forEach(function(element, index, array) {
    })
      ex: Array.forEach(function(element, index, arr) {
            if (element % 3 === 0) {
                arr[index] += 100;
          }
          })
  Tip: use forEach when you are NOT going to change arrays' elements values, otherwise use Higher Order function methods: map() and filter() etc...
  • Array.map(function()): Applies a function to each element in the array.
      ex: let myArray = Array.map((el) => el += el);
  • Array.filter(function()): Returns any element that fulfills the function condition in an array.
      ex: let myArray = Array.filter((el) => typeof el === 'string')   >   Outputs the element if it's a string
  • Array.reduce(function(accumulator, current, index, array){...}, accumulator(op))
      The accumulator value is set to be as the first element in the array if the value is not given.
      - The reduce function takes the accumulator and then does anything with the current element in the loop,
        for example, we can add them (accumulator & current element) to each other this way:
        let Array = [10, 20, 30, 40];  !! note that the acc value is not given so it's set to 10 (first element's value)
        Array.reduce((acc, curr, i, arr) => {return acc + curr});    =>   prints: 100 (which is: 10 + 20 = 30 / 30 + 30 = 60 / 60 + 40 = 100)
  • Array.from(iterable, mapFunction, this argument): Creates an array from an iterable
      iterable: Any iterable data such as strings, objects, string and numbers etc...
      mapFunction: Any function to apply on each item
      this: Sets what the 'this' keyword should refer to. It refers to 'window' by default.
      - You can combine this method with the Set() data type to achieve complicated tasks easily, a set data type is explained later in this file.
        example: let arr = [1, 2, 3, 3, 4, 5, 5], task: excluded any repeated data and multiply each number by itself!
        answer: console.log(Array.from(new Set(arr)))    |or|    console.log([...new Set(arr)])
  • Array.copyWithin(target, start'op', end'op'): Copies a slice of the array and replace it wherever the target index is.
      target: The index where we are going to replace the slice we copied.
      - The copyWithin() method modifies the original array and doesn't make a copy.
      ex: let arr = ['a', 1, 'b', 2]   >   arr.copyWithin(1, 2, 3)   =>   arr = ['a', 'b', 'b', 2]
      - Please note that the copyWithin method doesn't extend the array's length, if the copied slice is larger than the replaced target,
        then the rest of the elements will be moved, any elements that exceed the array's length are removed.
  • Array.some(CallbackFunc(el, i, arr), this argument): Like filter() but: applies a condition on each element, whenever the condition
      is met on any element the execution stops and returns true. For example: Does the array have a number > 10? if the condition is met then yes, true.
      ex: Checks whether there is any element that is bigger than 2 and less than 10 in the array
          let arr = [1, 2, 3, 4]; let range = {min: 2, max: 10};
          arr.some((el) => {return el > range.min && el < range.max})   =>   returns true
  • Array.every(CallbackFunc(el, i, arr), this argument):
      like some(), but only returns true if the condition is met ON EVERY element.
      - It has the same syntax.

*Loops:-
  - Loops are used to perform a repetitive code for a number of times.
  - There are many types of loops, but what's in common is that you always specify when to start, when to stop and how to get to the next item.
    ex: The regular 'for loop' is written this way:
        for(let i = 0; i < 10; i++) {
          block of code
        }
        (let i = 0): Declares a variable named 'i' which stands for 'index', then sets its value to 0. This is where we'll start (the first round).
        (i < 10): Indicates that the loops will keep executing as long as the value of 'i' is less than 10, that means it'll loop 10 times since we start from 0 not 1 (let i = 0).
        (i++): Tells the engine to add 1 to the value of 'i' at the end of every loop, thus, the value of 'i' increases. 
                If we ignored this part, the for loop will loop infinitly, since the value of 'i' doesn't change and the condition (i < 10) is always true.
  ? Loop Types:
  • for loop:
      - This is the regular loop we see everywhere.
      for(let i = 0; i < 10; i++) {
        block of code
      }
  • for of loop:
      - A loop that loops over the index of an iterable value like arrays. It's widely used with arrays to loop over its indexes.
      for(const element of array) {
        console.log(element)
      }
  • for in loop:
      - Similar to the 'for of' loop, but instead loops over the values not the indexes. It's widely used with objects to loop over its properties.
      for(const property in object) {
        console.log(property)
      }
  • while loop:
      - A loop that keep executing while the condition is true.
      let i = 0;
      while(i < 10) {
        block of code;
        i++              //!if we forgot this line, the loop will keep executing infinitly!
      }
  • do while loop:
      - Like the 'while loop', but instead executes the code for once first, then checks the condition and starts looping.
      let i = 0;
      do {
        block of code;
        i++              //!if we forgot this line, the loop will keep executing infinitly!
      } while (i < 10)
  ? Break and Continue:
    - We can stop the loop when a condition is met using the 'break' keyword:
      ex: for (const number of numbers) {
            if (number % 2 === 0) {
              break;                        //*Stop looping if the number is divisible by 2
            }
            console.log(number);
          };
    - We can also skip looping over an element if it meets a certain condition using the 'continue' keyword:
      ex: for (const number of numbers) {
            if (number % 2 === 0) {
              continue;                        //*Skip the number if it's divisible by 2
            }
            console.log(number);
          };
  ? Nested Loops:
    - We can nest a loop inside another, the nested loop will loop and finish looping in each round of the main loop.
      ex:
        for (let i = 0; i < 10; i++) {
          console.log(i);
          for (let y = 0; y < 5; y++) {
            console.log(y)
          }
        }
  ? Labels:
    - In case of nested loops, we can give our main loop a lable (e.g: mainLoop) and our nested loop another lable (e.g. nestedLoop)
      to easily control both loops anywhere inside the loop using <break mainLoop> or <break nestedLoop>
      ex:
        mainLoop:
          for (let i = 0; i < 10; i++) {
            console.log(i);
            nestedLoop:
            for (let y = 0; y < 5; y++) {
              if (y === 4) {
                break mainLoop;
              }
              console.log(y)
            }
          }
  - The 'for of loop' is recommeneded if we are not going to manipulate (i.g. modify) the elements.

*Functions:-
  • A function is a couple of code blocks that we write to do a certain task, for example, we can make a function to loop over an array if a certain condition is true.
  ? Syntax:
      function function_name(parameter(s)) {
      return (something to be done with the parameters);
    }
  • To set the default value for parameters:
  function function_name(parameter(s) = "value") {
    return (something to be done with the parameters);
  }
    - Example:
        function welcome(user = "User", lastSign = 0) {
          return `Welcome ${user}, your last sign in was ${lastSign} days ago.`;
        }
        > welcome("S A R U", 36);
          returns: Welcome S A R U, your last sign in was 36 days ago.
        If no values are given, the default values are executed:
        > (welcome();
          returns: Welcome User, your last sign in was 0 days ago.
  ? Function types:
    1) Function
        function myFunc() {
        }
    2) Function Expression
        var myFunc = function() {
        }
    3) Named Function Expression
        var myFunc = function Named() {
        }
    4) Arrow Function:
      let variable = () => {
        block of code
      }
        - If your Arrow function has no parameters, u can replace the empty parentheses () with underscore _
          ex: let variable = _ => {...}
        - If your Arrow function has 1 statement (i.g. one block of code) u can remove the curly braces {}
          ex: let variable = () => console.log("Hi");
        - If your Arrow function has 1 parameter, u can remove the parentheses ()
          ex: let variable = num => console.log(num);
      - IMPORTANT: You can't use the 'this' keyword inside an arrow function because it doesn't have it.
  - You can access the passed arguments using the 'arguments' keyword in any function:
      ex: function myFunc() {
            return [...arguments]      // or    return Array.from(arguments)
            }
          myFunc('Saru', 1, 'O');    =>    returns: ['Saru', 1, 'O']
  - The order of normal functions does not really matter, you can place it anywhere in the script, but it's better to place it at the very top of the script,
    BUT when it comes to variables as functions (function expressions) hoisting does not happen, and you MUST to place it at the top. You can search for hoisting for a deeper knowledge.

*Objects:-
  ? Syntax:
      let objectName = {
        property: "value",
        property: "value",
        property: "value"
      }
    - Advanced example:
        let donuts = [
        { type: "Jelly", cost: 1.22 },
        { type: "Chocolate", cost: 2.45 },
        { type: "Cider", cost: 1.59 },
        { type: "Boston Cream", cost: 5.99 },
        { removeDonut: function(index) {
            donuts.splice(index, 1);
            return donuts;
          }
        }];
  • To call a property: ObjectName.property     or     objectName['property']
    ex: donuts[0].type;   =>   "Jelly"                 donuts[0]['type']       =>   "Jelly"
  • To call a method: ObjectName.method         or     objectName['method']
    ex: donuts[4].removeDonut(3);                      donuts[4][removeDonut](3)
  • You can declare some variables and assign them as values to an object properties:
      ex: let name = "Saru"; let age = "22"; let gender = "Male";
      ­    let object = {name: name, age: age, gender: gender, myFunc: function(){...}};
    - And in case the names are identical, you can just use the variables' names instead:
      ex: object = {name, age, gender, myFunc(){...}};
  • Declaring a property that does NOT exist in the object creates that property inside the object:
    ex: let object = {}   >    object.age = 30    >    object = {age: 30}
      - If that property existed before, declaring will change its value (i.g. it'll be considered 'redefining')
  • You can create an object using the Object class: let a = new Object({name = "Saru"}), this has some benefits you'll find out later.
  • 'this' keyword: The 'this' keyword refers to the element that you are within, for example if we printed 'console.log(this)' it'll print the 'window' object which we are at by default, 
    but if we used 'this' in a function, it'll refer to the element that this functions is assigned to.
    And in an object method, it refers to the parent of the method(function) which is the object... You get the idea? Search more about the 'this' keyword if not.
  • 'let obj = Object.create({example})': creates a clone object identical to the object you provide'example'.
  • 'Object.assign(target-object, object1, object2...)': assigns an object properties or more to a targeted object.
      Q: Can I assign the obj properties to a new object? I mean I don't have a targeted object declared yet.
      A: Yes, using an empty object: 'let newObject = Object.assign({}, object1, object2);
      Q: Can I assign properties and values to the targeted object using this code?
      A: Yes, using this code: 'let newObject = Object.assign({}, object1, {property: "value"})
  • To delete a property use the 'delete' keyword.
      ex: delete Object.property.   =>     Returns: true (if deleting is successful)
  ? Object meta data and descriptor:
  - There's another way to add a property to an object in which we have more control over the property, using the Object class methods.
  • Object.defineProperty(objectName, 'property', {descriptor})     //* the 'descriptor' lets you have more control over the property. Let's check out how:
  • Object.defineProperty(objectName, 'property', {
      writable: false,        => If false, the property can't be assigned a new value. (false by default)
      enumerable: false,      => If false, you can't loop over the property, and it's excluded from any loops over the object. (false by default)
      configurable: false,    => If false, you can't delete the property neither modify it (i.g. cannot be redefined). (false by default)
      value: 'value'          => The property's value.  
    })
  • To define more than a property at once:
    Object.defineProperties(objectName, {
      property1: {descriptor}
      property2: {descriptor}
      property3: {descriptor}
    })
  • To examine a property's descriptor: Object.getOwnPropertyDescriptor(objectName, 'property')   =>   returns the descriptor
  • To examine properties descriptors: Object.getOwnPropertyDescriptors(objectName)   =>   returns the descriptor of each property

*Spread Operator:
  - Used to spread an iterable (e.g. arrays & strings) into multiple elements.
    ex: const array1 = [1, 2]; const array2 = [3, 4]
        let array3 = [...array1, ...array2]      =>      array3 = [1, 2, 3, 4]
    another ex: let numbers = [1, 2, 3, 4]   >   Math.max(...numbers)      =>      Returns: 4
  - You can also use the spread operator to merge objects elements inside a new object
    let newObject = {...object1, ...object2, newProperty: 'newValue}

*Rest Parameter:
  - Represents an indefinite number of elements as an array.
  ex: const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
      const [total, subtotal, tax, ...items] = order;
      console.log(total, subtotal, tax, items); > 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
  another example:
    function sum(...numbers) {
      let total = 0;
      for(const num of numbers) {
        total += num;
      }
      return total;
    }
    sum(10, 20, 30)      =>      Returns: 60

*The DOM (Document Object Module):
  - The DOM stands for "Document Object Module", and it's the representation of the HTML elements and its relation with anything else,
    it is also not created or provided by Javascript (it's a WebAPI, we'll know what that means later), but can be accessed through an object called 'document'.
  ? Document:
    document.documentElement: Refers to the root node of the document (can be descriped as the body somehow?)
    document.documentElement.scrollHeight: Refers to the height of the entire page content and padding (including the area a client hasn't scroll to yet)
    document.documentElement.clientHeight: Refers to the height that is displayed to the client so far.
    document.documentElement.scrollTop: Refers to how many pixels is the document element scrolled by vertically. (can be applied to elements)
  ? Selectors:
  • document.getElementById("ID"): returns an Element object representing the element whose id property matches the specified string
  • document.getElementsByClassName("Class"): returns an HTMLCollection of elements with the specified class.
  • document.getElementsByTagName("Tag"): returns an HTMLCollection of elements with the given tag name.
  • document.querySelector("#ID"): returns the first Element within the document that matches the specified id.
  • document.querySelector(".Class"): returns the first Element within the document that matches the specified class.
  • document.querySelector("Tag"): returns the first Element within the document that matches the given tag name.
      - Now we can clearly notice that the 'querySelector' returns ONLY the first element it finds matching the specified selector.
  • document.querySelectorAll(""): returns all the Elements with the same class/tagname.
      - If the querySelector finds no matches, it returns 'null'
  ? Content:
  • document.Element.innerHTML: returns the inner HTML code of an element
  • document.Element.outerHTML: returns the element HTML code and its content.
  • document.Element.textContent: returns the text inside the element ignoring the CSS style.
  • document.Element.innerText: returns the text inside the element with its CSS style (styled).
  ? Creation:
  • document.createElement(""): creates an Element that you can append.
  • document.createComment(""): creates a Comment that you can append.
  • document.createTextNode(""): creates a text which u can append anywhere using appendChild.
  • document.createAttribute("") > creates an attribute like setAttribute but without a value.
  • Element.cloneNode(deep'true/false') *false by default*: this code clones an element to create an identical copy,
    and if you set the deep argument: true (Element.cloneNode(true)) then the element's descendants will be cloned too.
  ? Appending:
  • Parent.appendChild(child): inserts the element INSIDE a parent as the last child.
      - If the element already exists, the appendChild() will move it to the new location u specified in appendChild().
  • Parent.before(string -or- element to append before the parent OUTSIDE)
  • Parent.after(string -or- element to append after the parent OUTSIDE)
  • Parent.append(string -or- element to append INSIDE the parent after its content)
  • Parent.prepend(string -or- element to append INSIDE the parent before its content)
  • Parent.insertAdjacentHTML(position, 'element as text'): inserts the element anywhere in the page in a position you specify.
      - The positions are (if the <p> is the Parent):
        <!-- beforebegin -->                //! (parent.before() position too)
          <p>
            <!-- afterbegin -->             //! (parent.prepend() position too)
            Existing text/HTML content
            <!-- beforeend -->              //! (parent.append() position too)
          </p>
        <!-- afterend -->                   //! (parent.after() position too)
      ex: mainHeading.insertAdjacentHTML('afterend', elementReference);
  • Parent.insertAdjacentText(position, 'text'): inserts a raw text anywhere in the page in a position you specify.
  ? Parent and Children:
  • Element.parentElement: returns the Element's parent.
  • Element.firstElementChild: returns the Element's first element child, that means it'll ignore any non-element child such as comments and whitespaces.
  • Element.firstChild: returns the Element's first child, including non-element child such as comments and whitespaces.
  • Element.lastElementChild: returns the Element's last element child.
  • Element.lastChild: returns the Element's last child.
  • Element.nextSibling: returns the next sibling of an element including comments and whitespaces.
  • Element.nextElementSibling: returns the next element sibling of an element excluding comments and whitespaces.
  • Element.previousSibling: returns the previous sibling of an element including comments and whitespaces.
  • Element.previousElementSibling: returns the previous element sibling of an element excluding comments and whitespaces.
  • Parent.removeChild(Child): removes the selected child from a parent element.
      - Smart Example: Element.parentElement.removeChild(Element)   >  removes the element using its parent
  • Parent.children: returns the children elements of a parent
  • Parent.childNodes: returns the children of an element including comment and spaces
  • Element.remove(): removes the Element from the DOM entirely.
  ? Styling:
  • Element.style.color = "color": changes (or adds) the element's color. (modifies 1 css property)
      ex: Element.style.backgrondColor = 'blueviolet'
  • Element.style.cssText = "": addes multiple styles at once, the code style code is written in css.
      ex: Element.style.cssText = "background-color: red; color: white; border: 1px solid black";
      - You can remove a CSS style property using: Element.style.removeProptery("color")
        & you can set a new property using: Element.style.setProperty("color", "red")    or using:      Element.style.color = 'red'
      - You can also modify a specific CSS stylesheets file by selecting the stylesheet file then the rule & the style:
          ex: document.styleSheets[0].rules[0].style.remove/addProperty("property", 'value', 'important<optional>')
  ? Attributes:
  • Element.attributes: returns a list of the element attributes.
  • Element.attributes.attribute: returns an attribute and its value.
  • Element.attributes.attribute.value: returns an attribute's value.
      ex: Element.attributes  =>  {0: class, 1: id}    /    Element.attributes.class   =>   class="container"   /   Element.attributes.class.value   =>   "container"
  • Element.setAttributeNode(""): adds a new Attr node to the specified element.
  • Element.setAttribute("Attribute", "Value"): adds a new attribute to the specified element .
  • Element.getAttribut("class"): returns the attribute value too
      ex: Element.setAttribute("id", "#one");
    - You can set an empty attribute to control it later using: setAttributeNode("attr")
  • Element.hasAttribute("attribute"): checks if the element has a specific attribute (returns true/false).
  • Element.hasAttributes(): checks if the element has ANY attributes (returns true/false).
  • Element.removeAttribute("attribute"): removes an attribute from an element.
  ? Class Attribute:
  • Element.className: returns any classes on the Element as a string.
  • Element.classList: returns any classes on the Element as an Array, which we can manipulate using Array methods.
      The .classList property has a number of properties of its own. Some of the most popularly used ones are:
        Element.classList.add('className'): to add a class to the list.
        Element.classList.remove('className'): to remove a class from the list.
        Element.classList.toggle('className'): to add the class if it doesn't exists or remove it from the list if it does already exist.
        Element.classList.contains('className'): returns a boolean based on if the class exists in the list or not.
        Element.classList.length: shows how many classes are there.
        Element.classList.item(i): displays the class based on the position index u give.
      - Element.classList is by far the most helpful property of the bunch, and it helps to keep your CSS styling out of your JavaScript code.
  ? Scrolling:
  • Element.offsetTop: returns the start position of the element, can be used to check if we scrolled into element viewport (if(window.scrollY >= element.offsetTop))

*Events:
  - An event is an action taken by the browser or a user (or anything else) on something, which you can react to and handle using javascript, such as clicks and scrolls etc...
  ? Event Listener:
    • Syntax: <event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>)
      ex: 
      const mainHeading = document.querySelector('h1');
      mainHeading.addEventListener('click', function () {
      console.log('The heading was clicked!');
      });      //?Outputs: 'The heading was clicked!' to the console when the header is clicked.
    <event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>): removes an event from an element
      ex: const element = document.querySelector(".announcement1");
          function MyFunc() { 
              element.style.color = "yellow";
              console.log("The page has been clicked.");
          };
          document.addEventListener("click", MyFunc);
          document.removeEventListener("click", MyFunc);
  ? Event Handlers:
    - An event handler is a handler that takes a function and executes it whenever the event happens.
    • Some Event Handlers: onclick, oncontextmenu, onmouseenter, onmouseleave, onload, onscroll, onresize, onfocus, onblur, onsubmit, onkeyup etc...
      ex: element.onclick = func(){..}
  ? Events:
    - The actions taken on an element.
    • Some events are:  focus(), click(), scroll()...
      ex: element.focus(): focus on a certain element
  ? Event Phases:
    1) The Capturing phase ⬇️
    2) The at target phase
    3) The Bubbling phase ⬆️
    The event listener is set by default to bubbling phase, to change that we include 'true' after the function as a 3rd argument:
    document.addEventListener("click", MyFunc, true), now it's set to occur on capturing phase. (You can search more about event phases)
    - For further understanding, here's how the third argument might look like: document.addEventListener(event, listener, onCapture?).
    - The event handler function receives a paramter that refers to the event, that parameter is an object containing information about the event and some methods,
      one of these methods is 'preventDefault()', which prevents the default behavior when a certain action is taken, like preventing the form data from being sent
      when the submit button is clicked, or preventing a link from being opened when clicking on it etc...
        EXAMPLE:
          const links = document.querySelectorAll('a');
          const thirdLink = links[2];
          thirdLink.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("Look, ma! We didn't navigate to a new page!");
          });
  • If we want an event for each one of the 200 <p> that are inside of a <div>,
    instead of giving an event for each <p>, we can give the event listener to the div and target the textContent:
      document.querySelector('div').addEventListener('click', function (event) {
          console.log('A span was clicked with text ' + event.target.textContent);
      });       > that's called Event Delegation (You can search more about it)
    - but what if there was some spans in the <p>? we can use Node Type in Event Delegation to verify if the element is span:
        document.querySelector('div').addEventListener('click', function (event) {
            if (event.target.nodeName === 'SPAN') {           // ← verifies target is desired element
                console.log('A span was clicked with text ' + event.target.textContent);
            }
        });
    - The .nodeName property will return a capital string, not a lowercase one,
      so when you perform your check make sure to either:
      > check for capital letters
      if (event.target.nodeName === 'SPAN') {
        console.log('A span was clicked with text ' + evt.target.textContent);
      }
      > convert the .nodeName to lowercase
      if (event.target.nodeName.toLowerCase() === 'span') {
        console.log('A span was clicked with text ' + evt.target.textContent);
      }
  • If we want any javascript code to run after the DOM content is loaded so that we don't get an error,
    we can use the document event (DOMContentLoaded) to make the code run after the DOM is loaded.
    That doesn't mean we should put all of our js code in the <head> and run this event,
    instead, we can just place our js file at the bottom of the <body>, and bye bye to the need of using this DOMContentLoaded event! ...for now :)
      ex:
      <head>
        <link rel="stylesheet" href="/css/styles.css" />
        <script>
          document.addEventListener('DOMContentLoaded', function () {
              console.log('The content has been loaded');
              'A block of code to run after the content is loaded
          });
        </script>
  • Using the addEventListener is recommended over the event handlers such as 'onclick' for many reasons, but most importantly because you can't
    add more than 1 function to executes whenever the event happens with the event handlers, but with the addEventListener you can do that.

*The BOM: (Browser Object Module):
  ? Window methods:
    • alert('some input')   /or/   window.alert(): a popup window that informs the user of something
    • confirm('some input')   /or/   window.confirm(): a popup window that asks the user either to hit 'OK' or 'Cancel'. returns true if he pressed 'OK, else returns false.
    • prompt('some input')   /or/   window.prompt(): a popup window that asks the user to input something and then returns his input, else an empty string.
    • window.open(): opens a desired window, also window.(open) takes 4 argument
        window.open(URL, target"op", features"op", replace(boolean)"op")
          URL: can be any link
          target: whether to open it in the same page "_self", or in another "_blank"
          features: there are plenty, such as window height&width - position, etc...
          replace: whether to replace the window in history or not like we mentioned before
        FULL EXAMPLE: window.open("https://google.com", "_blank", "width=500, height=500", true)
    • window.close(): closes the window that was opened using .open() method
    • window.stop(): stops the page from loading immediately
    • window.print(): prints the page
    • window.focus(): focuses on a window
    • window.scrollTo(x, y)  /or/  window.scroll(): scrolls to specific position of the window 
        ex: window.scrollTo(500, 200)  /or/  scrollTo({top: 0, left: 0, behavior: "smooth"})
        - It's recommended to use the scrollTo tho, why? cuz apple sucks 😕
    • window.scrollBy: scrolls by a given distance.
        ex: 'scrollBy({top: 1300, left: 0, behavior: smooth})
    • window.scrollY  /or/  window.pageYOffset: displays the currently scrolled distance in pixels in Y Axis
    • window.scrollX  /or/  window.pageXOffset: displays the currently scrolled distance in pixels in X Axis
        - When using window.scrollY to make a scrollToTop button, in the 'if condition' make it <if(window.scrollY '>=' ??)> not '>' to avoid bugs
    ? window.location  /or/   location
    • location.href > to get or edit the current window link
    • location.host > to get or edit the current window host with port if there is any (e.g. google.com)
    • location.hostname > to get or edit the current window host ONLY (e.g. google.com)
    • location.hash > to get or edit the current window hashtag 'location in page e.g. #section2'
    • location.protocol > to get or edit the current window protocol 'e.g. https'
    • location.reload() > to reload the window
    • location.replace() > to move to & replace in history the current window link with another
        e.g.: location.replace("https://google.com")
      location.assign() to move to another link or assign it to the current window
  ? window.history  /or/   history
    • history.back() > return back by 1 page
    • history.forward() > goes forward by 1 page (undefined if the current window is the latest in history)
    • history.go(index) > goes to a page specified with its index in history, -1 means to go back by 1 page etc...
    • history.replaceState() > replaces the current page's link in the history without directing to anywhere, but the hostname has to be the same as the page you're in.
        history.replaceState() parameters are: ({dataObject} /or/ null, "newTitle" /or/ '', "newLink or hash etc...")
        for instance: if I'm at 'https://google.com' I can replace the link in the browsing bar and in history like this:
                      history.pushState({anyProperty: 'anyvalue'}, 'title change from here isn't supported by many browsers so just leave it blank', 'hello')
                      as a result: the link will be 'https://google.com/hello' in history, it has been replaced but never visited (eg fake history)
                      note that if you want to change the title you can group this replaceState with window.title in a function
                      after using the replaceState as we said, the page you're currently in will be replaced in history
    • history.pushState() > adds a new element to the history, and it receives the same parameters as replaceState()
        you can use this method to add new fake history element to the history array that has never been visited.
        > the difference between history.replaceState() and location.replace() is that the first only replaces the element in history,
          and the second replaces the element and also browese the new link, not only replace it.

*Local Storage:
  - The data saved in a browser
  • window.localStorage.setItem(key, value)  |or|  window.localStorage.key = value: saves a key to the local storage
      ex: window.localStorage.setItem("color", "value")  ||  window.localStorage.color = "red"  ||  window.localStorage["color"] = "red"
  • window.localStorage.getItem(key) || window.localStorage.key: returns a value for a key
      ex: window.localStorage.getItem("color")  =>  "red"  ||  window.localStorage.color  =>  "red"  ||  window.localStorage["color"]  =>  "red"
  • window.localStorage.removeItem(key): removes a key and its value from the local storage
      ex: window.localStorage.removeItem("color") ||  window.localStorage.removeItem.key  ||  window.localStorage.removeItem[key]
  • window.localStorage.clear(): removes all local storage keys and values
  • window.localStorage.key(index): to access a key using its position in local storage
      ex: window.localStorage.key(0)  =>  returns the key (e.g. fontSize)
    > To get a data attribute value from an html element you've clicked (suppose the attr name is data-color) use: e.currentTarget.dataset.color
      ex: html: <span data-color="red" id="span1">text</span>
          js: document.querySelector('#span1').addEventlistener('click', (e) => {
              e.currentTarget.dataset.color = 'green'
              })
      =>  html: <span data-color="green" id="span1">text</span>

*Session Storage:
  - The data saved in a tab, once you close the tab all the data will be removed.
  - A new tab means a new session, and duplicating the tab will copy the main tab session.
  - It has the same methods as local storage, just replace the name.

*Destructuring:
  - An expression that allows you to extract data from arrays, objects and mabs to assign them to new variables.
  ? Array destructuring:
    • Declaring variables using array destructuring:
        let arr = [1, 2]; let [a, b] = arr   =>   a = 1 & b = 2
    • Updating variables using array destructuring:
        let a = 1; b = 2; arr = [3, 4] > [a, b] = arr   =>   a = 3 & b = 4
    • You can also assign a default value in case the variable doesn't exist in the destructured array:
        let arr = [3, 4]  >  [a, b, c] = arr  >  c = undefined  >  [a, b, c = 5] = arr   =>   a = 3, b = 4 & c = 5
    • If you wish to skip an element in the destructured array assign it a hole:
        let arr = [1, 2, 3];  >  [a, , b] = arr   =>   a = 1 & b = 3
    • In case of nested arrays: let arr = [1, 2, [3, [4]]], 
        > If we want to use 3 & 4 as values you can destruct them this way [, , [a, [b]]] = arr   =>   a = 3 & b = 4
  ? Object destructuring: the same as array destructuring
    • Update variables values using object destructuring:
        let obj = {name: 'Saru', age: 22};  >  name = 1; age = 2;  >  ({name, age} = obj)    //! Has to be in parentheses() if I'm updating the variables' values
        prints   =>   name = 'Saru; age = 22;
    • Declaring variables using object destructuring:
        let obj = {name: 'Saru', age: 22};  >  const {name, age} = obj                           //! When declaring don't wrap them in parentheses()
        prints   =>   name = 'Saru; age = 22;
    • If you're using variables' names that are the same as the properties' names in the object,
      you can skip a property by just not typing its name as a variable. (i.g. Name your variables as the properties u wish to extract)
      const obj = {name: 'Saru', age: 22, gender: 'male'};  >  const {name, gender}  = obj   =>   name = 'saru' & gender = 'male'
    • If you want to name your variables as u wish, assign the name u want when declaring:
      const obj = {name: 'Saru', age: 22, gender: 'male'}  >  const {name: myName, gender: myGender} = obj   =>   myName = 'saru' & myGender = 'male'
    • You can assign a default value too in case the variable doesn't exist in the destructured object:
      {name, age, married} = obj  >  married = undefined  >  {name, age, married = false} = obj   =>   name = 'saru', b = 22 & married = false
      > note that if the variable exists in the destructured obj or arr, the given default value is ignored.
    • In case of nested objects: let obj = {name: 'saru', skills: {design: 70%, translation: 80%}}
      considering that we want to name the variables too okay?  >  const {skills: {design: skill1, translation: skill2}} = obj   =>   skill1 = 70%  &  skill2 = 80%
      another way to achieve this > const {design: a, tl: b} = obj.skills
  ? Function parameters destructuring:
  Destruct function parameters: there are 2 ways to use an object's properties as parameters in a function:-
  1) function(obj) {
      console.log(obj.name, obj.age, obj.gender)
    }
  2) function({name: myName, age: myAge, gender: myGender} = obj) {
      console.log(myName, myAge, myGender)
    }
  - The second method is perfect for complicated object parameters

*Set Data Type:
  ? Syntax: 
    new Set(any iterable data): Creates a new obj that includes a unique data (any iterable data type e.g. arrays, objects etc...).  //! Any repeated data is excluded.
      ex: let arr = [1, 1, 2]  >  let uniqueData = new Set([arr])    =>    prints: Set(2) {1, 2}
  - Why use set data type? To remove any repeated data, and many other things. Google: (Set data type use cases)
  ? Set methods:
    - You cannot access the Set data with an index
    • uniqueData.size: Returns the data length
    • new Set().add(element)   ||   uniqueData.add(element): Adds elements to the set data.
    • uniqueData.delete(element): Deletes an element by its value.
        - The .delete(el) method investigates if the element exists or not in the set data,
          if it exists it returns true and deletes it, if not returns false and does nothing.
    • uniqueData.clear(): Clears all the data.
    • uniqueData.has(element): Checks whether a certain element exists or not.  (Returns: true/false)
    • To create an iterator that you can use to iterate over the data elements use the uniqueData.keys() or uniqueData.values(), as they are the same,
        and save that to a variable; for instance let's name it: myIterator. now you can use other methods on that iterator to do different things, for example:
        - myIterator.next(): returns the next element in the data starting from the first element, you will get an object containing the element as a value and a 'done' property
          where you can access the element using myIterator.next().value . The 'done' property is set to false meaning the data still has element to iterate over, whenever you reach
          the end of the data, the next time you iterate using myIterator.next() the 'done' property's value will be set to 'true'.
    - You can use the forEach() function to iterate over the Set data elements uniqueData.forEach((el) => do something)
  ? Weak Set Data Type:
    • Syntax:
      new WeakSet(iterable object data only): Creates a new obj that includes the unique data, any unused data will be automatically garbage collected(removed) later.
        ex: let uniqueData = new weakSet([{A: 1, B: 2}])
    - You can't use the .size() method to access the length.
    - You can't use the iterator methods (e.g. .keys() || .values())
    - You also can't use forEach() higher order function (or HOF as short)
    • Why using weakSet? so that the memory deletes any unused objects that has no references or access on it (i.g. useless), thus, making sure only the used data is saved in the memory.

*Map Data Type:
  ? Syntax:
    new Map(Iterable with key/value):
    ? Differences between Map and Object data types:-
      > Object:
        - Has default keys.
        - Only accepts strings or symbols as keys.
        - The data isn't certainly in order.
        - To get its length you have to use: Object.keys(yourObject).length, and it'll only calculate the length of the string properties,
          if you have symbol properties in ur object then you have to use Object.getOwnPropertySymbols(yourObject).length,
          that'll return the symbol properties count which you can add to the string properties count to get the full length.
        - To iterate over the object properties you have to use for instance Object.entries() methods, which is not direct. [ex: Object.entries(yourObject).forEach(() => {})]
        - Has low performance compared to Map()
      > Map:
        - Doesn't have default keys.
        - Accepts almost any type of data (e.g. strings, numbers, objects, booleans and functions) as keys (i.g. properties).
        - The data is ordered by insertion.
        - You can get the length using .size() method like the Set() data type.
        - You can directly iterate over its keys.
        - Has better performance than objects.
  ? Map methods: 
    let myMap = new Map();
    • myMap.set(key, value): Adds a new key and its value.
      another way to add keys to a map when declaring:
        let myMap = new Map([
          [key, value],
          [key, value],
        ])
    • myMap.get(key): Returns a key's value.
    • myMap.delete(key): Deletes a key/property, and returns true if the deleting is successful, if not returns false.
    • myMap.clear(): Deletes all the keys inside.
    • myMap.has(key): Returns true if the key exists, else returns false.
    • myMap.size: Returns the map size (keys count).
  ? Weak Map: just like WeakSet()!
      let myWeakMap = new WeakMap()
      - Has the same methods as Map() but some are excluded.
      - Only accepts objects as keys.
      - Can't count size or iterate over keys.
      - Any unused data will be garbage collected(removed) later automatically.

*Regular Expression:
  - Used to search (i.g. match) data, or to check if the data is formatted in a certain way.
  ? Syntax:
    let regExp = /pattern/modifiers   ||   let regExp = new RegExp('pattern', 'modifiers')
  ? Modifiers:
    • g: global search
    • i: case-insensitive
    • m: search in multilines
    • s: single line
    • u: unicode
    • y: sticky
  ? Methods:
    • string.match(pattern): Searches for a certain string that matches the given pattern.
        ex: let myString = 'This string was made as a practice string.'
            myString.match(/string/i): Search for 'string' ignoring the capitalizing (i)
              > Returns: ['string', index: 5, input: 'This string was made for practice.', groups: undefined]
            myString.match(/string/gi): Search for 'string' globally(g) (everywhere in the string), and ignoring the capitalizing(i)
              > Returns: ['string', 'string'], if the pattern isn't found returns: null
    • pattern.test(string): Checks if the provided string meets the pattern, if so returns true, else false.
        example: /(\bma|ma\b)/gi.test(myString): Looks for any word that starts or ends with 'ma', which returns true cuz the string includes 'made'
    • string.replace(what to replace, with what): Replaces the given value with another in the first case(character) it encounters.
        ex: myString.replace(' ', '-')    =>    'This-string was made as a practice string.'
    • string.replaceAll(what to replace, with what): Replaces the given value with another in the whole string.
        ex: myString.replaceAll(' ', '-'): replaces all the spaces( ) with hyphens(-)   =>   'This-string-was-made-as-a-practice-string.'
        - Keep in mind that you can type down a pattern (e.g. /3\w{8,}(?=Z)/gi) and replace anything that matches this pattern with smth else
          ex: myString.replaceAll(/\w{4}/gi, 4)    =>    '4 4ng was 4 as a 44 4ng.'
  ? Range in patterns []:
    • (x|y): Search for Y or X
    • [0-9]: Search for any number between 0 and 9.
    • [^0-5]: Search for any number that is NOT between 0 and 5.
    • [a-z]: Search for any small letters.
    • [A-Z]: Search for any capital letters.
    • [abc]: Search for the letters: a, b and c.
    • [a-zA-Z]: Search for both small and capital letters.
    • [^a-z^A-z0-9]: Search for anything that's NOT (a small letter, a capital letter, a number in range[0-9] and the '^' special character).
  ? Character classes:
    • /./: Search for anything (any character) except new lines or other line terminators.
    • /\w/: Search for any word character.
    • /\W/: Search for anything that's NOT a word character.
    ­        advanced example: emails.match(/\w@\w.(com|net)/): search for a string that starts with a single word character,
    ­       ­                   followed by @, then a word character, then type ., and finally either 'com' or 'net'
    • /\d/: Search for any number (digit)
    • /\D/: Search for any character but numbers (digits)
    • /\s/: Search for whitespace characters
    • /\S/: Search for any character but whitespaces
    • /\b/: Search for any character that starts (/\bstring/) or ends (/string\b/) with the given string
    • /\B/: Search for any character that does NOT start (/\Bstring/) or end (/string\B/) with the given string
  ? Quantifiers:
    • n+: Indicates that it contains one character or more.
          ex: /\w+/gi : Search for anything that contains a word character or more (i.g. split every word)
          ­              myString = 'this is a string';  >  myString.match(/\w+/gi)    =>    returns ['this', 'is', 'a', 'string]
    • n*: Indicates that it contains zero characters or more.
          ex: \w*ig : Search for anything that contains zero word character or more.
          ­            myString = 'this is a string';  >  myString.match(/\w(*)/gi)    =>    returns ['this', '', 'is', '', 'a', '', 'string', '']
    • n?: Indicates that it contains zero characters or a single character.
          ex: myString.match(/\w?/gi)    =>    returns ['t', 'h', 'i', 's', '', 'i', 's', '', 'a', '', 's', 't', 'r', 'i', 'n', 'g', '']
          adv ex: randomUrl.match(/https?:\/\/(www.)?\w+.\w+/gi): search for a url that starts with https (or http) followed by '//',
          ­        then 'www.' (or without the www.), then a word charactor or more, then '.' and finally a word character or more.
          ­        returns: ['https://www.anything.com', 'https://anything.net', 'http://anything.org', 'http://www.anything.xyz']
    • n{x}: Search for a string that contains a certain(x) number of characters (it has to be x characters)
    • n{x, y}: Search for a string that contains a number of characters within the given range (from x, to y)
    • n{x,}: Search for a string that contains a certain(x) number of characters or more (at least x or more)
    • ^: Indicates that the whole string must start with something (^something)
    • $: Indicates that the whole string must end with something (something$)
    • ?=: Indicates that the string must be followed by something (?=something)
    • ?!: Indicates that the string must NOT be followed by something (?!something)
        - Note that these past 2 quantifiers only return the string that is (or not) preceeded by followed by the indicated pattern.
          ex: let myNS = 'A11A, B22B'  >  myNS.match(/\w+(?=\d)/gi)    =>    ['A1', 'B2']
      adv ex: let randomString = '4MoustafaaaZ 2Ahmaaaadzz'
              randomString.match(/4\w{8,}(?=Z)/gi)    =>    returns for instance: ['4Moustafaaa'],
          BUT: randomString.match(/4\w{8,}z/gi)    =>    returns:  ['4MoustafaaaZ']

*Object Oriented Programming (OOP): 
  ? Syntax and some informations:
  • To create a new class: 
    class ClassName {
      constructor(parameters) {
        this.properties = values
      }
      methods() {
        block of code
      }
    }
  • To access a property or a value: ClassName.property  ||  ClassName.method()
  - A class is actually a function, normal strings and numbers etc... are made with built in classes but not instances of it, unlike using 'new String()' or so when creating a string.
  - Inside a class, 'this' refers to the created object ->
    ex: class ClassName {
          constructor(username) {
            this.username = username       //! this.username = username: means the username property in the created object using this class is equal to the parameter
          }
        }
  - If a function is created inside the constructor it's still a function not a class method, only when created outside the constructor and inside the class it is called a method.
  - You usually can access any properties outside the constructor using any instances' names created using the class, but you can't access them using the class name itself.
    Now if you wish to make a property or method that's not accessable by any instances and belongs to the class itself, give it the 'static' keyword,
    with that your property/method is only accessable using the class name, not any instance of it.
    ex: class ClassName {
          static sProperty
          constructor(parameters) {
            this.property = value
          }
          static sMethod() {
            block of code
          }
        }    // ClassInstance.sProperty  >  returns: undefined       ClassName.sProperty > returns: value
        static sMethod() {}    //    ClassInstance.sMethod()  >  returns: undefined       ClassName.sMethod() > returns: something
    > Why use static properties and methods? To create properties and methods that are unique and not accessable by any instance.
  ? Inhertince:
    - Indicates that a child class inherites properties or methods from a parent class, this is useful when we want to create multiple classes that have the same properties.
      ex: class ParentClass {
            constructor(parameters) {
              this.propertyA = valueA;
              this.propertyB = valueB;
            }
          }
          class ChildClass extends ParentClass {
            constructor(parameters) {
              super(propertyA, propertyB);
              this.propertyB = valueB;
            }
          }
    - The Child class inherites all of the Parent class's methods by default, there's no need to include them in the super keyword.
  ? Encapsulation:
    - Encapsulation is making ur properties private and not accessable at all, they are only accessable inside the class itself.
      The goal is to protect ur data, prevent human errors as much, make the app flexable and simple.
    • To make a property private you HAVE TO DECLARE IT FIRST outside the constructor, then define it inside and precede it by a hash (#) symbol in both cases.
    ex: class ClassName {
          #pProperty;
          constructor(parameters) {
            this.#pProperty = pValue;
          }
          getProperty() {
            return this.#pProperty
          }
        } // The getProperty() method can access the #pProperty because they're in the same class, but you can't access it using the class name or so, only via the getProperty in this case.

*Prototype;
  • A prototype is how (the mechanism) an object inherites its properties and methods from another.
  • When creating a class a prototype is created as a clone containing all of the class's methods.
  • You can access the prototype via .prototype    >   ex: className.prototype
    ex: to access all of the string methods for instance use: String.prototype > u'll find all the built in methods like string.length and such.
  • To add a method to the class prototype chain for instance: class.prototype.newMethod = function () {},
    and to access it: class.newMethod
    ex: String.prototype.makeIthyphenated = function(string) {
          return this.split(' ').join('-')
        }
        'Hi, I\'m a cool string'.makeIthyphenated()    =>    "Hi,-I'm-a-cool-string"
  • To add a method/property to any prototype (so that we can access it everywhere) we add it to the Object class:
    Object.prototype.newMethod = function () {} || Object.prototype.newProperty = value

*Date and Time:
  - Epoch time or Unix time in computer science is the number of seconds passed since (Jan 1st, 1970).
  • Date.now(): A static method that returns the time passed since 1970 in ms.
  • new Date(): Returns today's day, date and time which u can save in a variable.
  - You can set the starting date point yourself using: new Date('mm dd, yy'), ex: new Date ('Dec 05, 00'), now if you saved that
    in a variable, you get the time passed since the given date in millesconds. Note that you can insert the date in ms too which u get can via Date.parse('string')
      > To calc your age for instance, substract(-) the new Date() from the new Date(ur BD) and u get ur age in ms.
        let myAge = new Date() - new Date('Dec 05 2000')    =>    Returns my age in ms: 697919968452,
        but I'll convert it into years: Math.round(myAge/1000/60/60/24/365)    =>    Returns my age in years: 22 years old
  - Now let's explore the date constructor's methods (new Date()) assuming that we saved it in a variable called 'myDate'
  ? Get Date and Time:
    • myDate.getTime(): Returns the time passed since 1970 in ms.
    • myDate.getDate(): Returns the current day of the month using local time.
    • myDate.getFullYear(): Returns the current year using local time. (can be used for a dynamic copyright year in footers)
    • myDate.getMonth(): Returns the current month of the year using local time. (where Jan is 0 and Dec is 11 'indexing')
        To get the month's name, make an array that contains months' names and access the month's name using the returned index.
        ex: ['Jan', 'Feb', 'Mar'][myDate.getMonth()] > Returns 'Jan' (If we're in January)
    • myDate.getDay(): Returns the current day of the week using local time. (where Sun is 0 and Sat is 6 'indexing')
    • myDate.getHours(): Returns the current hour of the day using local time.
    • myDate.getMinutes(): Returns the current minute of the hour using local time.
    - myDate.getSeconds(): Returns the current second of the minute using local time.
  ? Set Date and Time:
    • myDate.setTime(?ms): Sets how much time passed since 1970 in ms.
    • myDate.setDate(+?-): Sets the day of the month using local time. (where negative days are past month's)
    • myDate.setFullYear(y, m[0-11], d[1-31]): Sets the year, month(op) and day(op) using local time.
    • myDate.setMonth(+m[0-11], d[1-31]-): Sets the month and day(op) using local time.
    • myDate.setHours(h[0-23], m[0-59], s[0-59], ms[0-999]): Sets the hours, minutes(op), seconds(op) and millesconds(op) using local time.
    • myDate.setMinutes(m[0-59], s[0-59], ms[0-999]): Sets the minutes, seconds(op) and millesconds(op) using local time.
    • myDate.setSeconds(s[0-59], ms[0-999]): Sets the seconds and millesconds(op) using local time.
  ? Formatting Date and Time:
    • Date.parse('string'): Takes the date in string, returns time in ms. 
    - In the new Date() u can insert the date any way you like, for instance 2000-12-05 or 05/12/2000
      or even skip the month and day values or use 2 digits to specify the year, etc...
    • Another date format is (yyyy, mm, dd, hh, mm, ss) > (2000, 11, 5, 1, 30, 0) where 'Jan' index is 0 not 1,
      so 11 here refers to december, and as whole: 05/12/2000 1:30:
    • Lastly, ('yyyy-mm-ddThh:mm:ssZ') the T indicates where the time at in the string, and the 'Z' indicates that the timezone is taken in mind.
      for ex: ('2000-12-05T03:15:00Z')  >  05/12/2000 05:15 GMT+2, if u removeed the 'Z' then the time will be 3:15 GMT+0

*Generator function:
  ? Syntax:
    let generator = function* generatorFunc() {
      yield 1;
      console.log('A block of code after yield 1');
      yield 2;
      yield 3;
    }
  - The generator function type is an object, and it can be used to generate anything when needed, as it only runs when you use the next() method.
  • Just like the Set data type iterator, it has the 'next()' method that returns the first yield's value and the iteration status.
    ex: generator.next() > returns: {value: 1, done: false}
  - You can place any lines of code between the yield values to be executed, and it only execute the code when approaching the next yield value.
  - Whenever you use the next() method to return a yield value, this value gets removed from the function (consumed), and after
    you return all of its yield values, it returns undefined.
  • You can loop over the function() using the 'for of' loop to execute all of its yield values, for ex:
    for (let value of generator()) {
      console.log(value)
    }
    returns: 1, 'A block of code after yield 1', 2, 3
  ? Delegate generator:
    - A delegate generator is a generator function that execute another generator function(s).
    ex: function* delegateGenerator() {
          yield* generator();
          yield* ['a', 'b']
        }
      returns: 1, 'A block of code after yield 1', 2, 3, 'a', 'b'
    - The delegate generator is treated like the normal generator, and it has the same methods. Just don't forget the star, ya?
  • The return method stops the generating, means that no value will be printed anymore if we used the next() method, you can provide any value to finish the generating.
    ex: generator.next()              > returns: {value: 1, done: false}
        generator.return()            > returns: {value undefined, done: true}
        generator.next()              > returns: {value undefined, done: true}
    or  generator.return('s')         > returns: {value 's', done: true}
        - You can also include the return in the function itself:
          let generator = function* generatorFunc() {
                yield 1;
                console.log('A block of code after yield 1');
                return 's';
                yield 2;      // will never be executed
              }
  - To generate an infinite numbers use a for/while loop, that will generate a new number whenever u run next()
    ex: function* infiniteNumbers() {
          let index = 0;
          while(true) {
            yield index++;
          }
        }

*Modules:
  - A module is a file or pieces of code that control over something or do something, there could be an image module for instance that modifies the images accordingly.
  - You'll often see modules in frameworks, but you still can create, import and export modules however you like.
  ? Named Export:
  • To Export a piece of code inside a file, precede it by the export keyword, or group the pieces of code you want to export inside curly braces {}.
    ex: [file_1.js]: export let a = 1; export let b = 2; export function sayHello() {console.log('Hello')};
                or: export {a, b, sayHello()} and remove the export keyword from every line above.
  • To Import something: use the 'import' keyword in another file followed by what you wish to import. If it's more than one, wrap them in curly braces {}.
    ex: file_2.js: import {a, b, sayHello} from './file_1.js' > and use it as u like inside the file you've imported into.
        - To give the imported function or variable another name 'Alias', using the 'as' keyword:
          import {a, b, sayHello as importedFunc} from './file_2.js', and then u can use it by its new name: console.log(importedFunc()) > outputs: 'Hello'.
        - You can name ur function or variable while exporting: export {a as varA,}; instead of naming it while importing if u wish, and then import it using the new name, otherwise u get an error.
  ? Default Export:
  - To Export as default: export default something, 'something' could be a variable, a function etc...
  - Every file can export as default only ONCE, and you don't necessarily have to name the function when exporting or even when importing.
    ex: file_1.js: export default function() {return 1};  >  file_2.js: import anyName from './file_1.js'; console.log(anyName()) > outputs: 1
    As shown above, you can ignore naming ur function or variable if u wish and export it as default, then when importing give it any name you want, 
    but beware that when importing, you can't wrap what was exported as default with the rest (named exported modules)
  - You can import all of the file's functions and variables as below this way:
    import * as anyName from './file_1.js'; and use the dot notation to access the data: anyName.a || anyName.b etc...
  -

*JSON: Javascript Object Notation
  - JSON is a data format when sharing data between server and client side.
  - JSON is drived from JS, and it's an alternative format to XML data format.
  - JSON file extension is file.json obviously, and it's very similar to JS objects which you can convert to or into a JSON.
  - JSON is a text based,  lightweight, non-tags-using, short, array-using and non-comment-support data format.
  - XML is a markup, heavy, tags-using, non-short, non-array using and comment-support data format.
  - Available data types to use in JSON: strings, numbers, booleans, null, objects and arrays.
  ? JSON data format:
    {                             >> Data is saved inside curly braces {}
      "string": "Saru",           >> Properties are wrapped in double quotes ""
      "number": 77,               >> Data lines are seperated by a comma ',' like JS objects
      "object": {                 |
        "gender": "male",         |
        "married": false          |>> Supports string, number, object, boolean, null and array data types.
      },                          |
      "array": [1, 3, 5],         |
      "job": null                 |
    }
  • A JSON object is a string, and to convert it into an actual JS object we use these methods:-
    - JSON.parse(data): to convert the JSON data into a JS object.
    - JSON.stringfy(data): to convert the JS object into a JSON data type.

*API: Application Programming Interface
  هو الوسيط في عملية مشاركة البيانات، أي المسؤول عن استقبال البيانات وإرسالها ما بين السيرفر والكلاينت (الخادم والعميل)
  ? API types:
    1) Public API
    2) Private API
      - To use the private one you have to have a key to use the shared API to access the data.
  ? Web APIs:
    - Web APIs are some objects we use that are not a part of JS, like the document and window object.

*Asynchronous and Synchronous:
  - Asynchronous programming is a number of operations that run in sequence, a single operation can run ONLY when the previous one is completed.
  - Synchronous programming is a number of operations that run in parallel, a single operation can run while the previous one is being operated.
  ? Callstack:
    • When calling a function, it's moved into the bottom of the callstack. If that function calls another, the other function is placed above it.
    • When executing, the first function to be called is the last to be executed, which is called (LIFO: Last In - First Out)
    • Whenever the callstack encounters a WebAPI, it leaves it to the browser to handle it, thus, the WebAPI funcion will be executed after everything else in the callstack executes.
      for example: the setTimeout is a WebAPI method (window API method), which will be ran after everything's cleared from the callstack even if the delay time is set to 0.
      ---------Callstack----------
        function three() {                <= The first function to execute is the last function that was invoked
          Do something...                    - When a function is executed, it's removed from the callstack
        }
      ----------------------------
        function two() {
          three()
        }
      ----------------------------
        function one() {                  <= The last function to execute is the first function that was invoked
          two()                              - After the callstack is cleared, WebAPIs are handled.
        }
      ----------------------------        <==== This is what we call 'Synchronous', only one operation(i.g. function) runs at a time
  ? Callback Queue:
      - As we discussed, any WebAPI is handled by the browser and inserted into the callstack after it has been cleared.
      - When the WebAPI method is handled by the browser, the browser adds the returned value into the 'Callback Queue', which is a queue that has any returned values from WebAPIs methods,
        then the Callback Queue waits until the Callstack is clear to starts moving the returned values from the Callback Queue to the Callstack.
      - The first to enter the Callback Queue is the first to be executed (FIFO: First In - First Out), unlike how Callstack works in regular.
  ? The Event Loop:
      (i.g. another explanation of how WebAPIs are handled)
    - Explains where the APIs are placed until they are called (ex: a "click" event is called when clicking),
      when the event is read it's moved to the browser, and when it's called it's moved to the Callback Queue, if the Call Stack is
      empty, then the function or the event is executed.

*AJAX: Asynchronous Javascript and XML
  - AJAX is an approach to use more than one techonolgy or language together, and it uses the 'XMLHttpRequest' to interact with the server.
  • let myRequest = new XMLHttpRequest(): To create a new request that we can modify later.
    - In every request there are many details, and we'll explore some (console.log(myRequest) to examine them):
      readyState: The readyState number indicates the request state, and each refers to a different state:
                  0 > The request hasn't been initialized.
                  1 > A server connection has been established.
                  2 > The server has received the request.
                  3 > The request is being processed.
                  4 > Processing the request has finished, and the response is ready to be sent.
          status: The status number indicates the response state, we'll explore some of the status codes:
                  200 > The response has been received successfully
                  403 > Found the location, but access is denied 'forbidden'
                  404 > Couldn't find the location.
    - If the readyState = 4 that means the request has been sent successfully, and if the status = 200 that means the response has been received successfully.
  • myRequest.open(method, url, Asynchronous?'op', API-Authentcation'op'): Specifies the request method, url, async state and authentication details (username & passowrd) if needed,
    (it's needed if the API is private)
      - You can provide a JSON file for instance instead of the url if you want to request the data from that file (ex: test.json).
    - full example: myRequest.open('GET', 'file.json')
  • myRequest.send(): Sends the request to the server.
  • myRequest.onreadystatechange: Indicates that a change has happened to the 'readyState' number. Assign it a function to do anything u like,
    but it's recommended to use the '.onload' instead.
      ex: myRequest.onreadystatechange = () => console.log(myRequest.readyState)   >   if the request is a success outputs: 2, 3, 4;
  • myRequest.responseText: Contains all of the response data which you can loop over.

*Promises:
  - A promise in JS is similar to what promise means in real life, as it vows to fetch the data from a certain url later (in the future).
  - We use promises to avoid getting stuck in a callback hell (e.g. A pyramid of doom), which is a function that calls another function that calls another function etc...
  - The promise is an object that represents the asynchronous programming and its resulting value, because it works asynchronously.
  ? Promise states:
    1) Pending: which is the intial state.
    2) Fulfilled(Resloved): which means the promise has been completed successfully.
    3) Failed(Rejected): which means the promise has failed.
  - When a promise gets called, it will intiate with a pending state and finishes with a resolved or a rejected state, however, the promise is always followed by the 'then' keyword,
    which receives a callback function to either outputs the returned value from a resolved promise, or logs the error returned from a rejected promise.
  ? Promise handling:
    • new Promise(...): Create a new promise, the promise receives a function that receives 2 callback functions as arguments,
    - I start by making a condition that determines whether a promise is a success or a fail, if it's a success I execute the resolve function to return something, and if it's a fail
    - I execute the reject function to return something.
    • '.then()': After that, the promise is followed by the '.then(.,.)' keyword which receives 2 callback functions as arguments,
      the first does something with the returned value from a resolved promise, the seconds does something with the returned value from a rejected promise.
    ex: let myPromise = new Promise((resolveFun, rejectFun) => {
          let databaseConnection = true;
          if (databaseConnection) {
            resolveFun('The connection has been established.')
          } else {
            rejectFun(Error('There was an error.'))
          }
          }).then(
            (resolveValue) => console.log(`Promise fullfilled, ${resolveValue}`),
            (rejectValue) => console.log(`Promise rejected, ${rejectValue}`)
          )
      - Note: You can chain the promise anywhere u like (by typing '.then' after the promise variable) as follows:
        myPromise.then(), so it doesn't have to be on a single line.
    - As we discussed, the '.then()' keyword takes 2 callback functions as argument, the first does something with the returned value from a resolved promise,
      and the seconds does the same in a rejected promise, but we can actually only pass the first argument which is the resolve function, and then attach the '.catch()' to it',
      which also does something with the returned value from a rejected promise like the second argument that the '.then()' keyword receives.
    - That way we can chain a couple of '.then()' keywords to do different oprations with the successful returned data if the promise is resolved, 
      and if not the '.catch()' keyword is here to do whatever you wish with the returned data from a failed promise.
    • '.finally()': this keyword is optional, and it's placed at the end of a promise to receive a callback function that does something whatever the state of the promise is (resolved or rejected).
      ! full example:
        let myPromise = new Promise((resolveFunc, rejectFun) => {
          someCondition = true;
          if(someCondition) {
            resolveFunc('Return this string because we dont have data yet -.-')
          } else {
            rejectFunc(Error('The promise failed sweetheart, kys ._.'))
          }
        }).then((resolveData) => {
          console.log(resolveData)           // Outputs: 'Return this string because we don't have data yet hehe' if someCondition is true
        }).catch((rejectData) => {
          console.log(rejectData)            // Outputs: 'The promise failed sweetheart, kys.' if someCondition is false
        }).finally(() => console.log('وإلى هنا سيداتي سادتي تنتهي سهرتنا لهذا الوعد.'))
      ! Advanced Example:
        let getData = (api) => {
          let myRequest = new XMLHttpRequest()
          let myPromise = new Promise((resolve, reject) => {
              myRequest.onload = () => {
                  if(myRequest.readyState === 4 && myRequest.status === 200) {
                      resolve(JSON.parse(myRequest.responseText));
                  } else {
                      reject('Error fetching the data')
                  }
              };
              myRequest.open('GET', api);
              myRequest.send()
          }).then((data) => console.log(data[0].owner.login)).catch((err) => console.log(err))
          };
          getData('https://api.github.com/users/elzerowebschool/repos');        //! Outputs: 'ElzeroWebSchool'
  ? Fetch API:
    - The fetch API does what the previous getData function does, but returns the whole responseText which we can modify later.
    - The fetch API returns a promise that has a state and the data, so we can use the '.then' keyword to manipulate the data after fetching it. 
        ex: fetch('https://api.github.com/users/elzerowebschool/repos')
              .then((response) => {
                return response.json()            //* converts the data into a js object from an http response and returns a promise
              }).then(data => console.log(data[0].owner.login))        //! Outputs: 'ElzeroWebSchool'
  • Promise.all([...]): This method receives multiple promises in an array and then waits for every promise to finish, if all promises are resolved it returns 
    the value of each in an array, but if one promise or more fail it returns the rejection value of the first rejected promise it encounters.
      ex: const promise_1 = new Promise((res, rej) => {
            setTimeout(() => {res('1st Promise')}, 1000)          //* First promise (resolved)
          });
          const promise_2 = new Promise((res, rej) => {
            setTimeout(() => {res('2nd Promise')}, 2000)                //* Second promise (resolved)
          });
          const promise_3 = new Promise((res, rej) => {
            setTimeout(() => {res('3rd Promise')}, 3000)                     //* Third promise (resolved)
          });
      Promise.all([promise_1, promise_2, promise_3]).then((resolvedValues) => console.log(resolvedValues))       //? returns: ['1st Promise', '2nd Promise', '3rd Promise'];
      TODO: Now let's make 2 of these promises fail, and modify their delay time.
          const promise_1 = new Promise((res, rej) => {
            setTimeout(() => {rej(Error('1st Promise'))}, 5000)                     //! Third promise (rejected)
          });
          const promise_2 = new Promise((res, rej) => {
            setTimeout(() => {res('2nd Promise')}, 2000)            //* First promise (resolved)
          });
          const promise_3 = new Promise((res, rej) => {
            setTimeout(() => {rej(Error('3rd Promise'))}, 3000)             //! Second promise (rejected)
          });
      Promise.all([promise_1, promise_2, promise_3])
      .then((resolvedValues) => console.log(resolvedValues), (rejectedValues) => console.log(rejectedValues))       //? returns: 'Error: 3rd Promise'
  • Promise.allSettled([...]): Similar to 'Promise.all()', but instead returns all promises' values no matter what their state is.
      - So if we used previous promises:
        Promise.allSettled([promise_1, promise_2, promise_3]).then((resolvedValues) => console.log(resolvedValues))
          > If all promises are resolved: //? return an array of objects that says all promises are fulfilled
          > If one or more promises fail : //? return an array of objects that says one or more promises are rejected, and the rest are fulfilled.
  - Promise.race([...]): Similar to the previous two methods, but it only return the first promise value, whether it was resolved or rejected, it doesn't matter.
      The first promise to finish the race is the one will be returned. No example needed, replace the 'Promise.allSettled()' from the prev example with 'Promise.race()' to see what happens if you wish.

*Async & Await:
  ? Async:
  - When the Async keyword is written before a function keyword, that means that function returns a promise instead of a normal value.
  - Both Async and Await keyword are used to create asynchronous promise with a much cleaner style.
    ex: 
      TODO: Instead of: 
        function getData() {
          let someCondition = true;
          if (someCondition) {
            return Promise.resolve('The condition is met, promise resolved.')       //* That's another way to write the resolve and reject instead of creating a new promise
          } else {                                                                 //* and then giving rej and res callback functions as arguments etc...
            return Promise.reject('The condition isn\'t met, promise rejected.')
          }
        }
        getData().then((data) => console.log(data)).catch((error) => console.log(error))      //! Outputs: 'The condition is met, promise resolved.'
      TODO: We can use the Async keyword:
        async function getData() {
          let someCondition = true;
            if (someCondition) {
              return 'The condition is met, promise resolved.'
            } else {
              throw new Error('The condition isn\'t met, promise rejected.')
            }
          }
        getData().then(data => console.log(data)).catch(error => console.log(error))    //! Outputs: 'The condition is met, promise resolved.'
  ? Await:
  - The await keyword only works inside an async function, and it makes the js engine wait for the promise result before doing anything (i.g. before executing the rest of a function code),
    and finally, it's a more elegant syntax of getting the promise result.
    ex: //TODO: In case of a resolved promise:-
      let myPromise = new Promise((res, rej) => {
            let someCondition = true;
            setTimeout(() => {
              if(someCondition) {
                res('resolved')
              } else {
                rej('rejected')
              }
            }, 2000)
          });
      console.log('one');
      console.log(await myPromise);          //* There's no need to use the '.then()' keyword when using 'await', as it returns the resolved value automatically.
      console.log('two');                   //! Outputs: 'one', 'resolved', 'two'
        TODO> In case of a rejected promise:-
      let myPromise = new Promise((res, rej) => {
            let someCondition = false;
            setTimeout(() => {
              if(someCondition) {
                res('resolved')
              } else {
                rej('rejected')
              }
            }, 2000)
          });
          console.log('one');
          console.log(await myPromise.catch((error) => return error));   //* Only the '.catch()' keyword is needed to catch the rejected value.
          console.log('two');
          ! Outputs: 'one', 'rejected', 'two'
  ? Async & Await with(Try, Catch & Finally) practice:
    TODO: Now let's write a real code:
      let myPromise = new Promise((res, rej) => {
        let aCondition = true;
        setTimeout(() => {
          if (aCondition) {
            res('resolved');
          } else {
            rej('rejected');
          }
        }, 2000);
      });
      async function readData() {
        console.log('one');
        try {                                     //* The 'try' keyword is used to try if the promise resolves, if not the follwing 'catch' keyword handles the error,
          console.log(await myPromise)            //* but only works inside an async function tho
        } catch(error) {
          console.log(error)
        } finally {
          console.log('we\'re done baby')
        }
      }
      readData()       //! Outputs: 'one','resolved, 'we\'re done baby'
    TODO: Now why don't we fetch some real data?   //* Explanation :
      async function getData(apiLink) {            //* A function that takes an api link that holds the data and fetch it as a parameter.
        console.log('a text before fetching');     //* A text to be output before fetching to check if the 'await' keyword makes the js engine wait.
        try {                                      //* The 'try' keyword to check if the promise resolves or not
          let myData = await fetch(apiLink)        //* Waiting to fetch the data from the provided link and saving it into the 'myData' variable.
          console.log(await myData.json())         //* Converting the data into a js object from an http response and returns a promise, after that the 'await' keyword takes that promise 
        } catch(error) {                           //*   and returns an array of objects that's inside, like what 'then()' does.
          throw new Error(error);                  //* If the promise is rejected catch the error and console.log it
        } finally {                                //*
          console.log('a text after fetching')     //* After both cases (resolve and reject) console.log this text
        }
      }
      getData('https://api.github.com/users/elzerowebschool/repos') //* Function invocation
    ! Outputs:
      'a text before fetching'
      (30) [{…}, {…}, {…}, {…}...]             < Data
      'a text after fetching'

*Performance:
  - Use performance.now() before the code and after to test the efficiency of the code.
      ex: console.log(timeBefore - timeAfter): Indicates how long it took the code to run. The lower the better.
  - A reflow and a repaint happen everytime you update a content, so it's better to choose the best way to cause the less
    number of reflows and repaints.
  - Use .createDocumentFragment() to create an element that's not a part of the DOM, where we can store
    other elements temporarily before adding it to the DOM, hence, increasing the performance.
  - If we want to modify contained elements on the screen, we can hide it temporarily then display it again after applying
    the changes, that's why people prefer to use libraries such as "Virtual DOM" because it's saves the changes in another
    structure, and the library calculates the best way to update the screen to match the new content you want to add.
  ? The setTimeout:
    - A method that takes a callback function and executes it after a certain delay.
    setTimeout(function, delay in ms, argument1(op), argument2(op)):
      ex: setTimeout(function sayHi() {
            console.log('Howdy');
          }, 1000);                          :> the code will run after 1 second delay
        ­                                        the arguments are for the function, in case u want to set parameters for the function:
        function sayHi(phrase, who) {
          alert( phrase + ', ' + who );
        }
        setTimeout(sayHi, 1000, "Hello", "John");     // Hello, John
    - We can use the setTimeout to run a function after everything else is executed from the Call Stack by giving it
      a delay of 0; this will move the function to the browser then the Callback Queue since it's called immediately (delay 0),
      and then move it to the CallStack to be executed whenever the CallStack is empty, this way the user will be able to interact with the page while the function is running.
  ? The clearTimeout:
    - clearTimeout(a variable that contains the setTimeout): clears the TimeOut and it never happens.
      ex:
        let timerId = setTimeout(() => alert("never happens"), 1000);
        alert(timerId); // timer identifier
        clearTimeout(timerId);
        alert(timerId); // same identifier (doesn't become null after canceling)
  ? The setInterval:
    - The setInterval method has the same syntax as setTimeout, but runs the code repeatedly for a number of times of what your choise.
      ex: let timerId = setInterval(() => console.log("tick"), 1000);   > "tick" will be printed to the console every 1 second.
    - ⚠️ if we want to stop the setInterval after some time, we can use setTimeout to start a function called clearInterval() after a delay of the time of our choise,
          for example if I wanted to stop the code above after 5 seconds:
          setTimeout(() => { clearInterval(timerId), console.log("the Interval has been cleared"); }, 5000);

*Other Tips:
  • Prevent form data from being sent:
    when adding an event listener to the onsubmit event on a form, you can 'return false' in the function to prevent the form from sending data,
    thus use that to make a condition to validate the data before submitting or wtvr, if you change it to 'return true' then the data will be sent.
  • A callback function is a function that has been passed into another function.
  •'Error()' is a class that outputs an error it receives, but it also provide on what line the error has happened which is great! 
/
/
/
/
/
TODO: EVERY MISTAKE IS A LESSON, EVEN THE SMALLEST STONE CAN START AN AVALANCHE. IT ONLY TAKES YOU TO START!
! KEEP CODING...
* KEEP LEARNING...
? KEEP PRACTICING...
*/
console.log("Hello", 5648, true, undefined, null);
