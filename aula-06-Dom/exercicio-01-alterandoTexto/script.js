const botão = document.getElementById('botão');
const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');

botão.addEventListener('click', function() {
    titulo.textContent = 'Titulo Alterado';
    paragrafo.textContent = 'Parágrafo alterado com sucesso!';
});