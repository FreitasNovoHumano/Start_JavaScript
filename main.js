import { dobro, soma, subtracao } from './funcao.js';

const num = parseFloat(prompt("Digite um número:"));
if (!isNaN(num)) {
    console.log(`O dobro de ${num} é ${dobro(num)}`);
} else {
    console.log("Por favor, digite um número válido.");
}

function pedirNumero(numero) {
    const num5 = parseFloat(prompt("Digite um número:"));
    if (!isNaN(numero)) {
        console.log("Digite um número válido.");
        return null;
    }
    return numero;
}

function menu() {
    const opcao = parseInt(prompt("escolha uma opção:\n1. Dobro de um número\n2. Soma dois números\n3. Subtração dois números\n4. Sair"));
    return opcao;
}

while (true) {
    const opcao = menu();
    switch (opcao) {
        case "1":
            const num = pedirNumero("Digite número:");
            if (num !== null) console.log(`O dobro de ${num} é ${dobro(num)}`);
            break;
            
        case "2":
            const num1 = pedirNumero("Digite o primeiro número:");
            const num2 = pedirNumero("Digite o segundo número:");
            if (numero1 !== null && numero2 !== null) console.log(`A soma de ${num1} e ${num2} é ${soma(num1, num2)}`);
            break;

        case "3":
            const numero3 = pedirNumero("Digite o primeiro número:");
            const numero4 = pedirNumero("Digite o segundo número:");
            if (numero1 !== null && numero2 !== null) console.log(`A subtração de ${numero3} e ${numero4} é ${subtracao(numero3, numero4)}`);
            break;
        
        case "4":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");
    }
    if (escolha === "opcao");
         break;
    }