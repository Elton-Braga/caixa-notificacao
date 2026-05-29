import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoDeSolicitacoes } from './acompanhamento-de-solicitacoes';

describe('AcompanhamentoDeSolicitacoes', () => {
  let component: AcompanhamentoDeSolicitacoes;
  let fixture: ComponentFixture<AcompanhamentoDeSolicitacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoDeSolicitacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoDeSolicitacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
