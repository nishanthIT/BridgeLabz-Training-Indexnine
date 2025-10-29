// Operators - In Depth with All Edge Cases

console.log("=== OPERATORS - Complete Guide ===");

// 1. Arithmetic Operators
console.log("\n--- Arithmetic Operators ---");

let a = 10;
let b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

// Arithmetic with different types
console.log("\nArithmetic with different types:");
console.log("'5' + 3:", '5' + 3);           // "53" (string concatenation)
console.log("'5' - 3:", '5' - 3);           // 2 (numeric subtraction)
console.log("'5' * 3:", '5' * 3);           // 15 (numeric multiplication)
console.log("'5' / 3:", '5' / 3);           // 1.666... (numeric division)
console.log("true + 1:", true + 1);         // 2
console.log("false + 1:", false + 1);       // 1
console.log("null + 1:", null + 1);         // 1
console.log("undefined + 1:", undefined + 1); // NaN

// Special arithmetic cases
console.log("\nSpecial arithmetic cases:");
console.log("Infinity + 1:", Infinity + 1);
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN
console.log("0 / 0:", 0 / 0);               // NaN
console.log("1 / 0:", 1 / 0);               // Infinity
console.log("-1 / 0:", -1 / 0);             // -Infinity

// 2. Assignment Operators
console.log("\n--- Assignment Operators ---");

let x = 5;
console.log("Initial x:", x);

x += 3;  // x = x + 3
console.log("After x += 3:", x);

x -= 2;  // x = x - 2
console.log("After x -= 2:", x);

x *= 4;  // x = x * 4
console.log("After x *= 4:", x);

x /= 3;  // x = x / 3
console.log("After x /= 3:", x);

x %= 5;  // x = x % 5
console.log("After x %= 5:", x);

x **= 2; // x = x ** 2
console.log("After x **= 2:", x);

// Logical assignment operators (ES2021)
let y = null;
y ||= "default value";  // y = y || "default value"
console.log("Logical OR assignment:", y);

let z = "existing";
z ||= "default";        // Won't change because z is truthy
console.log("Logical OR assignment (no change):", z);

let w = null;
w ??= "nullish default"; // w = w ?? "nullish default"
console.log("Nullish coalescing assignment:", w);

let v = false;
v &&= "new value";      // v = v && "new value"
console.log("Logical AND assignment:", v);

// 3. Comparison Operators
console.log("\n--- Comparison Operators ---");

let num1 = 5;
let num2 = 10;
let str1 = "5";
let str2 = "10";

console.log(`num1 = ${num1}, num2 = ${num2}, str1 = "${str1}", str2 = "${str2}"`);

// Equality operators
console.log("num1 == str1:", num1 == str1);    // true (loose equality, type coercion)
console.log("num1 === str1:", num1 === str1);  // false (strict equality, no coercion)
console.log("num1 != str1:", num1 != str1);    // false
console.log("num1 !== str1:", num1 !== str1);  // true

// Relational operators
console.log("num1 < num2:", num1 < num2);       // true
console.log("num1 > num2:", num1 > num2);       // false
console.log("num1 <= num2:", num1 <= num2);     // true
console.log("num1 >= num2:", num1 >= num2);     // false

// String comparison (lexicographical)
console.log("'apple' < 'banana':", 'apple' < 'banana');  // true
console.log("'Apple' < 'apple':", 'Apple' < 'apple');    // true (uppercase comes first)
console.log("'10' < '2':", '10' < '2');                  // true (string comparison)
console.log("10 < 2:", 10 < 2);                          // false (numeric comparison)

// Special comparison cases
console.log("\nSpecial comparison cases:");
console.log("null == undefined:", null == undefined);     // true
console.log("null === undefined:", null === undefined);   // false
console.log("NaN == NaN:", NaN == NaN);                   // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));     // true (correct way)

// Object comparison (by reference)
let obj1 = { value: 1 };
let obj2 = { value: 1 };
let obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2);               // false (different objects)
console.log("obj1 === obj3:", obj1 === obj3);             // true (same reference)

// 4. Logical Operators
console.log("\n--- Logical Operators ---");

let trueVal = true;
let falseVal = false;

console.log("true && true:", trueVal && trueVal);         // true
console.log("true && false:", trueVal && falseVal);       // false
console.log("false && true:", falseVal && trueVal);       // false
console.log("true || false:", trueVal || falseVal);       // true
console.log("false || false:", falseVal || falseVal);     // false
console.log("!true:", !trueVal);                          // false
console.log("!false:", !falseVal);                        // true

// Short-circuit evaluation
console.log("\nShort-circuit evaluation:");
console.log("false && console.log('not executed')"); // console.log not called
console.log("true || console.log('not executed')");  // console.log not called

