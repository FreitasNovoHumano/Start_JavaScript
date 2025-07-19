// Solicita ao usuário um número inteiro positivo
const numero = parseInt(prompt("Digite um número inteiro positivo para calcular o fatorial:"));

// Verifica se o valor digitado é um número válido e positivo
if(!isNaN(numero) && numero >=0) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial  *= i;
    }
    //Exibe o resultado na do cálculo fatorial na página
    document.write(`o fatorial de ${numero} e ${fatorial}.`);
} else {
    document.write("por favor digite um número inteiro positivo válido.");
}