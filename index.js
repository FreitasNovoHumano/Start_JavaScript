alert("Começando meus estudos de JavaScript")

console.log("Estou usando a linguagem Javascript")

//var texto = "Olá Mundo"

var numero = 99

//var nome = "Fabio"
//let nome = "Lucas" // variavel pode ser alterada. Sobescreve o valor anterior

//const numero = 42 // variavel constante não pode ser alterada

//console.log(texto)

const nome = prompt("Qual é seu nome?")//prompt é uma função que exibe uma caixa de dialogo para o usuário inserir um valor
let idade = prompt("Qual sua idade?")
//const nome = "Fábio"
//const idade = 42
const sobrenome = "Freitas"
console.log( nome.length) //retorna o tamanho da string
console.log( nome + "Freitas") //concatenação


//alert("Meu nome é" + Fábio) 
alert(`Meu nome é ${nome} meu sobrenome é ${sobrenome} e eu tenho ${idade} anos`)//template string concatenação

//solicitando  ao uxuário para inserir uma frase
const frase = prompt("Por gentileza, insira uma Frase:");

//Conta o número de caracteres na frase
const numeroDeCaracteres = frase.length

//Exuibe o número de caracteres usando alert()
alert(`A frase que você digitou tem ${numeroDeCaracteres} carcteres`);
