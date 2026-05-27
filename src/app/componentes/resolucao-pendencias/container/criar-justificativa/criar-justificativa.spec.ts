import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarJustificativa } from './criar-justificativa';

describe('CriarJustificativa', () => {
  let component: CriarJustificativa;
  let fixture: ComponentFixture<CriarJustificativa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarJustificativa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarJustificativa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
