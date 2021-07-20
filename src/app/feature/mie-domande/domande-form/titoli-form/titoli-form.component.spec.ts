import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoliFormComponent } from './titoli-form.component';

describe('TitoliFormComponent', () => {
  let component: TitoliFormComponent;
  let fixture: ComponentFixture<TitoliFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoliFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoliFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
