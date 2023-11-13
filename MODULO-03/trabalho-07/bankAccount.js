// Objeto abstrato
class bankAccount {
  constructor(client, balance, type) {
    this.client = client;
    this.balance = balance;
    this.type = type;
  }

  deposite(value) {
    this.balance += value;
    console.log(`Depósito de ${value} realizado. Novo saldo: ${this.balance}`);
  }

  withdraw(value) {
    if (value <= this.balance) {
      this.balance -= value;
      console.log(`Saque de ${value} realizado. Novo saldo: ${this.balance}`);
    } else {
      console.log('Saldo insuficiente para saque.');
    }
  }

  checkBalance() {
    console.log(`Saldo atual: ${this.balance}`);
  }
}

const myAccount = new bankAccount('João', 1000, 'Corrente');
myAccount.deposite(500);
myAccount.withdraw(200);
myAccount.checkBalance();
