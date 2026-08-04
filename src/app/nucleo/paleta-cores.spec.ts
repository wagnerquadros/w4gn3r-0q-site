import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { PaletaCores } from './paleta-cores';

describe('PaletaCores', () => {
  let service: PaletaCores;
  let documento: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    documento = TestBed.inject(DOCUMENT);
    service = TestBed.inject(PaletaCores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve aplicar laranja ao primeiro fundo depois da rotação', () => {
    service.rotacionarCores();

    const fundoAmarelo = documento.documentElement.style.getPropertyValue(
      '--fundo-amarelo',
    );

    expect(fundoAmarelo).toBe('var(--cor-laranja)');
  });

  afterEach(() => {
    documento.documentElement.removeAttribute('style');
  });
});
