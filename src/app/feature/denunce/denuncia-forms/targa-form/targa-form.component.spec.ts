import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargaFormComponent } from './targa-form.component';

describe('TargaFormComponent', () => {
  let component: TargaFormComponent;
  let fixture: ComponentFixture<TargaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
