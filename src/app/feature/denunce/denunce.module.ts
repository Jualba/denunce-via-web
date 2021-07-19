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
import { DomandaFormComponent } from './denuncia-forms/domanda-form/domanda-form.component';
import { VeicoloFormComponent } from './denuncia-forms/veicolo-form/veicolo-form.component';
import { DocumentiFormComponent } from './denuncia-forms/documenti-form/documenti-form.component';
import { TitoliFormComponent } from './denuncia-forms/titoli-form/titoli-form.component';
import { ArmiFormComponent } from './denuncia-forms/armi-form/armi-form.component';
import { AltroFormComponent } from './denuncia-forms/altro-form/altro-form.component';
import { DenunciaDetailComponent } from './denuncia-detail/denuncia-detail.component';
// import { DocumentiListComponent } from './documenti-list/documenti-list.component';

@NgModule({
  declarations: [
    DenunceComponent,
    DenunceListComponent,
    DenunciaEditComponent,
    CommissariatoFormComponent,
    DomandaFormComponent,
    VeicoloFormComponent,
    DocumentiFormComponent,
    TitoliFormComponent,
    ArmiFormComponent,
    AltroFormComponent,
    DenunciaDetailComponent
//     DocumentiListComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    DenunceRoutingModule
  ],
  exports: [DenunceListComponent,
           DenunciaEditComponent,
           DenunceComponent,
           ArmiFormComponent,
           CommissariatoFormComponent,
           DomandaFormComponent,
           DenunciaDetailComponent
//            DocumentiListComponent
  ]
})
export class DenunceModule { }
