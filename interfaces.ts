interface User {
    id: number;
    name: string;
    email?: string;
    readonly created: Date;
}

interface Admin extends User {
    permissions: string[];
}

type Status = "active" | "inactive" | "pending";

type UserInfo = {
    username: string;
    status: Status;
};

function createUser(data: User): User {
    return {
        ...data,
        created: new Date()
    };
}

function updateStatus(user: UserInfo, newStatus: Status): UserInfo {
    return { ...user, status: newStatus };
}

let user1: User = {
    id: 1,
    name: "Alice",
    created: new Date()
};

let admin: Admin = {
    id: 2,
    name: "Bob",
    created: new Date(),
    permissions: ["read", "write"]
};

let userInfo: UserInfo = {
    username: "alice123",
    status: "active"
};

interface EventHandler {
    (event: string, data: any): void;
}

interface Dictionary<T> {
    [key: string]: T;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

type Partial<T> = {
    [P in keyof T]?: T[P];
};

type UserKeys = keyof User;

interface Database {
    users: Dictionary<User>;
    connect(): Promise<void>;
    disconnect(): void;
}

function handleClick: EventHandler = (event, data) => {
    console.log(`Event: ${event}`, data);
};

function updateUser(id: string, updates: Partial<User>): User {
    const existingUser = { id: 1, name: "John", created: new Date() };
    return { ...existingUser, ...updates };
}

let userDict: Dictionary<User> = {
    "user1": user1,
    "admin1": admin
};

let response: ApiResponse<User[]> = {
    data: [user1, admin],
    status: 200,
    message: "Success"
};

console.log(createUser(user1));
console.log(updateUser("1", { name: "Updated Name" }));
handleClick("click", { x: 10, y: 20 });
console.log(response.data.length);