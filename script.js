const numeros = [1, 2, 3, 4, 5]; 
const copiadoNumeros = [...numeros]; 

console.log(copiadoNumeros); 

function isMaiorDeIdade(idade) {
    return idade >= 18 ? 'Maior_de_idade' : 'Menor de idade';
}

console.log(isMaiorDeIdade(19));
console.log(isMaiorDeIdade(17));

function concatenarArrays(array1, array2) {
    return [...array1, ...array2];
}

const arrayGay = [1, 2, 3];
const arrayTchola = [4, 5, 6];

const resultado = concatenarArrays(arrayGay, arrayTchola);
console.log(resultado); 

const X = 7; 
const resultado2 = (X % 2 === 0) ? "Par" : "Ímpar";

console.log(resultado); 

function clonarObjeto(objeto) {
    return { ...objeto };
}

const objetoOriginal = { nome: "Leonidas", idade: 300 };
const objetoClonado = clonarObjeto(objetoOriginal);

console.log(objetoClonado); 