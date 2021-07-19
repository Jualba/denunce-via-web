import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Denuncia } from '../../../shared/models/denuncia/denuncia';
import { Domanda } from '../../../shared/models/domanda/domanda';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDenuncia } from '../../../shared/models/denuncia/tipo-denuncia.enum';
@Component({
  selector: 'app-domanda-edit',
  templateUrl: './domanda-edit.component.html',
  styleUrls: ['./domanda-edit.component.css']
})

export class DomandaEditComponent implements OnInit {

  isShown: boolean = true ; // hidden by default
  idDenuncia: string;
  domanda: Domanda;
  denunciaTargaForm: FormGroup;
  denunciaVeicoloForm: FormGroup;
  denunciaDocumentiForm: FormGroup;
  denunciaTitoliForm: FormGroup;
  denunciaArmiForm: FormGroup;
  denunciaAltroForm: FormGroup;
  destroy$ = new Subject<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.creaForm();
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$))
      .subscribe(map => this.idDenuncia = map.get('id'))
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  creaForm(): void {
    this.denunciaTargaForm = this.fb.group({ tipoDenuncia: [TipoDenuncia.TARGA, Validators.required] });
    this.denunciaVeicoloForm = this.fb.group({ tipoDenuncia: [TipoDenuncia.VEICOLO, Validators.required] });
    this.denunciaDocumentiForm = this.fb.group({ tipoDenuncia: [TipoDenuncia.DOCUMENTI, Validators.required ]});
    this.denunciaTitoliForm = this.fb.group({ tipoDenuncia: [TipoDenuncia.TITOLI, Validators.required] });
    this.denunciaArmiForm = this.fb.group({ tipoDenuncia: [TipoDenuncia.ARMI, Validators.required] });
    this.denunciaAltroForm = this.fb.group({ tipoDenuncia: [TipoDenuncia.ALTRO, Validators.required] });
  }

  annullaDenuncia() {
    this.router.navigate(['/denunce']).then();
  }

  inviaDenuncia(form: FormGroup) {
    console.log(form.value);
  }

  toggleShow() {
  this.isShown = false;
  }
}
