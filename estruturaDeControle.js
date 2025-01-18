// Solicita ao usuário um número
const numero3 = parseInt(prompt("Digite um número para ver a tabuada:"));

// Verifica se a entrada é um número válido
if (!isNaN(numero3)) {
  console.log(`Tabuada do ${numero3}:`);
  
  // Exibe a tabuada de 1 a 10
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero3} x ${i} = ${numero3 * i}`);
  }
} else {
  console.log("Por favor, insira um número válido.");
}
