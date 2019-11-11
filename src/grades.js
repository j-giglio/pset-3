const readlineSync = require("readline-sync");

console.log("\nEnter a grade:")
let grade = (readlineSync.question("\n"))
grade = Math.round(grade)

if (Number.isNaN(grade)) {
    console.log("\nInvalid.\n");
} else if (grade > 100 || grade < 0) {
    console.log("\nInvalid.\n");
} else if (grade <= 100 && grade >= 90) {
    console.log("\nYou got an A.\n")
} else if (grade < 90 && grade >= 80) {
    console.log("\nYou got an B.\n")
} else if (grade < 80 && grade >= 70) {
    console.log("\nYou got an C.\n")
} else if (grade < 70 && grade >= 60) {
    console.log("\nYou got an D.\n")
} else if (grade < 60) {
    console.log("\nYou got an F.\n")
} 
