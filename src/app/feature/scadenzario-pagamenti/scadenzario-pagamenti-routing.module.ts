import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScadenzarioPagamentiComponent } from './scadenzario-pagamenti.component';

const routes: Routes = [
  {
    path: '',
    component: ScadenzarioPagamentiComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScadenzarioPagamentiRoutingModule { }
