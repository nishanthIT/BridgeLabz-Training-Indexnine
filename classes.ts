class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`${this.brand} ${this.model} started`);
    }

    getAge(): number {
        return new Date().getFullYear() - this.year;
    }
}

class ElectricCar extends Car {
    batteryCapacity: number;

    constructor(brand: string, model: string, year: number, battery: number) {
        super(brand, model, year);
        this.batteryCapacity = battery;
    }

    charge(): void {
        console.log("Charging battery...");
    }
}

abstract class Animal {
    protected name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }

    abstract makeSound(): void;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) this._age = value;
    }
}

class Dog extends Animal {
    static species = "Canis lupus";

    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {
        console.log(`${this.name} barks`);
    }

    static getSpecies(): string {
        return Dog.species;
    }
}

class Calculator {
    private static instance: Calculator;

    private constructor() {}

    static getInstance(): Calculator {
        if (!Calculator.instance) {
            Calculator.instance = new Calculator();
        }
        return Calculator.instance;
    }

    calculate(a: number, b: number): number {
        return a + b;
    }
}

let myCar = new Car("Toyota", "Camry", 2020);
let tesla = new ElectricCar("Tesla", "Model 3", 2023, 75);
let dog = new Dog("Buddy", 3);
let calc = Calculator.getInstance();

myCar.start();
tesla.charge();
dog.makeSound();
console.log(Dog.getSpecies());
console.log(calc.calculate(5, 10));