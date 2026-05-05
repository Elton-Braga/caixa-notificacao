import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeadesao } from './tela-deadesao';

describe('TelaDeadesao', () => {
  let component: TelaDeadesao;
  let fixture: ComponentFixture<TelaDeadesao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaDeadesao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDeadesao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
