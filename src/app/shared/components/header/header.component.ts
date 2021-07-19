import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Utente } from '../../models/utente/utente';
import { initNav } from './header.jq';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  utente: Utente;
  linguaAttuale: string = 'it';
  lingue: string[] = ['it', 'en', 'fr', 'es', 'de'];
  collapse: boolean = true;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    // inizializza navbar per mobile
    initNav();
    // aggiunge le lingue e imposta l’italiano come default
    this.translate.addLangs(this.lingue);
    this.translate.setDefaultLang(this.linguaAttuale);
    // mock utente
    this.utente = { nome: 'Mario', cognome: 'Rossi', email: 'm.rossi@mail.it' }
  }

  useLanguage(lingua: string): boolean {
    this.translate.use(lingua);
    this.linguaAttuale = lingua
    return false;
  }

}
