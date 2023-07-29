// Estruturas condicionais

let idade = 15 

if (idade >= 18) {   //se=if
    console.log('voce é maior de idade!');
}
else{  // somente se não for verdadeiro 
    console.log('voce é menor de idade!');
}

// se media >= 7, aprovado
// se media <= 7 and media >= 5 recuperaçao
// se media <5, reprovado
console.clear()


let media = 4 

if (media >= 7) {
    console.log('Aprovado')
}
else if (media < 7 && media >= 5) {
    console.log('recuperação')
} 
else {
    console.log('reprovado')
}

