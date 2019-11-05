const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.")
const inptA = Number(readlineSync.question("\n"))
const inptB = Number(readlineSync.question(""))
const inptC = Number(readlineSync.question(""))

if (Number.isNaN(number)) {
    console.log("\nInvalid.");
} else if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (inptA == inptB && inptB == inptC) {
  console.log("\nEqual.");
} else if (inptA > inptB || inptB >= inptC) || (inptA >= inptB || inptB > inptC) {
  if (inptA > inptB && inptB > inptC){
    console.log("\nStrictly Increasing");
  }
  else if (inptA == inptB) || (inptB == inptC) {
    
  }
}
