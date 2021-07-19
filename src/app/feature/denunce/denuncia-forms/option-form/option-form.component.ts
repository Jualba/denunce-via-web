import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { Denuncia } from '../../../../shared/models/denuncia/denuncia';
import { Domanda } from '../../../../shared/models/domanda/domanda';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.css']
})
export class OptionFormComponent implements OnInit {

  @Input() domanda: Domanda;
  @Input() form: FormGroup;

  posizioniTarga: any[] = [];
  destroy$ = new Subject<boolean>()

  constructor() { }

  ngOnInit(): void {
    this.mockDati();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const domanda = changes.denuncia?.currentValue;
    if (changes.form?.isFirstChange()) { this.creaForm(); }
    if (domanda) { this.aggiornaForm(domanda); }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  creaForm(): void {
    this.form.addControl('cognome', new FormControl('', Validators.required));
    this.form.addControl('nome', new FormControl('', Validators.required));
    this.form.addControl('codiceFiscale', new FormControl('', Validators.required));
    this.form.addControl('comuneNascita', new FormControl('', Validators.required));
    this.form.addControl('provinciaNascita', new FormControl('', Validators.required));
    this.form.addControl('statoNascita', new FormControl('', Validators.required));
    this.form.addControl('dataNascita', new FormControl('', Validators.required));
    this.form.addControl('indirizzoResidenza', new FormControl('', Validators.required));
    this.form.addControl('civicoResidenza', new FormControl('', Validators.required));
    this.form.addControl('comuneResidenza', new FormControl('', Validators.required));
    this.form.addControl('capResidenza', new FormControl('', Validators.required));
    this.form.addControl('provinciaResidenza', new FormControl('', Validators.required));
    this.form.addControl('indirizzoDomicilio', new FormControl('', Validators.required));
    this.form.addControl('provinciaResidenza', new FormControl('', Validators.required));
    this.form.addControl('civicoDomicilio', new FormControl('', Validators.required));
    this.form.addControl('comuneDomicilio', new FormControl('', Validators.required));
    this.form.addControl('capDomicilio', new FormControl('', Validators.required));
    this.form.addControl('provinciaDomicilio', new FormControl('', Validators.required));
    this.form.addControl('telefonoFisso', new FormControl('', Validators.required));
    this.form.addControl('cellulare', new FormControl('', Validators.required));
    this.form.addControl('pec', new FormControl('', Validators.required));
    this.form.addControl('email', new FormControl('', Validators.required));
  }


  aggiornaForm(domanda: Domanda): void {
      this.form.patchValue({
      cognome: domanda.cognome,
      nome: domanda.nome,
      codiceFiscale: domanda.codiceFiscale,
      comuneNascita: domanda.comuneNascita,
      provinciaNascita: domanda.provinciaNascita,
      statoNascita: domanda.statoNascita,
      dataNascita: domanda.dataNascita,
      indirizzoResidenza: domanda.indirizzoResidenza,
      civicoResidenza: domanda.civicoResidenza,
      comuneResidenza: domanda.comuneResidenza,
      capResidenza: domanda.capResidenza,
      provinciaResidenza: domanda.provinciaResidenza,
      indirizzoDomicilio: domanda.indirizzoDomicilio,
      civicoDomicilio: domanda.civicoDomicilio,
      comuneDomicilio: domanda.comuneDomicilio,
      capDomicilio: domanda.capDomicilio,
      provinciaDomicilio: domanda.provinciaDomicilio,
      telefonoFisso: domanda.telefonoFisso,
      cellulare: domanda.cellulare,
      pec: domanda.pec,
      email: domanda.email
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
