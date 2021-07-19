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
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { initializeApp } from './app-inizializer';
import { HttpRequestInterceptor } from './core/interceptor/http-request.interceptor';

registerLocaleData(localeIT, 'it');

@NgModule({
  declarations: [
    AppComponent
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
    DenunceModule,
    HomeModule

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
