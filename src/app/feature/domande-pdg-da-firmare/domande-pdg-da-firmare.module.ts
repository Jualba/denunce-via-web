import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandePdgDaFirmareComponent } from './domande-pdg-da-firmare.component';
import { DomandePdgDaFirmareTableComponent } from './domande-pdg-da-firmare-table/domande-pdg-da-firmare-table.component';
import { DomandePdgDaFirmareRoutingModule } from './domande-pdg-da-firmare-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DomandePdgDaFirmareRoutingModule,
    SharedModule
  ],
  declarations: [DomandePdgDaFirmareComponent, DomandePdgDaFirmareTableComponent]
})
export class DomandePdgDaFirmareModule { }
