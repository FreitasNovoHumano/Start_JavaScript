// Array estoque
const estoque = []

// Função para adicionar produto
function adicionarProduto() {
    const nome = prompt("Digite o nome do produto:")
    const quantidade = parseFloat(prompt("Digite a quantidade do item:"))
    const preco = parseFloat(prompt("Digite o preço do item:"))

// Verifica se os valores são validos
    if (!nome && !isNaN(quantidade) && !isNaN(preco)) {
        alert("nome, quantidade ou preço devem ser validos.")
        return
    }

    // Cria um objeto produto com as informações fornecidas
    const produto = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
    }
    // Adiciona o produto ao estoque
    estoque.push(produto)
    alert(`Produto ${nome} adicionado com sucesso!`)
}

// Função para listar produtos
function listarProdutos() {
    if (estoque.length === 0) {
        alert("nenhum produto cadastrado.")
        return
    }

    // Transforma a lista de objetos em uma lista de sctrings e depois junta tudo em uma string
    const lista = estoque.map(function (produto, index) {
        return `${index + 1}. ${produto.nome} - Quantidade: ${produto.quantidade}, Preço: R$${produto.preco.toFixed(2)}`
    }).join("\n")

    alert(`Lista de produtos:\n${lista}`)
}

// Função para alterar produto
function alterarProduto() {
    listarProdutos() // Lista os produtos para o usuário
    const index = parseFloat(prompt("Digite o índice do produto que deseja alterar: ")) - 1
    if (isNaN(index) || index < 0 || index >= estoque.length) { // Verifica se o índice é válido
        return alert("Índice inválido.")
    }

    // Solicita os novos valores para o produto
    const nome = prompt("Digite o novo nome do produto: ")
    const quantidade = parseFloat(prompt("Digite a nova quandtidade do item: "))
    const preco = parseFloat(prompt("Digite o novo preço do item: "))

    if (!nome && !isNaN(quantidade) && !isNaN(preco)) {
        alert("nome, quantidade ou preco devem ser validos. ")
        return
    }

    // Atualizar produto no estoque
    estoque[index].nome = nome
    estoque[index].quantidade = quantidade
    estoque[index].preco = preco
    alert(`produto ${nome} alterado com sucesso!`)
}

// Função para remover produto
function removerProduto() {
    listarProdutos()
    const index = parseFloat(prompt("Digite o índice do produto que deseja remover: ")) - 1
    if (isNaN(index) || index <0 || index >= estoque.length) {
        return alert("índice inválido. ")
    }

    const produtoRemovido = estoque.splice(index, 1)[0]
    alert(`produto ${produtoRemovido.nome} removido com sucesso!`)
}

// Menu principal do sistema de estoque
let opcao 

while (opcao !== "5") {
    opcao = prompt("Escolha uma opção: \n1. Adicionar produto\n2. Listar produto\n3. Alterar produto\n4. Remover produto\n5. Sair")

    // Verifica se a opçãio é válida
    switch (opcao) {
        case "1":
            adicionarProduto()
            break;
        case "2":
            listarProdutos()
            break;
        case "3":
            alterarProduto()
            break;
        case "4":
            removerProduto()
            break;
        case "5":
            alert("Saindo do sistema de estoque. ")
            break;
            default:
                alert("Opção inválida. Por favor, tente uma opção válida. ")
    }
}