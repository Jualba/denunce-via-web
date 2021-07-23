import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-domanda-da-validare-table',
  templateUrl: './domanda-da-validare-table.component.html',
  styleUrls: ['./domanda-da-validare-table.component.css']
})
export class DomandaDaValidareTableComponent implements OnInit {

  domandeList = [];

  posizioniTarga: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.domandeList.push(
        {
          id: 0,
          nome: 'Paolo Rosi',
          data_presentazione: new Date(),
          sezione: 'Iscritto'
        },
        {
          id: 1,
          nome: 'Paolo Rosi',
          data_presentazione: new Date(),
          sezione: 'Iscritto'
        },
        {
          id: 2,
          nome: 'Paolo Rosi',
          data_presentazione: new Date(),
          sezione: 'Iscritto'
        },
      );
    }, 50);
  }


  valutaDomanda(e) {
   $('#valutazioneDomandaModal').modal('show');
   e.preventDefault();
  }

}
