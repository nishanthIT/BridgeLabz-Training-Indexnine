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

console.log(createUser(user1));
console.log(updateStatus(userInfo, "inactive"));