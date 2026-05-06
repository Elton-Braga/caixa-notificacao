import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsAssinados } from './docs-assinados';

describe('DocsAssinados', () => {
  let component: DocsAssinados;
  let fixture: ComponentFixture<DocsAssinados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsAssinados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsAssinados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
