const readlineSync = require("readline-sync");

console.log("\nEnter a letter grade:")
let grade = (readlineSync.question("\n"))
grade = grade.toUpperCase();

if (grade.charAt(1) != "+" && grade.charAt(1) != "-" && grade.charAt(1) != "") {
  console.log("\nInvalid.")
} else if (grade.charAt(2) != ""){
  console.log("\nInvalid.")
} else if (grade == "F+" || grade == "F-") {
    console.log("\nInvalid")
} else if (grade.charAt(0) == "A") {
    let numberGrade = 400;
    if (grade.charAt(1) === "-") {
    numberGrade -= 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else {
      numberGrade /= 100
      console.log("\nYour GPA is " + numberGrade + ".")
    }
} else if (grade.charAt(0) == "B") {
    let numberGrade = 300;
    if (grade.charAt(1) === "+") {
    numberGrade += 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else if (grade.charAt(1) === "-") {
    numberGrade -= 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else {
      numberGrade /= 100
      console.log("\nYour GPA is " + numberGrade + ".")
    }
  } else if (grade.charAt(0) == "C") {
    let numberGrade = 200;
    if (grade.charAt(1) === "+") {
    numberGrade += 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else if (grade.charAt(1) === "-") {
    numberGrade -= 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else {
      numberGrade /= 100
      console.log("\nYour GPA is " + numberGrade + ".")
    }
} else if (grade.charAt(0) == "D") {
    let numberGrade = 100;
    if (grade.charAt(1) === "+") {
    numberGrade += 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else if (grade.charAt(1) === "-") {
    numberGrade -= 33;
    numberGrade /= 100
    console.log("\nYour GPA is " + numberGrade + ".")
    } else {
      numberGrade /= 100
      console.log("\nYour GPA is " + numberGrade + ".")
    }
} else if (grade.charAt(0) == "F") {
    let numberGrade = 0;
    console.log("\nYour GPA is " + numberGrade + ".")
} else {
  console.log("\nInvalid.")
  }
