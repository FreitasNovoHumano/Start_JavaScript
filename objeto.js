let pessoa = {
    nome: "Fábio",
    idade: 42,
    endereco: {rua: "José Isidor Miranda", numero: "133"},
    ola: function () {
        alert("Olá, mundo!")
    }
   
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco.rua)
console.log(pessoa.endereco.numero)
console.log(pessoa.ola())

let calculadora = {
    x: 5,
    y: 10,
    soma: function () {
        alert(this.x + this.y)
    }
}

calculadora.soma()
calculadora.x = 50
calculadora.soma()

//Arrays
let listaDeFrutas = ["Maçã", "Laranja", "Uva", "Banana", "Abacaxi"]
console.log(listaDeFrutas[0])

console.log(listaDeFrutas)
listaDeFrutas[1] = "Pera"
console.log(listaDeFrutas)

listaDeFrutas.push("Melancia")
console.log(listaDeFrutas)

listaDeFrutas.pop()
console.log(listaDeFrutas)

listaDeFrutas.shift()
console.log(listaDeFrutas)

listaDeFrutas.unshift("Morango")
console.log(listaDeFrutas)


let numeros = [4, 9, 10, 20 , false, true, "5"]
console.log(numeros)

listaDeFrutas.concat(numeros)
console.log(listaDeFrutas)


let novoArray = listaDeFrutas.concat(numeros)
console.log(novoArray)

let listaTexto = novoArray.join(" mais ")
console.log(listaTexto)

let resultado = listaTexto.split(" , ")
console.log(resultado)


const duasPrimeira = listaDeFrutas.slice(2, 4)
console.log(duasPrimeira)

listaDeFrutas.splice(2)
console.log(listaDeFrutas)


listaDeFrutas.splice(2, 0, "Uva", "Limão")
console.log(listaDeFrutas)