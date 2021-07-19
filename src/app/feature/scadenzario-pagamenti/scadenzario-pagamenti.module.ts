import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScadenzarioPagamentiComponent } from './scadenzario-pagamenti.component';
import { ScadenzarioPagamentiRoutingModule } from './scadenzario-pagamenti-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ScadenzarioPagamentiRoutingModule
  ],
  declarations: [ScadenzarioPagamentiComponent]
})
export class ScadenzarioPagamentiModule { }
