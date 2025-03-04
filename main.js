import { dobro, soma, subtracao } from './funcao.js';

// Solicita um número ao usuário e exibe o dobro
const num = parseFloat(prompt("Digite um número:"));
if (!isNaN(num)) {
    console.log(`O dobro de ${num} é ${dobro(num)}`);
} else {
    console.log("Por favor, digite um número válido.");
}

// Função para solicitar um número ao usuário
function pedirNumero(mensagem) {
    const numero = parseFloat(prompt(mensagem));
    if (isNaN(numero)) {
        console.log("Digite um número válido.");
        return null;
    }
    return numero;
}

// Função para exibir o menu e capturar a escolha do usuário
function menu() {
    const opcao = parseInt(prompt("Escolha uma opção:\n1. Dobro de um número\n2. Soma de dois números\n3. Subtração de dois números\n4. Sair"));
    return opcao;
}

while (true) {
    const opcao = menu();
    switch (opcao) {
        case 1:
            const num = pedirNumero("Digite um número:");
            if (num !== null) console.log(`O dobro de ${num} é ${dobro(num)}`);
            break;
            
        case 2:
            const num1 = pedirNumero("Digite o primeiro número:");
            const num2 = pedirNumero("Digite o segundo número:");
            if (num1 !== null && num2 !== null) console.log(`A soma de ${num1} e ${num2} é ${soma(num1, num2)}`);
            break;

        case 3:
            const num3 = pedirNumero("Digite o primeiro número:");
            const num4 = pedirNumero("Digite o segundo número:");
            if (num3 !== null && num4 !== null) console.log(`A subtração de ${num3} e ${num4} é ${subtracao(num3, num4)}`);
            break;
        
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");
    }
    if (opcao === 4) break;
}