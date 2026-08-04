import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoPrincipal } from './cabecalho-principal';

describe('CabecalhoPrincipal', () => {
  let component: CabecalhoPrincipal;
  let fixture: ComponentFixture<CabecalhoPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(CabecalhoPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
