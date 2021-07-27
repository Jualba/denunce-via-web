import { Component, OnDestroy, OnInit ,Input,SimpleChanges,OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Denuncia } from '../../../shared/models/denuncia/denuncia';
import { Domanda } from '../../../shared/models/domanda/domanda';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TipoDomanda } from '../../../shared/models/domanda/tipo-domanda.enum';

@Component({
  selector: 'app-domande-section-b',
  templateUrl: './domande-section-b.component.html',
  styleUrls: ['./domande-section-b.component.css']
})
export class DomandeSectionBComponent implements OnInit {


  @Input() form: FormGroup;
  @Input() fm: FormControl;
  @Input() domanda: Domanda;
 data = new FormControl('');
  idDenuncia: string;
  domandaForm: FormGroup;

  selected:string;
  destroy$ = new Subject<boolean>();
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  this.creaForm();
  }
    creaForm(): void {
      this.domandaForm = this.fb.group({ tipoDomanda: [TipoDomanda.ISCRIZIONE, Validators.required]});
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
