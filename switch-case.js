// Switch Case - In Depth with All Edge Cases

console.log("=== SWITCH CASE - Complete Guide ===");

// 1. Basic Switch Statement
console.log("\n--- Basic Switch Statement ---");
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
        console.log("Tuesday blues");
        break;
    case "Wednesday":
        console.log("Hump day");
        break;
    case "Thursday":
        console.log("Almost there");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

// 2. Switch with Different Data Types
console.log("\n--- Different Data Types ---");

// Number switch
const grade = 85;
switch (true) {
    case grade >= 90:
        console.log("A grade");
        break;
    case grade >= 80:
        console.log("B grade");
        break;
    case grade >= 70:
        console.log("C grade");
        break;
    case grade >= 60:
        console.log("D grade");
        break;
    default:
        console.log("F grade");
}

// Boolean switch
const isLoggedIn = true;
switch (isLoggedIn) {
    case true:
        console.log("User is logged in");
        break;
    case false:
        console.log("User is not logged in");
        break;
    default:
        console.log("Invalid login status");
}

// 3. Switch without Break (Fall-through)
console.log("\n--- Fall-through Cases ---");
const fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple selected");
        // No break - falls through
    case "orange":
        console.log("Citrus family or apple");
        break;
    case "banana":
        console.log("Yellow fruit");
        break;
    default:
        console.log("Unknown fruit");
}

// Intentional fall-through for grouping
const month = "December";
switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter season");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring season");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer season");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall season");
        break;
    default:
        console.log("Invalid month");
}

// 4. Switch with Expressions
console.log("\n--- Switch with Expressions ---");
const operation = "+";
const a = 10;
const b = 5;
let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Cannot divide by zero";
        break;
    case "%":
        result = a % b;
        break;
    case "**":
        result = a ** b;
        break;
    default:
        result = "Invalid operation";
}
console.log(`${a} ${operation} ${b} = ${result}`);

// 5. Switch with Functions
console.log("\n--- Switch with Functions ---");
function processAction(action, data) {
    switch (action) {
        case "create":
            return `Creating: ${data}`;
        case "read":
            return `Reading: ${data}`;
        case "update":
            return `Updating: ${data}`;
        case "delete":
            return `Deleting: ${data}`;
        default:
            return `Unknown action: ${action}`;
    }
}

console.log(processAction("create", "user"));
console.log(processAction("invalid", "data"));

// 6. Switch Edge Cases
console.log("\n--- Edge Cases ---");

// Strict equality (===) comparison
const value = 1;
switch (value) {
    case "1":
        console.log("String 1");
        break;
    case 1:
        console.log("Number 1"); // This will match
        break;
    default:
        console.log("No match");
}

// Null and undefined cases
const nullValue = null;
switch (nullValue) {
    case null:
        console.log("Null value");
        break;
    case undefined:
        console.log("Undefined value");
        break;
    default:
        console.log("Other value");
}

// Object comparison (by reference)
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

switch (obj1) {
    case obj2:
        console.log("obj2 match"); // Won't match
        break;
    case obj3:
        console.log("obj3 match"); // Will match
        break;
    default:
        console.log("No object match");
}

// 7. Switch with Complex Conditions
console.log("\n--- Complex Conditions ---");
const user = { role: "admin", status: "active" };

switch (true) {
    case user.role === "admin" && user.status === "active":
        console.log("Active admin user");
        break;
    case user.role === "admin" && user.status === "inactive":
        console.log("Inactive admin user");
        break;
    case user.role === "user" && user.status === "active":
        console.log("Active regular user");
        break;
    default:
        console.log("Unknown user type");
}

// 8. Switch with Return Statements
console.log("\n--- Switch with Return ---");
function getDayType(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

console.log(`Monday is a: ${getDayType("Monday")}`);
console.log(`Saturday is a: ${getDayType("Saturday")}`);

// 9. Switch vs If-Else Performance
console.log("\n--- Performance Comparison ---");

// Switch version
function switchGrade(score) {
    switch (true) {
        case score >= 90: return "A";
        case score >= 80: return "B";
        case score >= 70: return "C";
        case score >= 60: return "D";
        default: return "F";
    }
}

// If-else version
function ifElseGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log("Switch grade:", switchGrade(85));
console.log("If-else grade:", ifElseGrade(85));

// 10. Switch with Block Scope
console.log("\n--- Block Scope in Cases ---");
const testValue = "case1";

switch (testValue) {
    case "case1": {
        const localVar = "I'm in case1 block";
        console.log(localVar);
        break;
    }
    case "case2": {
        const localVar = "I'm in case2 block"; // Same name, different scope
        console.log(localVar);
        break;
    }
    default: {
        const localVar = "I'm in default block";
        console.log(localVar);
    }
}

// 11. Switch with Error Handling
console.log("\n--- Error Handling ---");
function safeSwitch(value) {
    try {
        switch (value) {
            case "error":
                throw new Error("Intentional error");
            case "valid":
                return "Valid case";
            default:
                return "Default case";
        }
    } catch (error) {
        console.log("Caught error:", error.message);
        return "Error handled";
    }
}

console.log(safeSwitch("valid"));
console.log(safeSwitch("error"));

// 12. Modern Switch Alternatives (ES2020+)
console.log("\n--- Modern Alternatives ---");

// Object lookup pattern
const dayActions = {
    "Monday": () => "Start of work week",
    "Tuesday": () => "Tuesday blues",
    "Wednesday": () => "Hump day",
    "Thursday": () => "Almost there",
    "Friday": () => "TGIF!",
    "Saturday": () => "Weekend!",
    "Sunday": () => "Weekend!"
};

const currentDay = "Friday";
const action = dayActions[currentDay] || (() => "Invalid day");
console.log("Object lookup:", action());

// Map-based approach
const gradeMap = new Map([
    [90, "A"],
    [80, "B"],
    [70, "C"],
    [60, "D"]
]);

function getGrade(score) {
    for (const [threshold, grade] of gradeMap) {
        if (score >= threshold) return grade;
    }
    return "F";
}

console.log("Map-based grade:", getGrade(85));

// 13. Switch Statement Best Practices
console.log("\n--- Best Practices Example ---");

// Good: Consistent return pattern
function getStatusMessage(status) {
    switch (status) {
        case "pending":
            return "Request is being processed";
        case "approved":
            return "Request has been approved";
        case "rejected":
            return "Request has been rejected";
        case "cancelled":
            return "Request has been cancelled";
        default:
            throw new Error(`Unknown status: ${status}`);
    }
}

console.log("Status message:", getStatusMessage("approved"));

// Handle all enum values
const UserRole = {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest"
};

function getPermissions(role) {
    switch (role) {
        case UserRole.ADMIN:
            return ["read", "write", "delete", "admin"];
        case UserRole.USER:
            return ["read", "write"];
        case UserRole.GUEST:
            return ["read"];
        default:
            // This ensures we handle all possible enum values
            const validRoles = Object.values(UserRole).join(", ");
            throw new Error(`Invalid role: ${role}. Valid roles: ${validRoles}`);
    }
}

console.log("Admin permissions:", getPermissions(UserRole.ADMIN));
console.log("User permissions:", getPermissions(UserRole.USER));