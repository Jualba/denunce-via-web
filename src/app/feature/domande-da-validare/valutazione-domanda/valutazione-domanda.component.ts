import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valutazione-domanda',
  templateUrl: './valutazione-domanda.component.html',
  styleUrls: ['./valutazione-domanda.component.css']
})
export class ValutazioneDomandaComponent implements OnInit {

  form: FormGroup;
  documentList = [];

  descriptionList = [];

  posizioniTarga: any[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router) { 
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.documentList.push(
        {
          id: 0,
          note: 'Document 1...'
        },
        {
          id: 1,
          note: 'Document 2...'
        },
        {
          id: 2,
          note: 'Document 3...'
        },
      );
    }, 50);
    this.creaForm();
  }

  creaForm(): void {
    this.form = this.formBuilder.group({
      cognome: ['', Validators.required],
      nome: ['', Validators.required],
      codiceFiscale: ['', Validators.required],
      comuneNascita: ['', Validators.required],
      provinciaNascita: ['', Validators.required],
      statoNascita: ['', Validators.required],
      dataNascita: ['', Validators.required],
      indirizzoResidenza: ['', Validators.required],
      civicoResidenza: ['', Validators.required],
      comuneResidenza: ['', Validators.required],
      capResidenza: ['', Validators.required],
      provinciaResidenza: ['', Validators.required],
      indirizzoDomicilio: ['', Validators.required],
      civicoDomicilio: ['', Validators.required],
      comuneDomicilio: ['', Validators.required],
      capDomicilio: ['', Validators.required],
      provinciaDomicilio: ['', Validators.required],
      telefonoFisso: ['', Validators.required],
      cellulare: ['', Validators.required],
      pec: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  test(): void{

  }

  download(id): void {

  }

  approva(): void {
    
  }

  diniego(): void {
    this.router.navigate(['/domande-da-validare/valutazione-domanda-diniego']).then();
  }

  richiestaIntegrazione(): void {
    this.router.navigate(['/domande-da-validare/valutazione-domanda-richiesta-integrazione']).then();
  }

}
