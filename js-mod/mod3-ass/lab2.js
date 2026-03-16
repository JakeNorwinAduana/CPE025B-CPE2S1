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

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message);
}