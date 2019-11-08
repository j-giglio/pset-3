const readlineSync = require("readline-sync");

console.log("\nEnter a letter grade:")
let grade = (readlineSync.question("\n"))
let grade = grade.toUpperCase();

if (grade == "F+" || grade == "F-") {
    console.log("\nInvalid")
} else if (grade.charAt(0) == "A") {
    let numberGrade = 4;
    if (grade.charAt(1) === "-" && numberGrade != 0) {
    numberGrade -= .33;
}
} else if (grade.charAt(0) == "B") {
    let numberGrade = 3;
    if (grade.charAt(1) === "+" && numberGrade != 0) {
    numberGrade += .33;
    } else if (grade.charAt(1) === "-" && numberGrade != 0) {
    numberGrade -= .33;
    }
} else if (grade.charAt(0) == "C") {
    let numberGrade = 2;
    if (grade.charAt(1) === "+" && numberGrade != 0) {
    numberGrade += .33;
    } else if (grade.charAt(1) === "-" && numberGrade != 0) {
    numberGrade -= .33;
    }
} else if (grade.charAt(0) == "D") {
    let numberGrade = 1;
    if (grade.charAt(1) === "+" && numberGrade != 0) {
    numberGrade += .33;
    } else if (grade.charAt(1) === "-" && numberGrade != 0) {
    numberGrade -= .33;
    }
} else if (grade.charAt(0) == "F") {
    let numberGrade = 0;
}
console.log("\nYour GPA is " + numberGrade + ".")
