import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissariatoFormComponent } from './commissariato-form.component';

describe('CommissariatoFormComponent', () => {
  let component: CommissariatoFormComponent;
  let fixture: ComponentFixture<CommissariatoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissariatoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissariatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
