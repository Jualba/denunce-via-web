import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  /* list of api without spinner */
  urlExceptions: string[] = [];

  constructor(private spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.urlExceptions.some(url => request.url?.includes(url))) {
      // sets spinner for the current url
      this.spinnerService.setLoading(true, request.url);
    }
    return next.handle(request).pipe(
      // removes spinner for the current url when call ends
      finalize(() => this.spinnerService.setLoading(false, request.url))
    )
  }
}
