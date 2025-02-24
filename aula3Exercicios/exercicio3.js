// Solicita ao usuário que insira notas de alunos e calcula a média
let notas = [];
let continuar = true;

while (continuar) {
    let nota = parseFloat(prompt("Digite uma nota (ou um valor negativo para encerrar):"));
    
    if (isNaN(nota)) {
        alert("Por favor, digite um número válido.");
    } else if (nota < 0) {
        continuar = false;
    } else {
        notas.push(nota);
    }
}

if (notas.length > 0) {
    let soma = notas.reduce((acc, val) => acc + val, 0);
    let media = soma / notas.length;
    document.write(`A média das notas é: ${media.toFixed(2)}`);
} else {
    document.write("Nenhuma nota válida foi inserida.");
}
