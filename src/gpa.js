const readlineSync = require("readline-sync");

console.log("\nEnter a letter grade")
const grade = (readlineSync.question("\n"))

if (grade.charAt(0) == "A" || grade.charAt(0) == "a") {
    let numberGrade = 4;
}
else if (grade.charAt(0) = "B" || grade.charAt(0) == "b") {
    let numberGrade = 3;
}
else if (grade.charAt(0) = "C" || grade.charAt(0) == "c") {
    let numberGrade = 2;
}
else if (grade.charAt(0) = "D" || grade.charAt(0) == "d") {
    let numberGrade = 1;
}
else if (grade.charAt(0) = "F" || grade.charAt(0) == "f") {
    let numberGrade = 0;
}
if (grade.charAt(1) === "+" && numberGrade != 0) {
    numberGrade += .33;
} else if (grade.charAt(1) === "-" && numberGrade != 0) {
    numberGrade -= .33;
if (numberGrade > 4){
  numberGrade
}
