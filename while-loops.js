// While Loops - In Depth with All Edge Cases

console.log("=== WHILE LOOPS - Complete Guide ===");

// 1. Basic While Loop
console.log("\n--- Basic While Loop ---");
let i = 0;
while (i < 5) {
    console.log(`Basic while iteration: ${i}`);
    i++;
}

// 2. While Loop with Different Conditions
console.log("\n--- Different Conditions ---");

// Countdown
let countdown = 5;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// While with complex condition
let x = 0;
let y = 10;
while (x < 5 && y > 5) {
    console.log(`x: ${x}, y: ${y}`);
    x++;
    y--;
}

// While with boolean flag
let isRunning = true;
let counter = 0;
while (isRunning) {
    console.log(`Counter: ${counter}`);
    counter++;
    if (counter >= 3) {
        isRunning = false;
    }
}

// 3. Do-While Loop
console.log("\n--- Do-While Loop ---");

// Basic do-while (executes at least once)
let j = 5;
do {
    console.log(`Do-while: ${j}`);
    j++;
} while (j < 5); // Condition is false, but executes once

// Do-while with input validation simulation
let attempts = 0;
let isValid = false;
do {
    attempts++;
    console.log(`Attempt ${attempts}`);
    // Simulate validation
    isValid = attempts >= 3;
} while (!isValid && attempts < 5);

// 4. While Loop with Arrays
console.log("\n--- While Loop with Arrays ---");

const fruits = ['apple', 'banana', 'orange', 'grape'];
let index = 0;

while (index < fruits.length) {
    console.log(`Fruit ${index}: ${fruits[index]}`);
    index++;
}

// While loop with array processing
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numIndex = 0;
let sum = 0;

while (numIndex < numbers.length) {
    sum += numbers[numIndex];
    numIndex++;
}
console.log(`Sum of numbers: ${sum}`);

// 5. While Loop with Objects
console.log("\n--- While Loop with Objects ---");

const person = { name: 'John', age: 30, city: 'New York' };
const keys = Object.keys(person);
let keyIndex = 0;

while (keyIndex < keys.length) {
    const key = keys[keyIndex];
    console.log(`${key}: ${person[key]}`);
    keyIndex++;
}

// 6. Infinite Loop Prevention
console.log("\n--- Infinite Loop Prevention ---");

// Dangerous: infinite loop (commented out)
// let infiniteCounter = 0;
// while (true) {
//     console.log("This would run forever");
//     // Missing break condition
// }

// Safe: with break condition
let safeCounter = 0;
while (true) {
    console.log(`Safe counter: ${safeCounter}`);
    safeCounter++;
    if (safeCounter >= 3) {
        console.log("Breaking out of infinite loop");
        break;
    }
}

// Safe: with timeout
let timeoutCounter = 0;
const startTime = Date.now();
const timeout = 1000; // 1 second

while (Date.now() - startTime < timeout) {
    timeoutCounter++;
    // Simulate some work
}
console.log(`Timeout counter reached: ${timeoutCounter}`);

// 7. While Loop with Break and Continue
console.log("\n--- Break and Continue ---");

// Break example
let breakCounter = 0;
while (breakCounter < 10) {
    if (breakCounter === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log(`Before break: ${breakCounter}`);
    breakCounter++;
}

// Continue example
let continueCounter = 0;
while (continueCounter < 5) {
    continueCounter++;
    if (continueCounter === 3) {
        console.log("Skipping 3");
        continue;
    }
    console.log(`Not skipped: ${continueCounter}`);
}

// 8. Nested While Loops
console.log("\n--- Nested While Loops ---");

// Multiplication table
let row = 1;
while (row <= 3) {
    let col = 1;
    while (col <= 3) {
        console.log(`${row} x ${col} = ${row * col}`);
        col++;
    }
    row++;
}

// Matrix processing
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrixRow = 0;
while (matrixRow < matrix.length) {
    let matrixCol = 0;
    while (matrixCol < matrix[matrixRow].length) {
        console.log(`Matrix[${matrixRow}][${matrixCol}] = ${matrix[matrixRow][matrixCol]}`);
        matrixCol++;
    }
    matrixRow++;
}

// 9. While Loop with Different Data Types
console.log("\n--- Different Data Types ---");

// String processing
const text = "Hello World";
let charIndex = 0;
while (charIndex < text.length) {
    if (text[charIndex] !== ' ') {
        console.log(`Character ${charIndex}: ${text[charIndex]}`);
    }
    charIndex++;
}

// Set processing
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
const setIterator = uniqueNumbers.values();
let setResult = setIterator.next();

while (!setResult.done) {
    console.log(`Set value: ${setResult.value}`);
    setResult = setIterator.next();
}

// 10. While Loop Performance Patterns
console.log("\n--- Performance Patterns ---");

// Efficient: cache length
const largeArray = new Array(1000).fill().map((_, i) => i);
let perfIndex = 0;
const arrayLength = largeArray.length; // Cache length

console.time('Cached length while loop');
while (perfIndex < arrayLength) {
    // Process element
    perfIndex++;
}
console.timeEnd('Cached length while loop');

// Reverse iteration (sometimes faster)
let reverseIndex = largeArray.length - 1;
console.time('Reverse while loop');
while (reverseIndex >= 0) {
    // Process element
    reverseIndex--;
}
console.timeEnd('Reverse while loop');

// 11. While Loop for Searching
console.log("\n--- Searching Patterns ---");

// Linear search
const searchArray = [3, 7, 1, 9, 4, 2, 8];
const target = 9;
let searchIndex = 0;
let found = false;

while (searchIndex < searchArray.length && !found) {
    if (searchArray[searchIndex] === target) {
        found = true;
        console.log(`Found ${target} at index ${searchIndex}`);
    }
    searchIndex++;
}

if (!found) {
    console.log(`${target} not found`);
}

// Binary search (sorted array)
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
let left = 0;
let right = sortedArray.length - 1;
const binaryTarget = 7;
let binaryFound = false;

while (left <= right && !binaryFound) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === binaryTarget) {
        binaryFound = true;
        console.log(`Binary search found ${binaryTarget} at index ${mid}`);
    } else if (sortedArray[mid] < binaryTarget) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

