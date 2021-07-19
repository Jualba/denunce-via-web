import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Denuncia } from '../../../../shared/models/denuncia/denuncia';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-veicolo-form',
  templateUrl: './veicolo-form.component.html',
  styleUrls: ['./veicolo-form.component.css']
})
export class VeicoloFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() denuncia: Denuncia;
  @Input() form: FormGroup;

  marcheVeicolo: any[] = [];
  destroy$ = new Subject<boolean>()

  constructor() { }

  ngOnInit(): void { }

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
    this.form.addControl('marcaVeicolo', new FormControl('', Validators.required));
    this.form.addControl('modelloVeicolo', new FormControl('', Validators.required));
    this.form.addControl('coloreVeicolo', new FormControl('', Validators.required));
    this.form.addControl('telaioVeicolo', new FormControl('', Validators.required));
    this.form.addControl('dataSmarrimento', new FormControl('', Validators.required));
    this.form.addControl('luogoSmarrimento', new FormControl('', Validators.required));
  }

  aggiornaForm(denuncia: Denuncia): void {
    this.form.patchValue({
      numeroTarga: denuncia.numeroTarga,
      marcaVeicolo: denuncia.marcaVeicolo,
      modelloVeicolo: denuncia.modelloVeicolo,
      coloreVeicolo: denuncia.coloreVeicolo,
      telaioVeicolo: denuncia.telaioVeicolo,
      dataSmarrimento: denuncia.dataSmarrimento,
      luogoSmarrimento: denuncia.luogoSmarrimento
    });
  }

}
