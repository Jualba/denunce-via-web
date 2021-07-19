import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  dialogValues$ = new BehaviorSubject<{ title: string, text: string, msgLabel?: string, maxlength?: number }>(null);
  confirm$ = new Subject<{ value: boolean, msg?: string }>();

  constructor() { }

  /**
   * Apre la modale di conferma effettuando un next sul BehaviorSubject dialogValues$,
   * su cui è in ascolto il componente della modale, impostando i seguenti campi
   * @param title il titolo della modale di conferma, obbligatorio
   * @param text il testo della modale di conferma, obbligatorio
   * @param msgLabel indica se la modale avrà un campo textarea per eventuali messaggi, non obbligatorio
   * @param maxlength indica la lunghezza massima del campo di textarea, non obbligatorio
   */
  openConfirmDialog(title, text, msgLabel?, maxlength?): void {
    this.dialogValues$.next({ title, text, msgLabel, maxlength });
  }

}
