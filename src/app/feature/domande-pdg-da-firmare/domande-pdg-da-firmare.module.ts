import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandePdgDaFirmareComponent } from './domande-pdg-da-firmare.component';
import { DomandePdgDaFirmareRoutingModule } from './domande-pdg-da-firmare-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DomandePdgDaFirmareRoutingModule
  ],
  declarations: [DomandePdgDaFirmareComponent]
})
export class DomandePdgDaFirmareModule { }
