import { Tipologica } from '../tipologica';

export interface Domanda {
  idDomanda?: string;
  cognome: string;
  nome: string;
  codiceFiscale: string;
  comuneNascita: string;
  provinciaNascita: string;
  statoNascita: string;
  dataNascita: string;

  indirizzoResidenza: string;
  civicoResidenza: string;
  comuneResidenza: string;
  capResidenza: string;
  provinciaResidenza: string;

  indirizzoDomicilio?: string;
  civicoDomicilio?: string;
  comuneDomicilio?: string;
  capDomicilio?: string;
  provinciaDomicilio?: string;

  telefonoFisso?: string;
  cellulare: string;
  pec: string;
  email: string;

}
