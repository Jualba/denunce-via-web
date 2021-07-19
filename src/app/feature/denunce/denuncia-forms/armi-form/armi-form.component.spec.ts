import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmiFormComponent } from './armi-form.component';

describe('ArmiFormComponent', () => {
  let component: ArmiFormComponent;
  let fixture: ComponentFixture<ArmiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
