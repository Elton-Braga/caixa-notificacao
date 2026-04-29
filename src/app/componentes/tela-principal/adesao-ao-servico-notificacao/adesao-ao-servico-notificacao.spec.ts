import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdesaoAoServicoNotificacao } from './adesao-ao-servico-notificacao';

describe('AdesaoAoServicoNotificacao', () => {
  let component: AdesaoAoServicoNotificacao;
  let fixture: ComponentFixture<AdesaoAoServicoNotificacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdesaoAoServicoNotificacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdesaoAoServicoNotificacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
