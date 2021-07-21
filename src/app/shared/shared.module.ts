import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaQueryDirective } from './utils/directives/media-query.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { UploadComponent } from './components/upload/upload.component';


@NgModule({
  declarations: [
    MediaQueryDirective,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    DatepickerComponent,
    CheckboxComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
    MediaQueryDirective,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    DatepickerComponent,
    TranslateModule,
    CheckboxComponent,
    UploadComponent

  ]
})
export class SharedModule { }
