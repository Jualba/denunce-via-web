import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandeComponent } from './domande.component';
import { DomandaEditComponent } from './domanda-edit/domanda-edit.component';
import { DomandaDetailComponent } from './domanda-detail/domanda-detail.component';
import { DomadeDiIscrizioneComponent } from './domade-di-iscrizione/domade-di-iscrizione.component';
import { DomandeSectionCComponent } from './domande-section-c/domande-section-c.component';
import { DomandeSectionAComponent } from './domande-section-a/domande-section-a.component';
import { DomandeSectionBComponent } from './domande-section-b/domande-section-b.component';
import {AggiungiNuovoSocioComponent} from './aggiungi-nuovo-socio/aggiungi-nuovo-socio.component';


const routes: Routes = [
  {
    path: '',
    component: DomandeComponent
  },
  {
    path: 'crea',
    component: DomandaEditComponent
  },
  {
      path: 'domanda-di-iscrizione',
      component: DomadeDiIscrizioneComponent
    },
  {
    path: 'dettaglio/:id',
    component: DomandaDetailComponent
  }
  ,
    {
      path: 'domande-section-c',
      component: DomandeSectionCComponent
    }
    ,
      {
          path: 'domande-section-a',
          component: DomandeSectionAComponent
        }
         ,
      {
          path: 'domande-section-b',
          component: DomandeSectionBComponent
       }
         ,
       {
          path: 'aggiungi-nuovo-socio',
          component: AggiungiNuovoSocioComponent
       }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
