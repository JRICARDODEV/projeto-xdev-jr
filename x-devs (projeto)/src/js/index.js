const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){

    if (cartaoAtual === cartoes.length - 1)  return;
    esconderCartaoSelecioado();
    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;
    esconderCartaoSelecioado();
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecioado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}