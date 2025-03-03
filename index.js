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
