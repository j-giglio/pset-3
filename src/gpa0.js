const readlineSync = require("readline-sync");

console.log("\nEnter a letter grade")
const inpt = (readlineSync.question("\n"))
let grade = inpt.toUpperCase()

if (grade.charAt(0) == "A") {
    let numberGrade = 4;
}
else if (grade.charAt(0) = "B") {
    let numberGrade = 3;
}
else if (grade.charAt(0) = "C") {
    let numberGrade = 2;
}
else if (grade.charAt(0) = "D") {
    let numberGrade = 1;
}
else if (grade.charAt(0) = "F") {
    let numberGrade = 0;
}
if (grade.charAt(1) === "+" && numberGrade != 0) {
    numberGrade += .33;
} else if (grade.charAt(1) === "-" && numberGrade != 0) {
    numberGrade -= .33;
if (numberGrade > 4){
  numberGrade
}
