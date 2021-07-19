import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Denuncia } from '../../shared/models/denuncia/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunceService {

  constructor(private http: HttpClient) { }

  getListaDenunce(): Observable<Denuncia[]> {
    // TODO call to BE and remove Observable of()
    return of(this.mockListaDenunce())
  }

  getDenuncia(id): Observable<Denuncia> {
    return of(this.mockDenuncia(id));
}

  // TODO remove mock
  mockListaDenunce(): Denuncia[] {
    return [
      {
        idDenuncia: '1',
        tipoDenuncia: 'VEICOLO',
        dataInserimento: '06/07/2021',
        commissariato: {
          id: '1',
          codice: 'ROMA',
          descrizione: 'Questura di Roma'
        },
        provinciaCommissariato: {
          id: '1',
          codice: 'ROMA',
          descrizione: 'Roma'
        },
        numeroTarga: 'RM123DAS ',
        marcaVeicolo: 'Fiat',
        modelloVeicolo: 'Punto',
        coloreVeicolo: 'Bianca',
        telaioVeicolo: 'ZFA188000023',
        dataSmarrimento: '06/07/2021',
        luogoSmarrimento: 'Sulla strada di casa'
      },
      {
        idDenuncia: '2',
        tipoDenuncia: 'TARGA',
        dataInserimento: '06/07/2021',
        commissariato: {
          id: '1',
          codice: 'ROMA',
          descrizione: 'Questura di Roma'
        },
        provinciaCommissariato: {
          id: '1',
          codice: 'ROMA',
          descrizione: 'Roma'
        },
        numeroTarga: 'RM1X3CDS ',
        posizioneTarga: {
          id: '2',
          codice: 'DIETRO',
          descrizione: 'Dietro'
        },
        marcaVeicolo: 'Fiat',
        modelloVeicolo: 'Punto',
        dataSmarrimento: '08/07/2021',
        luogoSmarrimento: 'Sulla via per Roma'
      }
    ]
  }

  mockDenuncia(id: string): Denuncia {
    return this.mockListaDenunce().filter(denuncia => denuncia.idDenuncia === id)[0];
  }

}
