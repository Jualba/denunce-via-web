import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  linkPolizia = 'https://www.poliziadistato.it/';
  linkMinistero = 'https://www.interno.gov.it';

  constructor() { }

  ngOnInit(): void { }

}