let result1 = trueVal && "This will be returned";
let result2 = falseVal && "This won't be returned";
let result3 = falseVal || "This is the default";

console.log("Short-circuit AND result1:", result1);
console.log("Short-circuit AND result2:", result2);
console.log("Short-circuit OR result3:", result3);

// 5. Bitwise Operators
console.log("\n--- Bitwise Operators ---");

let bits1 = 5;  // 101 in binary
let bits2 = 3;  // 011 in binary

console.log(`bits1 = ${bits1} (${bits1.toString(2)}), bits2 = ${bits2} (${bits2.toString(2)})`);

console.log("Bitwise AND (bits1 & bits2):", bits1 & bits2, `(${(bits1 & bits2).toString(2)})`);
console.log("Bitwise OR (bits1 | bits2):", bits1 | bits2, `(${(bits1 | bits2).toString(2)})`);
console.log("Bitwise XOR (bits1 ^ bits2):", bits1 ^ bits2, `(${(bits1 ^ bits2).toString(2)})`);
console.log("Bitwise NOT (~bits1):", ~bits1, `(${(~bits1).toString(2)})`);

// Bit shift operators
console.log("Left shift (bits1 << 1):", bits1 << 1, `(${(bits1 << 1).toString(2)})`);
console.log("Right shift (bits1 >> 1):", bits1 >> 1, `(${(bits1 >> 1).toString(2)})`);
console.log("Zero-fill right shift (bits1 >>> 1):", bits1 >>> 1);

// Practical bitwise examples
console.log("\nPractical bitwise examples:");
console.log("Check if number is even (x & 1 === 0):", (8 & 1) === 0);
console.log("Check if number is odd (x & 1 === 1):", (7 & 1) === 1);
console.log("Multiply by 2 (x << 1):", 5 << 1);
console.log("Divide by 2 (x >> 1):", 10 >> 1);

// 6. Unary Operators
console.log("\n--- Unary Operators ---");

let unaryNum = 5;
let unaryStr = "10";

// Unary plus (converts to number)
console.log("+unaryStr:", +unaryStr, typeof +unaryStr);
console.log("+true:", +true);
console.log("+false:", +false);
console.log("+null:", +null);
console.log("+undefined:", +undefined);

// Unary minus
console.log("-unaryNum:", -unaryNum);
console.log("-unaryStr:", -unaryStr);

// Increment/Decrement
let preInc = 5;
let postInc = 5;

console.log("Pre-increment (++preInc):", ++preInc, "preInc is now:", preInc);

postInc = 5; // Reset
console.log("Post-increment (postInc++):", postInc++, "postInc is now:", postInc);

let preDec = 5;
let postDec = 5;

console.log("Pre-decrement (--preDec):", --preDec, "preDec is now:", preDec);

postDec = 5; // Reset
console.log("Post-decrement (postDec--):", postDec--, "postDec is now:", postDec);

// typeof operator
console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);  // "object" (JavaScript quirk)
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function() {}:", typeof function() {});

// delete operator
let deleteObj = { prop1: "value1", prop2: "value2" };
console.log("Before delete:", deleteObj);
delete deleteObj.prop1;
console.log("After delete prop1:", deleteObj);

// 7. Ternary (Conditional) Operator
console.log("\n--- Ternary Operator ---");

let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log("Status:", status);

// Nested ternary (not recommended for readability)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade);

// Ternary with expressions
let isLoggedIn = true;
let message = isLoggedIn ? `Welcome back!` : `Please log in`;
console.log("Message:", message);

// 8. String Operators
console.log("\n--- String Operators ---");

let firstName = "John";
let lastName = "Doe";

// Concatenation with +
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Concatenation with +=
let greeting = "Hello, ";
greeting += firstName;
console.log("Greeting:", greeting);

// Template literals (preferred for complex strings)
let templateGreeting = `Hello, ${firstName} ${lastName}!`;
console.log("Template greeting:", templateGreeting);

// 9. instanceof and in Operators
console.log("\n--- instanceof and in Operators ---");

// instanceof operator
let arr = [1, 2, 3];
let date = new Date();
let regex = /pattern/;

console.log("arr instanceof Array:", arr instanceof Array);
console.log("date instanceof Date:", date instanceof Date);
console.log("regex instanceof RegExp:", regex instanceof RegExp);
console.log("arr instanceof Object:", arr instanceof Object); // true (Array extends Object)

// in operator
let person = { name: "Alice", age: 30 };
console.log("'name' in person:", 'name' in person);
console.log("'height' in person:", 'height' in person);
console.log("'toString' in person:", 'toString' in person); // inherited property

// 10. Nullish Coalescing Operator (??)
console.log("\n--- Nullish Coalescing Operator (??) ---");

let nullValue = null;
let undefinedValue = undefined;
let zeroValue = 0;
let emptyString = "";
let falseValue = false;

