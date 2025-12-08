// Inheritance in JavaScript - In Depth

// 1. Basic Class Inheritance

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.alive = true;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    move() {
        return `${this.name} moves around`;
    }
    
    eat(food) {
        return `${this.name} eats ${food}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine"); // Call parent constructor
        this.breed = breed;
        this.loyalty = "high";
    }
    
    // Override parent method
    speak() {
        return `${this.name} barks: Woof!`;
    }
    
    // New method specific to Dog
    wagTail() {
        return `${this.name} wags tail happily`;
    }
    
    fetch(item) {
        return `${this.name} fetches the ${item}`;
    }
}

const dog1 = new Dog("Rex", "German Shepherd");
console.log("Dog speaks:", dog1.speak());
console.log("Dog moves:", dog1.move()); // Inherited method
console.log("Dog specific:", dog1.wagTail());
console.log("Dog breed:", dog1.breed);

// 2. Multiple Levels of Inheritance

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        return `${this.make} ${this.model} started`;
    }
    
    stop() {
        this.isRunning = false;
        return `${this.make} ${this.model} stopped`;
    }
    
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
        this.fuel = 100;
    }
    
    drive() {
        if (!this.isRunning) {
            return "Car is not running. Start it first.";
        }
        this.fuel -= 10;
        return `Driving ${this.getInfo()}. Fuel: ${this.fuel}%`;
    }
    
    refuel() {
        this.fuel = 100;
        return "Car refueled";
    }
}

class SportsCar extends Car {
    constructor(make, model, year, doors, topSpeed) {
        super(make, model, year, doors);
        this.topSpeed = topSpeed;
        this.turboMode = false;
    }
    
    // Override parent method
    drive() {
        const baseMessage = super.drive(); // Call parent method
        if (this.turboMode) {
            return baseMessage + " (TURBO MODE ACTIVATED!)";
        }
        return baseMessage;
    }
    
    activateTurbo() {
        this.turboMode = true;
        return "Turbo mode activated!";
    }
    
    race() {
        return `Racing at ${this.topSpeed} mph!`;
    }
}

const sportsCar = new SportsCar("Ferrari", "F8", 2023, 2, 340);
console.log("Sports car info:", sportsCar.getInfo());
sportsCar.start();
console.log("Normal drive:", sportsCar.drive());
sportsCar.activateTurbo();
console.log("Turbo drive:", sportsCar.drive());
console.log("Race:", sportsCar.race());

// 3. Method Overriding and super Keyword

class Shape {
    constructor(color) {
        this.color = color;
    }
    
    area() {
        return 0; // Default implementation
    }
    
    describe() {
        return `A ${this.color} shape with area ${this.area()}`;
    }
    
    paint(newColor) {
        const oldColor = this.color;
        this.color = newColor;
        return `Changed color from ${oldColor} to ${newColor}`;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    // Override area method
    area() {
        return this.width * this.height;
    }
    
    // Override describe method but use parent's method
    describe() {
        const baseDescription = super.describe();
        return `${baseDescription} (Rectangle: ${this.width}x${this.height})`;
    }
}

class Square extends Rectangle {
    constructor(color, side) {
        super(color, side, side); // Square is a special rectangle
        this.side = side;
    }
    
    // Override describe method
    describe() {
        return `A ${this.color} square with side ${this.side} and area ${this.area()}`;
    }
    
    // Add square-specific method
    getDiagonal() {
        return Math.sqrt(2) * this.side;
    }
}

const rectangle = new Rectangle("blue", 10, 5);
const square = new Square("red", 8);

console.log("Rectangle:", rectangle.describe());
console.log("Square:", square.describe());
console.log("Square diagonal:", square.getDiagonal());

// 4. Abstract Base Class Pattern

class Database {
    constructor(name) {
        if (this.constructor === Database) {
            throw new Error("Database is an abstract class and cannot be instantiated directly");
        }
        this.name = name;
        this.connected = false;
    }
    
    connect() {
        throw new Error("connect() method must be implemented by subclass");
    }
    
    disconnect() {
        throw new Error("disconnect() method must be implemented by subclass");
    }
    
    query(sql) {
        throw new Error("query() method must be implemented by subclass");
    }
    
    // Common method that can be used by all subclasses
    isConnected() {
        return this.connected;
    }
}

class MySQLDatabase extends Database {
    constructor(name, host, port) {
        super(name);
        this.host = host;
        this.port = port;
    }
    
    connect() {
        this.connected = true;
        return `Connected to MySQL database ${this.name} at ${this.host}:${this.port}`;
    }
    
    disconnect() {
        this.connected = false;
        return `Disconnected from MySQL database ${this.name}`;
    }
    
    query(sql) {
        if (!this.connected) {
            throw new Error("Database not connected");
        }
        return `Executing MySQL query: ${sql}`;
    }
}

class MongoDatabase extends Database {
    constructor(name, connectionString) {
        super(name);
        this.connectionString = connectionString;
    }
    
    connect() {
        this.connected = true;
        return `Connected to MongoDB database ${this.name}`;
    }
    
    disconnect() {
        this.connected = false;
        return `Disconnected from MongoDB database ${this.name}`;
    }
    
    query(filter) {
        if (!this.connected) {
            throw new Error("Database not connected");
        }
        return `Executing MongoDB query: ${JSON.stringify(filter)}`;
    }
}

const mysql = new MySQLDatabase("myapp", "localhost", 3306);
console.log("MySQL connect:", mysql.connect());
console.log("MySQL query:", mysql.query("SELECT * FROM users"));

const mongo = new MongoDatabase("myapp", "mongodb://localhost:27017");
console.log("Mongo connect:", mongo.connect());
console.log("Mongo query:", mongo.query({ status: "active" }));

// 5. Mixin Pattern

// Mixin functions
const Flyable = {
    fly() {
        return `${this.name} is flying`;
    },
    land() {
        return `${this.name} has landed`;
    }
};

const Swimmable = {
    swim() {
        return `${this.name} is swimming`;
    },
    dive() {
        return `${this.name} dives underwater`;
    }
};

// Helper function to apply mixins
function applyMixins(targetClass, ...mixins) {
    mixins.forEach(mixin => {
        Object.getOwnPropertyNames(mixin).forEach(name => {
            targetClass.prototype[name] = mixin[name];
        });
    });
}

class Bird extends Animal {
    constructor(name, species, wingspan) {
        super(name, species);
        this.wingspan = wingspan;
    }
    
    speak() {
        return `${this.name} chirps`;
    }
}

class Duck extends Bird {
    constructor(name, wingspan) {
        super(name, "Waterfowl", wingspan);
    }
}

// Apply mixins to Duck
applyMixins(Duck, Flyable, Swimmable);

const duck = new Duck("Donald", 24);
console.log("Duck speaks:", duck.speak());
console.log("Duck flies:", duck.fly());
console.log("Duck swims:", duck.swim());

// 6. Prototype Chain Inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

function Student(name, age, grade) {
    Person.call(this, name, age); // Call parent constructor
    this.grade = grade;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    return `${this.name} is studying`;
};

// Override parent method
Student.prototype.greet = function() {
    return `Hi, I'm ${this.name}, a student in grade ${this.grade}`;
};

