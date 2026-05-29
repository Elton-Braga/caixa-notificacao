import { SolicitacaoAcompanhamento } from './acompanhamento.interface';

export const ACOMPANHAMENTO_SOLICITACOES_MOCK: SolicitacaoAcompanhamento[] = [
  {
    protocolo: '#2026-000154',

    servico: 'Regularização Fundiária',

    data: '27/05/2026',

    status: 'PENDENTE',

    statusLabel: 'Pendências',

    acoes: [
      {
        icone: 'warning',

        label: 'Resolver pendências',

        acao: 'resolver-pendencias',
      },

      {
        icone: 'visibility',

        label: 'Visualizar',

        acao: 'visualizar',
      },
    ],
  },

  {
    protocolo: '#2026-000155',

    servico: 'Atualização Cadastral',

    data: '25/05/2026',

    status: 'EM_ANALISE',

    statusLabel: 'Em análise',

    acoes: [
      {
        icone: 'warning',

        label: 'Resolver pendências',

        acao: 'resolver-pendencias',
      },

      {
        icone: 'visibility',

        label: 'Visualizar',

        acao: 'visualizar',
      },
    ],
  },

  {
    protocolo: '#2026-000156',

    servico: 'Validação de Documentos',

    data: '21/05/2026',

    status: 'CONCLUIDO',

    statusLabel: 'Concluído',

    acoes: [
      {
        icone: 'warning',

        label: 'Resolver pendências',

        acao: 'resolver-pendencias',
      },

      {
        icone: 'visibility',

        label: 'Visualizar',

        acao: 'visualizar',
      },
    ],
  },
];
