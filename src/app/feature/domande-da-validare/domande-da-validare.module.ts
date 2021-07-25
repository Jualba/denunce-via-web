import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandeDaValidareComponent } from './domande-da-validare.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DomandeDaValidareRoutingModule } from './domande-da-validare-routing.module';
import { DomandaDaValidareTableComponent } from './domanda-da-validare-table/domanda-da-validare-table.component';
import { ValutazioneDomandaComponent } from './valutazione-domanda/valutazione-domanda.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValutazioneDomandaDiniegoComponent } from './valutazione-domanda-diniego/valutazione-domanda-diniego.component';
import { ValutazioneDomandaRichiestaIntegrazioneComponent } from './valutazione-domanda-richiesta-integrazione/valutazione-domanda-richiesta-integrazione.component';

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
    ValutazioneDomandaComponent,
    ValutazioneDomandaDiniegoComponent,
    ValutazioneDomandaRichiestaIntegrazioneComponent
  ]
})
export class DomandeDaValidareModule { }
