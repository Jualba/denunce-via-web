import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DenunceService } from '../denunce.service';
import { takeUntil } from 'rxjs/operators';
import { Denuncia } from '../../../shared/models/denuncia/denuncia';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './denunce-list.component.html',
  styleUrls: ['./denunce-list.component.css']
})
export class DenunceListComponent implements OnInit, OnDestroy {

  denunce: Denuncia[];
  noData = false;
  private destroy$ = new Subject<boolean>();

  constructor(private router: Router, private denunceService: DenunceService) { }

  ngOnInit(): void {
    this.getListaDenunce();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  getListaDenunce(): void {
    this.denunceService.getListaDenunce().pipe(takeUntil(this.destroy$))
      .subscribe(denunce => this.denunce = denunce);
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
