//Different ways of writing js
const person = (first, last) => ({
    first: first,
    last: last
});

const person1 = (first, last) => ({first, last});

function person2(first, last) {
    return {
        first: first,
        last: last
    };
}

const add = (a, b) => a + b;

function add1(a, b) {
    return a + b;
}