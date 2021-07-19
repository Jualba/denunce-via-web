import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenunceComponent } from './denunce.component';
import { DomandaEditComponent } from './domanda-edit/domanda-edit.component';
import { DenunciaEditComponent } from './denuncia-edit/denuncia-edit.component';
import { DenunciaDetailComponent } from './denuncia-detail/denuncia-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DenunceComponent
  },
  {
    path: 'crea',
    component: DenunciaEditComponent
  },
   {
      path: 'nuova',
      component: DomandaEditComponent
    },
  {
    path: 'dettaglio/:id',
    component: DenunciaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunceRoutingModule { }
