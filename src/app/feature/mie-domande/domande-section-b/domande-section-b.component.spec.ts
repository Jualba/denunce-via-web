import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeSectionBComponent } from './domande-section-b.component';

describe('DomandeSectionBComponent', () => {
  let component: DomandeSectionBComponent;
  let fixture: ComponentFixture<DomandeSectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandeSectionBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandeSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
