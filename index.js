alert("Começando meus estudos de JavaScript")

console.log("Estou usando a linguagem Javascript")

//var texto = "Olá Mundo"

var numero = 99

//var nome = "Fabio"
//let nome = "Lucas" // variavel pode ser alterada. Sobescreve o valor anterior

//const numero = 42 // variavel constante não pode ser alterada

//console.log(texto)

const nome = prompt("Qual é seu nome?")//prompt é uma função que exibe uma caixa de dialogo para o usuário inserir um valor
const sobreNome = prompt("Qual seu Sobrenome")
let idade = prompt("Qual sua idade?")
//const nome = "Fábio"
//const idade = 42
//const sobrenome = "Freitas"
console.log( nome.length) //retorna o tamanho da string
//console.log( nome + "Freitas") //concatenação


//alert("Meu nome é" + Fábio) 
alert(`Meu nome é ${nome} meu sobrenome é ${sobrenome} e eu tenho ${idade} anos`)//template string concatenação

//solicitando  ao uxuário para inserir uma frase
const frase = prompt("Por gentileza, insira uma Frase:");

//Conta o número de caracteres na frase
const numeroDeCaracteres = frase.length

//Exuibe o número de caracteres usando alert()
alert(`A frase que você digitou tem ${numeroDeCaracteres} carcteres`);


//CALCULADORA SIMPLES
//Solicite ao usuário dois números
const numero1 = parseFloat(prompt("Digite um número:"));
const numero2 = parseFloat(prompt("Digite outro número:"));

//Realize as operação matématicas
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicação = numero1 * numero2;
const divisao = numero1 / numero2;

//Exibir os resultados usando alert()
alert(`Resultados:
    Adição: ${soma}
    Subtração: ${subtracao}
    Multiplicação: ${multiplicação}
    Divisão: ${divisao}`);


//PROGRAMA QUE CALCULA ÁREA E O PERÍMETRO DE UM TRIÂNGULO
//Solicite ao usuário os lados do triangulo
const ladoA = parseFloat(prompt("Insira o comprimento do lado A do triangulo: "));
const ladoB = parseFloat(prompt("Insira o comprimento do lado B do triangulo: "));
const ladoC = parseFloat(prompt("Insira o comprimento do lado C do triangulo: "));

//Calcula o perímetro do triangulo
const perimetro = ladoA + ladoB + ladoC;

//Calculando a área usando a Fórmula de Heron
const semiPerimetro = perimetro / 2;
const area = Math.sqrt(
    semiPerimetro * 
    (semiPerimetro - ladoA) *
    (semiPerimetro - ladoB) *
    (semiPerimetro - ladoC)
);

//Exibe os resultados
alert(`Resultado:
    Perímetro: ${perimetro.toFixed(2)}
    Área: ${area.toFixed(2)}`);

