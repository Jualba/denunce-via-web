import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeListComponent } from './domande-list.component';

describe('ComplaintListComponent', () => {
  let component: DomandeListComponent;
  let fixture: ComponentFixture<DomandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomandeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
