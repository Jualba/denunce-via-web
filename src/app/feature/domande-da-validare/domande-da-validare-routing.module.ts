import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandeDaValidareComponent } from './domande-da-validare.component';
import { ValutazioneDomandaDiniegoComponent } from './valutazione-domanda-diniego/valutazione-domanda-diniego.component';
import { ValutazioneDomandaRichiestaIntegrazioneComponent } from './valutazione-domanda-richiesta-integrazione/valutazione-domanda-richiesta-integrazione.component';

const routes: Routes = [
  {
    path: '',
    component: DomandeDaValidareComponent
  },
  {
    path: 'valutazione-domanda-diniego',
    component: ValutazioneDomandaDiniegoComponent
  },
  {
    path: 'valutazione-domanda-richiesta-integrazione',
    component: ValutazioneDomandaRichiestaIntegrazioneComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeDaValidareRoutingModule { }
