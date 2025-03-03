import { dobro } from './funcao.js';

const numero = parseFloat(prompt("Digite um número:"));
if (!isNaN(numero)) {
    console.log(`O dobro de ${numero} é ${dobro(numero)}`);
} else {
    console.log("Por favor, digite um número válido.");
}