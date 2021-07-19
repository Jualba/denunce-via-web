import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { UploadService } from './upload.service';
import { catchError, takeUntil } from 'rxjs/operators';
import { fromEvent, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DownloadService } from '../../services/download.service';

declare var $: any;

@Component({
  selector: 'agid-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit, OnChanges, OnDestroy {

  @Input() id: string;
  @Input() label: string;
  // se è valorizzato con stringa vuota, aggiungerà un asterisco accanto alla label
  @Input() required: string;
  // indica la visibilità del pulsante elimina
  @Input() deletable: boolean;
  /**
   * evento per il reset del file da altri componenti,
   * utilizzare un Subject e inserirlo asObservable nell’@input
   */
  @Input() deleteEvent: Observable<any>;

  control: FormControl

  @Input('control') set _control(value: AbstractControl) { this.control = value as FormControl }

  // tipi di file accettati, utilizzato nell’attributo [accept]
  contentTypes = 'application/pkcs7-mime, image/png, image/jpeg, application/pdf';
  // estensioni di file accettati, utilizzato nel messaggio di errore
  validTypes = '.jpg, .png, .pdf e .p7m';
  // descrizione di massima dimensione del file, utilizzato nel messaggio di errore
  validSize = '5 MB';
  // massima dimensione del file in bytes, utilizzato nel controllo del file
  maxSize = 5242880;
  // nome del file (da visualizzare)
  fileName: string;
  // descrizione del tipo di file (da visualizzare)
  fileType: string;
  // dimensione del file (da visualizzare)
  fileSize: string;
  // descrizione dell’errore
  fileError: string;
  // indica se la dimensione della finestra del browser è desktop o mobile
  isDesktop: boolean;
  // indica se il file è caricato
  isLoaded = false;
  // indica se il file è in caricamento
  isLoading = false;
  // indica se l’utente sta spostando il file sull’icona di upload
  isDrag = false;
  destroy$ = new Subject<boolean>();

  constructor(private uploadService: UploadService, private downloadService: DownloadService) {
    this.id = '';
    this.deletable = true;
  }

  ngOnInit(): void {
    // attiva l’ascolto sulla dimensione della finestra del browser
    this.setIsDesktopListener();
    // ottiene le informazioni sul file dal server, se è già stato caricato e l’id è presente sul control
    this.getFileData(this.control.value);
    // ottiene le informazioni del file quando il control del form viene valorizzato con l’id del file
    this.control.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(value => this.getFileData(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // attiva l’ascolto sul deleteEvent la prima volta che viene rilevato come @input
    if (changes.deleteEvent?.currentValue && changes.deleteEvent?.isFirstChange()) {
      this.resetFileEventListener();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * metodo che gestisce l’upload del file
   * si attiva al drop del file o all’inserimento sull’input tramite link sulla label
   * @param target
   */
  handleUpload(target): void {
    const file = target.files[0];
    // controlla la validità del file
    if (this.checkIsFileValid(file)) {
      // imposta i valori del file sull’interfaccia dell’upload
      this.setFileInfo(file.name, file.size);
      // crea e setta il FormData da inviare come body
      const formData = new FormData();
      formData.append('file', file, file.name);
      // resetta eventuali errori precedenti
      this.fileError = null;
      // chiamata sul servizio di upload
      this.uploadService.upload(formData).pipe(takeUntil(this.destroy$)).subscribe(
        (res) => {
          // se l’upload è completo valorizza isLoading a false
          if (res && res.done) {
            this.isLoading = false;
            // se non ci sono errori, valorizza isLoaded a true e il form control con l’id del file tornato dal server
            if (res.body?.codice === 'E00') {
              const value = res.body.payload.idDocument;
              this.control.setValue(value, { emitEvent: false });
              this.isLoaded = true;
            }
            // se ci sono errori gestiti, valorizza fileError con l’errore
            else if (res.body?.codice === 'E97') {
              this.fileError = 'ERRORS.INVALID_EXT';
            }
            else if (res.body?.codice === 'E99') {
              this.fileError = res.body.descrizione;
              console.error(res.body.descrizione);
            }
          }
          // se l’upload non è completo valorizza isLoading a true e aggiorna la grafica del caricamento
          else if (res && !res.done) {
            this.isLoading = true;
            this.setUploadProgress(res.progress);
          }
        },
        (error) => {
          // se ci sono errori non gestiti, valorizza isLoading a false e fileError con un errore generico
          this.isLoading = false;
          this.fileError = 'ERRORS.SERVER';
          console.error(error);
        }
      );
    }
  }

  /**
   * evento sullo spostamento di un file sull’icona di upload
   * @param event
   */
  dragOn(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDrag = !this.isLoading && !this.isLoaded;
  }

  /**
   * evento sull spostamento di un file fuori dall’icona di upload
   * @param event
   */
  dragOff(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDrag = false;
  }

  /**
   * evento sul rilascio di un file sull’icona di upload
   * @param event
   */
  drop(event): void {
    event.preventDefault();
    event.stopPropagation();
    // se non è in upload e non ci sono file carica
    if (!this.isLoading && !this.isLoaded) {
      this.isDrag = false;
      this.handleUpload(event.dataTransfer);
    }
  }

  /**
   * setta i parametri per l’immagine dello stato di upload
   * @param progress valore che indica il progresso del download
   */
  setUploadProgress(progress): void {
    // versione desktop
    if (this.isDesktop) {
      $(`#${this.id}Progress`).circularloader({
        backgroundColor: '#ffffff',
        fontColor: '#000000',
        fontSize: '32px',
        radius: 70,
        progressBarBackground: 'transparent',
        progressBarColor: '#0073e6',
        progressBarWidth: 40,
        progressPercent: progress
      });
    }
    // versione mobile
    else {
      $(`#${this.id}Progress`).circularloader({
        backgroundColor: '#ffffff',
        fontColor: '#000000',
        fontSize: '40px',
        radius: 130,
        progressBarBackground: 'transparent',
        progressBarColor: '#0073e6',
        progressBarWidth: 96,
        progressPercent: progress
      });
    }
  }

  /**
   * controlla la validità del file
   * @param file
   */
  checkIsFileValid(file): boolean {
    const typeList = this.contentTypes.split(', ');
    const isTypeValid = !!(file.type && typeList.includes(file.type));
    const isSizeValid = file.size <= this.maxSize;
    if (!isSizeValid) { this.fileError = 'ERRORS.INVALID_SIZE'; }
    if (!isTypeValid) { this.fileError = 'ERRORS.INVALID_EXT'; }
    return isTypeValid && isSizeValid;
  }

  /**
   * imposta le informazioni del file da visualizzare
   * @param fileName
   * @param fileSize
   */
  setFileInfo(fileName, fileSize?): void {
    const lastIndex = fileName.lastIndexOf('.');
    const endPart = fileName.substring(lastIndex + 1, fileName.length);
    this.fileName = lastIndex !== -1 ? fileName.substring(0, lastIndex) : endPart;
    this.fileType = lastIndex !== -1 ? endPart.toUpperCase() : '';
    this.fileSize = fileSize ? '(' + (fileSize / (1024 * 1024)).toFixed(2) + 'MB)' : '';
  }

  /**
   * ottiene i dati del file caricato dal server
   * @param idFile
   */
  getFileData(idFile): void {
    if (idFile) {
      this.uploadService.getFileData(idFile).pipe(takeUntil(this.destroy$))
        .subscribe(res => {
            if (res.codice === 'E00') {
              this.setFileInfo(res.payload?.fileName);
              this.isLoaded = true;
            }
            else {
              this.control.setValue('');
              this.fileError = 'ERRORS.SERVER';
              console.error(res.descrizione);
            }
          },
          error => {
            this.control.setValue('');
            this.fileError = 'ERRORS.SERVER';
            console.error(error);
          });
    }
  }

  /**
   * scarica il file caricato
   */
  downloadFile(): void {
    const idFile = this.control?.value;
    if (idFile) {
      const url = 'C:\Users\U755982\Documents\Ikons\denunce-via-web\src' + '/document/file/' + idFile; // TODO inserire url corretta per download del file
      this.downloadService.downloadFile(url).pipe(takeUntil(this.destroy$),
        catchError(error => {
          this.fileError = 'ERRORS.SERVER';
          return throwError(error);
        })).subscribe();
    }
  }

  /**
   * elimina il file dal db e pulisce il campo di upload
   */
  deleteFile(): boolean {
    this.fileError = null;
    if (this.control.value) {
      this.uploadService.delete(this.control.value).pipe(takeUntil(this.destroy$))
        .subscribe(res => {
            if (res.codice === 'E00') {
              this.removeFileData();
            }
            else { this.fileError = 'ERRORS.SERVER'; }
          },
          error => {
            this.fileError = 'ERRORS.SERVER';
            console.error(error);
          });
    }
    return false;
  }

  /**
   * pulisce il campo di upload settand
   */
  removeFileData(): void {
    this.fileName = '';
    this.fileType = '';
    this.fileSize = '';
    this.isLoaded = false;
    this.control.setValue('');
  }

  /**
   * pulisce eventuali errori, utilizzato sull’evento blur nella parte descrittiva dell’upload
   */
  removeDeleteError(): void {
    if (this.isLoaded && this.fileError) { this.fileError = null; }
  }

  /**
   * metodo in ascolto sull’evento di reset dei dati del file caricato
   */
  resetFileEventListener(): void {
    if (this.deleteEvent) {
      this.deleteEvent.pipe(takeUntil(this.destroy$))
        .subscribe(() => this.removeFileData());
    }
  }

  /**
   * controlla se la dimensione dello schermo è mobile o desktop
   */
  setIsDesktopListener(): void {
    const query = '(min-width: 768px)';
    const mediaQueryList = window.matchMedia(query);
    this.isDesktop = mediaQueryList.matches;
    // crea un observable dall’evento dal listener matchMedia e si mette in ascolto
    fromEvent(mediaQueryList, 'change')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: MediaQueryListEvent) => this.isDesktop = event.matches);
  }
}
