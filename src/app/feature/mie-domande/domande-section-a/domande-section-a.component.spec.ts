import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeSectionAComponent } from './domande-section-a.component';

describe('DomandeSectionAComponent', () => {
  let component: DomandeSectionAComponent;
  let fixture: ComponentFixture<DomandeSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandeSectionAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandeSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
