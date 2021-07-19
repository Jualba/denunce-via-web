import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaDetailComponent } from './denuncia-detail.component';

describe('DenunciaDetailComponent', () => {
  let component: DenunciaDetailComponent;
  let fixture: ComponentFixture<DenunciaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
