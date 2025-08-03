// Selecionando um elemento no html
/*const titulo = document.getElementById('titulo')

console.log(titulo)

// Adicionando um evento de clique ao elemento selecionado
titulo.addEventListener('click', function() {
  //titulo. addEventListener('mouseover', function() {
   // alert('Você passou o mouse sobre o título')
   // Alterando o conteúdo do elemento selecionado.
  //titulo.innerHTML = "Título alterado com sucesso! <em>Estamos usando o DOM</em>"
  //titulo.innerText = "Título alterado com sucesso! <em>Estamos usando o DOM</em>"
  //titulo.textContent = "Título alterado com sucesso! <em>Estamos usando o DOM</em>" 
   alert('Você clicou no título')

/*const titulo = document.querySelector("h1")
console.log(titulo)

titulo.addEventListener("click", function() {
  titulo.id = "titulo-principal"
}) */

//Selecionando todos os elementos com a classe 'tutulo'
/*const titulo = document.querySelectorAll('.titulo') 
  console.log(titulo)

titulo.addEventListener('click', function () {
  titulo.setAttribute("id", "titulo-principal")
}) 

const liElement = document.createElement('li')
liElement.innerText = $(
  //console.log(Element)



//Selecionando todos os elementos com a classe 'tutulo'
/*const titulo = document.querySelectorAll('.titulo') 
 console.log(titulo)

})*/

/*document.getElementById('adicionarJogo').addEventListener('click', function() {
  const jogo = prompt('Digite o nome do jogo que deseja adicionar à lista:')
 
  if (!jogo) return;
  
  const liElement = document.createElement('li')
  liElement.innerText = jogo
  // Adicionando o elemento li ao ul id 'ListaDeJogos
 /* document.body.appendChild(liElement)
  console.log(liElement) 

  const ulElement = document.getElementById('ListaDeJogos')

  ulElement.appendChild(liElement)
  
})*/

/**
 * Função que recebe uma string de texto e retorna um array de palavras,
 * dividindo o texto em espaços em branco.
 * Exemplo: "Vôlei de Praia" → ["Vôlei", "de", "Praia"]
 * 
 * @param {string} texto - O texto a ser tokenizado (quebrado em palavras)
 * @returns {string[]} Array de palavras
 */

// Função que divide um texto em palavras
function tokenize(texto) {
  return texto.split(' ');
}

// Aguarda o carregamento da página
window.onload = function () {
  // Seleciona o formulário
  const form = document.getElementById('cadastrarJogo');

  // Seleciona a lista onde os jogos serão exibidos
  const lista = document.getElementById('listaDeJogos');

  // Captura o evento de envio do formulário
  form.addEventListener('submit', function (event) {
    // Evita o recarregamento da página
    event.preventDefault();

    // Captura os valores digitados nos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const ano = document.getElementById('ano').value.trim();

    // Se algum campo estiver vazio, não prossegue
    if (!nome || !genero || !ano) {
      alert('Preencha todos os campos!');
      return;
    }

    // Cria um novo item <li>
    const li = document.createElement('li');

    // Adiciona o conteúdo do jogo ao item da lista
    li.textContent = `${nome} - ${genero} (${ano})`;

    // Gera um id para o <li> com base no nome do jogo
    li.id = 'jogo-' + tokenize(nome).join('-').toLowerCase();

    // Cria um botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.marginLeft = '10px';

    // Quando clicar no botão de remover, o <li> será removido da lista
    btnRemover.addEventListener('click', function () {
      lista.removeChild(li);
    });

    // Adiciona o botão de remover dentro do <li>
    li.appendChild(btnRemover);

    // Adiciona o <li> completo à lista
    lista.appendChild(li);

    // Limpa os campos do formulário após adicionar
    form.reset();
  });

  // (Opcional) Desativa o botão antigo que usava prompt()
  const botaoAntigo = document.getElementById('adicionarJogo');
  if (botaoAntigo) {
    botaoAntigo.style.display = 'none'; // Esconde
    // Ou remove:
    // botaoAntigo.remove();
  }
};


