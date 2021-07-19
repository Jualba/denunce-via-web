import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Denuncia } from '../../../shared/models/denuncia/denuncia';
import { DenunceService } from '../denunce.service';
import { TipoDenuncia } from '../../../shared/models/denuncia/tipo-denuncia.enum';

@Component({
  selector: 'app-denuncia-detail',
  templateUrl: './denuncia-detail.component.html',
  styleUrls: ['./denuncia-detail.component.css']
})
export class DenunciaDetailComponent implements OnInit {

  form: FormGroup;
  denuncia: Denuncia;
  idDenuncia: string;
  tipoDenuncia = TipoDenuncia;
  destroy$ = new Subject<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              private denunceService: DenunceService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$))
      .subscribe(map => {
        this.idDenuncia = map.get('id')
        this.getDenuncia();
      })
    this.form = this.fb.group({});
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getDenuncia(): void {
    this.denunceService.getDenuncia(this.idDenuncia).pipe(takeUntil(this.destroy$))
      .subscribe(denuncia => this.denuncia = denuncia);
  }

  indietro() {
    this.router.navigate(['/denunce']).then();
  }
}
