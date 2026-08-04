import {Component} from '@angular/core';
import {FaixaAnuncio} from './pagina-inicial/faixa-anuncio/faixa-anuncio';
import {CabecalhoPrincipal} from './pagina-inicial/cabecalho-principal/cabecalho-principal';

@Component({
  selector: 'app-root',
  imports: [
    FaixaAnuncio,
    CabecalhoPrincipal
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
