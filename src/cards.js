const readlineSync = require("readline-sync");

const inpt = (readlineSync.question("\nEnter a playing card: "));
let suit = inpt.charAt(1);
suit = suit.toLowerCase();
let rank = inpt.charAt(0);
rank = rank.toLowerCase();
suitMsg = ""
rankMsg = ""

switch (suit) {
  case "c":
      suitMsg = "Clubs";
      break;
  case "d":
      suitMsg = "Diamonds";
      break;
  case "s":
      suitMsg = "Spades";
      break;
  case "h":
      suitMsg = "Hearts";
      break;
}

switch (rank) {
  case "2":
      rankMsg = "Two";
      break;
  case "3":
      rankMsg = "Three";
      break;
  case "4":
      rankMsg = "Four";
      break;
  case "5":
      rankMsg = "Five";
      break;
  case "6":
      rankMsg = "Six";
      break;
  case "7":
      rankMsg = "Seven";
      break;
  case "8":
      rankMsg = "Eight";
      break;
  case "9":
      rankMsg = "Nine";
      break;
  case "t":
      rankMsg = "Ten";
      break;
  case "j":
      rankMsg = "Jack";
      break;
  case "q":
      rankMsg = "Queen";
      break;
  case "k":
      rankMsg = "King";
      break;
  case "a":
      rankMsg = "Ace";
      break;
}

if (suitMsg == "" || rankMsg == "") {
console.log("\nInvalid.\n")
} else {
console.log("\n" + rankMsg + " of " + suitMsg + ".\n")
}
