function register() {
  let name = document.querySelector("#name").value; // stri
  let wage = Number(document.querySelector("#wage").value); // number
  let age = Number(document.querySelector("#age").value);// number
  let degree = document.querySelector("input[name='degree']:checked").value; // string
  let res = document.querySelector("#res");

  res.innerHTML = `
                    <hr>
                    <p>Nome: ${name}</p>
                    <p>Salário: R$ ${wage}</p>
                    <p>Idade: ${age} anos</p>
                    <p>Possui diploma: ${degree}</p>
                    <h3>Cadastro concluído com sucesso.</h3>
  `;
}