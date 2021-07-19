import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DomandeComponent } from './feature/domande/domande.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'denunce',
    loadChildren: () => import('./feature/denunce/denunce.module').then(m => m.DenunceModule)
  }
  ,{ path: 'home', component: HomeComponent }
  ,{ path: 'domande', component: DomandeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
