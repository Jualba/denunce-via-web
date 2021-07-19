import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertService } from './alert.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Alert } from '../../models/alert/alert';

declare var $: any;

@Component({
  selector: 'agid-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit, OnDestroy {

  @Input() id: string;
  // indica se l’alert di chiuderà automaticamente ad un click esterno. Di default è true
  @Input() autoClear: boolean = true;
  /**
   * evento che si scatena alla chiusura dell’alert. Esempio di utilizzo nell’html:
   * ```html
   * <agid-alert [id]="id" (closed)="metodo()"></agid-alert>
   * ```
   * Nello script:
   * ```typescript
   * metodo(): void {
   *   // fai qualcosa dopo la chiusura dell’alert
   * }
   * ```
   */
  @Output() closed = new EventEmitter<boolean>();

  alert: Alert;
  destroy$ = new Subject<boolean>();

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    $(document).ready(() => this.alertService.values$.pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        if (values && values.id === this.id) {
          this.alert = values;
          // mostra l’alert
          $(`#${this.id}`).show();
          // effettua lo scroll verso la posizione dell’alert
          document.getElementById(this.id).scrollIntoView({ behavior: 'smooth', block: 'center' });
          // attiva l’ascolto sul click del mouse, se autoClear è true
          this.closeOnMouseup();
        }
      }));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.alertService.values$.next(null);
  }

  // nasconde l’alert ed emette l’evento di chiusura
  closeAlert(): void {
    $(`#${this.id}`).hide();
    this.closed.emit(true);
  }

  // chiude automaticamente l’alert se si clicca fuori e se autoClear è valorizzato con true
  closeOnMouseup(): void {
    if (this.autoClear) {
      /* crea un metodo di callback utilizzato nel takeWhile
        per verificare se il click del mouse è avvenuto all’interno dell’alert*/
      const isAlertClick = e => !!($(e.target).closest((`#${this.id}`)).length);
      /* genera un observable dall’evento 'mouseup' e si mette in ascolto. Se avviene un click fuori
         dall’alert, chiude l’alert e interrompe l’ascolto sull’evento utilizzando il takeWhile */
      fromEvent(document, 'mouseup').pipe(takeUntil(this.destroy$),
        takeWhile(e => isAlertClick(e), true))
        .subscribe(e => {
          if (!isAlertClick(e)) {
            this.closeAlert();
          }
        });
    }
  }

}
