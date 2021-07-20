import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandeComponent } from './domande.component';
import { DomandaEditComponent } from './domanda-edit/domanda-edit.component';
import { DomandaDetailComponent } from './domanda-detail/domanda-detail.component';

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
    path: 'dettaglio/:id',
    component: DomandaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
