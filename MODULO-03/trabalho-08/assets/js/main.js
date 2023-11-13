const div = document.querySelector('#res');
const msg = document.querySelector('#msg');
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
try {
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Digite valores numéricos.");
  }
  let resultado = numero1 / numero2;
  if (numero2 === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  div.innerHTML = `
    <p>Primeiro número: ${numero1}</p>
    <p>Segundo número: ${numero2}</p>
    <p>Operação: ${numero1} / ${numero2}</p>
    <p>Resultado: ${resultado}</p>
  `;
} catch (error) {
  div.innerHTML = `
    <p>Primeiro número: ${numero1}</p>
    <p>Segundo número: ${numero2}</p>
    <p>Operação: ${numero1} / ${numero2}</p>
    <p>Ocorreu um erro: ${error.message}</p>
  `;
} finally {
  msg.innerHTML = "Execução concluída.";
}
