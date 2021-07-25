import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valutazione-domanda-richiesta-integrazione',
  templateUrl: './valutazione-domanda-richiesta-integrazione.component.html',
  styleUrls: ['./valutazione-domanda-richiesta-integrazione.component.css']
})
export class ValutazioneDomandaRichiestaIntegrazioneComponent implements OnInit {

  form: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    
  }

  conferma(): void {

  }

  anulla(): void {

  }

}
