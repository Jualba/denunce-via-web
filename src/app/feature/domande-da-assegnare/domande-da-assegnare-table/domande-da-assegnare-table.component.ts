import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-domande-da-assegnare-table',
  templateUrl: './domande-da-assegnare-table.component.html',
  styleUrls: ['./domande-da-assegnare-table.component.css']
})
export class DomandeDaAssegnareTableComponent implements OnInit {

  domandeList = [];
  selectControl = new FormGroup(
    {
      0: new FormControl(''),
      1: new FormControl(''),
      2: new FormControl(''),
    }
  );

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.domandeList.push(
        {
          id: 0, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          stato: 'Iscritto', 
          options: [ 'responsabile 1','responsabile 2'] ,
          control: new FormControl('')
        },
        {
          id: 1, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          stato: 'Iscritto', 
          options: [ 'responsabile 1','responsabile 2'] ,
          control: new FormControl('')
        },
        {
          id: 2, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          stato: 'Iscritto', 
          options: [ 'responsabile 1','responsabile 2'] ,
          control: new FormControl('')
        },
      )
    }, 200)

  }
  
  dettaglioDomanda(id){

  }
}
