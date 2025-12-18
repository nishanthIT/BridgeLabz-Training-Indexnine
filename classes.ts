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

let myCar = new Car("Toyota", "Camry", 2020);
let tesla = new ElectricCar("Tesla", "Model 3", 2023, 75);

myCar.start();
tesla.charge();