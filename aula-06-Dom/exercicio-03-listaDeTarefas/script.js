// Seleciona o formulário pelo ID 'formTarefa'
const formTarefa = document.getElementById('formTarefa');

// Adiciona um evento ao formulário para executar a função 'adicionarTarefa'
// sempre que ele for enviado (submit)
formTarefa.addEventListener('submit', adicionarTarefa);

/**
 * Converte uma string para o formato "kebab-case"
 * Exemplo: "Comprar leite" → "comprar-leite"
 * @param {string} str - Texto a ser convertido
 * @returns {string} - Texto convertido para kebab-case
 */
function tokebabCase(str) {
    return str.toLowerCase().split(' ').join('-');
}

/**
 * Função responsável por adicionar uma nova tarefa à lista
 * @param {Event} event - Evento de envio do formulário
 */
function adicionarTarefa(event) {
    // Impede o recarregamento da página ao enviar o formulário
    event.preventDefault();

    // Pega o campo de entrada de texto
    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value; // Texto digitado pelo usuário

    // Só adiciona a tarefa se o campo não estiver vazio
    if (textoTarefa !== '') {
        // Seleciona a lista de tarefas
        const listaTarefas = document.getElementById('listaTarefas');
        
        // Cria um novo elemento <li> para a tarefa
        const novaTarefa = document.createElement('li');

        // Cria um checkbox para marcar como concluída
        const checkbox = document.createElement('input');
        checkbox.id = tokebabCase(textoTarefa); // ID único baseado no texto
        checkbox.type = 'checkbox';
        // Evento que alterna a classe 'concluido' no <li>
        checkbox.addEventListener('change', function() {
            novaTarefa.classList.toggle('concluido');
        });

        // Cria um rótulo (label) para o checkbox
        const label = document.createElement('label');
        label.htmlFor = tokebabCase(textoTarefa); // Liga o label ao checkbox
        label.textContent = textoTarefa; // Mostra o texto da tarefa

        // Adiciona o checkbox e o label dentro do <li>
        novaTarefa.append(checkbox, label);

        // Cria o botão de remover tarefa
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        // Evento que remove a tarefa quando clicado
        botaoRemover.addEventListener('click', function() {
            novaTarefa.remove();
        });

        // Adiciona o botão de remover ao <li>
        novaTarefa.appendChild(botaoRemover);

        // Adiciona a nova tarefa na lista (<ul> ou <ol>)
        listaTarefas.appendChild(novaTarefa);

        // Limpa o campo de entrada para a próxima tarefa
        inputTarefa.value = '';
    }
}