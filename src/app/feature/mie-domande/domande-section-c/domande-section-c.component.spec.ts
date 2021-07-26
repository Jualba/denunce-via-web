import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeSectionCComponent } from './domande-section-a.component';

describe('DomandeSectionAComponent', () => {
  let component: DomandeSectionCComponent;
  let fixture: ComponentFixture<DomandeSectionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandeSectionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandeSectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
