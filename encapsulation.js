// Encapsulation in JavaScript - Complete Guide

// 1. Basic Encapsulation with Conventions

class BankAccount {
    constructor(accountNumber, initialBalance) {
        // Convention: underscore prefix indicates "private"
        this._accountNumber = accountNumber;
        this._balance = initialBalance;
        this._transactionHistory = [];
    }
    
    // Public methods (interface)
    deposit(amount) {
        if (this._isValidAmount(amount)) {
            this._balance += amount;
            this._logTransaction('deposit', amount);
            return true;
        }
        return false;
    }
    
    withdraw(amount) {
        if (this._isValidAmount(amount) && amount <= this._balance) {
            this._balance -= amount;
            this._logTransaction('withdraw', amount);
            return true;
        }
        return false;
    }
    
    getBalance() {
        return this._balance;
    }
    
    getAccountNumber() {
        // Return masked account number for security
        return this._maskAccountNumber();
    }
    
    getTransactionHistory() {
        // Return copy to prevent external modification
        return [...this._transactionHistory];
    }
    
    // "Private" methods (by convention)
    _isValidAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }
    
    _logTransaction(type, amount) {
        this._transactionHistory.push({
            type,
            amount,
            balance: this._balance,
            timestamp: new Date()
        });
    }
    
    _maskAccountNumber() {
        const str = this._accountNumber.toString();
        return str.slice(0, 4) + '****' + str.slice(-4);
    }
}

const account1 = new BankAccount(123456789, 1000);
console.log("Initial balance:", account1.getBalance());
console.log("Account number:", account1.getAccountNumber());

account1.deposit(500);
account1.withdraw(200);
console.log("Final balance:", account1.getBalance());
console.log("Transaction history:", account1.getTransactionHistory());

// 2. ES6 Private Fields (True Encapsulation)

class SecureBankAccount {
    // Private fields
    #accountNumber;
    #balance;
    #pin;
    #transactionHistory;
    #isLocked;
    #failedAttempts;
    
    constructor(accountNumber, initialBalance, pin) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#pin = pin;
        this.#transactionHistory = [];
        this.#isLocked = false;
        this.#failedAttempts = 0;
    }
    
    // Public interface
    authenticate(pin) {
        if (this.#isLocked) {
            throw new Error("Account is locked. Contact customer service.");
        }
        
        if (pin === this.#pin) {
            this.#failedAttempts = 0;
            return true;
        } else {
            this.#failedAttempts++;
            if (this.#failedAttempts >= 3) {
                this.#isLocked = true;
                throw new Error("Account locked after 3 failed attempts");
            }
            return false;
        }
    }
    
    deposit(amount, pin) {
        if (!this.authenticate(pin)) {
            throw new Error("Authentication failed");
        }
        
        if (this.#isValidAmount(amount)) {
            this.#balance += amount;
            this.#logTransaction('deposit', amount);
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        throw new Error("Invalid amount");
    }
    
    withdraw(amount, pin) {
        if (!this.authenticate(pin)) {
            throw new Error("Authentication failed");
        }
        
        if (!this.#isValidAmount(amount)) {
            throw new Error("Invalid amount");
        }
        
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        
        this.#balance -= amount;
        this.#logTransaction('withdraw', amount);
        return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }
    
    getBalance(pin) {
        if (!this.authenticate(pin)) {
            throw new Error("Authentication failed");
        }
        return this.#balance;
    }
    
    changePin(oldPin, newPin) {
        if (!this.authenticate(oldPin)) {
            throw new Error("Current PIN incorrect");
        }
        
        if (this.#isValidPin(newPin)) {
            this.#pin = newPin;
            this.#logTransaction('pin_change', 0);
            return "PIN changed successfully";
        }
        throw new Error("Invalid PIN format");
    }
    
    // Private methods
    #isValidAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }
    
    #isValidPin(pin) {
        return typeof pin === 'string' && pin.length === 4 && /^\d{4}$/.test(pin);
    }
    
    #logTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            balance: this.#balance,
            timestamp: new Date().toISOString()
        });
    }
    
    // Static method for creating account with validation
    static createAccount(accountNumber, initialBalance, pin) {
        if (typeof accountNumber !== 'number' || accountNumber < 100000000) {
            throw new Error("Invalid account number");
        }
        if (typeof initialBalance !== 'number' || initialBalance < 0) {
            throw new Error("Invalid initial balance");
        }
        if (typeof pin !== 'string' || !/^\d{4}$/.test(pin)) {
            throw new Error("PIN must be 4 digits");
        }
        
        return new SecureBankAccount(accountNumber, initialBalance, pin);
    }
}

try {
    const secureAccount = SecureBankAccount.createAccount(987654321, 1500, "1234");
    console.log("Deposit result:", secureAccount.deposit(300, "1234"));
    console.log("Balance:", secureAccount.getBalance("1234"));
    console.log("PIN change:", secureAccount.changePin("1234", "5678"));
    
    // Try accessing private fields (will cause error)
    // console.log(secureAccount.#balance); // SyntaxError
    
} catch (error) {
    console.log("Error:", error.message);
}

