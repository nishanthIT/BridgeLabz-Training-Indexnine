// Variables - In Depth with All Edge Cases

console.log("=== VARIABLES - Complete Guide ===");

// 1. Variable Declaration Methods
console.log("\n--- Variable Declaration Methods ---");

// var declaration
var varVariable = "I'm declared with var";
console.log("var variable:", varVariable);

// let declaration
let letVariable = "I'm declared with let";
console.log("let variable:", letVariable);

// const declaration
const constVariable = "I'm declared with const";
console.log("const variable:", constVariable);

// 2. Hoisting Behavior
console.log("\n--- Hoisting Behavior ---");

// var hoisting
console.log("varHoisted before declaration:", varHoisted); // undefined
var varHoisted = "Now I have a value";
console.log("varHoisted after declaration:", varHoisted);

// let/const hoisting (Temporal Dead Zone)
try {
    console.log(letHoisted); // ReferenceError
} catch (error) {
    console.log("let TDZ error:", error.message);
}

let letHoisted = "let value";

try {
    console.log(constHoisted); // ReferenceError
} catch (error) {
    console.log("const TDZ error:", error.message);
}

const constHoisted = "const value";

// 3. Scope Differences
console.log("\n--- Scope Differences ---");

// Function scope vs Block scope
function scopeExample() {
    if (true) {
        var functionScoped = "accessible outside block";
        let blockScoped = "only accessible in block";
        const alsoBlockScoped = "also only in block";
    }
    
    console.log("functionScoped:", functionScoped); // Works
    
    try {
        console.log("blockScoped:", blockScoped); // ReferenceError
    } catch (error) {
        console.log("Block scope error:", error.message);
    }
}

scopeExample();

// Global scope
var globalVar = "I'm global with var";
let globalLet = "I'm global with let";
const globalConst = "I'm global with const";

// In browser: window.globalVar exists, but not window.globalLet or window.globalConst
console.log("Global variables declared");

// 4. Re-declaration and Re-assignment
console.log("\n--- Re-declaration and Re-assignment ---");

// var allows re-declaration
var redeclareVar = "first value";
var redeclareVar = "second value"; // No error
console.log("redeclared var:", redeclareVar);

// let doesn't allow re-declaration in same scope
let redeclareLet = "first value";
try {
    // let redeclareLet = "second value"; // SyntaxError (commented to avoid error)
    console.log("let re-declaration would cause SyntaxError");
} catch (error) {
    console.log("let re-declaration error:", error.message);
}

// let allows re-assignment
redeclareLet = "new value for let";
console.log("reassigned let:", redeclareLet);

// const doesn't allow re-assignment
const noReassign = "original value";
try {
    // noReassign = "new value"; // TypeError (commented to avoid error)
    console.log("const re-assignment would cause TypeError");
} catch (error) {
    console.log("const re-assignment error:", error.message);
}

// 5. const with Objects and Arrays
console.log("\n--- const with Reference Types ---");

// const with object (object properties can be modified)
const constObject = { name: "John", age: 30 };
console.log("Original object:", constObject);

constObject.age = 31; // This works
constObject.city = "New York"; // This works
console.log("Modified object:", constObject);

try {
    // constObject = {}; // TypeError (commented to avoid error)
    console.log("Reassigning const object would cause TypeError");
} catch (error) {
    console.log("Object reassignment error:", error.message);
}

// const with array
const constArray = [1, 2, 3];
console.log("Original array:", constArray);

constArray.push(4); // This works
constArray[0] = 10; // This works
console.log("Modified array:", constArray);

// Object.freeze() for true immutability
const frozenObject = Object.freeze({ name: "Alice", age: 25 });
frozenObject.age = 26; // Silently fails in non-strict mode
console.log("Frozen object (age should still be 25):", frozenObject);

// 6. Variable Naming Rules and Conventions
console.log("\n--- Naming Rules and Conventions ---");

// Valid variable names
let validName = "valid";
let _underscore = "valid";
let $dollar = "valid";
let camelCase = "preferred convention";
let PascalCase = "for constructors/classes";
let SCREAMING_SNAKE_CASE = "for constants";

// Unicode characters (valid but not recommended)
let π = 3.14159;
let 你好 = "hello in Chinese";

console.log("π:", π);
console.log("Unicode variable:", 你好);

// Invalid names (commented to avoid syntax errors)
// let 123invalid = "starts with number"; // SyntaxError
// let invalid-name = "contains hyphen"; // SyntaxError
// let class = "reserved keyword"; // SyntaxError

// 7. Variable Types and typeof
console.log("\n--- Variable Types ---");

let stringVar = "Hello";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
let nullVar = null;
let objectVar = {};
let arrayVar = [];
let functionVar = function() {};
let symbolVar = Symbol("symbol");
let bigintVar = 123n;

console.log("typeof string:", typeof stringVar);
console.log("typeof number:", typeof numberVar);
console.log("typeof boolean:", typeof booleanVar);
console.log("typeof undefined:", typeof undefinedVar);
console.log("typeof null:", typeof nullVar); // "object" (famous JavaScript quirk)
console.log("typeof object:", typeof objectVar);
console.log("typeof array:", typeof arrayVar); // "object"
console.log("typeof function:", typeof functionVar);
console.log("typeof symbol:", typeof symbolVar);
console.log("typeof bigint:", typeof bigintVar);

// More precise type checking
console.log("Array.isArray(arrayVar):", Array.isArray(arrayVar));
console.log("nullVar === null:", nullVar === null);

// 8. Variable Initialization
console.log("\n--- Variable Initialization ---");

// Implicit undefined
let implicitUndefined;
console.log("implicitUndefined:", implicitUndefined);

// Explicit initialization
let explicitNull = null;
let explicitUndefined = undefined;
let explicitZero = 0;
let explicitEmptyString = "";
let explicitFalse = false;

