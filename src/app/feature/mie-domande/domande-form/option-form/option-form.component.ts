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
  radioSelected :string;

  posizioniTarga: any[] = [];
  destroy$ = new Subject<boolean>()

  constructor() { }

  ngOnInit(): void {
    this.mockDati();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const domanda = changes.denuncia?.currentValue;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  creaForm(): void {

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
