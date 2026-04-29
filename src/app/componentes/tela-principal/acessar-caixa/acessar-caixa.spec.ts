import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessarCaixa } from './acessar-caixa';

describe('AcessarCaixa', () => {
  let component: AcessarCaixa;
  let fixture: ComponentFixture<AcessarCaixa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessarCaixa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessarCaixa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
