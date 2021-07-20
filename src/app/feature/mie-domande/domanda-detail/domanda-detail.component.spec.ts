import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandaDetailComponent } from './domanda-detail.component';

describe('DomandaDetailComponent', () => {
  let component: DomandaDetailComponent;
  let fixture: ComponentFixture<DomandaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
