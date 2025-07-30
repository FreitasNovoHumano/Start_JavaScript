// Selecionando um elemento no html
const titulo = document.getElementById('titulo')

console.log(titulo)

// Adicionando um evento de clique ao elemento selecionado
titulo. addEventListener('click', function() {
    // Alterando o conteúdo do elemento selecionado.
   // titulo.innerText = 'Título alterado com sucesso! <em>Estamos usando o DOM</em>'  
   alert('Você clicou no título')

// Selecionando todos os elementos com a classe 'tutulo'
const titulo = document.querySelectorAll('.titulo')
console.log(titulo)
})

