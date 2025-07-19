import dayjs from "dayjs";

export function calcularIdade(dataNascimento) {
    // Salva a data de hoje e a de nascimento no formato do dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença entre elas e retorna no formato de anos
    const idade = hoje.diff(nascimento, 'year')
    return idade
}

export function calcularDiasRestantesParaAniversario(dataNascimento) {
    // Salva a data de hoje e a de nascimento no formato do dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    // muda o ano da tada de nasciomanto para o mesmo ano da data de hoje
    let proximoAniversario = nascimento.year(hoje.year())

    // Verificar se o aniversário do ano atual já passou
    if (hoje.isAfter(proximoAniversario)) {
        proximoAniversario = proximoAniversario.add(1, 'year')
    }

    console.log({proximoAniversario, hoje})
    // Calcula a diferença entre elas e retorna no formato de dias
    const diasRestantes = proximoAniversario.diff(hoje, 'day')
    return diasRestantes
}