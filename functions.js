// Functions - In Depth with All Edge Cases

console.log("=== FUNCTIONS - Complete Guide ===");

// 1. Function Declaration
console.log("\n--- Function Declaration ---");

// Basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John"));

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log("add(5, 3):", add(5, 3));

// Function with default parameters
function greetWithDefault(name = "Anonymous", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Alice"));
console.log(greetWithDefault("Bob", "Hi"));

// 2. Function Expression
console.log("\n--- Function Expression ---");

// Anonymous function expression
const multiply = function(a, b) {
    return a * b;
};

console.log("multiply(4, 5):", multiply(4, 5));

// Named function expression
const divide = function divideFunction(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

console.log("divide(10, 2):", divide(10, 2));

// 3. Arrow Functions
console.log("\n--- Arrow Functions ---");

// Basic arrow function
const square = (x) => x * x;
console.log("square(4):", square(4));

// Arrow function with multiple parameters
const subtract = (a, b) => a - b;
console.log("subtract(10, 3):", subtract(10, 3));

// Arrow function with block body
const calculateArea = (length, width) => {
    const area = length * width;
    return area;
};

console.log("calculateArea(5, 3):", calculateArea(5, 3));

// Single parameter (parentheses optional)
const double = x => x * 2;
console.log("double(7):", double(7));

// No parameters
const random = () => Math.random();
console.log("random():", random());

// 4. Function Hoisting
console.log("\n--- Function Hoisting ---");

// Function declarations are hoisted
console.log("hoistedFunction():", hoistedFunction()); // Works

function hoistedFunction() {
    return "I'm hoisted!";
}

// Function expressions are not hoisted
try {
    console.log(notHoisted()); // TypeError
} catch (error) {
    console.log("Error:", error.message);
}

var notHoisted = function() {
    return "I'm not hoisted";
};

// 5. Function Parameters Edge Cases
console.log("\n--- Parameter Edge Cases ---");

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));

// Destructuring parameters
function processUser({ name, age, email = "not provided" }) {
    return `Name: ${name}, Age: ${age}, Email: ${email}`;
}

console.log(processUser({ name: "Alice", age: 30 }));

// Array destructuring in parameters
function getFirstTwo([first, second]) {
    return { first, second };
}

console.log(getFirstTwo([1, 2, 3, 4]));

// Mixed parameters
function mixedParams(required, optional = "default", ...rest) {
    return { required, optional, rest };
}

console.log(mixedParams("req", "opt", 1, 2, 3));

// 6. Function Return Values
console.log("\n--- Return Values ---");

// Explicit return
function explicitReturn(x) {
    return x * 2;
}

// Implicit return (undefined)
function implicitReturn(x) {
    x * 2; // No return statement
}

// Early return
function earlyReturn(x) {
    if (x < 0) {
        return "Negative number";
    }
    return x * x;
}

console.log("explicitReturn(5):", explicitReturn(5));
console.log("implicitReturn(5):", implicitReturn(5));
console.log("earlyReturn(-3):", earlyReturn(-3));
console.log("earlyReturn(4):", earlyReturn(4));

// Multiple return types
function flexibleReturn(type) {
    switch (type) {
        case "string": return "Hello";
        case "number": return 42;
        case "array": return [1, 2, 3];
        case "object": return { key: "value" };
        case "function": return () => "I'm a function";
        default: return null;
    }
}

console.log("flexibleReturn('string'):", flexibleReturn('string'));
console.log("flexibleReturn('function')():", flexibleReturn('function')());

// 7. Higher-Order Functions
console.log("\n--- Higher-Order Functions ---");

// Function that takes another function as parameter
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const addOp = (x, y) => x + y;
const multiplyOp = (x, y) => x * y;

console.log("applyOperation(5, 3, addOp):", applyOperation(5, 3, addOp));
console.log("applyOperation(5, 3, multiplyOp):", applyOperation(5, 3, multiplyOp));

// Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double2 = createMultiplier(2);
const triple = createMultiplier(3);

console.log("double2(8):", double2(8));
console.log("triple(5):", triple(5));

// 8. Closures
console.log("\n--- Closures ---");

// Basic closure
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log("addFive(3):", addFive(3));

// Counter closure
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log("counter.increment():", counter.increment());
console.log("counter.increment():", counter.increment());
console.log("counter.getCount():", counter.getCount());
console.log("counter.decrement():", counter.decrement());

// Private variables with closure
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: (amount) => {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
            return "Invalid amount";
        },
        withdraw: (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Invalid amount or insufficient funds";
        },
        getBalance: () => balance
    };
}

const account = createBankAccount(100);
console.log("account.deposit(50):", account.deposit(50));
console.log("account.withdraw(30):", account.withdraw(30));
console.log("account.getBalance():", account.getBalance());

