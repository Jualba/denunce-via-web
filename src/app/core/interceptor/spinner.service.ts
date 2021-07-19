import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loading$ = new BehaviorSubject<boolean>(false);
  loadingMap = new Map<string, boolean>();

  constructor() { }

  setLoading(loading: boolean, url: string): void {
    if (loading) {
      // sets the spinner for the api and adds the url to the list of api
      this.loadingMap.set(url, loading);
      this.loading$.next(true);
    }
    else if (!loading && this.loadingMap.has(url)) {
      // removes the url from mapping when call ends
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      // removes the spinner if all calls have ended
      this.loading$.next(false);
    }
  }
}
