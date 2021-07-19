import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Denuncia } from '../../../../shared/models/denuncia/denuncia';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-altro-form',
  templateUrl: './altro-form.component.html',
  styleUrls: ['./altro-form.component.css']
})
export class AltroFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() denuncia: Denuncia;
  @Input() form: FormGroup;

  destroy$ = new Subject<boolean>()

  constructor() { }

  ngOnInit(): void {
    this.creaForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const denuncia = changes.denuncia?.currentValue;
    if (denuncia) { this.aggiornaForm(denuncia); }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  creaForm(): void {
    // TODO aggiunge elementi al form
  }

  aggiornaForm(denuncia: Denuncia): void {
    // TODO aggiorna elementi del form
  }

}