console.log("explicitNull:", explicitNull);
console.log("explicitUndefined:", explicitUndefined);
console.log("explicitZero:", explicitZero);
console.log("explicitEmptyString:", `"${explicitEmptyString}"`);
console.log("explicitFalse:", explicitFalse);

// 9. Multiple Variable Declaration
console.log("\n--- Multiple Declaration ---");

// Multiple var declarations
var a = 1, b = 2, c = 3;
console.log("Multiple var:", a, b, c);

// Multiple let declarations
let x = 10, y = 20, z = 30;
console.log("Multiple let:", x, y, z);

// Multiple const declarations
const PI = 3.14159, E = 2.71828, GOLDEN_RATIO = 1.618;
console.log("Multiple const:", PI, E, GOLDEN_RATIO);

// Destructuring assignment
let [first, second, third] = [1, 2, 3];
console.log("Destructured array:", first, second, third);

let {name, age} = {name: "Bob", age: 25, city: "NYC"};
console.log("Destructured object:", name, age);

// 10. Variable Shadowing
console.log("\n--- Variable Shadowing ---");

let shadowVar = "outer scope";

function shadowExample() {
    console.log("Before inner declaration:", shadowVar);
    
    let shadowVar = "inner scope"; // Shadows outer variable
    console.log("After inner declaration:", shadowVar);
}

shadowExample();
console.log("Outside function:", shadowVar);

// Block scope shadowing
let blockShadow = "outer";
{
    let blockShadow = "inner block";
    console.log("Inside block:", blockShadow);
}
console.log("Outside block:", blockShadow);

// 11. Variable Lifecycle
console.log("\n--- Variable Lifecycle ---");

// Creation phase (hoisting)
console.log("Lifecycle example starting");

function lifecycleExample() {
    // All var declarations are hoisted to here (with undefined value)
    console.log("var1 (hoisted):", var1); // undefined
    console.log("var2 (hoisted):", var2); // undefined
    
    var var1 = "first";
    console.log("var1 after assignment:", var1);
    
    if (true) {
        var var2 = "second"; // Still function-scoped
        let blockVar = "block scoped";
        console.log("Inside block - var2:", var2);
        console.log("Inside block - blockVar:", blockVar);
    }
    
    console.log("var2 outside block:", var2); // Still accessible
    // blockVar is not accessible here
}

lifecycleExample();

// 12. Global Variables and Window Object
console.log("\n--- Global Variables ---");

// In browser environment:
// var creates property on window object
// let and const do not

// Implicit global (avoid this!)
function createImplicitGlobal() {
    implicitGlobal = "I'm accidentally global!";
}

createImplicitGlobal();
console.log("Implicit global:", implicitGlobal);

// 13. Variable Performance Considerations
console.log("\n--- Performance Considerations ---");

// Local variable access is faster than property access
const obj = { property: "value" };

console.time("Property access");
for (let i = 0; i < 100000; i++) {
    let temp = obj.property;
}
console.timeEnd("Property access");

console.time("Local variable access");
const localProperty = obj.property;
for (let i = 0; i < 100000; i++) {
    let temp = localProperty;
}
console.timeEnd("Local variable access");

// 14. Memory Management
console.log("\n--- Memory Management ---");

// Variables hold references to objects
let obj1 = { data: "large object" };
let obj2 = obj1; // Same reference

obj1 = null; // obj1 no longer references the object
// Object still exists because obj2 references it

obj2 = null; // Now object can be garbage collected

// Circular references (modern JS engines handle this)
function createCircularReference() {
    let objA = {};
    let objB = {};
    objA.ref = objB;
    objB.ref = objA;
    
    // Even if we return nothing, modern engines will clean this up
    return null;
}

createCircularReference();

// 15. Best Practices
console.log("\n--- Best Practices ---");

// 1. Use const by default
const defaultChoice = "Use const when value won't change";

// 2. Use let when you need to reassign
let counter = 0;
counter++; // Reassignment needed

// 3. Avoid var in modern JavaScript
// var hasProblems = "function scoped, hoisted, can be redeclared";

// 4. Use descriptive names
const MAX_RETRY_ATTEMPTS = 3;
const userAccountBalance = 1000;
const isEmailValid = true;

// 5. Initialize variables when possible
const currentDate = new Date();
const userPreferences = {
    theme: "dark",
    language: "en"
};

// 6. Group related declarations
const API_BASE_URL = "https://api.example.com";
const API_TIMEOUT = 5000;
const API_RETRY_DELAY = 1000;

console.log("Best practices demonstrated");

// 16. Common Pitfalls
console.log("\n--- Common Pitfalls ---");

// Pitfall 1: Loop variable closure
console.log("Loop closure pitfall:");
var functionsArray = [];

// Wrong way (var)
for (var i = 0; i < 3; i++) {
    functionsArray[i] = function() {
        return i; // Will always return 3
    };
}

console.log("Wrong way results:");
functionsArray.forEach((fn, index) => {
    console.log(`Function ${index} returns:`, fn());
});

// Right way (let)
var correctFunctionsArray = [];
for (let j = 0; j < 3; j++) {
    correctFunctionsArray[j] = function() {
        return j; // Will return correct value
    };
}

console.log("Correct way results:");
correctFunctionsArray.forEach((fn, index) => {
    console.log(`Function ${index} returns:`, fn());
});

// Pitfall 2: Accidental globals
function avoidAccidentalGlobals() {
    "use strict"; // Prevents accidental globals
    // accidentalGlobal = "This would throw an error in strict mode";
    let properLocal = "This is properly declared";
    console.log("Properly declared local variable:", properLocal);
}

avoidAccidentalGlobals();

console.log("Variables guide completed!");