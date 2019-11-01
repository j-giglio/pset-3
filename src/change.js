const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quart = 25;
const dime = 10;
const nick = 05
const penny = 01

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    amount *= 100;
    let numbQuart = Math.floor(amount / quart);
    amount %= quart;
    let numbDime = Math.floor(amount / dime);
    amount %= dime;
    let numbNick = Math.floor(amount / nick);
    amount %= nick;
    let numbPenny = Math.floor(amount / penny);
    amount %= penny;
    console.log("\n" + numbQuart + " quarters, " + numbDime + " dimes, " + numbNick + " nickels, and " + numbPenny + " pennies");
}
