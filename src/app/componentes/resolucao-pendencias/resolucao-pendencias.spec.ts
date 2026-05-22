import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucaoPendencias } from './resolucao-pendencias';

describe('ResolucaoPendencias', () => {
  let component: ResolucaoPendencias;
  let fixture: ComponentFixture<ResolucaoPendencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolucaoPendencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolucaoPendencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
