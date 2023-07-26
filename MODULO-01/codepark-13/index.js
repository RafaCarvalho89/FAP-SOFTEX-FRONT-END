function calc() {
  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)
  let op = Number(document.querySelector("#operation").value)
  let res = document.querySelector("#res")
  let calc

  switch (op) {
    case 1:
      calc = num1 + num2
      res.innerHTML = ` <p>Resultado: ${num1} + ${num2} = ${calc}</p>`
      break
    case 2:
      calc = num1 - num2
      res.innerHTML = ` <p>Resultado: ${num1} - ${num2} = ${calc}</p>`
      break
    case 3:
      calc = num1 * num2
      res.innerHTML = ` <p>Resultado: ${num1} * ${num2} = ${calc}</p>`
      break
    case 4:
      calc = num1 / num2
      res.innerHTML = ` <p>Resultado: ${num1} / ${num2} = ${calc}</p>`
      break
    default:
      res.innerHTML = ` <p>Resultado: 0 (opção inválida)`
      break
  }
}