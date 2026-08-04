import {Component, signal, inject} from '@angular/core';
import { PaletaCores } from '../../nucleo/paleta-cores';

@Component({
  selector: 'app-cabecalho-principal',
  imports: [],
  templateUrl: './cabecalho-principal.html',
  styleUrl: './cabecalho-principal.css',
})
export class CabecalhoPrincipal {

  protected readonly botaoCoresGirando = signal(false);
  private readonly paletaCores = inject(PaletaCores);

  protected aoClicarBotaoCores(): void {
    this.botaoCoresGirando.set(true);
    this.paletaCores.rotacionarCores();

    setTimeout(() => {
      this.botaoCoresGirando.set(false);
    }, 220);
  }
}
