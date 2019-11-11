const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number)) {
    console.log("\nInvalid.\n");
} else if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
} else if (number > 0){
    console.log("\nPositive.\n");
} else if (number < 0){
    console.log("\nNegative.\n");
} else if (number == 0){
    console.log("\nZero.\n");
}
