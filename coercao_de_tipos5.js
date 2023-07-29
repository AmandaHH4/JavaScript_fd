// > coerção conversao) de tipos

// - 1. Coerção Explicita (manual)

let numero = 10;

console.log(numero, typeof numero);
let numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('54454554'));
console.log(parseFloat('4455.656'));
console.log(parseInt('5556657.89'));
console.log(Boolean(0));

console.clear()

// - 2 Coerção Implicita (automática)

console.log(10 + 1);
console.log('101' + 1);  //concat
console.log('10' - 1);
console.log('hdhs' - 16); // not a number NaN


// outros exemplos

// Qual será a saida desse codigo?
 let n = 1 + "1";
 n = n - 1
 console.log (n);   // quando selecionar um trecho do codigo roda somente ele 

// Qual será a saida desse codigo?
 console.log ( 2 + 3 + 4 + "5");

// Qual será a saida desse codigo?
 console.log ( "5"+ 2 + 3 + 4  );


// Qual será a saida desse codigo?
 console.log ( "10" -"4" - "3" - 2 + "5" );
