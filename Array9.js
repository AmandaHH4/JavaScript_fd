// Arrays 

// Como criar um Array ?

let arr = ['Amanda', 26, 1.77, true]

console.log(arr);

// Como acessar os elementos do Array

console.log('Primeiro elemento:', arr[0]);
console.log('segundo elemento:', arr[1]);
console.log('terceiro elemento:', arr[2]);
console.log('quarto elemento:', arr[3]);

// Como obter o tamanho do array 

console.log(arr.length);  // tamanho

// Percorrendo Arrays

for (let i = 0; i < 4; i++) {   //arr.length
    console.log(arr[i]);
}

// metodos de array - part 2

const arr1 = [30, 12, 45, 34, 29]
const arr2 = []

// Fatiamento slice
 
console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));

// Adicionando elementos : pop | unshift

console.log('Antes de  adcionar:', arr2);

arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de adicionar:', arr2);


//
console.log('Antes de adicionar com unshift:', arr2);

arr2.unshift(0)

console.log('Depois de adicionar com unshift:', arr2);

// Removendo elementos: pop | shift 

console.log('Antes de remover com o pop:');

arr2.pop()

console.log('Depois de remover com o pop:');

//

console.log('Antes de remover com o shift:');

arr2.shift()

console.log('Depois de remover com o shift:');

//

// concatenando arrays concat

console.log('arr1', arr2);
console.log('arr1', arr2);

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

// Buscando elementos : indexOf | lastIndexof

console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34)

console.log((indiceDoElemento34));

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.indexOf(3));

// Descobrindo aexistencia de um elemento: includes

console.log(arr1);

console.log(arr1.includes(10));

// invertendo arrays : reverse 

console.log('arr1 normal', arr1);

const arr1Invertido =  arr1.reverse()

console.log('arr1 invertido:', arr1Invertido);

// console.clear