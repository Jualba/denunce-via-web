/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DomandePdgDaFirmareTableComponent } from './domande-pdg-da-firmare-table.component';

describe('DomandePdgDaFirmareTableComponent', () => {
  let component: DomandePdgDaFirmareTableComponent;
  let fixture: ComponentFixture<DomandePdgDaFirmareTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomandePdgDaFirmareTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandePdgDaFirmareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
