import { dobro, soma, subtracao } from './funcao.js';

const numero = parseFloat(prompt("Digite um número:"));
if (!isNaN(numero)) {
    console.log(`O dobro de ${numero} é ${dobro(numero)}`);
} else {
    console.log("Por favor, digite um número válido.");
}

function pedirNumero(Digite um número:) {
    const numero = parseFloat(prompt("Digite um número:"));
    if (!isNaN(numero)) {
        console.log("Digite um número válido.");
        return null;
    }
    return numero;
}

function menu() {
    const opcao = parseInt(prompt("escolha uma opção:\n1 - Dobro\n2 - Soma\n3 - Subtração\n4 - Sair"));
    return opcao;
}

while (true) {
    const opcao = menu();
    switch (opcao) {
        case "1":
            const numero = pedirNumero("Digite um número:");
            if (numero !== null) console.log(`O dobro de ${numero} é ${dobro(numero)}`);
            break;
            
        case "2":
            const numero1 = pedirNumero("Digite o primeiro número:");
            const numero2 = pedirNumero("Digite o segundo número:");
            if (numero1 !== null && numero2 !== null) console.log(`A soma de ${numero1} e ${numero2} é ${soma(numero1, numero2)}`);
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
    if (escolha === "4") break;

    }