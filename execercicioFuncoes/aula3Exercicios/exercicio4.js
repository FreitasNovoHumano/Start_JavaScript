/**
 * Jogo de Adivinhação
 * 
 * O computador gera um número aleatório entre 1 e 100.
 * O jogador tem um número limitado de tentativas para adivinhar o número.
 * O programa informa se o palpite do usuário é maior ou menor que o número secreto.
 * O jogo termina quando o jogador acerta o número ou esgota todas as tentativas.
 */

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const tentativasMaximas = 10; // Define o número máximo de tentativas
let tentativas = 0; // Contador de tentativas
let acertou = false; // Variável de controle para verificar se o jogador acertou

// Loop para permitir que o jogador tente adivinhar o número
while (tentativas < tentativasMaximas && !acertou) {
    // Solicita um palpite ao jogador
    let palpite = parseInt(prompt(`Tentativa ${tentativas + 1}/${tentativasMaximas}: Adivinhe um número entre 1 e 100:`));
    
    // Verifica se a entrada é válida
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }
    
    tentativas++; // Incrementa o número de tentativas
    
    // Verifica se o jogador acertou o número
    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`);
        acertou = true;
    } else if (palpite > numeroSecreto) {
        alert("O número é menor. Tente novamente!");
    } else {
        alert("O número é maior. Tente novamente!");
    }
}

// Se o jogador não acertar dentro do limite de tentativas, exibe o número correto
if (!acertou) {
    alert(`Suas ${tentativasMaximas} tentativas acabaram! O número secreto era ${numeroSecreto}.`);
}
