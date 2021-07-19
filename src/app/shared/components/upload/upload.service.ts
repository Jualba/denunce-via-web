import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  // TODO inserire url corretta per l’upload
  private baseUrl: string = 'C:\Users\U755982\Documents\Ikons\denunce-via-web\src' + '/document/';


  upload(formData: FormData): Observable<any> {
    const url = this.baseUrl + 'upload';
    return this.http.post<any>(url, formData, {reportProgress: true, observe: 'events'})
      .pipe(map(
        (res: HttpEvent<any>) => {
          // se il tipo di evento http è Response l’upload è completato e ritorna il body con il payload
          if (res.type === HttpEventType.Response) {
            return {done: true, body: res.body};
          }
          // se il tipo di evento http è UploadProgress l’upload non è terminato e ritorna la percentuale di completamento
          if (res.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * res.loaded / res.total);
            return {done: false, progress: percentDone};
          }
          return null;
        }
      ));
  }

  // eliminazione del file tramite id
  delete(idFile: string): Observable<any> {
    const url = this.baseUrl + idFile;
    return this.http.delete<any>(url);
  }

  // ritorna i dati del file
  getFileData(idFile): Observable<any> {
    const url = this.baseUrl + idFile;
    return this.http.get<any>(url);
  }

}
