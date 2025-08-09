// Captura o campo de texto do HTML com id="filmes"
// O '#' indica que estamos buscando por ID
const inputFilme = document.querySelector('#filmes');

// Captura a lista de filmes (ul) — neste caso o correto é usar '#lista-filmes'
const listaFilmes = document.querySelector('#lista-filmes');

// Captura o botão — como só existe um <button> no HTML, podemos pegar diretamente
const botaoAdicionar = document.querySelector('button');

// Adiciona um evento de clique ao botão
botaoAdicionar.addEventListener('click', function() {
    
    // Lê o valor digitado no input e remove espaços no início e no fim
    const nomeFilme = inputFilme.value.trim();

    // Verifica se o campo não está vazio
    if (nomeFilme !== "") {
        
        // Cria um novo elemento de lista <li>
        const novoItem = document.createElement("li");
        
        // Define o texto do novo item como o nome do filme digitado
        novoItem.textContent = nomeFilme;
        
        // Adiciona o novo item dentro da lista <ul id="lista-filmes">
        listaFilmes.appendChild(novoItem);
        
        // Limpa o campo de texto para permitir digitar outro filme
        inputFilme.value = "";
    
    } else {
        // Caso o campo esteja vazio, exibe um alerta ao usuário
        alert("Por favor, digite o nome de um filme.");
    }
});
