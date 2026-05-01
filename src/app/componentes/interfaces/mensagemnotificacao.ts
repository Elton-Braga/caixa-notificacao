export interface MensagemNotificacao {
  id: number;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  tipo: 'alerta' | 'doc';
  prioridade?: 'alta' | 'normal';
  data: string;
  status: 'lida' | 'nao-lida' | 'arquivada';
}
