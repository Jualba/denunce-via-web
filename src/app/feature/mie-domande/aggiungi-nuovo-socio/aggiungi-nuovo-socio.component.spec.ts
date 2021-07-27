import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiNuovoSocioComponent } from './aggiungi-nuovo-socio.component';

describe('AggiungiNuovoSocioComponent', () => {
  let component: AggiungiNuovoSocioComponent;
  let fixture: ComponentFixture<AggiungiNuovoSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiNuovoSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiNuovoSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
