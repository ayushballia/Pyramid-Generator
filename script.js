const character = "#";
const count = 8;
const rows = [];

const padRow = (rowNumber, rowCount) => {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
};

// for loop includes the terms "iterator", "condition", and "iteration"

// The iterator is a variable you can declare specifically in your for loop
// to control how the loop iterates or goes through your logic.

// The condition of a for loop tells the loop how many times it should iterate.
// When the condition becomes true, the loop will stop.

// Your iteration statement will tell your loop what to do with the iterator after each run.

// TODO: use a different type of loop
/* for (let i = 1; i <= count; i++) {
  // .repeat() method available to strings. This method accepts a number as an argument,
  // specifying the number of times to repeat the target string.
  rows.push(padRow(i, count));
} */

/* while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
} */

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);

const unshifted = numbers.unshift(5);
console.log(unshifted);

console.log(numbers);

let result = "";

// a for...of loop, which iterates over each item in an iterable object
// and temporarily assigns it to a variable.
for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
