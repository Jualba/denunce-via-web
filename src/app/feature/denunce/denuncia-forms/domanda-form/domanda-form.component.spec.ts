import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandaFormComponent } from './domanda-form.component';

describe('DomandaFormComponent', () => {
  let component: DomandaFormComponent;
  let fixture: ComponentFixture<TargaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
