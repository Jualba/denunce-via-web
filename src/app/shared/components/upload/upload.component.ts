import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { UploadService } from './upload.service';
import { catchError, takeUntil } from 'rxjs/operators';
import { fromEvent, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DownloadService } from '../../services/download.service';
import { HttpRequest, HttpEventType, HttpResponse ,HttpClient} from '@angular/common/http';
import { Subscription, } from 'rxjs';
import { finalize } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'file-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})


export class UploadComponent {
@Input()
    requiredFileType:string;

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;

    constructor(private http: HttpClient) {}

    onFileSelected(event) {
        const file:File = event.target.files[0];

        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);

            const upload$ = this.http.post("/api/thumbnail-upload", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .pipe(
                finalize(() => this.reset())
            );

            this.uploadSub = upload$.subscribe(event => {
              if (event.type == HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            })
        }
    }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}
