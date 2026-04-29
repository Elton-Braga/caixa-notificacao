import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCaixa } from './visualizar-caixa';

describe('VisualizarCaixa', () => {
  let component: VisualizarCaixa;
  let fixture: ComponentFixture<VisualizarCaixa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarCaixa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarCaixa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