console.log("null ?? 'default':", nullValue ?? 'default');
console.log("undefined ?? 'default':", undefinedValue ?? 'default');
console.log("0 ?? 'default':", zeroValue ?? 'default');
console.log("'' ?? 'default':", emptyString ?? 'default');
console.log("false ?? 'default':", falseValue ?? 'default');

// Difference between || and ??
console.log("\nDifference between || and ??:");
console.log("0 || 'default':", zeroValue || 'default');
console.log("0 ?? 'default':", zeroValue ?? 'default');
console.log("'' || 'default':", emptyString || 'default');
console.log("'' ?? 'default':", emptyString ?? 'default');

// 11. Optional Chaining Operator (?.)
console.log("\n--- Optional Chaining Operator (?.) ---");

let user = {
    name: "Bob",
    address: {
        street: "123 Main St",
        city: "New York"
    },
    getName: function() {
        return this.name;
    }
};

let user2 = { name: "Charlie" }; // No address

// Safe property access
console.log("user.address?.street:", user.address?.street);
console.log("user2.address?.street:", user2.address?.street);

// Safe method calling
console.log("user.getName?.():", user.getName?.());
console.log("user.getAge?.():", user.getAge?.());

// Safe bracket notation
console.log("user['address']?['street']:", user['address']?.['street']);

// With arrays
let users = [{ name: "Dave" }, null, { name: "Eve" }];
console.log("users[1]?.name:", users[1]?.name);
console.log("users[2]?.name:", users[2]?.name);

// 12. Operator Precedence
console.log("\n--- Operator Precedence ---");

// Demonstrates order of operations
console.log("2 + 3 * 4:", 2 + 3 * 4);           // 14, not 20
console.log("(2 + 3) * 4:", (2 + 3) * 4);       // 20
console.log("2 ** 3 ** 2:", 2 ** 3 ** 2);       // 512 (right-associative)
console.log("(2 ** 3) ** 2:", (2 ** 3) ** 2);   // 64
console.log("true || false && false:", true || false && false); // true
console.log("(true || false) && false:", (true || false) && false); // false

// Assignment vs comparison
let assignmentTest = 5;
console.log("Assignment in condition (assignmentTest = 10):", assignmentTest = 10); // 10 (truthy)
console.log("assignmentTest is now:", assignmentTest);

// 13. Type Coercion in Operators
console.log("\n--- Type Coercion ---");

console.log("'3' + 2:", '3' + 2);           // "32" (string concatenation)
console.log("'3' - 2:", '3' - 2);           // 1 (numeric subtraction)
console.log("'3' * 2:", '3' * 2);           // 6 (numeric multiplication)
console.log("'3' / 2:", '3' / 2);           // 1.5 (numeric division)

console.log("true + true:", true + true);   // 2
console.log("true + false:", true + false); // 1
console.log("'5' - true:", '5' - true);     // 4
console.log("'5' * null:", '5' * null);     // 0

// Arrays and objects in arithmetic
console.log("[1,2] + [3,4]:", [1,2] + [3,4]);     // "1,23,4"
console.log("{} + []:", {} + []);                  // 0 (in some contexts)
console.log("[] + {}:", [] + {});                  // "[object Object]"

// 14. Common Operator Mistakes
console.log("\n--- Common Mistakes ---");

// Mistake 1: Assignment instead of comparison
let mistakeVar = 5;
if (mistakeVar = 10) { // Should be ===
    console.log("Assignment mistake: this always executes");
}

// Mistake 2: Floating point precision
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("Correct comparison:", Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);

// Mistake 3: NaN comparisons
console.log("NaN === NaN:", NaN === NaN);           // false
console.log("NaN == NaN:", NaN == NaN);             // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (correct way)

// Mistake 4: Truthy/Falsy confusion
let emptyArray = [];
console.log("Boolean([]):", Boolean(emptyArray));   // true (arrays are truthy)
console.log("[].length === 0:", emptyArray.length === 0); // true (but array is empty)

// 15. Performance Considerations
console.log("\n--- Performance Tips ---");

// Prefer strict equality
console.time("Strict equality");
for (let i = 0; i < 100000; i++) {
    let result = 5 === 5;
}
console.timeEnd("Strict equality");

console.time("Loose equality");
for (let i = 0; i < 100000; i++) {
    let result = 5 == "5";
}
console.timeEnd("Loose equality");

// Cache object property access
let perfObj = { property: "value" };

console.time("Direct property access");
for (let i = 0; i < 100000; i++) {
    let temp = perfObj.property;
}
console.timeEnd("Direct property access");

console.time("Cached property access");
let cachedProperty = perfObj.property;
for (let i = 0; i < 100000; i++) {
    let temp = cachedProperty;
}
console.timeEnd("Cached property access");

console.log("Operators guide completed!");