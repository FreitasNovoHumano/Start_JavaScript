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
