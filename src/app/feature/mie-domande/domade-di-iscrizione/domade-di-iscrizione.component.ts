import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DomandaService } from '../domanda.service';
import { takeUntil } from 'rxjs/operators';
import { Domanda } from '../../../shared/models/domanda/domanda';

@Component({
  selector: 'app-domade-di-iscrizione',
  templateUrl: './domade-di-iscrizione.component.html',
  styleUrls: ['./domade-di-iscrizione.component.css']
})
export class DomadeDiIscrizioneComponent implements OnInit {


  domanda: Domanda[];
  noData = false;
  private destroy$ = new Subject<boolean>();

  constructor(private router: Router, private denunceService: DomandaService) { }

  ngOnInit(): void {
    this.getListaDomanda();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  getListaDomanda(): void {
    this.denunceService.getListaDomande().pipe(takeUntil(this.destroy$))
      .subscribe(domanda => this.domanda = domanda);
  }

  dettaglioDomanda(id: string): void {
    // TODO reindirizzare a dettaglio denuncia
    this.router.navigate(['/denunce/dettaglio', id]).then();
  }


  downloadAtto(): boolean {
    // TODO download atto
    return false;
  }
}
