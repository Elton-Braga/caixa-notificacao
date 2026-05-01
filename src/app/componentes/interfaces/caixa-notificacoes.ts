import { CabecalhoNotificacao } from './cabecalho-notificacoes';
import { MensagemNotificacao } from './mensagemnotificacao';
import { TabNotificacao } from './tabNotificacoes';

export interface CaixaNotificacoes {
  cabecalho: CabecalhoNotificacao;
  tabs: TabNotificacao[];
  //mensagens: MensagemNotificacao[];
  mensagens: any[];
}
