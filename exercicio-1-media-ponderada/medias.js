//Script para calcular a média pomderada
// Inicializa a variável de controle para o loop
let continuar = true;

// Acumuladores para a soma dos pesos e da soma ponderada (valor * peso)
let somaPesos = 0;
let somaPonderada = 0;

//Arrays para armazenar os valores e pesos dígitados
let valoresDigitados = [];
let pesosDigitados = [];

// Loop principal para coletar dados até o usuário decidir parar
while (continuar) {
  // Solicita ao usuário um valor numérico
  let valor1 = parseFloat(prompt("Digite o 1º valor (númerico):"));
  let valor2 = parseFloat(prompt("Dígite o 2º valor (númerico):"));
  let valor3 = parseFloat(prompt("Digite o 3º valor (númerico):"));

  // Solicita o peso correspondente a esse valor
  let peso1 = parseFloat(prompt("Digite o peso correspondente 1º valor:"));
  let peso2 = parseFloat(prompt("Dígite o peso correspondente 2º valor:"));
  let peso3 = parseFloat(prompt("Dígite o peso correspondente 3º valor:"));
  

  // Verifica se o valor ou o peso são inválidos (NaN = Not a Number)
  if (
    isNaN(valor1) || isNaN(peso1 || 
    isNaN(valor2) || isNaN(peso2) || 
    isNaN(valor3) || isNaN(peso3) || 
    peso1 <= 0 || 
    peso2 <= 0 || 
    peso3 <= 0)) {
      alert("Valor ou peso inválido. Tente novamente."); // Se algum valor ou peso for inválido, exibe uma mensagem de erro
      continue; // Volta ao início do loop
  }

  // Armazenar os valores e pesos dígitados nos arrays
  valoresDigitados.push(valor1, valor2, valor3);
  pesosDigitados.push(peso1, peso2, peso3);

  // Soma ponderada: acumula valor * peso
  somaPonderada += valor1 * peso1 + valor2 * peso2 + valor3 * peso3;

  // Soma dos pesos
  somaPesos += peso1 + peso2 + peso3;

  // Pergunta se o usuário deseja continuar inserindo dados
  let resposta = prompt("Deseja adicionar outro valor? (s/n)").toLowerCase();

  // Se a resposta for diferente de "s", o loop termina
  if (resposta !== 's') {
    continuar = false;
  }
}

// Após o loop, verifica se houve pelo menos um peso válido
if (somaPesos === 0) {
  alert("Nenhum peso válido foi inserido. Impossível calcular média.");
} else {
  // Calcula a média ponderada dividindo a soma ponderada pela soma dos pesos
  let media = somaPonderada / somaPesos;
  // Exibir os valores e pesos digitados
  alert("Valores digitados: " + valoresDigitados.join(", ") + "\n" + "\n" + "\n");
  alert("Pesos digitados: " + pesosDigitados.join(", "));

  // Mostrar uma string com todos os valores e pesos digitados
  alert("valores digitados: " + valoresDigitados.join(", ") + "\n" + "pesos digitados: " + 
  pesosDigitados.join(", ") + "\n" + " Soma ponderada: " + somaPonderada.toFixed(3) + "\n" + 
  "A média ponderada é: " + media.toFixed(2));//duas casa décimais
}
