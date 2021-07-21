import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-domande-pdg-da-firmare-table',
  templateUrl: './domande-pdg-da-firmare-table.component.html',
  styleUrls: ['./domande-pdg-da-firmare-table.component.css']
})
export class DomandePdgDaFirmareTableComponent implements OnInit, OnChanges  {

  domandeList = [];

  cognomeFilter = undefined;

  sezioneFilter = undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    setTimeout(() => {
      this.domandeList.push(
        {
          id: 0, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          sezione: 'Iscritto', 
          control: new FormControl('')
        },
        {
          id: 1, 
          nome: 'Rossi Mario', 
          data_iscrizione: new Date(), 
          sezione: 'Iscritto',
          control: new FormControl('')
        },
        {
          id: 2, 
          nome: 'Paolo Rosi', 
          data_iscrizione: new Date(), 
          sezione: 'Iscritto',
          control: new FormControl('')
        },
        {
          id: 3, 
          nome: 'Rossi Mario', 
          data_iscrizione: new Date(), 
          sezione: 'Cancellato',
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

  onCognomeChange(e){
    this.cognomeFilter = e.target.value;
    const tableList = this.domandeList;
    
      this.domandeList = this.domandeList.filter(item => {
        if(this.sezioneFilter) {
          return item.nome.includes(this.cognomeFilter) && item.sezione.includes(this.sezioneFilter)
        }
        return item.nome.includes(this.cognomeFilter);
       
      })
    
    
  }

  onSezioneChange(e){
    this.sezioneFilter = e.target.value;
    const tableList = this.domandeList;
    this.domandeList = this.domandeList.filter(item => {
      if(this.cognomeFilter) {
        return item.sezione.includes(this.sezioneFilter) && item.nome.includes(this.cognomeFilter)
      }
      return item.sezione.includes(this.sezioneFilter);
     
    })
  }

  ngOnChanges(changes: SimpleChanges) {
   
  }
}
