import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAcompanhamento } from './tela-acompanhamento';

describe('TelaAcompanhamento', () => {
  let component: TelaAcompanhamento;
  let fixture: ComponentFixture<TelaAcompanhamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAcompanhamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAcompanhamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
