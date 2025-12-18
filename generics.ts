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

interface Lengthwise {
    length: number;
}

function constrainedFunction<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

interface KeyValue<K, V> {
    key: K;
    value: V;
}

class Pair<K, V> implements KeyValue<K, V> {
    constructor(public key: K, public value: V) {}

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result: any = {};
    keys.forEach(key => {
        result[key] = obj[key];
    });
    return result;
}

type UserEmail = NonNullable<string | null>;
type FunctionReturn = ReturnType<() => string>;

let stringPair = new Pair<string, number>("age", 25);
let booleanPair = new Pair<string, boolean>("active", true);

let testObj = { name: "John", age: 30, email: "john@test.com" };
let picked = pick(testObj, ["name", "age"]);

console.log(stringBox.getValue());
console.log(numberBox.getValue());
console.log(constrainedFunction("hello"));
console.log(constrainedFunction([1, 2, 3]));
console.log(stringPair.getKey());
console.log(picked);