type Person = {
    id ?: number
    username : string
    role : "management" | "staff" | "customer"
}

let Users : Array<Person> = []

function getUser(userId : number) {
    const requestedUser = Users.find(userObj => userObj.id === userId);
    return requestedUser;
}

let managementId = 1000;
let staffId = 2000;
let customerId = 3000;

function createUserId(role: "management" | "staff" | "customer"): number {
    switch (role) {
        case "management":
            return managementId++;
        case "staff":
            return staffId++;
        case "customer":
            return customerId++;
    }
}

function createUser(userObj : Person) {
    const userId : number = createUserId(userObj.role);
    userObj.id = userId;
    Users.push(userObj);
    return userId;
}

function deleteUser(userObj : Person) {
    const index = Users.findIndex(obj => obj === userObj);
    Users.splice(index-1, 1);
    return Users;
}

function updateUser(userObj : Person, updatedUserObj : Person) {
    const index = Users.findIndex(obj => obj === userObj);
    Users.splice(index-2, 1, updatedUserObj);
    return Users;
}

//run tests

createUser({ username: "alice", role: "management" });
createUser({ username: "bob", role: "staff" });
createUser({ username: "carol", role: "customer" });

console.log(Users);

updateUser({ id: 1000, username: "alice", role: "management" }, { id: 1000, username: "alison", role: "customer" });

console.log(Users);

deleteUser({ id: 2000, username: "bob", role: "staff" });

console.log(Users);

console.log(getUser(1000));
