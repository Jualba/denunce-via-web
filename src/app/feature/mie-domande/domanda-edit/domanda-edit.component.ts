import { Component, OnDestroy, OnInit ,Input,SimpleChanges,OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Denuncia } from '../../../shared/models/denuncia/denuncia';
import { Domanda } from '../../../shared/models/domanda/domanda';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TipoDomanda } from '../../../shared/models/domanda/tipo-domanda.enum';



@Component({
  selector: 'app-domanda-edit',
  templateUrl: './domanda-edit.component.html',
  styleUrls: ['./domanda-edit.component.css']
})

export class DomandaEditComponent implements OnInit,OnChanges, OnDestroy {

  @Input() form: FormGroup;
  @Input() fm: FormControl;
  @Input() domanda: Domanda;
 data = new FormControl('');
//   data: new FormControl('');
  isShown: boolean = true ; // hidden by default
  idDenuncia: string;
//   domanda: Domanda;
  domandaForm: FormGroup;
  optionForm: FormGroup;
  selected:string;
  destroy$ = new Subject<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.creaForm();
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$))
      .subscribe(map => this.idDenuncia = map.get('id'))
  }

   ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  creaForm(): void {
    this.domandaForm = this.fb.group({ tipoDomanda: [TipoDomanda.OPTION, Validators.required]});
    this.optionForm = this.fb.group({ tipoDomanda: [TipoDomanda.OPTION, Validators.required]});
  }


  get myForm():Object {
    return this.domandaForm.get('optionIscrizione');
  }
  annullaDenuncia() {
    this.router.navigate(['/denunce']).then();
  }

  inviaDenuncia(form: FormGroup) {
    console.log(form.value);
  }

  toggleShow() {
    alert(JSON.stringify(this.optionForm.value))
    if(this.myForm=="first")
    console.log("firstttttttttt");
  }




}