// 12. While Loop with Error Handling
console.log("\n--- Error Handling ---");

function safeWhileLoop(callback, maxIterations = 1000) {
    let iterations = 0;
    let shouldContinue = true;
    
    while (shouldContinue && iterations < maxIterations) {
        try {
            shouldContinue = callback(iterations);
            iterations++;
        } catch (error) {
            console.log(`Error at iteration ${iterations}:`, error.message);
            break;
        }
    }
    
    if (iterations >= maxIterations) {
        console.log(`Loop terminated after ${maxIterations} iterations`);
    }
    
    return iterations;
}

// Example usage
const result = safeWhileLoop((iteration) => {
    if (iteration === 3) {
        throw new Error("Something went wrong");
    }
    console.log(`Safe iteration: ${iteration}`);
    return iteration < 5;
});

console.log(`Total iterations: ${result}`);

// 13. While Loop vs For Loop Comparison
console.log("\n--- While vs For Comparison ---");

// While loop version
console.time('While loop');
let whileSum = 0;
let whileI = 0;
while (whileI < 1000) {
    whileSum += whileI;
    whileI++;
}
console.timeEnd('While loop');

// For loop version
console.time('For loop');
let forSum = 0;
for (let forI = 0; forI < 1000; forI++) {
    forSum += forI;
}
console.timeEnd('For loop');

console.log(`While sum: ${whileSum}, For sum: ${forSum}`);

// 14. Advanced While Loop Patterns
console.log("\n--- Advanced Patterns ---");

// Generator-like pattern
function* numberGenerator() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

const gen = numberGenerator();
let genCounter = 0;
while (genCounter < 5) {
    console.log(`Generated number: ${gen.next().value}`);
    genCounter++;
}

// State machine pattern
const states = ['idle', 'loading', 'success', 'error'];
let currentState = 0;
let stateCounter = 0;

while (stateCounter < 10) {
    console.log(`Current state: ${states[currentState]}`);
    
    // State transition logic
    if (states[currentState] === 'idle') {
        currentState = 1; // loading
    } else if (states[currentState] === 'loading') {
        currentState = Math.random() > 0.5 ? 2 : 3; // success or error
    } else {
        currentState = 0; // back to idle
    }
    
    stateCounter++;
}

// 15. While Loop Edge Cases
console.log("\n--- Edge Cases ---");

// Empty condition (immediate false)
let emptyCount = 0;
while (false) {
    emptyCount++;
    console.log("This will never execute");
}
console.log(`Empty while executed ${emptyCount} times`);

// Condition becomes false during iteration
let dynamicArray = [1, 2, 3, 4, 5];
let dynamicIndex = 0;

while (dynamicIndex < dynamicArray.length) {
    console.log(`Processing: ${dynamicArray[dynamicIndex]}`);
    
    // Modify array during iteration
    if (dynamicArray[dynamicIndex] === 3) {
        dynamicArray.pop(); // Remove last element
        console.log("Array modified, new length:", dynamicArray.length);
    }
    
    dynamicIndex++;
}

// Variable scope in while loops
let outerVar = "outer";
let scopeCounter = 0;

while (scopeCounter < 2) {
    let innerVar = `inner${scopeCounter}`;
    console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    scopeCounter++;
}

// innerVar is not accessible here
// console.log(innerVar); // ReferenceError

console.log("Outer var still accessible:", outerVar);