import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Denuncia } from '../../../../shared/models/denuncia/denuncia';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-targa-form',
  templateUrl: './targa-form.component.html',
  styleUrls: ['./targa-form.component.css']
})
export class TargaFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() denuncia: Denuncia;
  @Input() form: FormGroup;

  posizioniTarga: any[] = [];
  destroy$ = new Subject<boolean>()

  constructor() { }

  ngOnInit(): void {
    this.mockDati();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const denuncia = changes.denuncia?.currentValue;
    if (changes.form?.isFirstChange()) { this.creaForm(); }
    if (denuncia) { this.aggiornaForm(denuncia); }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  creaForm(): void {
    this.form.addControl('numeroTarga', new FormControl('', Validators.required));
    this.form.addControl('posizioneTarga', new FormControl('', Validators.required));
    this.form.addControl('marcaVeicolo', new FormControl('', Validators.required));
    this.form.addControl('modelloVeicolo', new FormControl('', Validators.required));
    this.form.addControl('dataSmarrimento', new FormControl('', Validators.required));
    this.form.addControl('luogoSmarrimento', new FormControl('', Validators.required));
  }

  aggiornaForm(denuncia: Denuncia): void {
    this.form.patchValue({
      numeroTarga: denuncia.numeroTarga,
      posizioneTarga: denuncia.posizioneTarga.id,
      marcaVeicolo: denuncia.marcaVeicolo,
      modelloVeicolo: denuncia.modelloVeicolo,
      dataSmarrimento: denuncia.dataSmarrimento,
      luogoSmarrimento: denuncia.luogoSmarrimento
    })
  }

  mockDati(): void {
    this.posizioniTarga = [
      {
        id: '1',
        codice: 'AVANTI',
        descrizione: 'Avanti'
      },
      {
        id: '2',
        codice: 'DIETRO',
        descrizione: 'Dietro'
      },
      {
        id: '3',
        codice: 'ENTRAMBE',
        descrizione: 'Entrambe'
      }
    ]
  }

}
