import { calcularDiasRestantesParaAniversario, calcularIdade } from './funcoes.js';

//Solicita a data para o usuario
const dataNascimento = prompt("Digite sua data de nascimento (DD/MM/AAAA):");

//Executa as funções
const idade = calcularIdade(dataNascimento);
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento);

//Exibir o resultado
alert(`Você tem ${idade} anos e faltam ${diasRestantes} dias para o seu aniversário.`)