import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBasicos } from './dados-basicos';

describe('DadosBasicos', () => {
  let component: DadosBasicos;
  let fixture: ComponentFixture<DadosBasicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosBasicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosBasicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
