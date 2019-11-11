const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.")
const inptA = Number(readlineSync.question("\n"))
const inptB = Number(readlineSync.question(""))
const inptC = Number(readlineSync.question(""))

if (Number.isNaN(inptA)) {
    console.log("\nInvalid.\n");
} else if (Number.isNaN(inptB)) {
    console.log("\nInvalid.\n");
} else if (Number.isNaN(inptC)) {
    console.log("\nInvalid.\n");
} else if (inptA > Number.MAX_SAFE_INTEGER || inptA < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
} else if (inptB > Number.MAX_SAFE_INTEGER || inptB < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
} else if (inptC > Number.MAX_SAFE_INTEGER || inptC < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
} else if (inptA == inptB && inptB == inptC) {
	console.log("\nEqual.\n");
} else if ((inptA == inptB && inptB < inptC) || (inptA < inptB && inptB == inptC)) {
	console.log("\nIncreasing.\n");
} else if ((inptA == inptB && inptB > inptC) || (inptA > inptB && inptB == inptC)) {
	console.log("\nDecreasing.\n");
} else if (inptA < inptB && inptB < inptC) {
	console.log("\nStrictly Increasing.\n");
} else if (inptA > inptB && inptB > inptC) {
	console.log("\nStrictly Decreasing.\n");
} else {
	console.log("\nUnordered.\n");}
