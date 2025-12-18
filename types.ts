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

type Theme = "light" | "dark";
type Size = "small" | "medium" | "large";

function setTheme(theme: Theme): void {
    console.log(`Theme set to ${theme}`);
}

function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processInput(input: string | number): void {
    if (isString(input)) {
        console.log(input.toUpperCase());
    } else {
        console.log(input * 2);
    }
}

type UserRole = {
    id: number;
    role: "admin" | "user" | "guest";
};

let currentTheme: Theme = "dark";
let buttonSize: Size = "medium";

console.log(greet(name));
console.log(add(10, 20));
setTheme(currentTheme);
processInput("hello");
processInput(42);