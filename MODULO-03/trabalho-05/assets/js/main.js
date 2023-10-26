let numConta1, saldoConta1, tipoConta1, agenciaConta1;
do {
  numConta1 = Number(prompt("Digite o número da sua conta:"));
  saldoConta1 = Number(prompt("Digite o saldo da conta:"));
  tipoConta1 = prompt("Digite o tipo da conta (ex: corrente, poupança...):");
  agenciaConta1 = Number(prompt("Digite o número da agência da conta:"));

  if((isNaN(numConta1) || isNaN(saldoConta1) || isNaN(agenciaConta1))) {
    alert("Número da conta, saldo ou número agência com valores inválidos, insira apenas números nesses campos.")
  }

} while (isNaN(numConta1) || isNaN(saldoConta1) || isNaN(agenciaConta1));

let minhaConta = new Banco(numConta1, saldoConta1, tipoConta1, agenciaConta1);

let option, valor;

do {
  option = Number(prompt("Menu de Opções \n" +
                         "1 - Mostrar saldo da conta \n" +
                         "2 - Fazer depósito \n" +
                         "3 - Sacar \n" +
                         "4 - Mostrar número da conta \n" +
                         "5 - Sair"));
  switch(option){
    case 1:
      alert(`Saldo: R$${minhaConta.mostrarSaldo().toFixed(2)}`);
      break;
    case 2:
      valor = Number(prompt("Digite o valor a ser depositado:"));
      if(valor < 0) {
        valor = 0;
      }
      minhaConta.deposito(valor);
      alert(`Depósito realizado com sucesso no valor de R$${valor.toFixed(2)}`)
      break;
    case 3:
      valor = Number(prompt("Digite o valor a ser sacado: "));
      if (valor > minhaConta.saldo) {
        valor = minhaConta.saldo;
        alert('Valor desejado excede o saldo, quantia a ser sacada será limitada ao valor em saldo.');
      }
      minhaConta.saque(valor);
      alert(`Saque realizado com sucesso no valor de R$${valor.toFixed(2)}`);
      break;
    case 4:
      alert(`Número da conta: ${minhaConta.mostrarConta()}`);
      break;
    case 5:
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Digite uma opção válida.");
      break;
  }
} while (option !== 5)

function Banco(conta,saldo, tipoConta, agencia) {
  this.conta = conta;
  this.saldo = saldo;
  this.tipoConta = tipoConta;
  this.agencia = agencia;

  this.mostrarSaldo = function (){
    return this.saldo;
  }
  this.deposito = function (valor){
    this.saldo += valor;
  }
  this.saque = function (valor){
    this.saldo -= valor;
  }
  this.mostrarConta = function (){
    return this.conta;
  }
}

