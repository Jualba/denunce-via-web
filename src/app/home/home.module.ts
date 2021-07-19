
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})

export class HomeModule { }
