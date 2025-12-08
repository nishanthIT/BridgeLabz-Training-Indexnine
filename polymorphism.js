// Polymorphism in JavaScript - In Depth

// 1. Method Overriding (Runtime Polymorphism)

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        return `${this.name} makes some sound`;
    }
    
    move() {
        return `${this.name} moves`;
    }
    
    describe() {
        return `This is ${this.name}, ${this.makeSound().toLowerCase()}`;
    }
}

class Dog extends Animal {
    makeSound() {
        return `${this.name} barks: Woof!`;
    }
    
    move() {
        return `${this.name} runs on four legs`;
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} meows: Meow!`;
    }
    
    move() {
        return `${this.name} prowls silently`;
    }
}

class Bird extends Animal {
    makeSound() {
        return `${this.name} chirps: Tweet!`;
    }
    
    move() {
        return `${this.name} flies through the air`;
    }
}

// Polymorphic behavior - same method call, different implementations
const animals = [
    new Dog("Buddy"),
    new Cat("Whiskers"),
    new Bird("Tweety")
];

animals.forEach(animal => {
    console.log(`Sound: ${animal.makeSound()}`);
    console.log(`Movement: ${animal.move()}`);
    console.log(`Description: ${animal.describe()}`);
    console.log("---");
});

// 2. Interface-like Polymorphism

class Shape {
    constructor(name) {
        this.name = name;
    }
    
    area() {
        throw new Error("area() method must be implemented");
    }
    
    perimeter() {
        throw new Error("perimeter() method must be implemented");
    }
    
    getInfo() {
        return `${this.name}: Area=${this.area()}, Perimeter=${this.perimeter()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super("Triangle");
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    area() {
        // Using Heron's formula
        const s = this.perimeter() / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    
    perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}

// Polymorphic array of shapes
const shapes = [
    new Rectangle(10, 5),
    new Circle(7),
    new Triangle(3, 4, 5)
];

shapes.forEach(shape => {
    console.log(shape.getInfo());
});

// 3. Duck Typing (Structural Polymorphism)

// If it walks like a duck and quacks like a duck, it's a duck
class Duck {
    quack() {
        return "Quack!";
    }
    
    walk() {
        return "Waddles like a duck";
    }
}

class Robot {
    quack() {
        return "Mechanical quack!";
    }
    
    walk() {
        return "Walks with servo motors";
    }
}

class Person {
    quack() {
        return "Person imitating: Quack!";
    }
    
    walk() {
        return "Walks on two legs";
    }
}

function makeDuckLikeBehavior(duckLike) {
    console.log(`Quacking: ${duckLike.quack()}`);
    console.log(`Walking: ${duckLike.walk()}`);
}

// All these objects can be used polymorphically
const duckLikes = [new Duck(), new Robot(), new Person()];
duckLikes.forEach(duckLike => {
    makeDuckLikeBehavior(duckLike);
    console.log("---");
});

// 4. Method Overloading Simulation

class Calculator {
    // JavaScript doesn't have true method overloading, but we can simulate it
    add(...args) {
        if (args.length === 0) {
            return 0;
        }
        
        if (args.length === 1) {
            return args[0];
        }
        
        if (args.length === 2) {
            return args[0] + args[1];
        }
        
        // Multiple arguments
        return args.reduce((sum, num) => sum + num, 0);
    }
    
    // Overloading based on argument types
    process(value) {
        if (typeof value === 'number') {
            return this.processNumber(value);
        } else if (typeof value === 'string') {
            return this.processString(value);
        } else if (Array.isArray(value)) {
            return this.processArray(value);
        } else {
            return this.processObject(value);
        }
    }
    
    processNumber(num) {
        return `Processing number: ${num * 2}`;
    }
    
    processString(str) {
        return `Processing string: ${str.toUpperCase()}`;
    }
    
    processArray(arr) {
        return `Processing array: [${arr.join(', ')}] - Length: ${arr.length}`;
    }
    
    processObject(obj) {
        return `Processing object with keys: ${Object.keys(obj).join(', ')}`;
    }
}

const calc = new Calculator();
console.log("Add no args:", calc.add());
console.log("Add one arg:", calc.add(5));
console.log("Add two args:", calc.add(3, 7));
console.log("Add multiple args:", calc.add(1, 2, 3, 4, 5));

console.log("Process number:", calc.process(42));
console.log("Process string:", calc.process("hello"));
console.log("Process array:", calc.process([1, 2, 3]));
console.log("Process object:", calc.process({name: "John", age: 30}));

// 5. Polymorphic Collections

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    calculatePay() {
        return this.salary;
    }
    
    getDetails() {
        return `${this.name}: $${this.calculatePay()}`;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, salary, benefits) {
        super(name, salary);
        this.benefits = benefits;
    }
    
    calculatePay() {
        return this.salary + this.benefits;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, hourlyRate, hoursWorked) {
        super(name, 0);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    
    calculatePay() {
        return this.hourlyRate * this.hoursWorked;
    }
}

class Contractor extends Employee {
    constructor(name, contractAmount, completed) {
        super(name, 0);
        this.contractAmount = contractAmount;
        this.completed = completed; // percentage completed
    }
    
    calculatePay() {
        return this.contractAmount * (this.completed / 100);
    }
}

// Polymorphic collection
const employees = [
    new FullTimeEmployee("Alice", 5000, 1000),
    new PartTimeEmployee("Bob", 25, 80),
    new Contractor("Charlie", 10000, 75)
];

let totalPayroll = 0;
employees.forEach(employee => {
    console.log(employee.getDetails());
    totalPayroll += employee.calculatePay();
});
console.log(`Total Payroll: $${totalPayroll}`);

// 6. Strategy Pattern (Behavioral Polymorphism)

// Different sorting strategies
class BubbleSort {
    sort(array) {
        const arr = [...array];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
    
    getName() {
        return "Bubble Sort";
    }
}

class QuickSort {
    sort(array) {
        if (array.length <= 1) return array;
        
        const pivot = array[Math.floor(array.length / 2)];
        const left = array.filter(x => x < pivot);
        const middle = array.filter(x => x === pivot);
        const right = array.filter(x => x > pivot);
        
        return [...this.sort(left), ...middle, ...this.sort(right)];
    }
    
    getName() {
        return "Quick Sort";
    }
}

class MergeSort {
    sort(array) {
        if (array.length <= 1) return array;
        
        const mid = Math.floor(array.length / 2);
        const left = this.sort(array.slice(0, mid));
        const right = this.sort(array.slice(mid));
        
        return this.merge(left, right);
    }
    
    merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    
    getName() {
        return "Merge Sort";
    }
}

class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    sort(array) {
        console.log(`Using ${this.strategy.getName()}`);
        return this.strategy.sort(array);
    }
}

const data = [64, 34, 25, 12, 22, 11, 90];
const sorter = new Sorter(new BubbleSort());

console.log("Original:", data);
console.log("Sorted:", sorter.sort(data));

// Change strategy polymorphically
sorter.setStrategy(new QuickSort());
console.log("Quick sorted:", sorter.sort(data));

sorter.setStrategy(new MergeSort());
console.log("Merge sorted:", sorter.sort(data));

// 7. Template Method Pattern

class DataProcessor {
    // Template method - defines the algorithm structure
    process(data) {
        const validated = this.validate(data);
        const transformed = this.transform(validated);
        const result = this.save(transformed);
        this.log(result);
        return result;
    }
    
    // Abstract methods to be implemented by subclasses
    validate(data) {
        throw new Error("validate() must be implemented");
    }
    
    transform(data) {
        throw new Error("transform() must be implemented");
    }
    
    save(data) {
        throw new Error("save() must be implemented");
    }
    
    // Concrete method - common implementation
    log(result) {
        console.log(`Processing completed: ${JSON.stringify(result)}`);
    }
}

class CSVProcessor extends DataProcessor {
    validate(data) {
        console.log("Validating CSV format");
        return data.filter(row => row.split(',').length > 1);
    }
    
    transform(data) {
        console.log("Transforming CSV to objects");
        return data.map(row => {
            const [name, value] = row.split(',');
            return { name: name.trim(), value: parseInt(value) };
        });
    }
    
    save(data) {
        console.log("Saving to CSV database");
        return { type: "CSV", count: data.length, data };
    }
}

class JSONProcessor extends DataProcessor {
    validate(data) {
        console.log("Validating JSON format");
        return data.filter(item => typeof item === 'object' && item.name);
    }
    
    transform(data) {
        console.log("Transforming JSON objects");
        return data.map(item => ({
            ...item,
            processed: true,
            timestamp: new Date()
        }));
    }
    
    save(data) {
        console.log("Saving to JSON database");
        return { type: "JSON", count: data.length, data };
    }
}

// Polymorphic processing
const csvData = ["John,25", "Jane,30", "Bob,35"];
const jsonData = [{name: "Alice", age: 28}, {name: "Charlie", age: 32}];

const csvProcessor = new CSVProcessor();
csvProcessor.process(csvData);

console.log("---");

const jsonProcessor = new JSONProcessor();
jsonProcessor.process(jsonData);

