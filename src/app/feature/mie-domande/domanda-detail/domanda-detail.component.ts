import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Domanda } from '../../../shared/models/domanda/domanda';
import { DomandaService } from '../domanda.service';
import { TipoDenuncia } from '../../../shared/models/denuncia/tipo-denuncia.enum';


@Component({
  selector: 'app-domanda-detail',
  templateUrl: './domanda-detail.component.html',
  styleUrls: ['./domanda-detail.component.css']
})
export class DomandaDetailComponent implements OnInit {

  form: FormGroup;
   domanda: Domanda;
   idDomanda: string;
   tipoDenuncia = TipoDenuncia;
   destroy$ = new Subject<boolean>();

   constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
               private denunceService: DomandaService) { }

   ngOnInit(): void {
     this.route.paramMap.pipe(takeUntil(this.destroy$))
       .subscribe(map => {
         this.idDomanda = map.get('id')
         this.getDomanda();
       })
     this.form = this.fb.group({});
   }

   ngOnDestroy() {
     this.destroy$.next(true);
     this.destroy$.complete();
   }

   getDomanda(): void {
     this.denunceService.getDomanda(this.idDomanda).pipe(takeUntil(this.destroy$))
       .subscribe(domanda => this.domanda = domanda);
   }
   indietro() {
     this.router.navigate(['/denunce']).then();
   }
}
