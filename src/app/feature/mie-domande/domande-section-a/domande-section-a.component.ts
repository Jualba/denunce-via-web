import { Component, OnDestroy, OnInit ,Input,SimpleChanges,OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Denuncia } from '../../../shared/models/denuncia/denuncia';
import { Domanda } from '../../../shared/models/domanda/domanda';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TipoDenuncia } from '../../../shared/models/denuncia/tipo-denuncia.enum';

@Component({
  selector: 'app-domande-section-a',
  templateUrl: './domande-section-a.component.html',
  styleUrls: ['./domande-section-a.component.css']
})
export class DomandeSectionAComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() fm: FormControl;
  @Input() domanda: Domanda;
 data = new FormControl('');
//   data: new FormControl('');
  isShown: boolean = true ; // hidden by default
  idDenuncia: string;
//   domanda: Domanda;
  domandaForm: FormGroup;
  denunciaTargaForm: FormGroup;
  denunciaVeicoloForm: FormGroup;
  denunciaDocumentiForm: FormGroup;
  denunciaTitoliForm: FormGroup;
  denunciaArmiForm: FormGroup;
  denunciaAltroForm: FormGroup;
  selected:string;
  destroy$ = new Subject<boolean>();
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

   continueDomanda() {
            this.router.navigate(['/mie-domande/domanda-di-iscrizione']).then();
          }

            keyword = 'citta';
              datas = [
                 {
                   citta: 'Firenze'
                 },
                 {
                   citta: 'Torino'
                 }
              ];

               selectEvent(item) {
                  // do something with selected item
                }

                onChangeSearch(val: string) {
                  // fetch remote data from here
                  // And reassign the 'data' which is binded to 'data' property.
                }

                onFocused(e){
                  // do something when input is focused
                }
}