const student = new Student("Alice", 16, 10);
console.log("Student greet:", student.greet());
console.log("Student study:", student.study());
console.log("Student age:", student.getAge()); // Inherited method

// 7. instanceof and Inheritance

console.log("duck instanceof Duck:", duck instanceof Duck);
console.log("duck instanceof Bird:", duck instanceof Bird);
console.log("duck instanceof Animal:", duck instanceof Animal);
console.log("duck instanceof Object:", duck instanceof Object);

console.log("student instanceof Student:", student instanceof Student);
console.log("student instanceof Person:", student instanceof Person);
console.log("student instanceof Object:", student instanceof Object);

// 8. Property Inheritance and Shadowing

class Parent {
    constructor() {
        this.parentProperty = "parent value";
        this.sharedProperty = "parent shared";
    }
    
    parentMethod() {
        return "parent method";
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.childProperty = "child value";
        this.sharedProperty = "child shared"; // Shadows parent property
    }
    
    childMethod() {
        return "child method";
    }
    
    accessParentProperty() {
        return super.parentMethod(); // Access parent method
    }
}

const child = new Child();
console.log("Child property:", child.childProperty);
console.log("Parent property:", child.parentProperty);
console.log("Shadowed property:", child.sharedProperty);
console.log("Access parent method:", child.accessParentProperty());