// 3. Closure-based Encapsulation

function createCounter(initialValue = 0) {
    // Private variables
    let count = initialValue;
    let history = [];
    
    // Private functions
    function logChange(oldValue, newValue, operation) {
        history.push({
            operation,
            from: oldValue,
            to: newValue,
            timestamp: new Date()
        });
    }
    
    // Return public interface
    return {
        increment() {
            const oldValue = count;
            count++;
            logChange(oldValue, count, 'increment');
            return count;
        },
        
        decrement() {
            const oldValue = count;
            count--;
            logChange(oldValue, count, 'decrement');
            return count;
        },
        
        getValue() {
            return count;
        },
        
        reset() {
            const oldValue = count;
            count = initialValue;
            logChange(oldValue, count, 'reset');
            return count;
        },
        
        getHistory() {
            // Return copy to prevent external modification
            return history.map(entry => ({...entry}));
        }
    };
}

const counter = createCounter(10);
console.log("Initial value:", counter.getValue());
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Reset:", counter.reset());
console.log("History:", counter.getHistory());

// 4. Module Pattern for Encapsulation

const UserManager = (function() {
    // Private variables and functions
    const users = new Map();
    let nextId = 1;
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function hashPassword(password) {
        // Simplified hash function (don't use in production)
        return btoa(password + "salt123");
    }
    
    function generateId() {
        return nextId++;
    }
    
    // Public API
    return {
        createUser(name, email, password) {
            if (!name || !email || !password) {
                throw new Error("All fields are required");
            }
            
            if (!validateEmail(email)) {
                throw new Error("Invalid email format");
            }
            
            if (password.length < 6) {
                throw new Error("Password must be at least 6 characters");
            }
            
            // Check if email already exists
            for (let user of users.values()) {
                if (user.email === email) {
                    throw new Error("Email already exists");
                }
            }
            
            const id = generateId();
            const hashedPassword = hashPassword(password);
            
            users.set(id, {
                id,
                name,
                email,
                password: hashedPassword,
                createdAt: new Date(),
                isActive: true
            });
            
            return { id, name, email }; // Don't return password
        },
        
        authenticateUser(email, password) {
            const hashedPassword = hashPassword(password);
            
            for (let user of users.values()) {
                if (user.email === email && user.password === hashedPassword && user.isActive) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                }
            }
            return null;
        },
        
        getUserById(id) {
            const user = users.get(id);
            if (user && user.isActive) {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt
                };
            }
            return null;
        },
        
        deactivateUser(id) {
            const user = users.get(id);
            if (user) {
                user.isActive = false;
                return true;
            }
            return false;
        },
        
        getUserCount() {
            let count = 0;
            for (let user of users.values()) {
                if (user.isActive) count++;
            }
            return count;
        }
    };
})();

// Usage
try {
    const user1 = UserManager.createUser("John Doe", "john@example.com", "password123");
    console.log("Created user:", user1);
    
    const user2 = UserManager.createUser("Jane Smith", "jane@example.com", "securepass");
    console.log("Created user:", user2);
    
    const authenticated = UserManager.authenticateUser("john@example.com", "password123");
    console.log("Authenticated user:", authenticated);
    
    console.log("User by ID:", UserManager.getUserById(1));
    console.log("Total users:", UserManager.getUserCount());
    
    // Try to access private data (won't work)
    // console.log(UserManager.users); // undefined
    
} catch (error) {
    console.log("Error:", error.message);
}

// 5. Getters and Setters for Controlled Access

class Temperature {
    constructor(celsius = 0) {
        this._celsius = celsius;
        this._history = [];
        this._logTemperatureChange(celsius, "initial");
    }
    
    // Getter and setter for Celsius
    get celsius() {
        return this._celsius;
    }
    
    set celsius(value) {
        if (typeof value !== 'number') {
            throw new Error("Temperature must be a number");
        }
        if (value < -273.15) {
            throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
        }
        
        const oldValue = this._celsius;
        this._celsius = value;
        this._logTemperatureChange(value, `celsius change from ${oldValue}`);
    }
    
    // Computed property for Fahrenheit
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    }
    
    set fahrenheit(value) {
        if (typeof value !== 'number') {
            throw new Error("Temperature must be a number");
        }
        
        const celsiusValue = (value - 32) * 5/9;
        this.celsius = celsiusValue; // Use the setter for validation
    }
    
    // Computed property for Kelvin
    get kelvin() {
        return this._celsius + 273.15;
    }
    
    set kelvin(value) {
        if (typeof value !== 'number') {
            throw new Error("Temperature must be a number");
        }
        
        const celsiusValue = value - 273.15;
        this.celsius = celsiusValue; // Use the setter for validation
    }
    
    // Read-only property
    get history() {
        return [...this._history]; // Return copy
    }
    
    get isFreezingPoint() {
        return this._celsius === 0;
    }
    
    get isBoilingPoint() {
        return this._celsius === 100;
    }
    
    // Private helper method
    _logTemperatureChange(value, reason) {
        this._history.push({
            celsius: value,
            fahrenheit: (value * 9/5) + 32,
            kelvin: value + 273.15,
            reason,
            timestamp: new Date()
        });
    }
    
    // Method to get formatted temperature
    toString() {
        return `${this._celsius}°C (${this.fahrenheit.toFixed(1)}°F, ${this.kelvin.toFixed(1)}K)`;
    }
}

