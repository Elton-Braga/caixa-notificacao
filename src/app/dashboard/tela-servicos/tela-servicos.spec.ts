import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaServicos } from './tela-servicos';

describe('TelaServicos', () => {
  let component: TelaServicos;
  let fixture: ComponentFixture<TelaServicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaServicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaServicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
