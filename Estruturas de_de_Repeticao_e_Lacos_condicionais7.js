// > Laços condicionais // enquanto a condição for verdadeira ele vai continuar repetindo no momento que a mesma deixar
// de ser verdadeira ele encerra o fluxo 

const input = require('readline-sync')

const numero_sorteado =5;

let numero = Number ( input.question ('Qual numero voce escolhe? '))

//console.log(numero, typeof numero);
  
//exemplo com o if

// if (numero === numero_sorteado) {
//     console.log('Você acertou! ');
// } else {
//     console.log('Você errou! ');
// }

while (numero !== numero_sorteado) {
    console.log('Você errou o número. tente novamente... ');

    numero = Number ( input.question ('Qual numero voce escolhe? '))
}
    console.log('Você acertou! ')
