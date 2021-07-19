import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandeDaValidareComponent } from './domande-da-validare.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DomandeDaValidareRoutingModule } from './domande-da-validare-routing.module';
import { DomandaDaValidareTableComponent } from './domanda-da-validare-table/domanda-da-validare-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DomandeDaValidareRoutingModule
  ],
  declarations: [DomandeDaValidareComponent, DomandaDaValidareTableComponent]
})
export class DomandeDaValidareModule { }
