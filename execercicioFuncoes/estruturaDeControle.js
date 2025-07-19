// ESTRUTURA CONDICIONAL SIMPLES IF ELSE, SWITCH
const idade = parseFloat(prompt("Quantos anos você tem?"));

// Verifica a idade e exibe uma mensagem correspondente
if (idade >= 18) {
  console.log("Você é maior de idade");
} else if (idade >= 12) {
  console.log("Você é adolescente");
} else {
  console.log("Você é menor de idade");
}

// CONDICIONAL SWITCH
let paisDeOrigem = prompt("Qual é seu país de origem?");
switch (paisDeOrigem) {
  case "Argentina":
    alert("Você não é brasileiro");
    break;
  case "Espanha":
    alert("Você é europeu");
    break;
  case "Brasil":
    alert("Você é brasileiro");
    break;
  default:
    alert("País não identificado");
}

// ESTRUTURA DE REPETIÇÃO WHILE, DO WHILE, FOR
let numero3 = 9;

// Loop while: reduz o número até 1
while (numero3 > 1) {
  alert("O número é " + numero3);
  alert("Diminuindo o número...");
  numero3 = numero3 - 1;
}

// Loop while para selecionar opções
let opcao = prompt("Escolha uma opção: \n1. teste\n2. teste 2\n3. sair");

while (opcao !== "3") {
  alert("Você escolheu a opção " + opcao);
  opcao = prompt("Escolha uma opção: \n1. teste\n2. teste 2\n3. sair");
}

// Loop do while para garantir execução pelo menos uma vez
do {
  alert("Você escolheu a opção " + opcao);
  opcao = prompt("Escolha uma opção: \n1. teste\n2. teste 2\n3. sair");
} while (opcao !== "3");

alert("Você escolheu sair...");

// ESTRUTURA DE REPETIÇÃO FOR
let numero4 = parseFloat(prompt("Escolha um número"));
alert("O número é " + numero4);

// Loop for para comparar um número com o índice
for (let i = 0; numero4 > i; i++) {
  alert(`${numero4} é maior do que i - i = ${i}`);
}