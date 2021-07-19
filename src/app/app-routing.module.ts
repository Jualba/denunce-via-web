import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'denunce',
    loadChildren: () => import('./feature/denunce/denunce.module').then(m => m.DenunceModule)
  },
  {
    path: 'scadenzario-pagamenti',
    loadChildren: () => import('./feature/scadenzario-pagamenti/scadenzario-pagamenti.module').then(m => m.ScadenzarioPagamentiModule)
  },
  {
    path: 'domande-da-assegnare',
    loadChildren: () => import('./feature/domande-da-assegnare/domande-da-assegnare.module').then(m => m.DomandeDaAssegnareModule)
  },
  {
    path: 'domande-pdg-da-firmare',
    loadChildren: () => import('./feature/domande-pdg-da-firmare/domande-pdg-da-firmare.module').then(m => m.DomandePdgDaFirmareModule)
  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
