const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\nEnter a year: "));
const testA = year / 4;
const testB = year / 100;
const testC = year / 400;

if (Number.isNaN(year)) {
    console.log("\nInvalid.\n");
} else if (year > Number.MAX_SAFE_INTEGER || year < 0) {
    console.log("\nInvalid.\n");
} else if (Number.isInteger(year)) {
  if (Number.isInteger(testC)) {
    console.log("\n" + year + " is a leap year.\n")
  } else if ((Number.isInteger(testA)) && !(Number.isInteger(testB))){
    console.log("\n" + year + " is a leap year.\n")
  } else {
    console.log("\n" + year + " is not a leap year.\n")
  }
} else {
  console.log("\nInvalid.\n");
}
