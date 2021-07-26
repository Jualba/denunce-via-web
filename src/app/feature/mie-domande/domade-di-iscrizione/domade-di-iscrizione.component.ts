import { Component, OnDestroy, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DomandaService } from '../domanda.service';
import { takeUntil } from 'rxjs/operators';
import { Domanda } from '../../../shared/models/domanda/domanda';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TipoDomanda } from '../../../shared/models/domanda/tipo-domanda.enum';
// import { DomandaDiIscrizioneDettaglioComponent } from './domanda-di-iscrizione-dettaglio/domanda-di-iscrizione-dettaglio.component';

declare var $: any;

@Component({
  selector: 'app-domade-di-iscrizione',
  templateUrl: './domade-di-iscrizione.component.html',
  styleUrls: ['./domade-di-iscrizione.component.css']
})
export class DomadeDiIscrizioneComponent implements OnInit {

 @Input() domandas: Domanda;
  domanda: Domanda[];
    domandaForm: FormGroup;
  noData = false;
  private destroy$ = new Subject<boolean>();

  constructor(private router: Router, private denunceService: DomandaService,private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getListaDomanda();
    this.creaForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  getListaDomanda(): void {
    this.denunceService.getListaDomande().pipe(takeUntil(this.destroy$))
      .subscribe(domanda => this.domanda = domanda);
  }

  dettaglioDomanda(e): void {
        $('#domandaModal').modal('show');
        $('.modal-backdrop').remove();
        e.preventDefault();
  }


  downloadAtto(): boolean {
    // TODO download atto
    return false;
  }

   creaForm(): void {
      this.domandaForm = this.fb.group({ tipoDomanda: [TipoDomanda.ISCRIZIONE, Validators.required]});
      }
}
