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
alert(`Meu nome é ${nome} meu sobrenome é ${sobreNome} e eu tenho ${idade} anos`)//template string concatenação

//solicitando  ao uxuário para inserir uma frase
let frase = prompt("Por gentileza, insira uma Frase:");

//Conta o número de caracteres na frase é o length que conta
let numeroDeCaracteres = frase.length

//Exuibe o número de caracteres usando alert() duas formas de concatenação abaixo
alert(`A frase que você digitou tem ${numeroDeCaracteres} carcteres`);
//alert("A frase possui" + numeroDeCaracteres + " caracteres." );


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

//Calculando a área usando a Fórmula de Heron // Math.sqrt() é uma função que calcula a rais quadrada
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



//PROGRAMA QUE CALCULA DESCONTO
//Solicitando ao usuário o valor da compra e a porcentajem de desconto
const valorCompra = parseFloat(prompt("Insira o valor da compra: "));
const porcentagemDesconto = parseFloat(prompt("Insira a porcentagem do desconto (%): "));

//Calcula o valor do desconto e o total após o desconto
const valorDesconto = (valorCompra * porcentagemDesconto) / 100;
const totalComDesconto = valorCompra - valorDesconto;

//Exibir os resultados ao usuário
alert(`Resultado:
    valor do desconto: R$ ${valorDesconto.toFixed(2)}
    Total com desconto: R$ ${totalComDesconto.toFixed(2)}`);