// 9. Immediately Invoked Function Expression (IIFE)
console.log("\n--- IIFE ---");

// Basic IIFE
(function() {
    console.log("IIFE executed immediately");
})();

// IIFE with parameters
(function(name) {
    console.log(`IIFE with parameter: ${name}`);
})("JavaScript");

// IIFE returning value
const iifeResult = (function(a, b) {
    return a + b;
})(5, 3);

console.log("IIFE result:", iifeResult);

// Module pattern with IIFE
const myModule = (function() {
    let privateVar = "I'm private";
    
    return {
        publicMethod: function() {
            return privateVar;
        },
        setPrivateVar: function(value) {
            privateVar = value;
        }
    };
})();

console.log("myModule.publicMethod():", myModule.publicMethod());
myModule.setPrivateVar("Updated value");
console.log("After update:", myModule.publicMethod());

// 10. Function Methods (call, apply, bind)
console.log("\n--- Function Methods ---");

const person = {
    name: "Alice",
    greet: function(greeting, punctuation) {
        return `${greeting}, I'm ${this.name}${punctuation}`;
    }
};

const anotherPerson = { name: "Bob" };

// call method
console.log("call:", person.greet.call(anotherPerson, "Hello", "!"));

// apply method
console.log("apply:", person.greet.apply(anotherPerson, ["Hi", "."]));

// bind method
const boundGreet = person.greet.bind(anotherPerson);
console.log("bind:", boundGreet("Hey", "?"));

// Partial application with bind
const sayHello = person.greet.bind(anotherPerson, "Hello");
console.log("Partial application:", sayHello("!!!"));

// 11. Recursive Functions
console.log("\n--- Recursive Functions ---");

// Factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("factorial(5):", factorial(5));

// Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibonacci(7):", fibonacci(7));

// Tail recursion optimized factorial
function factorialTail(n, accumulator = 1) {
    if (n <= 1) {
        return accumulator;
    }
    return factorialTail(n - 1, n * accumulator);
}

console.log("factorialTail(5):", factorialTail(5));

// 12. Generator Functions
console.log("\n--- Generator Functions ---");

// Basic generator
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = simpleGenerator();
console.log("gen.next():", gen.next());
console.log("gen.next():", gen.next());
console.log("gen.next():", gen.next());
console.log("gen.next():", gen.next());

// Infinite generator
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infinite = infiniteSequence();
console.log("infinite:", infinite.next().value);
console.log("infinite:", infinite.next().value);
console.log("infinite:", infinite.next().value);

// Generator with parameters
function* parameterGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const range = parameterGenerator(5, 8);
for (const value of range) {
    console.log("Range value:", value);
}

// 13. Async Functions
console.log("\n--- Async Functions ---");

// Basic async function
async function asyncExample() {
    return "Async result";
}

// Async function with await
async function fetchData() {
    // Simulating async operation
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched"), 100);
    });
}

async function useAsyncData() {
    try {
        const data = await fetchData();
        console.log("Async data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

useAsyncData();

// 14. Function Edge Cases
console.log("\n--- Edge Cases ---");

// Arguments object (not recommended, use rest parameters)
function oldStyleVariadic() {
    console.log("Arguments length:", arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argument ${i}:`, arguments[i]);
    }
}

oldStyleVariadic(1, "two", true);

// Function length property
console.log("Function length (parameters):", greetWithDefault.length);

// Function name property
console.log("Function name:", greetWithDefault.name);

// Anonymous function name
const anonymous = function() {};
console.log("Anonymous function name:", anonymous.name);

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return `Hi, I'm ${this.name}, ${this.age} years old`;
    };
}

const john = new Person("John", 25);
console.log("Constructor result:", john.introduce());

// Function as object property
const obj = {
    method: function() {
        return "I'm a method";
    },
    arrowMethod: () => {
        return "I'm an arrow method";
    }
};

console.log("Object method:", obj.method());
console.log("Arrow method:", obj.arrowMethod());

// 15. Function Performance and Best Practices
console.log("\n--- Performance and Best Practices ---");

// Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const memoizedFib = memoize(function(n) {
    if (n <= 1) return n;
    return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.time("Memoized fibonacci");
console.log("memoizedFib(30):", memoizedFib(30));
console.timeEnd("Memoized fibonacci");

// Function composition
const compose = (f, g) => (x) => f(g(x));

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;

const addOneThenMultiply = compose(multiplyByTwo, addOne);
console.log("Composed function:", addOneThenMultiply(5));

// Currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...nextArgs) {
            return curried.apply(this, args.concat(nextArgs));
        };
    };
}

const curriedAdd = curry((a, b, c) => a + b + c);
console.log("Curried function:", curriedAdd(1)(2)(3));
console.log("Curried partial:", curriedAdd(1, 2)(3));