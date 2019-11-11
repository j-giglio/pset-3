const readlineSync = require("readline-sync");

const temp = Number(readlineSync.question("\nEnter a temperature: "));
const inptScale = (readlineSync.question("Enter a scale: "));
const scale = inptScale.toUpperCase();

if (Number.isNaN(temp)) {
    console.log("\nInvalid.\n");
} else if (temp > Number.MAX_SAFE_INTEGER || temp < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.\n");
} else if (scale == "F") {
    if (temp < 32) {
        console.log("\nSolid.\n");
    } else if (temp > 212) {
        console.log("\nGas.\n");
    } else {
        console.log("\nLiquid.\n");
    }
} else if (scale == "C") {
    if (temp < 0) {
        console.log("\nSolid.\n");
    } else if (temp > 100) {
        console.log("\nGas.\n");
    } else {
        console.log("\nLiquid.\n");
    }
} else if (scale == "K") {
    if (temp < 273.2) {
        console.log("\nSolid.\n");
    } else if (temp > 373.2) {
        console.log("\nGas.\n");
    } else {
        console.log("\nLiquid.\n");
    }
} else {
    console.log("\nInvalid.\n");
}
