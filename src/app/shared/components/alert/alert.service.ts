import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../../models/alert/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  values$ = new BehaviorSubject<Alert>(null);

  constructor() { }

  /**
   * Mostra l’alert con il corrispettivo id, inviando i parametri al componente dell’alert
   * tramite il BehaviorSubject values$.
   * Il componente alert va inserito nell’html, dove si vuole che appaia, nel seguente modo:
   * ```html
   * <agid-alert [id]="id"></agid-alert>
   * ```
   * @param id identificativo dell’alert, deve essere lo stesso di quello inserito come @input nell’html
   * @param type tipo di alert, può essere 'info', 'success', 'warning' o 'danger'.
   * @param text contenuto dell’alert
   * @param title aggiunge un titolo all’alert, non obbligatorio
   */
  showAlert(id: string, type: 'info' | 'success' | 'warning' | 'danger', text: string, title?: string): void {
    this.values$.next({id, type, text, title});
  }

}
