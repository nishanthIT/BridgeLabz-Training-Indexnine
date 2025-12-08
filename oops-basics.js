




// Object Literal
const person1 = {
    name: "Niahath",
    age: 20,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
console.log("Object Literal:", person1.greet());




// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

const person2 = new Person("Nishatn", 30);
console.log("Constructor Function:", person2.greet());


    

// Object.create()
const personProto = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

const person3 = Object.create(personProto);
person3.name = "Charlie";
person3.age = 35;
console.log("Object.create():", person3.greet());




// 2. Classes 


class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
}

const person4 = new PersonClass("David", 28);
console.log("ES6 Class:", person4.greet());

// 3. Properties and Methods


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.subjects = [];
    }
    
    // Instance method
    addSubject(subject) {
        this.subjects.push(subject);
    }
    
    // Getter
    get info() {
        return `${this.name} is in grade ${this.grade}`;
    }
    
    // Setter
    set studentGrade(newGrade) {
        if (newGrade >= 1 && newGrade <= 12) {
            this.grade = newGrade;
        } else {
            console.log("Invalid grade");
        }
    }
    
    // Static method
    static createDefaultStudent() {
        return new Student("Unknown", 1);
    }
}

const student1 = new Student("Emma", 10);
student1.addSubject("Math");
student1.addSubject("Science");
console.log("Student info:", student1.info);
console.log("Student subjects:", student1.subjects);

student1.studentGrade = 11;
console.log("Updated grade:", student1.grade);

const defaultStudent = Student.createDefaultStudent();
console.log("Default student:", defaultStudent.info);

// 4. Prototype

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

const dog = new Animal("Rex");
console.log("Prototype method:", dog.speak());

// Adding method to existing class prototype
PersonClass.prototype.getNameLength = function() {
    return this.name.length;
};

console.log("Added prototype method:", person4.getNameLength());

// 5. Object Methods and Properties


const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return `${this.brand} ${this.model} started`;
    }
};

// Object.keys()
console.log("Object keys:", Object.keys(car));

// Object.values()
console.log("Object values:", Object.values(car));

// Object.entries()
console.log("Object entries:", Object.entries(car));

// hasOwnProperty()
console.log("Has 'brand' property:", car.hasOwnProperty('brand'));
console.log("Has 'color' property:", car.hasOwnProperty('color'));

// this Keyword


const obj = {
    name: "TestObject",
    regularMethod: function() {
        console.log("Regular method 'this':", this.name);
    },
    arrowMethod: () => {
        console.log("Arrow method 'this':", this.name); // Will be undefined
    }
};

obj.regularMethod();
obj.arrowMethod();

// Method borrowing
const anotherObj = { name: "BorrowedObject" };
obj.regularMethod.call(anotherObj);

// 7. Constructor Pattern vs Factory Pattern


// Constructor Pattern
function BookConstructor(title, author) {
    this.title = title;
    this.author = author;
    this.read = function() {
        return `Reading ${this.title} by ${this.author}`;
    };
}

const book1 = new BookConstructor("1984", "George Orwell");
console.log("Constructor pattern:", book1.read());

// Factory Pattern
function createBook(title, author) {
    return {
        title: title,
        author: author,
        read: function() {
            return `Reading ${this.title} by ${this.author}`;
        }
    };
}

const book2 = createBook("To Kill a Mockingbird", "Harper Lee");
console.log("Factory pattern:", book2.read());

// Object Destructuring


const userProfile = {
    username: "john_doe",
    email: "john@example.com",
    age: 25,
    location: "New York"
};

const { username, email, age } = userProfile;
console.log("Destructured:", username, email, age);

// With renaming
const { username: user, location: city } = userProfile;
console.log("Renamed:", user, city);




// Object Spread and Rest


const baseConfig = {
    host: "localhost",
    port: 3000,
    secure: false
};

const productionConfig = {
    ...baseConfig,
    host: "production.com",
    secure: true
};

console.log("Spread operator:", productionConfig);

// Rest in destructuring
const { host, ...otherConfigs } = productionConfig;
console.log("Rest operator:", host, otherConfigs);

