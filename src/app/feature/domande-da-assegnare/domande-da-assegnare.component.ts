import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-domande-da-assegnare',
  templateUrl: './domande-da-assegnare.component.html',
  styleUrls: ['./domande-da-assegnare.component.css']
})
export class DomandeDaAssegnareComponent implements OnInit {

  sezioni = ['Ordinaria', 'OCRI']

  formTest = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
