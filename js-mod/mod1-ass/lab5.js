function deepComp(a, b) {

    // If both values are strictly equal
    if (a === b) {
        return true;
    }

    // If one is null or not an object, they can't be deeply equal
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return false;
    }

    // Get enumerable property keys
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    // If number of properties differs
    if (keysA.length !== keysB.length) {
        return false;
    }

    // Compare each property
    for (let key of keysA) {

        // If property missing in b
        if (!keysB.includes(key)) {
            return false;
        }

        // Recursive comparison for nested objects/arrays
        if (!deepComp(a[key], b[key])) {
            return false;
        }
    }

    return true;
}


// Test objects
let a={x:[1,2,3,4,5], y:0, z:{m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z:{m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z:{m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z:{m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z:{m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z:{m:'test', n:false}};

console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false