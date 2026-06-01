import { SolicitacaoAcompanhamento } from './acompanhamento.interface';

export const ACOMPANHAMENTO_SOLICITACOES_MOCK: SolicitacaoAcompanhamento[] = [
  {
    protocolo: '#2026-000154',

    servico: 'Solicitar Regularizacao',

    data: '27/05/2026',

    status: 'PENDENTE',

    statusLabel: 'Processada com Pendências',

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

    servico: 'Solicitar Regularizacao',

    data: '25/05/2026',

    status: 'EM_ANALISE',

    statusLabel: 'Processada com pendencias',

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

    servico: 'Autossupervisão ocupacional',

    data: '21/05/2026',

    status: 'CONCLUIDO',

    statusLabel: 'Processada',

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
