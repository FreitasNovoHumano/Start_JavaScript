// Este programa solicita ao usuário que insira notas de alunos
// e calcula a média das notas inseridas.

let notas = []; // Array para armazenar as notas
let continuar = true; // Variável de controle para continuar ou parar o loop

while (continuar) {
    let nota = parseFloat(prompt("Digite uma nota (ou um valor negativo para encerrar):")); // Solicita uma nota ao usuário
    
    if (isNaN(nota)) { // Verifica se o valor inserido não é um número
        alert("Por favor, digite um número válido.");
    } else if (nota < 0) { // Se o usuário inserir um número negativo, encerra o loop
        continuar = false;
    } else {
        notas.push(nota); // Adiciona a nota ao array
    }
}

if (notas.length > 0) { // Verifica se há notas no array
    let soma = notas.reduce((acc, val) => acc + val, 0); // Soma todas as notas
    let media = soma / notas.length; // Calcula a média das notas
    document.write(`A média das notas é: ${media.toFixed(2)}`); // Exibe a média formatada com 2 casas decimais
} else {
    document.write("Nenhuma nota válida foi inserida."); // Exibe uma mensagem caso nenhuma nota válida tenha sido inserida
}
