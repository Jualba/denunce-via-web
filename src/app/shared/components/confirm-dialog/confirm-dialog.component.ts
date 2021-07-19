import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmDialogService } from './confirm-dialog.service';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'agid-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {

  @Input() id;

  dialogValues: {title: string, text: string, msgLabel?: string, maxlength?: number};
  destroy$ = new Subject<boolean>();
  msgInput = new FormControl('');

  constructor(private confirmService: ConfirmDialogService) { }

  ngOnInit(): void {
    // attende che il componente della modale sia caricato del tutto
    $(document).ready(() =>
      this.confirmService.dialogValues$.pipe(takeUntil(this.destroy$))
        .subscribe(values => {
          this.dialogValues = values;
          if (values) {
            this.dialogValues.maxlength = values.maxlength || 512;
            // apre la modale di conferma
            $(`#${this.id}ConfirmDialog`).modal('show')
              .on('hidden.bs.modal', () => {
                /**
                 * Alla chiusura della modale viene in pulito il campo della textarea e si
                 * invia con il Subject confirm$ un oggetto con il value false, in quanto
                 * non è stata effettuata una conferma.
                 * IMPORTANTE: alla sottoscrizione del Subject confirm$ bisogna
                 * utilizzare nel pipe prima del subscribe la funzione take(1),
                 * in modo da non prendere ulteriori valori dal confirm$ al momento della chiusura della modale.
                 */
                  this.msgInput.setValue('');
                  this.confirmService.confirm$.next({value: false});
                }
              );
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * Sul click del pulsante di conferma viene effettuato un next sul Subject confirm$,
   * su cui bisogna essere in ascolto dopo l’apertura della modale di conferma.
   * IMPORTANTE: utilizzare nel pipe prima del subscribe la funzione take(1),
   * in modo da non prendere ulteriori valori dal confirm$ al momento della chiusura della modale.
   * Viene inviato un oggetto che contiene il value a true, in quanto vi è una conferma, e
   * l’eventuale messaggio scritto dall’utente se si era prevista la textarea.
   */
  confirm(): void {
    this.confirmService.confirm$.next({value: true, msg: this.msgInput?.value});
    $(`#${this.id}ConfirmDialog`).modal('hide');
  }

}
