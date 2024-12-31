// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(account, balance) {
    this.account = account;
    this.balance = balance;
    console.log(`A/c No : ${this.account}`);
    console.log(`Opening Balance : ${this.balance}`);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited : $${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn : $${amount}`);
    } else {
      console.log(`Want to Withdrawn : $${amount}`);
      console.log("Insufficient Balance!");
    }
  }

  displayBalance() {
    console.log(`Account Balance : ${this.balance}`);
  }
}

const ac1 = new BankAccount("SB-500", 15000);

ac1.deposit(500);
ac1.withdraw(900);
ac1.displayBalance();
ac1.withdraw(1500);
ac1.deposit(2000);
ac1.displayBalance();
