// Exemplo de uso de setTimeout e setInterval
// setTimeout é usado para executar uma função após um determinado tempo
// setInterval é usado para executar uma função repetidamente em intervalos de tempo

/*
console.log('Script iniciado')
console.log('Iniciando contagem')

setTimeout(function() {
    // Este bloco será executado uma única vez após 3 segundos
    console.log('Executado após 3 segundos')
}, 3 * 1000)

console.log('Contagem iniciada')
console.log('O Script ainda está em execução')
console.log('Script finalizado') 

console.log('Script iniciado')
let contador = 1

const intervalId = setInterval(function() {
    // Este bloco será executado a cada 2 segundos
    console.log('Executado após 2 segundos')
    contador++

    // Quando o contador atingir 6, o setInterval será parado
    if (contador >= 6) {
        clearInterval(intervalId)       
    }

}, 2 * 1000)

console.log('Script finalizado')



// Exemplo de uso de Promise
// Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona
// É usada para lidar com operações que demoram para finalizar (como requisições, leitura de arquivos, etc.)
console.log('Script iniciado');

// Criando uma nova Promise
const minhaPromise = new Promise(function (resolver, rejeitar) {
    // Aqui simulamos uma condição que vai rejeitar a Promise imediatamente
    if (true) {
        rejeitar('Promise rejeitada com erro!');
    } else {
        // Caso a condição fosse falsa, após 3 segundos a Promise seria resolvida com sucesso
        setTimeout(function () {
            console.log('Executando a promise...');
            resolver('Promise resolvida com sucesso!');
        }, 3 * 1000);
    }
});

// Encadeando o tratamento da Promise
minhaPromise
    // then() é executado quando a Promise é resolvida com sucesso
    .then(function (resultado) {
        console.log(resultado);
    })
    // catch() é executado quando a Promise é rejeitada (ocorre um erro)
    .catch(function (erro) {
        console.error("Erro capturado:", erro);
    });

// Exibe o estado atual da Promise no momento da execução
console.log(minhaPromise);

// Continua a execução normal do script
console.log('Script finalizado'); */

function somaAssincrona(a, b) {
    const minhaPromise = new Promise(function (resolve, reject) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);

        if (isNaN(numA) || isNaN(numB)) {
            reject('Erro: Um ou Ambos os valores não são números válidos.');
        } else {
            resolve(numA + numB);
        }
    })
    return minhaPromise
}

somaAssincrona(10, 20).then(function (resultado) {
    console.log(resultado);
}).catch(function (motivo) {
    console.log(motivo)
}).finally(function () {
    console.log('Finalizado');
})
