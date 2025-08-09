// Captura o elemento de botão pelo ID 'botão' do HTML
const botão = document.getElementById('botão');

// Captura o elemento de título pelo ID 'titulo' do HTML
const titulo = document.getElementById('titulo');

// Captura o elemento de parágrafo pelo ID 'paragrafo' do HTML
const paragrafo = document.getElementById('paragrafo');

// Adiciona um ouvinte de evento para detectar quando o botão é clicado
botão.addEventListener('click', function() {
    
    // Altera o texto do elemento de título para "Titulo Alterado"
    titulo.textContent = 'Titulo Alterado';
    
    // Altera o texto do elemento de parágrafo para "Parágrafo alterado com sucesso!"
    paragrafo.textContent = 'Parágrafo alterado com sucesso!';
});