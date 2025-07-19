// Importa funções do módulo 'funcao.js' para uso no código atual
import { dobro, soma, subtracao } from './funcao.js';

// Solicita ao usuário um número e valida se a entrada é um número válido
const num = parseFloat(prompt("Digite um número:"));
if (!isNaN(num)) {
    console.log(`O dobro de ${num} é ${dobro(num)}`);  // Exibe o dobro do número
} else {
    console.log("Por favor, digite um número válido.");  // Exibe mensagem de erro se a entrada não for um número válido
}

/**
 * Função que solicita um número ao usuário.
 * @param {string} numero - Mensagem que será exibida ao usuário.
 * @returns {number|null} - Retorna o número informado pelo usuário ou null se a entrada for inválida.
 */
function pedirNumero(numero) {
    const num5 = parseFloat(prompt("Digite um número:"));
    if (!isNaN(numero)) {  // Valida se o número informado é válido
        console.log("Digite um número válido.");
        return null;  // Retorna null se a entrada for inválida
    }
    return numero;  // Retorna o número válido informado
}

/**
 * Função que exibe um menu com opções para o usuário e retorna a opção escolhida.
 * @returns {number} - Retorna a opção escolhida pelo usuário (1, 2, 3 ou 4).
 */
function menu() {
    const opcao = parseInt(prompt("Escolha uma opção:\n1. Dobro de um número\n2. Soma de dois números\n3. Subtração de dois números\n4. Sair"));
    return opcao;  // Retorna a opção escolhida pelo usuário
}

// Laço principal que mantém o menu ativo até o usuário escolher a opção de sair (opção 4)
while (true) {
    const opcao = menu();  // Chama o menu para exibir as opções
    switch (opcao) {  // Verifica qual opção foi escolhida
        case "1":  // Caso o usuário tenha escolhido a opção 1 (dobro de um número)
            const num = pedirNumero("Digite número:");  // Chama a função para pedir o número
            if (num !== null) console.log(`O dobro de ${num} é ${dobro(num)}`);  // Exibe o dobro do número se for válido
            break;
            
        case "2":  // Caso o usuário tenha escolhido a opção 2 (soma de dois números)
            const num1 = pedirNumero("Digite o primeiro número:");  // Chama a função para pedir o primeiro número
            const num2 = pedirNumero("Digite o segundo número:");  // Chama a função para pedir o segundo número
            if (num1 !== null && num2 !== null) console.log(`A soma de ${num1} e ${num2} é ${soma(num1, num2)}`);  // Exibe a soma se os dois números forem válidos
            break;

        case "3":  // Caso o usuário tenha escolhido a opção 3 (subtração de dois números)
            const numero3 = pedirNumero("Digite o primeiro número:");  // Chama a função para pedir o primeiro número
            const numero4 = pedirNumero("Digite o segundo número:");  // Chama a função para pedir o segundo número
            if (numero3 !== null && numero4 !== null) console.log(`A subtração de ${numero3} e ${numero4} é ${subtracao(numero3, numero4)}`);  // Exibe a subtração se os dois números forem válidos
            break;
        
        case "4":  // Caso o usuário tenha escolhido a opção 4 (sair)
            console.log("Saindo...");  // Exibe mensagem de saída
            break;
        default:  // Caso o usuário tenha escolhido uma opção inválida
            console.log("Opção inválida!");  // Exibe mensagem de erro
    }
    if (escolha === "opcao")  // Condição para sair do loop (erro no código original)
        break;  // Interrompe o laço de repetição
}
/* Explicação geral do código:
Importação de funções: O código importa funções (dobro, soma, subtracao) de um módulo externo chamado funcao.js.
Entrada de dados: O código solicita um número ao usuário e valida se ele é válido. Caso seja, ele exibe o dobro desse número. 
Caso contrário, uma mensagem de erro é exibida.

Funções auxiliares:
pedirNumero: Solicita ao usuário um número e valida se é válido, retornando o número ou null se a entrada for inválida.
menu: Exibe um menu com opções (dobro de um número, soma, subtração ou sair) e retorna a opção escolhida pelo usuário.

Laço de repetição:
O código executa um laço infinito (while (true)), onde o menu é mostrado repetidamente até que o usuário escolha a opção de sair (opção 4).
Dependendo da escolha do usuário, o código realiza a operação correspondente (dobro, soma, subtração) e exibe o resultado.
Erros a serem corrigidos:

No código original, existe um erro em algumas variáveis, como numero1, numero2, numero3, e numero4 em alguns pontos, onde o nome não corresponde à variável correta.
A variável escolha === "opcao" não está corretamente implementada, o que pode levar a um erro lógico. Isso precisa ser corrigido para que o laço seja interrompido quando a opção 4 for escolhida. */