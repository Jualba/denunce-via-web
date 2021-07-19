import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentiListComponent } from './documenti-list.component';

describe('DocumentiListComponent', () => {
  let component: DocumentiListComponent;
  let fixture: ComponentFixture<DocumentiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
