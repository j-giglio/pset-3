const readlineSync = require("readline-sync");

const temp = Number(readlineSync.question("\nEnter a temperature: "));
const inptScale = (readlineSync.question("Enter a scale: "));
const scale = inptScale.toUpperCase();

if (Number.isNaN(temp)) {
    console.log("\nInvalid.");
} else if (temp > Number.MAX_SAFE_INTEGER || temp < Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (scale == "F") {
    if (temp < 32) {
        console.log("\nSolid.");
    } else if (temp > 212) {
        console.log("\nGas.");
    } else {
        console.log("\nLiquid.");
    }
} else if (scale == "C") {
    if (temp < 0) {
        console.log("\nSolid.");
    } else if (temp > 100) {
        console.log("\nGas.");
    } else {
        console.log("\nLiquid.");
    }
} else if (scale == "K") {
    if (temp < 273.2) {
        console.log("\nSolid.");
    } else if (temp > 373.2) {
        console.log("\nGas.");
    } else {
        console.log("\nLiquid.");
    }
} else {
    console.log("\nInvalid.");
}
