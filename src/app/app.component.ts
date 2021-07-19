import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './core/interceptor/spinner.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'denunce-via-web';
  isLoading: boolean = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    // checks if spinner has been set or removed
    this.spinnerService.loading$.pipe(delay(0))
      .subscribe(loading => this.isLoading = loading);
  }

}
