import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandeDaValidareComponent } from './domande-da-validare.component';

const routes: Routes = [
  {
    path: '',
    component: DomandeDaValidareComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeDaValidareRoutingModule { }
