// For Loops - In Depth with All Edge Cases

console.log("=== FOR LOOPS - Complete Guide ===");

// 1. Basic For Loop
console.log("\n--- Basic For Loop ---");
for (let i = 0; i < 5; i++) {
    console.log(`Basic loop iteration: ${i}`);
}

// 2. For Loop with Different Increment Patterns
console.log("\n--- Different Increment Patterns ---");

// Increment by 2
for (let i = 0; i < 10; i += 2) {
    console.log(`Even numbers: ${i}`);
}

// Decrement loop
for (let i = 5; i > 0; i--) {
    console.log(`Countdown: ${i}`);
}

// Multiple variables
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// 3. For Loop with Arrays
console.log("\n--- For Loop with Arrays ---");
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Traditional array iteration
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// Cached length for performance
for (let i = 0, len = fruits.length; i < len; i++) {
    console.log(`Cached length - ${fruits[i]}`);
}

// Reverse iteration
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(`Reverse order: ${fruits[i]}`);
}

// 4. For Loop Edge Cases
console.log("\n--- For Loop Edge Cases ---");

// Empty initialization
let x = 0;
for (; x < 3; x++) {
    console.log(`Empty init: ${x}`);
}

// Empty condition (infinite loop prevention)
for (let i = 0; i < 3; i++) {
    if (i === 2) break;
    console.log(`With break: ${i}`);
}

// Empty increment
let y = 0;
for (; y < 3;) {
    console.log(`Manual increment: ${y}`);
    y++;
}

// Complex conditions
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(`Divisible by 2 and 3: ${i}`);
    }
}

// 5. Nested For Loops
console.log("\n--- Nested For Loops ---");

// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Matrix iteration
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`Matrix[${row}][${col}] = ${matrix[row][col]}`);
    }
}

// 6. For Loop with Objects (using Object methods)
console.log("\n--- For Loop with Objects ---");
const person = { name: 'John', age: 30, city: 'New York' };

// Using Object.keys()
const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${person[keys[i]]}`);
}

// Using Object.entries()
const entries = Object.entries(person);
for (let i = 0; i < entries.length; i++) {
    console.log(`${entries[i][0]}: ${entries[i][1]}`);
}

// 7. For Loop with Break and Continue
console.log("\n--- Break and Continue ---");

// Break example
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log(`Before break: ${i}`);
}

// Continue example
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping 2");
        continue;
    }
    console.log(`Not skipped: ${i}`);
}

// 8. For Loop Performance Considerations
console.log("\n--- Performance Considerations ---");

// Inefficient - length calculated each iteration
const largeArray = new Array(1000).fill(0);
console.time('Inefficient loop');
for (let i = 0; i < largeArray.length; i++) {
    // Do something
}
console.timeEnd('Inefficient loop');

// Efficient - length cached
console.time('Efficient loop');
for (let i = 0, len = largeArray.length; i < len; i++) {
    // Do something
}
console.timeEnd('Efficient loop');

// 9. For Loop with Different Data Types
console.log("\n--- Different Data Types ---");

// String iteration (though for...of is better)
const text = "Hello";
for (let i = 0; i < text.length; i++) {
    console.log(`Character ${i}: ${text[i]}`);
}

// NodeList iteration (if in browser)
// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i]);
// }

// 10. Common For Loop Patterns
console.log("\n--- Common Patterns ---");

// Finding maximum
const numbers = [3, 7, 2, 9, 1, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`Maximum: ${max}`);

// Counting occurrences
const letters = ['a', 'b', 'a', 'c', 'a', 'b'];
const count = {};
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    count[letter] = (count[letter] || 0) + 1;
}
console.log("Letter count:", count);

// Sum calculation
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(`Sum 1-5: ${sum}`);

// 11. For Loop Error Cases
console.log("\n--- Error Cases ---");

// Infinite loop prevention
let counter = 0;
for (let i = 0; i >= 0; i++) {
    counter++;
    if (counter > 5) {
        console.log("Prevented infinite loop");
        break;
    }
    console.log(`Counter: ${counter}`);
}

// Array bounds checking
const smallArray = [1, 2, 3];
for (let i = 0; i <= 5; i++) {
    if (i < smallArray.length) {
        console.log(`Safe access: ${smallArray[i]}`);
    } else {
        console.log(`Out of bounds at index ${i}`);
    }
}