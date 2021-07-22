import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomadeDiIscrizioneComponent } from './domade-di-iscrizione.component';

describe('DomadeDiIscrizioneComponent', () => {
  let component: DomadeDiIscrizioneComponent;
  let fixture: ComponentFixture<DomadeDiIscrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomadeDiIscrizioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomadeDiIscrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
