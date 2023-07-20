// Se quiser testar no browser é só baixar a pasta com os arquivos e abrir o arquivo html

function tabuada() {

  var txtnum = document.querySelector('#num')
  var res = document.querySelector('#res')
  var num = Number(txtnum.value)
  var aux = ""

  for (let i = 1; i <= 10; i++) {
    if (i == 1) {
      aux = aux + `<table>
                          <thead><tr><th colspan="5">TABUADA DO ${num}</th></tr></thead>
                          <tbody><tr><td>${num}</td><td>x</td><td>${i}</td><td>=</td><td>${num*i}</td></tr>`
    } else if (i == 10) {
      aux = aux + `<tr><td>${num}</td><td>x</td><td>${i}</td><td>=</td><td>${num*i}</td></tr></tbody>`
    } else {
      aux = aux + `<tr><td>${num}</td><td>x</td><td>${i}</td><td>=</td><td>${num*i}</td></tr>`
    }   
  }

  res.innerHTML = `${aux}`
}