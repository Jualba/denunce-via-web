import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Denuncia } from '../../../../shared/models/denuncia/denuncia';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-commissariato-form',
  templateUrl: './commissariato-form.component.html',
  styleUrls: ['./commissariato-form.component.css']
})
export class CommissariatoFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() id: string;
  @Input() denuncia: Denuncia;
  @Input() form: FormGroup;

  province: any[] = [];
  commissariati: any[] = [];
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
    this.form.addControl('provinciaCommissariato', new FormControl('', Validators.required));
    this.form.addControl('commissariato', new FormControl('', Validators.required));
  }

  aggiornaForm(denuncia: Denuncia): void {
    this.form.get('provinciaCommissariato').setValue(denuncia.provinciaCommissariato.id);
    this.form.get('commissariato').setValue(denuncia.commissariato.id);
    Object.values(this.form.controls).forEach(control => control.disable());
  }

  mockDati(): void {
    this.province = [
      {
        id: '1',
        codice: 'ROMA',
        descrizione: 'Roma'
      },
      {
        id: '2',
        codice: 'NAPOLI',
        descrizione: 'Napoli'
      },
      {
        id: '3',
        codice: 'BARI',
        descrizione: 'Bari'
      }
    ]
    this.commissariati = [
      {
        id: '1',
        codice: 'ROMA',
        descrizione: 'Questura di Roma'
      },
      {
        id: '2',
        codice: 'NAPOLI',
        descrizione: 'Questura di Napoli'
      },
      {
        id: '3',
        codice: 'BARI',
        descrizione: 'Questura di Bari'
      }
    ]
  }

}
