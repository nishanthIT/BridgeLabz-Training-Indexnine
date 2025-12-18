function processValue<T>(value: T): T {
    return value;
}

function getArray<T>(items: T[]): T[] {
    return [...items];
}

interface Container<T> {
    value: T;
    getValue(): T;
}

class Box<T> implements Container<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let stringBox = new Box<string>("hello");
let numberBox = new Box<number>(42);
let names = getArray<string>(["Alice", "Bob"]);
let numbers = getArray<number>([1, 2, 3]);

console.log(stringBox.getValue());
console.log(numberBox.getValue());
console.log(processValue("test"));
console.log(processValue(123));