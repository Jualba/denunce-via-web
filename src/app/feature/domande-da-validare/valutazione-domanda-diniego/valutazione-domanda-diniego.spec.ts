/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ValutazioneDomandaDiniegoComponent } from './valutazione-domanda-diniego.component';


describe('ValutazioneDomandaDiniegoComponent', () => {
  let component: ValutazioneDomandaDiniegoComponent;
  let fixture: ComponentFixture<ValutazioneDomandaDiniegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazioneDomandaDiniegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazioneDomandaDiniegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
