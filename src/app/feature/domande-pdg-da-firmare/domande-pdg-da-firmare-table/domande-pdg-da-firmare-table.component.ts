import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-domande-pdg-da-firmare-table',
  templateUrl: './domande-pdg-da-firmare-table.component.html',
  styleUrls: ['./domande-pdg-da-firmare-table.component.css']
})
export class DomandePdgDaFirmareTableComponent implements OnInit {

  domandeList = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.domandeList.push(
        {
          id: 0, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          stato: 'Iscritto', 
          control: new FormControl('')
        },
        {
          id: 1, 
          nome: 'Rossi Mario', 
          data_iscrizione: new Date(), 
          stato: 'Iscritto',
          control: new FormControl('')
        },
        {
          id: 2, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          stato: 'Iscritto',
          control: new FormControl('')
        },
      )
    }, 200)

  }
  
  dettaglioDomanda(id){

  }

  pdg(id){

  }

  firma(id){

  }
}
