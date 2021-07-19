import { Tipologica } from '../tipologica';

export interface Denuncia {
  idDenuncia?: string;
  tipoDenuncia: string;
  dataInserimento?: string;
  provinciaCommissariato?: Tipologica;
  commissariato?: Tipologica;
  numeroTarga?: string,
  posizioneTarga?: Tipologica,
  marcaVeicolo?: string,
  modelloVeicolo?: string,
  coloreVeicolo?: string,
  telaioVeicolo?: string,
  dataSmarrimento?: string;
  luogoSmarrimento?: string;
}
