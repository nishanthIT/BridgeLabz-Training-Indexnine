// Abstraction in JavaScript - Hiding Implementation Details

// 1. Abstract Base Classes

// Abstract class - cannot be instantiated directly
class Vehicle {
    constructor(make, model, year) {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract class Vehicle cannot be instantiated directly");
        }
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    
    // Abstract methods - must be implemented by subclasses
    start() {
        throw new Error("start() method must be implemented by subclass");
    }
    
    stop() {
        throw new Error("stop() method must be implemented by subclass");
    }
    
    getMaxSpeed() {
        throw new Error("getMaxSpeed() method must be implemented by subclass");
    }
    
    // Concrete method - shared implementation
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
    
    // Template method - uses abstract methods
    performTrip(distance) {
        console.log(`Starting trip: ${this.getInfo()}`);
        this.start();
        
        const maxSpeed = this.getMaxSpeed();
        const estimatedTime = distance / maxSpeed;
        
        console.log(`Traveling ${distance} miles at max speed ${maxSpeed} mph`);
        console.log(`Estimated time: ${estimatedTime.toFixed(2)} hours`);
        
        this.stop();
        console.log("Trip completed");
        
        return estimatedTime;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, engineType) {
        super(make, model, year);
        this.engineType = engineType;
    }
    
    start() {
        console.log(`${this.getInfo()}: Engine started (${this.engineType})`);
        this.isRunning = true;
    }
    
    stop() {
        console.log(`${this.getInfo()}: Engine stopped`);
        this.isRunning = false;
    }
    
    getMaxSpeed() {
        return this.engineType === 'V8' ? 180 : 120;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, cc) {
        super(make, model, year);
        this.cc = cc;
    }
    
    start() {
        console.log(`${this.getInfo()}: Motorcycle started (${this.cc}cc)`);
        this.isRunning = true;
    }
    
    stop() {
        console.log(`${this.getInfo()}: Motorcycle stopped`);
        this.isRunning = false;
    }
    
    getMaxSpeed() {
        return this.cc > 600 ? 160 : 100;
    }
}

// Usage
const car = new Car("Toyota", "Camry", 2023, "V6");
const bike = new Motorcycle("Yamaha", "R1", 2023, 1000);

car.performTrip(300);
console.log("---");
bike.performTrip(300);

// Try to instantiate abstract class (will throw error)
try {
    const vehicle = new Vehicle("Generic", "Vehicle", 2023);
} catch (error) {
    console.log("Expected error:", error.message);
}

// 2. Interface-like Abstractions

// Define interface contract
class Drawable {
    draw() {
        throw new Error("draw() method must be implemented");
    }
    
    resize(width, height) {
        throw new Error("resize() method must be implemented");
    }
    
    getArea() {
        throw new Error("getArea() method must be implemented");
    }
}

class Moveable {
    move(x, y) {
        throw new Error("move() method must be implemented");
    }
    
    getPosition() {
        throw new Error("getPosition() method must be implemented");
    }
}

// Multiple inheritance simulation using mixins
function implementsDrawable(BaseClass) {
    return class extends BaseClass {
        constructor(...args) {
            super(...args);
            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
        }
        
        resize(width, height) {
            this.width = Math.max(0, width);
            this.height = Math.max(0, height);
        }
    };
}

function implementsMoveable(BaseClass) {
    return class extends BaseClass {
        move(x, y) {
            this.x = x;
            this.y = y;
        }
        
        getPosition() {
            return { x: this.x, y: this.y };
        }
    };
}

// Concrete implementations
class Rectangle extends implementsMoveable(implementsDrawable(Drawable)) {
    constructor(width, height) {
        super();
        this.resize(width, height);
    }
    
