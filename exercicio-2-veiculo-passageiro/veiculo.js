// ================================
// Objeto que representa o veículo
// ================================
const veiculo = {
  modelo: "Fusca", // Modelo do veículo
  passageiros: [], // Lista de passageiros
  limitePassageiros: 5, // Capacidade máxima de passageiros
  velocidade: 0, // Velocidade atual do veículo (km/h)

  // ===============================
  // Método: Aumentar velocidade
  // Parâmetro: aceleracao (número)
  // ===============================
  aumentarVelocidade: function (aceleracao) {
    this.velocidade += aceleracao;
    alert(`Velocidade aumentada para ${this.velocidade} km/h`);
  },

  // ================================
  // Método: Diminuir velocidade
  // Parâmetro: desaceleracao (número)
  // ================================
  diminuirVelocidade: function (desaceleracao) {
    if (this.velocidade - desaceleracao >= 0) {
      this.velocidade -= desaceleracao;
      alert(`Velocidade reduzida para ${this.velocidade} km/h`);
    } else {
      this.velocidade = 0;
      alert("O veículo está parado.");
    }
  },

  // ===============================================
  // Método: Adicionar passageiro
  // Regras:
  //  - Só é permitido se o veículo estiver parado
  //  - Não pode exceder o limite de passageiros
  // ===============================================
  adicionarPassageiro: function (nomePassageiro) {
    if (this.velocidade === 0 && this.passageiros.length < this.limitePassageiros) {
      this.passageiros.push(nomePassageiro);
      alert(`${nomePassageiro} foi adicionado como passageiro.`);
    } else if (this.velocidade > 0) {
      alert("Não é possível adicionar passageiros com o veículo em movimento.");
    } else {
      alert("Limite de passageiros atingido.");
    }
  },
};

// =========================================
// Função: mostrarMenu
// Exibe o menu de opções para o usuário
// via prompt e retorna a escolha
// =========================================
function mostrarMenu() {
  return prompt(
    `Veículo: ${veiculo.modelo}\n` +
    `Velocidade atual: ${veiculo.velocidade} km/h\n` +
    `Passageiros: ${veiculo.passageiros.join(", ") || "Nenhum"}\n` +
    `Limite de passageiros: ${veiculo.limitePassageiros}\n\n` +
    `Escolha uma opção:\n` +
    `1. Aumentar Velocidade\n` +
    `2. Diminuir Velocidade\n` +
    `3. Adicionar Passageiro\n` +
    `4. Sair`
  );
}

// ======================================
// Loop principal do programa (infinito)
// Executa até o usuário escolher sair
// ======================================
while (true) {
  const opcao = mostrarMenu(); // Exibe o menu e recebe a escolha do usuário

  switch (opcao) {
    case "1":
      // Solicita valor de aceleração
      const aceleracao = parseFloat(prompt("Digite a quantidade de aceleração:"));
      if (!isNaN(aceleracao) && aceleracao > 0) {
        veiculo.aumentarVelocidade(aceleracao);
      } else {
        alert("Valor inválido.");
      }
      break;

    case "2":
      // Solicita valor de desaceleração
      const desaceleracao = parseFloat(prompt("Digite a quantidade de desaceleração:"));
      if (!isNaN(desaceleracao) && desaceleracao > 0) {
        veiculo.diminuirVelocidade(desaceleracao);
      } else {
        alert("Valor inválido.");
      }
      break;

    case "3":
      // Solicita nome do passageiro
      const nomePassageiro = prompt("Digite o nome do passageiro:");
      if (nomePassageiro) {
        veiculo.adicionarPassageiro(nomePassageiro.trim());
      } else {
        alert("Nome inválido.");
      }
      break;

    case "4":
      // Encerra o programa
      alert("Encerrando o programa.");
      break;

    default:
      alert("Opção inválida. Escolha de 1 a 4.");
  }

  // Sai do loop se a opção for "4"
  if (opcao === "4") {
    break;
  }
}
