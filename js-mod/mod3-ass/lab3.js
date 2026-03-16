class User {
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        let regex = /^[A-Z][a-zA-Z]*$/;
        if (!regex.test(value)) {
            throw new Error("Invalid first name format");
        }
        this.#name = value;
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        let regex = /^[A-Z][a-zA-Z]*$/;
        if (!regex.test(value)) {
            throw new Error("Invalid last name format");
        }
        this.#surname = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        let regex = /^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
        if (!regex.test(value)) {
            throw new Error("Invalid email format");
        }
        this.#email = value;
    }
}

class Users {
    constructor() {
        this.users = new Map();
    }

    add(name, surname, email) {
        if (!this.users.has(email)) {
            let user = new User(name, surname, email);
            this.users.set(email, user);
        }
    }

    delete(email) {
        this.users.delete(email);
    }

    get(email) {
        return this.users.get(email);
    }

    getAll(field) {
        let arr = Array.from(this.users.values());

        return arr.sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));