import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DenunceService } from '../denunce.service';
import { takeUntil } from 'rxjs/operators';
import { Domanda } from '../../../shared/models/domanda/domanda';

@Component({
  selector: 'app-documenti-list',
  templateUrl: './documenti-list.component.html',
  styleUrls: ['./documenti-list.component.css']
})
export class DocumentiListComponent implements OnInit {

  domanda: Domanda[];
  noData = false;
  private destroy$ = new Subject<boolean>();

  constructor(private router: Router, private denunceService: DenunceService) { }

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

  dettaglioDenuncia(id: string): void {
    // TODO reindirizzare a dettaglio denuncia
    this.router.navigate(['/denunce/dettaglio', id]).then();
  }
  downloadAtto(): boolean {
    // TODO download atto
    return false;
  }

}
