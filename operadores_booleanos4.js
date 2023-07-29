// > Operadores Booleanos

// igualdade     == (ou ===)
// Desigualdade  != (ou !==)
// Maior que:    >
//Maior ou igual >=
// menor que:    <
//Menor ou igual <=

let numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == 10);
console.log(numero == '10'); // so compara conteudo ==
console.log(numero === '10'); // editar bugs == optar por ===

console.clear(); // dica : limpa terminal

console.log ( 10 != 10)
console.log ( 10 != '10')
console.log ( 10 !== '10')

// - conjunçoes logicas 


// And => &&

let  idade = 25;
let tenhoCNH = true;

const possoDirigir = idade >= 18 &&  tenhoCNH === true
console.log('posso dirigir ?', possoDirigir);

// or => ||

 idade = 40;
 const votoFacultativo = idade < 18 || idade >= 70

// not => !

 const EstougostandodoCurso = false
 console.log(!EstougostandodoCurso);
