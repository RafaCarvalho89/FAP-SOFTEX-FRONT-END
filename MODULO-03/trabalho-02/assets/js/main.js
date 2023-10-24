let nota1, nota2, nota3, media;

nota1 = Number(prompt('Digite a primeira nota do aluno: '));
nota2 = Number(prompt('Digite a segunda nota do aluno: '));
nota3 = Number(prompt('Digite a terceira nota do aluno: '));

media = (nota1 + nota2 + nota3) / 3;


console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}`)
console.log(`A média do aluno é ${media.toFixed(1)}.`);