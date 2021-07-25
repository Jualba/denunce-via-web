import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valutazione-domanda-diniego',
  templateUrl: './valutazione-domanda-diniego.component.html',
  styleUrls: ['./valutazione-domanda-diniego.component.css']
})
export class ValutazioneDomandaDiniegoComponent implements OnInit {

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
