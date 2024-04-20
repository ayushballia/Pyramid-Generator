const character = "#";
const count = 8;
const rows = [];

// for loop includes the terms "iterator", "condition", and "iteration"

// The iterator is a variable you can declare specifically in your for loop
// to control how the loop iterates or goes through your logic.

// The condition of a for loop tells the loop how many times it should iterate.
// When the condition becomes true, the loop will stop.

// Your iteration statement will tell your loop what to do with the iterator after each run.

for (let i = 0; i < count; i++) {
  rows.push(i);
}

let result = "";


// a for...of loop, which iterates over each item in an iterable object 
// and temporarily assigns it to a variable.
for (const row of rows) {
    result = result + row
}

console.log(result);
