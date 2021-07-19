import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DenunceRoutingModule } from './denunce-routing.module';
import { DenunceComponent } from './denunce.component';
import { DenunceListComponent } from './denunce-list/denunce-list.component';
import { DenunciaEditComponent } from './denuncia-edit/denuncia-edit.component';
import { CommissariatoFormComponent } from './denuncia-forms/commissariato-form/commissariato-form.component';
import { TargaFormComponent } from './denuncia-forms/targa-form/targa-form.component';
import { VeicoloFormComponent } from './denuncia-forms/veicolo-form/veicolo-form.component';
import { DocumentiFormComponent } from './denuncia-forms/documenti-form/documenti-form.component';
import { TitoliFormComponent } from './denuncia-forms/titoli-form/titoli-form.component';
import { ArmiFormComponent } from './denuncia-forms/armi-form/armi-form.component';
import { AltroFormComponent } from './denuncia-forms/altro-form/altro-form.component';
import { DenunciaDetailComponent } from './denuncia-detail/denuncia-detail.component';


@NgModule({
  declarations: [
    DenunceComponent,
    DenunceListComponent,
    DenunciaEditComponent,
    CommissariatoFormComponent,
    TargaFormComponent,
    VeicoloFormComponent,
    DocumentiFormComponent,
    TitoliFormComponent,
    ArmiFormComponent,
    AltroFormComponent,
    DenunciaDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    DenunceRoutingModule
  ]
})
export class DenunceModule { }
