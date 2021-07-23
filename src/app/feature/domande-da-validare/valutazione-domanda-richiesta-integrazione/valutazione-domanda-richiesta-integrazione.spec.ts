/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ValutazioneDomandaRichiestaIntegrazioneComponent } from './valutazione-domanda-richiesta-integrazione.component';



describe('ValutazioneDomandaRichiestaIntegrazioneComponent', () => {
  let component: ValutazioneDomandaRichiestaIntegrazioneComponent;
  let fixture: ComponentFixture<ValutazioneDomandaRichiestaIntegrazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazioneDomandaRichiestaIntegrazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazioneDomandaRichiestaIntegrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
