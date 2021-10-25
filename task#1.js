const myApply = (fn, thisArg, args) => {
    return (fn.call(thisArg, ...args));
}

const numbers = [5, 6, 2, 3, 7];

const max = myApply(Math.max, null, numbers);

console.log(max);
// expected output: 7

const min = myApply(Math.min, null, numbers);

console.log(min);
// expected output: 2
