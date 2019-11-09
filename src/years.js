const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\nEnter a year: "));
const testA = number / 4;
const testB = number / 100;
const testC = number / 400;

if (Number.isNaN(year)) {
    console.log("\nInvalid.");
} else if (year > Number.MAX_SAFE_INTEGER || year < 0) {
    console.log("\nInvalid.");
} else if (Number.isInteger(year)) {
  if (Number.isInteger(testC)) {
    console.log("\n." + year + "is a leap year.")
  } else if (Number.isInteger(testA)) && !(Number.isInteger(testB)){
    console.log("\n." + year + "is a leap year.")
  else {
    console.log("\n." + year + "is not a leap year.")
  }
} else {
  console.log("\nInvalid.");
}
