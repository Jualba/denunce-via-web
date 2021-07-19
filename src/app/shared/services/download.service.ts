import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  /**
   * metodo per scaricare o aprire un file da un url di download diretto che restituisce un blob
   * @param url
   * @param openFile indica se deve aprire il file su una nuova pagina del browser
   */
  downloadFile(url: string, openFile?: boolean): Observable<any> {
    return this.http.get<any>(url, {observe: 'response', responseType: 'blob' as 'json'}).pipe(
      tap(res => {
        if (res?.body && res.body.size) {
          const fileUrl = window.URL.createObjectURL(res?.body);
          const fileName = openFile ? null : res.headers.get('content-disposition')?.split('filename=')[1];
          const link = document.createElement('a');
          link.href = fileUrl;
          if (openFile) { link.target = '_blank'; }
          if (fileName) { link.download = fileName; }
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(fileUrl);
        }
        else if (!res?.body?.size) { throw new Error('no file present'); }
      })
    );
  }

}
