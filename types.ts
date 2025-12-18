let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding"];
let user: object = { name: "Alice", age: 30 };

function greet(person: string): string {
    return "Hello " + person;
}

function add(a: number, b: number): number {
    return a + b;
}

interface Person {
    name: string;
    age: number;
}

let employee: Person = {
    name: "Bob",
    age: 28
};

console.log(greet(name));
console.log(add(10, 20));
console.log(employee.name);