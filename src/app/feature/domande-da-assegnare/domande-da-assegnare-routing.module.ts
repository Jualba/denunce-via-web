import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandeDaAssegnareComponent } from './domande-da-assegnare.component';

const routes: Routes = [
  {
    path: '',
    component: DomandeDaAssegnareComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeDaAssegnareRoutingModule { }
