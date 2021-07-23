import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandeDaValidareComponent } from './domande-da-validare.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DomandeDaValidareRoutingModule } from './domande-da-validare-routing.module';
import { DomandaDaValidareTableComponent } from './domanda-da-validare-table/domanda-da-validare-table.component';
import { ValutazioneDomandaComponent } from './valutazione-domanda/valutazione-domanda.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    DomandeDaValidareRoutingModule
  ],
  declarations: [
    DomandeDaValidareComponent, 
    DomandaDaValidareTableComponent, 
    ValutazioneDomandaComponent
  ]
})
export class DomandeDaValidareModule { }
