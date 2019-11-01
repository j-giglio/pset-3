const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter an integer: "));
const test = number / 2;

if (Number.isNaN(number)) {
    console.log("\nInvalid.");
} else if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (Number.isInteger(number)) {
    if (Number.isInteger(test)) {
    console.log("\nEven.")
  } else {
  console.log("\nOdd.")
  }
} else {
  console.log("\nInvalid.");
}
