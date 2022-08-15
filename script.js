let temPrato = false;
let temBebida = false;
let temSobremesa = false;
let pratoEscolhido = "";
let bebidaEscolhida = "";
let sobremesaEscolhida = "";
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function selecionarPrato(nomeClasse, dadosPrato) {
  const seletor = nomeClasse;
  const opcao = document.querySelector(seletor);

  if (temPrato) {
    const opcaoSelecionada = document.querySelector(".selecionado.prato");
    opcaoSelecionada.classList.remove("selecionado");
  }
  opcao.classList.toggle("selecionado");
  pratoEscolhido = dadosPrato.nome;
  precoPrato = dadosPrato.preco;
  temPrato = true;
  checarEstadoBotao();
}

function selecionarBebida(nomeClasse, dadosBebida) {
  const seletor = nomeClasse;
  const opcao = document.querySelector(seletor);
  if (temBebida) {
    const opcaoSelecionada = document.querySelector(".selecionado.bebida");
    opcaoSelecionada.classList.remove("selecionado");
  }
  opcao.classList.toggle("selecionado");
  bebidaEscolhida = dadosBebida.nome;
  precoBebida = dadosBebida.preco;
  temBebida = true;
  checarEstadoBotao();
}

function selecionarSobremesa(nomeClasse, dadosSobremesa) {
  const seletor = nomeClasse;
  const opcao = document.querySelector(seletor);
  if (temSobremesa) {
    const opcaoSelecionada = document.querySelector(".selecionado.sobremesa");
    opcaoSelecionada.classList.remove("selecionado");
  }
  opcao.classList.toggle("selecionado");
  sobremesaEscolhida = dadosSobremesa.nome;
  precoSobremesa = dadosSobremesa.preco;
  temSobremesa = true;
  checarEstadoBotao();
}

function checarEstadoBotao() {
  if (temPrato && temBebida && temSobremesa) habilitarBotao();
}

function habilitarBotao() {
  const botao = document.querySelector("button");

  botao.classList.remove("disabled");
  botao.innerHTML = "Fechar pedido";
}

function enviarMensagem() {
  const custoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
  const celular = "5521959068499";
  let texto =
    "Olá, gostaria de fazer o pedido:\n- Prato: " +
    pratoEscolhido +
    "\n- Bebida: " +
    bebidaEscolhida +
    "\n- Sobremesa: " +
    sobremesaEscolhida +
    "\nTotal: R$ " +
    custoTotal;

  texto = window.encodeURIComponent(texto);
  window.open(
    "https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto
  );
}