const temp = new Temperature(25);
console.log("Initial temperature:", temp.toString());
console.log("Is freezing point:", temp.isFreezingPoint);

// Using setters
temp.fahrenheit = 86; // Should set celsius to 30
console.log("After setting fahrenheit to 86:", temp.toString());

temp.kelvin = 273.15; // Should set celsius to 0
console.log("After setting kelvin to 273.15:", temp.toString());
console.log("Is freezing point:", temp.isFreezingPoint);

console.log("Temperature history:", temp.history);

// 6. Access Control Patterns

class Database {
    #data = new Map();
    #accessLog = [];
    #adminUsers = new Set(['admin', 'root']);
    #permissions = new Map();
    
    constructor() {
        // Set default permissions
        this.#permissions.set('admin', ['read', 'write', 'delete', 'admin']);
        this.#permissions.set('user', ['read', 'write']);
        this.#permissions.set('guest', ['read']);
    }
    
    // User management
    addUser(username, role = 'user') {
        if (!this.#permissions.has(role)) {
            throw new Error(`Invalid role: ${role}`);
        }
        
        this.#data.set(`user:${username}`, {
            username,
            role,
            createdAt: new Date(),
            lastAccess: null
        });
        
        return `User ${username} created with role ${role}`;
    }
    
    // Access control wrapper
    #requirePermission(username, permission, operation) {
        const user = this.#data.get(`user:${username}`);
        if (!user) {
            throw new Error(`User ${username} not found`);
        }
        
        const userPermissions = this.#permissions.get(user.role) || [];
        if (!userPermissions.includes(permission)) {
            this.#logAccess(username, operation, 'DENIED');
            throw new Error(`Access denied: ${username} lacks ${permission} permission`);
        }
        
        // Update last access
        user.lastAccess = new Date();
        this.#logAccess(username, operation, 'GRANTED');
        return user;
    }
    
    // Data operations with access control
    create(username, key, value) {
        this.#requirePermission(username, 'write', `CREATE ${key}`);
        
        if (this.#data.has(key)) {
            throw new Error(`Key ${key} already exists`);
        }
        
        this.#data.set(key, {
            value,
            createdBy: username,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        return `Created ${key}`;
    }
    
    read(username, key) {
        this.#requirePermission(username, 'read', `READ ${key}`);
        
        const record = this.#data.get(key);
        if (!record || key.startsWith('user:')) {
            return null;
        }
        
        return record;
    }
    
    update(username, key, value) {
        this.#requirePermission(username, 'write', `UPDATE ${key}`);
        
        const record = this.#data.get(key);
        if (!record || key.startsWith('user:')) {
            throw new Error(`Key ${key} not found`);
        }
        
        record.value = value;
        record.updatedAt = new Date();
        record.updatedBy = username;
        
        return `Updated ${key}`;
    }
    
    delete(username, key) {
        this.#requirePermission(username, 'delete', `DELETE ${key}`);
        
        if (!this.#data.has(key) || key.startsWith('user:')) {
            throw new Error(`Key ${key} not found`);
        }
        
        this.#data.delete(key);
        return `Deleted ${key}`;
    }
    
    // Admin operations
    getAccessLog(username) {
        this.#requirePermission(username, 'admin', 'VIEW ACCESS LOG');
        return [...this.#accessLog];
    }
    
    getAllUsers(username) {
        this.#requirePermission(username, 'admin', 'VIEW ALL USERS');
        
        const users = [];
        for (let [key, value] of this.#data.entries()) {
            if (key.startsWith('user:')) {
                users.push(value);
            }
        }
        return users;
    }
    
    // Private logging method
    #logAccess(username, operation, result) {
        this.#accessLog.push({
            username,
            operation,
            result,
            timestamp: new Date()
        });
        
        // Keep only last 100 entries
        if (this.#accessLog.length > 100) {
            this.#accessLog.shift();
        }
    }
}

// Usage example
const db = new Database();

try {
    // Create users with different roles
    console.log(db.addUser('alice', 'admin'));
    console.log(db.addUser('bob', 'user'));
    console.log(db.addUser('charlie', 'guest'));
    
    // Test operations with different permissions
    console.log(db.create('alice', 'document1', 'Secret document'));
    console.log(db.read('bob', 'document1'));
    console.log(db.update('bob', 'document1', 'Updated document'));
    
    // This should fail - guest trying to write
    try {
        console.log(db.create('charlie', 'document2', 'Guest document'));
    } catch (error) {
        console.log("Expected error:", error.message);
    }
    
    // Admin operations
    console.log("All users:", db.getAllUsers('alice'));
    console.log("Access log:", db.getAccessLog('alice').slice(-3)); // Last 3 entries
    
} catch (error) {
    console.log("Error:", error.message);
}