    draw() {
        console.log(`Drawing Rectangle at (${this.x}, ${this.y}) with size ${this.width}x${this.height}`);
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Circle extends implementsMoveable(implementsDrawable(Drawable)) {
    constructor(radius) {
        super();
        this.radius = radius;
        this.resize(radius * 2, radius * 2); // diameter
    }
    
    draw() {
        console.log(`Drawing Circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Usage
const rect = new Rectangle(100, 50);
const circle = new Circle(25);

rect.move(10, 20);
rect.draw();
console.log("Rectangle area:", rect.getArea());
console.log("Rectangle position:", rect.getPosition());

circle.move(50, 75);
circle.draw();
console.log("Circle area:", circle.getArea().toFixed(2));

// 3. Data Access Layer Abstraction

// Abstract Repository Pattern
class Repository {
    constructor() {
        if (this.constructor === Repository) {
            throw new Error("Abstract class Repository cannot be instantiated");
        }
    }
    
    // Abstract CRUD operations
    async create(entity) {
        throw new Error("create() method must be implemented");
    }
    
    async findById(id) {
        throw new Error("findById() method must be implemented");
    }
    
    async findAll() {
        throw new Error("findAll() method must be implemented");
    }
    
    async update(id, entity) {
        throw new Error("update() method must be implemented");
    }
    
    async delete(id) {
        throw new Error("delete() method must be implemented");
    }
    
    // Concrete method using abstract methods
    async exists(id) {
        const entity = await this.findById(id);
        return entity !== null;
    }
}

// In-Memory Repository Implementation
class InMemoryRepository extends Repository {
    constructor() {
        super();
        this.data = new Map();
        this.nextId = 1;
    }
    
    async create(entity) {
        const id = this.nextId++;
        const newEntity = { id, ...entity, createdAt: new Date() };
        this.data.set(id, newEntity);
        return newEntity;
    }
    
    async findById(id) {
        return this.data.get(id) || null;
    }
    
    async findAll() {
        return Array.from(this.data.values());
    }
    
    async update(id, updates) {
        const entity = this.data.get(id);
        if (!entity) {
            throw new Error(`Entity with id ${id} not found`);
        }
        
        const updatedEntity = { 
            ...entity, 
            ...updates, 
            id, // Ensure ID doesn't change
            updatedAt: new Date() 
        };
        this.data.set(id, updatedEntity);
        return updatedEntity;
    }
    
    async delete(id) {
        const entity = this.data.get(id);
        if (!entity) {
            throw new Error(`Entity with id ${id} not found`);
        }
        this.data.delete(id);
        return entity;
    }
}

// Mock Database Repository Implementation
class DatabaseRepository extends Repository {
    constructor(connectionString) {
        super();
        this.connectionString = connectionString;
        this.connected = false;
    }
    
    async connect() {
        console.log(`Connecting to database: ${this.connectionString}`);
        // Simulate connection delay
        await new Promise(resolve => setTimeout(resolve, 100));
        this.connected = true;
        console.log("Database connected");
    }
    
    async create(entity) {
        if (!this.connected) await this.connect();
        
        console.log("Executing SQL: INSERT INTO table VALUES (...)");
        const id = Math.floor(Math.random() * 1000) + 1;
        return { id, ...entity, createdAt: new Date() };
    }
    
    async findById(id) {
        if (!this.connected) await this.connect();
        
        console.log(`Executing SQL: SELECT * FROM table WHERE id = ${id}`);
        return { id, name: `Entity ${id}`, createdAt: new Date() };
    }
    
    async findAll() {
        if (!this.connected) await this.connect();
        
        console.log("Executing SQL: SELECT * FROM table");
        return [
            { id: 1, name: "Entity 1", createdAt: new Date() },
            { id: 2, name: "Entity 2", createdAt: new Date() }
        ];
    }
    
    async update(id, updates) {
        if (!this.connected) await this.connect();
        
        console.log(`Executing SQL: UPDATE table SET ... WHERE id = ${id}`);
        return { id, ...updates, updatedAt: new Date() };
    }
    
    async delete(id) {
        if (!this.connected) await this.connect();
        
        console.log(`Executing SQL: DELETE FROM table WHERE id = ${id}`);
        return { id, deleted: true };
    }
}

// Service layer that uses repository abstraction
class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    
    async createUser(userData) {
        // Business logic validation
        if (!userData.name || userData.name.trim() === '') {
            throw new Error("Name is required");
        }
        
        if (!userData.email || !this.isValidEmail(userData.email)) {
            throw new Error("Valid email is required");
        }
        
        // Use repository to persist data
        const user = await this.repository.create({
            name: userData.name.trim(),
            email: userData.email.toLowerCase(),
            status: 'active'
        });
        
        console.log(`User created: ${user.name} (${user.email})`);
        return user;
    }
    
    async getUserById(id) {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }
    
    async updateUser(id, updates) {
        // Check if user exists
        if (!await this.repository.exists(id)) {
            throw new Error(`User with id ${id} not found`);
        }
        
        // Validate updates
        if (updates.email && !this.isValidEmail(updates.email)) {
            throw new Error("Invalid email format");
        }
        
        return await this.repository.update(id, updates);
    }
    
    async getAllUsers() {
        return await this.repository.findAll();
    }
    
    async deleteUser(id) {
        return await this.repository.delete(id);
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Usage with different repository implementations
async function demonstrateAbstraction() {
    console.log("Using In-Memory Repository:");
    const inMemoryRepo = new InMemoryRepository();
    const userService1 = new UserService(inMemoryRepo);
    
    try {
        const user1 = await userService1.createUser({ 
            name: "John Doe", 
            email: "john@example.com" 
        });
        const user2 = await userService1.createUser({ 
            name: "Jane Smith", 
            email: "jane@example.com" 
        });
        
        console.log("All users:", await userService1.getAllUsers());
        
        const updatedUser = await userService1.updateUser(user1.id, { 
            name: "John Updated" 
        });
        console.log("Updated user:", updatedUser);
        
    } catch (error) {
        console.log("Error:", error.message);
    }
    
    console.log("\nUsing Database Repository:");
    const dbRepo = new DatabaseRepository("postgresql://localhost:5432/mydb");
    const userService2 = new UserService(dbRepo);
    
    try {
        await userService2.createUser({ 
            name: "Database User", 
            email: "db@example.com" 
        });
        
        const user = await userService2.getUserById(1);
        console.log("Retrieved user:", user);
        
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 4. API Abstraction Layer

// Abstract HTTP Client
class HttpClient {
    constructor() {
        if (this.constructor === HttpClient) {
            throw new Error("Abstract class HttpClient cannot be instantiated");
        }
    }
    
    async get(url, options) {
        throw new Error("get() method must be implemented");
    }
    
    async post(url, data, options) {
        throw new Error("post() method must be implemented");
    }
    
    async put(url, data, options) {
        throw new Error("put() method must be implemented");
    }
    
    async delete(url, options) {
        throw new Error("delete() method must be implemented");
    }
}

// Mock HTTP Client Implementation
class MockHttpClient extends HttpClient {
    constructor() {
        super();
        this.mockData = new Map([
            ['/users/1', { id: 1, name: 'John Doe', email: 'john@example.com' }],
            ['/users/2', { id: 2, name: 'Jane Smith', email: 'jane@example.com' }]
        ]);
    }
    
    async get(url, options = {}) {
        console.log(`Mock GET request to: ${url}`);
        await this.simulateDelay();
        
        const data = this.mockData.get(url);
        if (!data) {
            throw new Error(`Not found: ${url}`);
        }
        
        return { status: 200, data };
    }
    
    async post(url, data, options = {}) {
        console.log(`Mock POST request to: ${url}`, data);
        await this.simulateDelay();
        
        const newId = Date.now();
        const newData = { id: newId, ...data };
        this.mockData.set(`${url}/${newId}`, newData);
        
        return { status: 201, data: newData };
    }
    
    async put(url, data, options = {}) {
        console.log(`Mock PUT request to: ${url}`, data);
        await this.simulateDelay();
        
        const existing = this.mockData.get(url);
        if (!existing) {
            throw new Error(`Not found: ${url}`);
        }
        
        const updated = { ...existing, ...data };
        this.mockData.set(url, updated);
        
        return { status: 200, data: updated };
    }
    
    async delete(url, options = {}) {
        console.log(`Mock DELETE request to: ${url}`);
        await this.simulateDelay();
        
        const existing = this.mockData.get(url);
        if (!existing) {
            throw new Error(`Not found: ${url}`);
        }
        
        this.mockData.delete(url);
        return { status: 204, data: null };
    }
    
    async simulateDelay() {
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

// API Service using HTTP Client abstraction
class ApiService {
    constructor(httpClient, baseUrl) {
        this.client = httpClient;
        this.baseUrl = baseUrl;
    }
    
    async getUser(id) {
        const response = await this.client.get(`${this.baseUrl}/users/${id}`);
        return response.data;
    }
    
    async createUser(userData) {
        const response = await this.client.post(`${this.baseUrl}/users`, userData);
        return response.data;
    }
    
    async updateUser(id, userData) {
        const response = await this.client.put(`${this.baseUrl}/users/${id}`, userData);
        return response.data;
    }
    
    async deleteUser(id) {
        await this.client.delete(`${this.baseUrl}/users/${id}`);
        return true;
    }
}

// Usage
async function demonstrateApiAbstraction() {
    const mockClient = new MockHttpClient();
    const apiService = new ApiService(mockClient, '');
    
    try {
        console.log("Getting user 1:", await apiService.getUser(1));
        
        const newUser = await apiService.createUser({
            name: "New User",
            email: "new@example.com"
        });
        console.log("Created user:", newUser);
        
        const updatedUser = await apiService.updateUser(1, {
            name: "John Updated"
        });
        console.log("Updated user:", updatedUser);
        
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Run demonstrations
(async function() {
    await demonstrateAbstraction();
    await demonstrateApiAbstraction();
})();

