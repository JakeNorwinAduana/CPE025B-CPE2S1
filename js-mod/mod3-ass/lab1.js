function getRandomSet(m, n, repeat, sort) {
    let result = [];
    let used = new Set();

    while (result.length < m) {
        let num = Math.floor(Math.random() * (n + 1));

        if (repeat) {
            result.push(num);
        } else {
            if (!used.has(num)) {
                used.add(num);
                result.push(num);
            }
        }
    }

    if (sort) {
        result.sort((a, b) => a - b);
    }

    return result;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));