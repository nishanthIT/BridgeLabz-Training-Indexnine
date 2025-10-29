// Conditional Statements - In Depth with All Edge Cases

console.log("=== CONDITIONAL STATEMENTS - Complete Guide ===");

// 1. Basic If Statement
console.log("\n--- Basic If Statement ---");
const age = 20;

if (age >= 18) {
    console.log("You are an adult");
}

if (age < 18) {
    console.log("You are a minor");
}

// 2. If-Else Statement
console.log("\n--- If-Else Statement ---");
const temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's not too hot");
}

// 3. If-Else If-Else Chain
console.log("\n--- If-Else If-Else Chain ---");
const score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// 4. Truthy and Falsy Values
console.log("\n--- Truthy and Falsy Values ---");

// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

falsyValues.forEach((value, index) => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} (index ${index}) is falsy`);
    }
});

// Truthy values: everything else
const truthyValues = [true, 1, -1, "0", "false", [], {}, function() {}];

truthyValues.forEach((value, index) => {
    if (value) {
        console.log(`${value} (index ${index}) is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});

// 5. Comparison Operators
console.log("\n--- Comparison Operators ---");

// Equality (==) vs Strict Equality (===)
console.log("5 == '5':", 5 == '5');     // true (type coercion)
console.log("5 === '5':", 5 === '5');   // false (no type coercion)
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// Inequality
console.log("5 != '5':", 5 != '5');     // false
console.log("5 !== '5':", 5 !== '5');   // true

// Greater than, less than
console.log("10 > 5:", 10 > 5);         // true
console.log("10 < 5:", 10 < 5);         // false
console.log("10 >= 10:", 10 >= 10);     // true
console.log("10 <= 10:", 10 <= 10);     // true

// String comparison (lexicographical)
console.log("'apple' > 'banana':", 'apple' > 'banana'); // false
console.log("'Apple' > 'apple':", 'Apple' > 'apple');   // false (uppercase comes first)

// 6. Logical Operators
console.log("\n--- Logical Operators ---");

const a = true;
const b = false;
const c = true;

// AND (&&)
console.log("true && true:", a && c);    // true
console.log("true && false:", a && b);   // false
console.log("false && true:", b && a);   // false

// OR (||)
console.log("true || false:", a || b);   // true
console.log("false || false:", b || false); // false

// NOT (!)
console.log("!true:", !a);               // false
console.log("!false:", !b);              // true
console.log("!!true:", !!a);             // true (double negation)

// 7. Short-Circuit Evaluation
console.log("\n--- Short-Circuit Evaluation ---");

// AND short-circuit
const user = { name: "John" };
user && user.name && console.log("User name:", user.name);

// OR short-circuit (default values)
const username = user.name || "Anonymous";
console.log("Username:", username);

const config = null;
const theme = config?.theme || "default";
console.log("Theme:", theme);

// 8. Ternary Operator
console.log("\n--- Ternary Operator ---");

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log("Message:", message);

// Nested ternary (not recommended for readability)
const userRole = "admin";
const permissions = userRole === "admin" ? "full" : 
                   userRole === "user" ? "limited" : "none";
console.log("Permissions:", permissions);

// Ternary with different data types
const count = 5;
const result = count > 0 ? `${count} items` : "No items";
console.log("Result:", result);

// 9. Nullish Coalescing Operator (??)
console.log("\n--- Nullish Coalescing (??) ---");

const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = "";
const value5 = false;

console.log("null ?? 'default':", value1 ?? 'default');       // 'default'
console.log("undefined ?? 'default':", value2 ?? 'default');  // 'default'
console.log("0 ?? 'default':", value3 ?? 'default');          // 0
console.log("'' ?? 'default':", value4 ?? 'default');         // ''
console.log("false ?? 'default':", value5 ?? 'default');      // false

// Difference between || and ??
console.log("0 || 'default':", value3 || 'default');          // 'default'
console.log("0 ?? 'default':", value3 ?? 'default');          // 0

// 10. Optional Chaining (?.)
console.log("\n--- Optional Chaining (?.) ---");

const person = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "New York"
    },
    getName: function() {
        return this.name;
    }
};

const person2 = {
    name: "Bob"
    // No address property
};

// Safe property access
console.log("person.address?.street:", person.address?.street);      // "123 Main St"
console.log("person2.address?.street:", person2.address?.street);    // undefined

// Safe method call
console.log("person.getName?.():", person.getName?.());              // "Alice"
console.log("person.getAge?.():", person.getAge?.());                // undefined

