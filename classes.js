// Classes in JavaScript - In Depth

console.log("=== CLASSES - Complete Guide ===");

// 1. Basic Class Declaration

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Instance method
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect1 = new Rectangle(10, 5);
console.log("Rectangle area:", rect1.area());
console.log("Rectangle perimeter:", rect1.perimeter());

// 2. Class Expression

const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
};

const circle1 = new Circle(5);
console.log("Circle area:", circle1.area());

// Named class expression
const Triangle = class TriangleClass {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    
    area() {
        return 0.5 * this.base * this.height;
    }
};

const triangle1 = new Triangle(10, 8);
console.log("Triangle area:", triangle1.area());

// 3. Constructor Details

class Person {
    constructor(name, age = 0) {
        // Validation
        if (!name) {
            throw new Error("Name is required");
        }
        
        this.name = name;
        this.age = age;
        this.id = Math.random().toString(36).substr(2, 9);
        
        // Call method during construction
        this.greet();
    }
    
    greet() {
        console.log(`Person ${this.name} created with ID: ${this.id}`);
    }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob"); // Uses default age

// 4. Instance Methods

class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
    }
    
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive");
        }
        this.balance += amount;
        this.transactions.push({ type: "deposit", amount, date: new Date() });
        return this.balance;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        this.transactions.push({ type: "withdraw", amount, date: new Date() });
        return this.balance;
    }
    
    getBalance() {
        return this.balance;
    }
    
    getStatement() {
        return this.transactions.slice(-5); // Last 5 transactions
    }
}

const account1 = new BankAccount("ACC001", 1000);
console.log("Initial balance:", account1.getBalance());
account1.deposit(500);
console.log("After deposit:", account1.getBalance());
account1.withdraw(200);
console.log("After withdrawal:", account1.getBalance());

// 5. Static Methods and Properties

class MathUtils {
    static PI = 3.14159;
    static E = 2.71828;
    
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
    
    static randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

console.log("Static method add:", MathUtils.add(5, 3));
console.log("Static property PI:", MathUtils.PI);
console.log("Circle area with static:", MathUtils.circleArea(5));
console.log("Random number:", MathUtils.randomBetween(1, 10));

// 6. Getters and Setters

class Temperature {
    constructor(celsius = 0) {
        this._celsius = celsius;
    }
    
    // Getter
    get celsius() {
        return this._celsius;
    }
    
    // Setter
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature cannot be below absolute zero");
        }
        this._celsius = value;
    }
    
    // Computed property
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    }
    
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
    
    get kelvin() {
        return this._celsius + 273.15;
    }
    
    set kelvin(value) {
        this.celsius = value - 273.15; // Uses the setter for validation
    }
}

const temp = new Temperature(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);
console.log("Kelvin:", temp.kelvin);

temp.fahrenheit = 86;
console.log("After setting Fahrenheit to 86:");
console.log("Celsius:", temp.celsius);

// 7. Private Fields (ES2022)

class Counter {
    #count = 0;
    #maxCount;
    
    constructor(maxCount = 100) {
        this.#maxCount = maxCount;
    }
    
    increment() {
        if (this.#count < this.#maxCount) {
            this.#count++;
        } else {
            throw new Error("Maximum count reached");
        }
        return this.#count;
    }
    
    decrement() {
        if (this.#count > 0) {
            this.#count--;
        }
        return this.#count;
    }
    
    get count() {
        return this.#count;
    }
    
    // Private method
    #reset() {
        this.#count = 0;
    }
    
    resetCounter() {
        this.#reset();
        return this.#count;
    }
}

const counter = new Counter(5);
console.log("Initial count:", counter.count);
counter.increment();
counter.increment();
console.log("After increments:", counter.count);

// 8. Class Fields (ES2022)
console.log("\n--- Class Fields ---");

class User {
    // Public fields
    name = "Unknown";
    email = "";
    
    // Private fields
    #password = "";
    #loginAttempts = 0;
    
    // Static fields
    static maxLoginAttempts = 3;
    static users = [];
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
        User.users.push(this);
    }
    
    login(password) {
        if (this.#loginAttempts >= User.maxLoginAttempts) {
            throw new Error("Account locked");
        }
        
        if (this.#password === password) {
            this.#loginAttempts = 0;
            return "Login successful";
        } else {
            this.#loginAttempts++;
            return `Login failed. ${User.maxLoginAttempts - this.#loginAttempts} attempts remaining`;
        }
    }
    
    static getUserCount() {
        return User.users.length;
    }
}

const user1 = new User("Alice", "alice@example.com", "secret123");
const user2 = new User("Bob", "bob@example.com", "password456");

console.log("Login result:", user1.login("secret123"));
console.log("Total users:", User.getUserCount());

// 9. Method Chaining

class StringBuilder {
    constructor() {
        this.content = "";
    }
    
    append(text) {
        this.content += text;
        return this; // Return this for chaining
    }
    
    prepend(text) {
        this.content = text + this.content;
        return this;
    }
    
    toUpperCase() {
        this.content = this.content.toUpperCase();
        return this;
    }
    
    toLowerCase() {
        this.content = this.content.toLowerCase();
        return this;
    }
    
    reverse() {
        this.content = this.content.split('').reverse().join('');
        return this;
    }
    
    toString() {
        return this.content;
    }
}

const result = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World")
    .toUpperCase()
    .prepend(">>> ")
    .toString();

console.log("Method chaining result:", result);

// 10. Class Validation and Error Handling

class Email {
    constructor(address) {
        this.setAddress(address);
    }
    
    setAddress(address) {
        if (!this.isValid(address)) {
            throw new Error("Invalid email address");
        }
        this.address = address;
    }
    
    isValid(address) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(address);
    }
    
    getDomain() {
        return this.address.split('@')[1];
    }
    
    getLocalPart() {
        return this.address.split('@')[0];
    }
}

try {
    const email1 = new Email("user@example.com");
    console.log("Valid email domain:", email1.getDomain());
    
    const email2 = new Email("invalid-email");
} catch (error) {
    console.log("Email validation error:", error.message);
}

