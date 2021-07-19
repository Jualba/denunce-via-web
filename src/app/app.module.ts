import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localeIT from '@angular/common/locales/it';
import { DenunceModule } from './feature/denunce/denunce.module';
import { DomandeComponent } from './feature/domande/domande.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp } from './app-inizializer';
import { HttpRequestInterceptor } from './core/interceptor/http-request.interceptor';
import { DomandaEditComponent } from './feature/denunce/domanda-edit/domanda-edit.component';
import { OptionFormComponent } from './feature/denunce/denuncia-forms/option-form/option-form.component';
import { DocumentiListComponent } from './feature/denunce/documenti-list/documenti-list.component';
import { DomandaDetailComponent } from './feature/denunce/domanda-detail/domanda-detail.component';
import { UploadComponent } from './shared/components/upload/upload.component';

registerLocaleData(localeIT, 'it');

@NgModule({
  declarations: [
    AppComponent,
    DomandeComponent,
    DomandaEditComponent,
    OptionFormComponent,
    DocumentiListComponent,
    DomandaDetailComponent,
    UploadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    DenunceModule
//     DomandeModule
  ],

  providers: [
    {provide: APP_INITIALIZER, useFactory: initializeApp, multi: true, deps: [TranslateService]},
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
