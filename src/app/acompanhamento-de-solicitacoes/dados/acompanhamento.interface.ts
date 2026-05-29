export type StatusSolicitacao = 'PENDENTE' | 'EM_ANALISE' | 'CONCLUIDO';

export interface AcaoSolicitacao {
  icone: string;

  label: string;

  acao: string;
}

export interface SolicitacaoAcompanhamento {
  protocolo: string;

  servico: string;

  data: string;

  status: StatusSolicitacao;

  statusLabel: string;

  acoes: AcaoSolicitacao[];
}
