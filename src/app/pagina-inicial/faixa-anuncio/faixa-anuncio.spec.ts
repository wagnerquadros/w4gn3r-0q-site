import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaAnuncio } from './faixa-anuncio';
import {App} from '../../app';
import {EXPERIMENTAL_TOOL_GROUPS} from '@angular/cli/src/commands/mcp/mcp-server';

describe('FaixaAnuncio', () => {
  let component: FaixaAnuncio;
  let fixture: ComponentFixture<FaixaAnuncio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaixaAnuncio],
    }).compileComponents();

    fixture = TestBed.createComponent(FaixaAnuncio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('a faixa deve renderizar duas copias', () => {
    const elementoRenderizado  = fixture.nativeElement as HTMLElement;
    const mensagens = elementoRenderizado.querySelectorAll(
      '.conteudo-faixa span',
    );
    expect(mensagens).toHaveLength(2);
    expect(mensagens[0].textContent).toContain('TOCANDO UMAZINHA');
    expect(mensagens[1].getAttribute('aria-hidden')).toBe('true');
  });
});
