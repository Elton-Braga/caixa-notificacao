import { CaixaNotificacoes } from '../interfaces/caixa-notificacoes';

export const NOTIFICACOES_MOCK: CaixaNotificacoes = {
  cabecalho: {
    titulo: 'Caixa de Notificações',
    descricao: 'Acompanhe aqui todas as notificações enviadas para você.',
  },
  tabs: [
    { nome: 'Todas', quantidade: 5, ativa: true },
    { nome: 'Não lidas', quantidade: 3, ativa: false },
    { nome: 'Lidas', quantidade: 1, ativa: false },
    { nome: 'Arquivadas', quantidade: 1, ativa: false },
  ],
  mensagens: [
    {
      id: 1,
      titulo: 'Vencimento de Contrato',
      descricao: 'O contrato vencerá em 7 dias',
      descricaoCompleta:
        'Lorem ipsum dolor sit amet. A dolores odio est itaque nesciunt aut repellendus pariatur sit quod autem aut consequuntur molestiae. Eos nihil incidunt aut voluptatibus voluptatum et odit laborum. Est voluptates aperiam eos aliquid doloremque qui omnis obcaecati qui exercitationem laboriosam! Hic unde molestias qui exercitationem voluptatibus aut minus harum non quod soluta. Et laudantium vero ut magnam assumenda et minima excepturi eos distinctio repellat in laborum ipsum non nobis autem qui molestiae deleniti! Eos possimus illum non beatae culpa eos beatae similique. Ut autem incidunt id earum culpa aut excepturi laborum est fugit deleniti rem eaque voluptas qui sequi quod sit repellendus consectetur. Est impedit totam cum optio modi qui mollitia sint in porro enim hic modi voluptatem. Ut asperiores molestias eum voluptas corporis qui accusantium officia in galisum velit ut magni impedit aut aperiam explicabo.',
      tipo: 'alerta',
      prioridade: 'alta',
      data: 'Hoje, 10:30',
      status: 'nao-lida',
    },
    {
      id: 2,
      titulo: 'Novo Contrato Adicionado',
      descricao: 'Contrato de manutenção incluído',
      descricaoCompleta:
        'Lorem ipsum dolor sit amet. A dolores odio est itaque nesciunt aut repellendus pariatur sit quod autem aut consequuntur molestiae. Eos nihil incidunt aut voluptatibus voluptatum et odit laborum. Est voluptates aperiam eos aliquid doloremque qui omnis obcaecati qui exercitationem laboriosam! Hic unde molestias qui exercitationem voluptatibus aut minus harum non quod soluta. Et laudantium vero ut magnam assumenda et minima excepturi eos distinctio repellat in laborum ipsum non nobis autem qui molestiae deleniti! Eos possimus illum non beatae culpa eos beatae similique. Ut autem incidunt id earum culpa aut excepturi laborum est fugit deleniti rem eaque voluptas qui sequi quod sit repellendus consectetur. Est impedit totam cum optio modi qui mollitia sint in porro enim hic modi voluptatem. Ut asperiores molestias eum voluptas corporis qui accusantium officia in galisum velit ut magni impedit aut aperiam explicabo.',
      tipo: 'doc',
      data: 'Hoje, 09:15',
      status: 'nao-lida',
    },
    {
      id: 3,
      titulo: 'Atualização de Sistema',
      descricao: 'Nova versão disponível',
      descricaoCompleta:
        'Lorem ipsum dolor sit amet. A dolores odio est itaque nesciunt aut repellendus pariatur sit quod autem aut consequuntur molestiae. Eos nihil incidunt aut voluptatibus voluptatum et odit laborum. Est voluptates aperiam eos aliquid doloremque qui omnis obcaecati qui exercitationem laboriosam! Hic unde molestias qui exercitationem voluptatibus aut minus harum non quod soluta. Et laudantium vero ut magnam assumenda et minima excepturi eos distinctio repellat in laborum ipsum non nobis autem qui molestiae deleniti! Eos possimus illum non beatae culpa eos beatae similique. Ut autem incidunt id earum culpa aut excepturi laborum est fugit deleniti rem eaque voluptas qui sequi quod sit repellendus consectetur. Est impedit totam cum optio modi qui mollitia sint in porro enim hic modi voluptatem. Ut asperiores molestias eum voluptas corporis qui accusantium officia in galisum velit ut magni impedit aut aperiam explicabo.',
      tipo: 'alerta',
      prioridade: 'normal',
      data: 'Ontem, 18:40',
      status: 'lida',
    },
    {
      id: 4,
      titulo: 'Documento Revisado',
      descricao: 'Documento revisado com sucesso',
      descricaoCompleta:
        'Lorem ipsum dolor sit amet. A dolores odio est itaque nesciunt aut repellendus pariatur sit quod autem aut consequuntur molestiae. Eos nihil incidunt aut voluptatibus voluptatum et odit laborum. Est voluptates aperiam eos aliquid doloremque qui omnis obcaecati qui exercitationem laboriosam! Hic unde molestias qui exercitationem voluptatibus aut minus harum non quod soluta. Et laudantium vero ut magnam assumenda et minima excepturi eos distinctio repellat in laborum ipsum non nobis autem qui molestiae deleniti! Eos possimus illum non beatae culpa eos beatae similique. Ut autem incidunt id earum culpa aut excepturi laborum est fugit deleniti rem eaque voluptas qui sequi quod sit repellendus consectetur. Est impedit totam cum optio modi qui mollitia sint in porro enim hic modi voluptatem. Ut asperiores molestias eum voluptas corporis qui accusantium officia in galisum velit ut magni impedit aut aperiam explicabo.',
      tipo: 'doc',
      data: 'Ontem, 14:10',
      status: 'arquivada',
    },
    {
      id: 5,
      titulo: 'Alerta de Segurança',
      descricao: 'Tentativa de acesso não reconhecida',
      descricaoCompleta:
        'Lorem ipsum dolor sit amet. A dolores odio est itaque nesciunt aut repellendus pariatur sit quod autem aut consequuntur molestiae. Eos nihil incidunt aut voluptatibus voluptatum et odit laborum. Est voluptates aperiam eos aliquid doloremque qui omnis obcaecati qui exercitationem laboriosam! Hic unde molestias qui exercitationem voluptatibus aut minus harum non quod soluta. Et laudantium vero ut magnam assumenda et minima excepturi eos distinctio repellat in laborum ipsum non nobis autem qui molestiae deleniti! Eos possimus illum non beatae culpa eos beatae similique. Ut autem incidunt id earum culpa aut excepturi laborum est fugit deleniti rem eaque voluptas qui sequi quod sit repellendus consectetur. Est impedit totam cum optio modi qui mollitia sint in porro enim hic modi voluptatem. Ut asperiores molestias eum voluptas corporis qui accusantium officia in galisum velit ut magni impedit aut aperiam explicabo.',
      tipo: 'alerta',
      prioridade: 'alta',
      data: 'Hoje, 08:00',
      status: 'nao-lida',
    },
  ],
};
