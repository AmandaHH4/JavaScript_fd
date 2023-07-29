// Laços Númericos

const input = require('readline-sync')

// O problema

// const nota1 = Number (input.question('Informe a nota 1: '));
// const nota2 = Number (input.question('Informe a nota 2: '));
// const nota3 = Number (input.question('Informe a nota 3: '));

// let media = ( nota1 + nota2 + nota3) /3

//Acumulador
let Acumulador = 0;

Acumulador += 10;

Acumulador = Acumulador + 2

Acumulador++

console.log(Acumulador);

// Estrutura for -- repetição controlada
for (let i = 0; i < 6; i++) {
    console.log('Repetição', i);
    
}
for (let i = 10; i <= 12; i++) {
    console.log('Repetição', i);
    
}
for (let i = 12; i > 6; i--) {
    console.log('Repetição', i);
    
}

// Problema

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    console.log('Repetição', i);
    nota = Number  (input.questio2n(`Informe a nota ${i} do Aluno: `));

    soma = soma + nota
}

console.log(`media do aluno é ${soma/3}.`);