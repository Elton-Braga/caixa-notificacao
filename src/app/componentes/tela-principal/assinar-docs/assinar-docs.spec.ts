import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinarDocs } from './assinar-docs';

describe('AssinarDocs', () => {
  let component: AssinarDocs;
  let fixture: ComponentFixture<AssinarDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssinarDocs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssinarDocs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
