const numero5 = parseInt(prompt("Informe um numero: ")); // Solicita ao usuário um número

//VERIFICANDO SE O VALOR DIGITADO É UM NÚMERO VÁLIDO
if (!isNaN(numero5)) {
    console.log('Tabuada do ${numero}:');
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero5} x ${i} = ${numero5 * i}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}