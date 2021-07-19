/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DomandeDaAssegnareTableComponent } from './domande-da-assegnare-table.component';

describe('DomandeDaAssegnareTableComponent', () => {
  let component: DomandeDaAssegnareTableComponent;
  let fixture: ComponentFixture<DomandeDaAssegnareTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomandeDaAssegnareTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandeDaAssegnareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
