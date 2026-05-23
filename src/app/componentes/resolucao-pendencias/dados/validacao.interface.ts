export type StatusValidacao = 'Válido' | 'Atenção' | 'Pendente';

export interface ValidacaoItem {
  titulo: string;
  resposta: string;
  status: StatusValidacao;
}

export interface ValidacaoGrupo {
  categoria: string;
  itens: ValidacaoItem[];
}