// Safe array access
const numbers = [1, 2, 3];
const emptyArray = null;
console.log("numbers?.[0]:", numbers?.[0]);                          // 1
console.log("emptyArray?.[0]:", emptyArray?.[0]);                    // undefined

// 11. Complex Conditional Logic
console.log("\n--- Complex Conditional Logic ---");

const userAge = 25;
const userCountry = "USA";
const hasLicense = true;

// Complex AND condition
if (userAge >= 18 && userCountry === "USA" && hasLicense) {
    console.log("Can drive in the USA");
}

// Complex OR condition
if (userAge < 16 || userAge > 80 || !hasLicense) {
    console.log("Driving restrictions may apply");
} else {
    console.log("No driving restrictions");
}

// Mixed logical operators
const isWeekend = true;
const isHoliday = false;
const isVacation = false;

if ((isWeekend || isHoliday) && !isVacation) {
    console.log("Free time but not on vacation");
}

// 12. Conditional Assignment Patterns
console.log("\n--- Conditional Assignment Patterns ---");

// Traditional if-else assignment
let status;
if (score >= 70) {
    status = "pass";
} else {
    status = "fail";
}
console.log("Status:", status);

// Ternary assignment
const grade = score >= 70 ? "pass" : "fail";
console.log("Grade:", grade);

// Short-circuit assignment
let defaultName = "";
let inputName = "John";
defaultName = inputName || "Anonymous";
console.log("Default name:", defaultName);

// Nullish assignment (ES2021)
let configValue = null;
configValue ??= "default value";
console.log("Config value:", configValue);

// 13. Conditional Execution Patterns
console.log("\n--- Conditional Execution Patterns ---");

// Execute function conditionally
const debugMode = true;
debugMode && console.log("Debug: Application started");

// Conditional method chaining
const api = {
    data: [1, 2, 3],
    filter: function(fn) {
        this.data = this.data.filter(fn);
        return this;
    },
    map: function(fn) {
        this.data = this.data.map(fn);
        return this;
    }
};

const shouldFilter = true;
const shouldMap = true;

api
    .filter?.(shouldFilter ? x => x > 1 : null)
    ?.map?.(shouldMap ? x => x * 2 : null);

console.log("Processed data:", api.data);

// 14. Error Handling with Conditionals
console.log("\n--- Error Handling with Conditionals ---");

function safeDivide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Both arguments must be numbers";
    }
    
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    
    return a / b;
}

console.log("safeDivide(10, 2):", safeDivide(10, 2));
console.log("safeDivide(10, 0):", safeDivide(10, 0));
console.log("safeDivide('10', 2):", safeDivide('10', 2));

// 15. Performance Considerations
console.log("\n--- Performance Considerations ---");

// Guard clauses (early returns)
function processUser(user) {
    if (!user) {
        console.log("No user provided");
        return;
    }
    
    if (!user.active) {
        console.log("User is not active");
        return;
    }
    
    if (!user.permissions) {
        console.log("User has no permissions");
        return;
    }
    
    console.log("Processing active user with permissions");
}

processUser({ active: true, permissions: ["read"] });
processUser({ active: false });
processUser(null);

// Avoiding redundant conditions
const items = [1, 2, 3, 4, 5];
const threshold = 3;

// Less efficient
let count1 = 0;
for (let i = 0; i < items.length; i++) {
    if (items[i] > threshold) {
        if (items[i] % 2 === 0) {
            count1++;
        }
    }
}

// More efficient
let count2 = 0;
for (let i = 0; i < items.length; i++) {
    if (items[i] > threshold && items[i] % 2 === 0) {
        count2++;
    }
}

console.log("Count1:", count1, "Count2:", count2);

// 16. Common Conditional Pitfalls
console.log("\n--- Common Pitfalls ---");

// Assignment instead of comparison
let x = 5;
if (x = 10) { // Should be x === 10
    console.log("This will always execute because x = 10 returns 10 (truthy)");
}

// Floating point comparison
const float1 = 0.1 + 0.2;
const float2 = 0.3;
console.log("0.1 + 0.2 === 0.3:", float1 === float2); // false!
console.log("Correct way:", Math.abs(float1 - float2) < Number.EPSILON);

// NaN comparison
const notANumber = NaN;
console.log("NaN === NaN:", notANumber === notANumber); // false!
console.log("Correct way:", Number.isNaN(notANumber)); // true