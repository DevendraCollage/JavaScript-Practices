// Write a JavaScript function to convert an amount into coins.

// Sample function : amountToCoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

const amountToCoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountToCoins(left, coins));
    } else {
      coins.shift();
      return amountToCoins(left, coins);
    }
  }
};

const prompt = require("prompt-sync")();

var amount = parseInt(prompt("Enter The Amount : "));

var n = parseInt(prompt("Enter The Coins Array Size : "));

var coins = [];

console.log("Enter The Coins Array Elements : ");
for (let i = 0; i < n; i++) {
  var elem = parseInt(prompt(`[${i}] : `));
  coins.push(elem);
}

console.log(amountToCoins(amount, coins));
