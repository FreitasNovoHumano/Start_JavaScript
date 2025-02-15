//ESTRUTURA CONDICIONAL SIMPLES IF ELSE, SWITCH
const idade = parseFloat(prompt("Quantos anos você tem?"));

if (idade >= 18) {
  console.log("Você é maior de idade")
} else if (idade >= 12) {
  console.log("Você é adolecente")
} else{
  console.log("Você é menor de idade")
}

//CONDICIONAL SWITCH
let paisDeOrigem = prompt("Qual é seu país de origem?")
switch ("Brasil"){
  case "Argentina":
    alert("Você não é brasileiro")
    break;
  case "Espanha":
    alert("Você é europeu")
    break;
  case "Brasil":
    alert("Voc~e é brasileiro")
    break;  
}

//ESTRUTURA DE REPETIÇÃO WHILE, DO WHILE, FOR
let numero3 = 9

while (numero3 > 1){
  alert("O número é " + numero)
  alert("Diminuindo o número...")
  numero3 = numero3 - 1
}

let opcao = prompt("Escolha uma opção: 1. teste\n2. teste 2\n3. sair")

while (opcao !== "3"){
  alert("Você escolheu a opção " + opcao)
  opcao = prompt("Escolha uma opção: \n1. teste\n2. teste 2\n3. sair")
}

do{
  alert("Você escolheu a opção " + opcao)
  opcao = prompt("Escolha uma opção: \n1. teste\n2. teste 2\n3. sair")
} while (opcao !== "3")

alert("Você wscolheu sair...")

//ESTRUTURA DE REPETIÇÃO FOR
let numero4 = parseFloat(prompt("Escolha um número"))
alert("O número é " + numero)

//parte 1: código executado antes da condição
//parte 2: verificação da condição
//parte 3: código executado após o bloco do for
for (let i = 0; numero > i;) {
  alert('${numero} é maior do que i - i = ${i}')
  i = i + 1    
  }
