import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltroFormComponent } from './altro-form.component';

describe('AltroFormComponent', () => {
  let component: AltroFormComponent;
  let fixture: ComponentFixture<AltroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
