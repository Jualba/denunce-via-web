import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomandaDetailComponent } from './domanda-detail/domanda-detail.component';
import { DocumentiListComponent } from './domanda-edit/documenti-list/documenti-list.component';
import { DomandaEditComponent } from './domanda-edit/domanda-edit.component';
import { DomandaFormComponent } from './domande-form/domanda-form/domanda-form.component';
import { OptionFormComponent } from './domande-form/option-form/option-form.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DomandeListComponent } from './domande-list/domande-list.component';
import { DomandeComponent } from './domande.component';
import { DomandeRoutingModule } from './domande-routing.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { DomadeDiIscrizioneComponent } from './domade-di-iscrizione/domade-di-iscrizione.component';
import { DomandeSectionCComponent } from './domande-section-c/domande-section-c.component';
import { DomandeSectionAComponent } from './domande-section-a/domande-section-a.component';
import { DomandeSectionBComponent } from './domande-section-b/domande-section-b.component';
import { AggiungiNuovoSocioComponent } from './aggiungi-nuovo-socio/aggiungi-nuovo-socio.component';



@NgModule({
  declarations: [
  DomandaDetailComponent,
  DocumentiListComponent,
  DomandaEditComponent,
  DomandaFormComponent,
  OptionFormComponent,
  DomandeListComponent,
  DomandeComponent,
  DomadeDiIscrizioneComponent,
  DomandeSectionCComponent,
  DomandeSectionAComponent,
  DomandeSectionBComponent,
  AggiungiNuovoSocioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,DomandeRoutingModule,AutocompleteLibModule
  ]
})
export class DomandeModule { }
