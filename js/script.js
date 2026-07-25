const botaoCores = document.querySelector(".botao-cores");
const raizPagina = document.documentElement;

const coresDoLayout = [
    "var(--cor-acido)",
    "var(--cor-laranja)",
    "var(--cor-papel)",
    "var(--cor-ciano)",
    "var(--cor-roxo)",
    "var(--cor-rosa)"
];

const coresDeTexto = [
    "var(--cor-preto)",
    "var(--cor-preto)",
    "var(--cor-preto)",
    "var(--cor-preto)",
    "var(--cor-papel)",
    "var(--cor-preto)"
];

const variaveisDeFundo = [
    "--fundo-amarelo",
    "--fundo-laranja",
    "--fundo-papel",
    "--fundo-ciano",
    "--fundo-roxo",
    "--fundo-rosa"
];

const variaveisDeTexto = [
    "--texto-fundo-amarelo",
    "--texto-fundo-laranja",
    "--texto-fundo-papel",
    "--texto-fundo-ciano",
    "--texto-fundo-roxo",
    "--texto-fundo-rosa"
];

let posicaoDasCores = 0;

botaoCores.addEventListener("click", () => {

    posicaoDasCores = (posicaoDasCores + 1) % coresDoLayout.length;

    variaveisDeFundo.forEach((variavelDeFundo, indice) => {
        const indiceDaCor = (indice + posicaoDasCores) % coresDoLayout.length;
        raizPagina.style.setProperty(variavelDeFundo, coresDoLayout[indiceDaCor]);
        raizPagina.style.setProperty(variaveisDeTexto[indice], coresDeTexto[indiceDaCor]);
    });

    botaoCores.classList.add("girando");

    setTimeout(() => {
        botaoCores.classList.remove("girando");
    }, 220);
});

