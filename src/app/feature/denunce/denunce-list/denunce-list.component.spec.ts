import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunceListComponent } from './denunce-list.component';

describe('ComplaintListComponent', () => {
  let component: DenunceListComponent;
  let fixture: ComponentFixture<DenunceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
