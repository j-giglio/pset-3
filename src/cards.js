const readlineSync = require("readline-sync");

const inpt = (readlineSync.question("\nEnter a playing card: "));
let suit = inpt.charAt(1);
suit = suit.toLowerCase
let val = inpt.charAt(0);
val = val.toLowerCase

{
  switch (suit) {
    case "c":
        let suitMsg = "Clubs";
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
    default:
         let suitError = true;
        break;
  }

  switch (val) {
      case "2":
          let valMsg = "Two";
          break;
        case "3":
          valMsg = "Three";
          break;
      case "4":
          valMsg = "Four";
          break;
      case "5":
          valMsg = "Five";
          break;
      case "6":
          valMsg = "Six";
          break;
      case "7":
          valMsg = "Seven";
          break;
      case "8":
          valMsg = "Eight";
          break;
      case "9":
          valMsg = "Nine";
          break;
      case "t":
          valMsg = "Ten";
          break;
     case "j":
          valMsg = "Jack";
          break;
     case "q":
          valMsg = "Queen";
          break;
      case "k":
          valMsg = "King";
          break;
      case "a":
          valMsg = "Ace";
          break;
      default:
          valError = true;
  }
}
    console.log("\n" + valMsg + "of" + suitMsg + ".\n")
