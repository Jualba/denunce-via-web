import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomandePdgDaFirmareComponent } from './domande-pdg-da-firmare.component';

const routes: Routes = [
  {
    path: '',
    component: DomandePdgDaFirmareComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandePdgDaFirmareRoutingModule { }
