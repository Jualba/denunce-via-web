import { TranslateService } from '@ngx-translate/core';

export function initializeApp(translate: TranslateService) {
  return function () {
    // operazione effettuate prima di inizializzare l’app
    return new Promise(async function (resolve) {
        // aggiunge le lingue e imposta l’italiano come default
        translate.addLangs(['en', 'it', 'fr', 'es', 'de']);
        translate.setDefaultLang('it');
        resolve(null);
      }
    );
  };
}
