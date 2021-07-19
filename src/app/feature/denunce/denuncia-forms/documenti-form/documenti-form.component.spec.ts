import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentiFormComponent } from './documenti-form.component';

describe('DocumentiFormComponent', () => {
  let component: DocumentiFormComponent;
  let fixture: ComponentFixture<DocumentiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
