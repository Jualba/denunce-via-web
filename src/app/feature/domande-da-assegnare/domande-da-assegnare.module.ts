import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandeDaAssegnareComponent } from './domande-da-assegnare.component';
import { DomandeDaAssegnareRoutingModule } from './domande-da-assegnare-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DomandeDaAssegnareTableComponent } from './domande-da-assegnare-table/domande-da-assegnare-table.component';

@NgModule({
  imports: [
    CommonModule,
    DomandeDaAssegnareRoutingModule,
    SharedModule
  ],
  declarations: [DomandeDaAssegnareComponent, DomandeDaAssegnareTableComponent]
})
export class DomandeDaAssegnareModule { }
