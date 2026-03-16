class MyIterable {
    constructor() {
        this.data = new Set();
    }

    add(value) {
        this.data.add(value);
    }

    del(value) {
        this.data.delete(value);
    }

    has(value) {
        return this.data.has(value);
    }

    get length() {
        return this.data.size;
    }

    *[Symbol.iterator]() {
        for (let value of this.data) {
            yield value;
        }
    }
}

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5