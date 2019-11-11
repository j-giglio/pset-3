const readlineSync = require("readline-sync");

const inpt = (readlineSync.question("\nEnter a playing card: "));
const len = inpt.length;

let suit = inpt.charAt(1);
suit = suit.toLowerCase
let rank = inpt.charAt(0);
rank = rank.toLowerCase

if (len > 2) {
    console.log("\nInvalid.\n")
} else {
    if (suit == "c") {
       const suitMsg = "Clubs";
    } else if (suit == "h") {
        const suitMsg = "Hearts";
    } else if (suit == "s") {
        const suitMsg = "Spades";
    } else if (suit == "d") {
        const suitMsg = "Diamonds";
    } else {
        const suitMsg = "Invalid")
    }

    if (rank == "2") {
        const rankMsg = "Two";
    } else if (rank == "3") {
        const rankMsg = "Three";
    } else if (rank == "4") {
        const rankMsg = "Four";
    } else if (rank == "5") {
        const rankMsg = "Five";
    } else if (rank == "6") {
        const rankMsg = "Six";
    } else if (rank == "7") {
        const rankMsg = "Seven";
    } else if (rank == "8") {
        const rankMsg = "Eight";
    } else if (rank == "9") {
        const rankMsg = "Nine";
    } else if (rank == "t") {
        const rankMsg = "Ten";
    } else if (rank == "j") {
        const rankMsg = "Jack";
    } else if (rank == "q") {
        const rankMsg = "Queen";
    } else if (rank == "k") {
        const rankMsg = "King";
    } else if (rank == "a") {
        const rankMsg = "Ace";
    } else {
        const rankMsg = "Invalid")
    }

    if (suitMsg == "Invalid" || rankMsg == "Invalid") {
        console.log("\nInvalid.\n")
    } else {
       console.log("\n" + rankMsg + "of" + suitMsg + ".\n")
    }
}
