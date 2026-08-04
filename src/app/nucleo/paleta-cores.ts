import { Service, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Service()
export class PaletaCores {

  private readonly documento = inject(DOCUMENT);

  private readonly coresDoLayout: string[] = [
    "var(--cor-acido)",
    "var(--cor-laranja)",
    "var(--cor-papel)",
    "var(--cor-ciano)",
    "var(--cor-roxo)",
    "var(--cor-rosa)"
  ];

  private readonly coresDeTexto: string[] = [
    "var(--cor-preto)",
    "var(--cor-preto)",
    "var(--cor-preto)",
    "var(--cor-preto)",
    "var(--cor-papel)",
    "var(--cor-preto)"
  ];

  private readonly variaveisDeFundo: string[] = [
    "--fundo-amarelo",
    "--fundo-laranja",
    "--fundo-papel",
    "--fundo-ciano",
    "--fundo-roxo",
    "--fundo-rosa"
  ];

  private readonly variaveisDeTexto: string[] = [
    "--texto-fundo-amarelo",
    "--texto-fundo-laranja",
    "--texto-fundo-papel",
    "--texto-fundo-ciano",
    "--texto-fundo-roxo",
    "--texto-fundo-rosa"
  ];

  private posicaoDasCores: number = 0;

  public rotacionarCores(): void{

    this.posicaoDasCores =
      (this.posicaoDasCores + 1) % this.coresDoLayout.length;

    const raizPagina = this.documento.documentElement;

    this.variaveisDeFundo.forEach((variavelDeFundo, indice) => {
      const indiceDaCor =
        (indice + this.posicaoDasCores) % this.coresDoLayout.length;

      raizPagina.style.setProperty(
        variavelDeFundo,
        this.coresDoLayout[indiceDaCor],
      );

      raizPagina.style.setProperty(
        this.variaveisDeTexto[indice],
        this.coresDeTexto[indiceDaCor],
      );
    });

  }
}
