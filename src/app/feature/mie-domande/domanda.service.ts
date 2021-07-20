import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Domanda } from '../../shared/models/domanda/domanda';

@Injectable({
  providedIn: 'root'
})

export class DomandaService {


  constructor(private http: HttpClient) { }

   getListaDomande(): Observable<Domanda[]> {
    // TODO call to BE and remove Observable of()
    return of(this.mockListaDomanda())
  }

   getDomanda(id): Observable<Domanda> {
      return of(this.mockDomanda(id));
  }



  mockListaDomanda(): Domanda[] {
      return [
      {
              idDomanda: '',
              cognome: '',
               nome: '',
               codiceFiscale:  '',
               comuneNascita:  '',
               provinciaNascita:  '',
               statoNascita:  '',
               dataNascita:  '',

               indirizzoResidenza:  '',
               civicoResidenza:  '',
               comuneResidenza:  '',
               capResidenza:  '',
               provinciaResidenza:  '',

               indirizzoDomicilio:  '',
               civicoDomicilio: '',
               comuneDomicilio:  '',
               capDomicilio: '',
               provinciaDomicilio:  '',

               telefonoFisso: '',
               cellulare:  '',
               pec:  '',
               email:  '',
            }]

    }


  mockDomanda(id: string): Domanda {
    return this.mockListaDomanda().filter(domanda => domanda.idDomanda === id)[0];
  }
}
