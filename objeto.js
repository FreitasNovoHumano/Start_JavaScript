// Objeto "pessoa" com propriedades e um método
let pessoa = {
    nome: "Fábio", // Nome da pessoa
    idade: 42, // Idade da pessoa
    endereco: {
        rua: "José Isidor Miranda", // Rua do endereço
        numero: "133" // Número da residência
    },
    ola: function () { // Método que exibe um alerta
        alert("Olá, mundo!")
    }
}

// Exibindo as propriedades do objeto "pessoa"
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco.rua)
console.log(pessoa.endereco.numero)
console.log(pessoa.ola()) // Chamada do método "ola()"

// Objeto "calculadora" com propriedades numéricas e um método
let calculadora = {
    x: 5,
    y: 10,
    soma: function () {
        alert(`A soma de ${this.x} e ${this.y} é ${this.x + this.y}`) // Exibe a soma de "x" e "y"
    }
}

calculadora.soma()
calculadora.x = 50 // Alterando o valor de "x"
calculadora.soma()

// Arrays Método
// Nome da variável: LiataDeFrutas
let listaDeFrutas = ["Maçã", "Laranja", "Uva", "Banana", "Abacaxi"]
console.log(listaDeFrutas[0]) // Exibe o primeiro elemento
console.log(listaDeFrutas)

listaDeFrutas[1] = "Pera" // Substitui "Laranja" por "Pera"
console.log(listaDeFrutas)

listaDeFrutas.push("Melancia") // Adiciona "Melancia" ao final
console.log(listaDeFrutas)

listaDeFrutas.pop() // Remove o último elemento
console.log(listaDeFrutas)

listaDeFrutas.shift() // Remove o primeiro elemento
console.log(listaDeFrutas)

listaDeFrutas.unshift("Morango") // Adiciona "Morango" no início
console.log(listaDeFrutas)

// Trabalhando com arrays mistos
let numeros = [4, 9, 10, 20, false, true, "5"]
console.log(numeros)

let novoArray = listaDeFrutas.concat(numeros) // Une os dois arrays metodo contat
console.log(novoArray)

let listaTexto = novoArray.join(" mais ") // Concatena os elementos com " mais " JOIN junta elementos
console.log(listaTexto)

let resultado = listaTexto.split(" , ") // Divide a string de volta em um array 
console.log(resultado)

const duasPrimeira = listaDeFrutas.slice(2, 4) // Obtém um pedaço do array deixando o 4º. elemeto de fora
console.log(duasPrimeira)

listaDeFrutas.splice(2) // Remove elementos a partir do índice 2 
console.log(listaDeFrutas)

listaDeFrutas.splice(2, 0, "Uva", "Limão") // Adiciona "Uva" e "Limão" na posição 2
console.log(listaDeFrutas)

// Percorrendo um array com "forEach"
const numero = [3, 7, 4, 9, 10, 3]
numero.forEach(function (elementoAtual, indiceAtual, arrayCompleto) {
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
})

// Criando uma função para percorrer um array manualmente
function paraCada(Array, funcaoParaExecutar) {
    for (let i = 0; i < Array.length; i++) {
        funcaoParaExecutar(Array[i], i, Array)
    }
}

paraCada(numero, function (elementoAtual, indiceAtual) {
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
})

// Usando "map" para criar um novo array com valores transformados
const num = [3, 7, 4, 9, 10, 3]
const dobroDosNum = num.map(function (elementoAtual, indiceAtual) {
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
    return { 
        dobro: elementoAtual * 2, 
        metade: elementoAtual / 2, 
        valorOriginal: elementoAtual 
    }
})
console.log(dobroDosNum)

/* Principais Métodos de Arrays
FILTER: cria um novo array com elementos que passam em um teste especificado por uma função.
FIND: retorna o primeiro elemento no array que satisfaz uma condição específica. */

const numerosNovos = [3,7,4,9,10,3]

const pares = numerosNovos.filter(function (elementoAtual) {
    return elementoAtual % 2 === 0 // Filtra apenas os números pares
})
console.log(numerosNovos, pares)

// Trabalhando com arrays de objetos
const novasPessoas = [
    { id: 100, nome: "Freitas", idade: 42},
    { id: 95, nome: "Wando", idade: 42},
    { id: 80, nome: "Jorje", idade: 42},
    { id: 50, nome: "Lucas", idade: 42},
    { id: 20, nome: "Simone", idade: 42},
]

let idadeMaxima = parseFloat(prompt("Escolha uma idade máxima:"))

const pessoasDentroLimite = novasPessoas.filter(function (pessoa){
    return pessoa.idade <= idadeMaxima // Filtra as pessoas com idade menor ou igual à escolhida
})

let nomePesquisado = prompt("Pesquisar por nome:")

const pessoaEncontrada = novasPessoas.find(function (pessoa){
    return pessoa.nome === nomePesquisado // Busca uma pessoa pelo nome metodo find
})

console.log(pessoaEncontrada)


// LISTA DE MÉTODOS DE ARRAYS:
//some, every, sort, reduce, fill, findIndex, includes, flat

