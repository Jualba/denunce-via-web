import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandeComponent } from './domande.component';
import { DomandaEditComponent } from './domanda-edit/domanda-edit.component';
import { DomandaDetailComponent } from './domanda-detail/domanda-detail.component';
import { DomadeDiIscrizioneComponent } from './domade-di-iscrizione/domade-di-iscrizione.component';
import { DomandeSectionCComponent } from './domande-section-c/domande-section-c.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
