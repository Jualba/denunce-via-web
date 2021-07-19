import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaEditComponent } from './denuncia-edit.component';

describe('ComplaintEditComponent', () => {
  let component: DenunciaEditComponent;
  let fixture: ComponentFixture<DenunciaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
