import { RelatorioINCRA } from './relatorio-incra.interface';

export const RELATORIO_INCRA_MOCK: RelatorioINCRA = {
  codigo: 'D7FF10711E002D9F1D7323B4F300DF97',

  dataEmissao: '21/05/2026',

  requerimento: 'RO/SR21202600022478',

  situacao: 'Processada com Pendências',

  uf: 'AP',

  municipio: 'Porto Grande',

  projetoAssentamento: 'PA Manoel Jacinto',

  ocupante: {
    nome: 'Wilhamin Santana da Silva',
    cpf: '342.358.682-68',
    sexo: 'Masculino',
    dataNascimento: '16/08/1971',
    ufNascimento: 'AP',
    municipioNascimento: 'Porto Grande',
  },

  resumo: {
    validos: 12,
    atencao: 2,
    pendencias: 1,
  },

  timeline: [
    {
      titulo: 'Solicitação registrada',
      data: '15/05/2026',
      status: 'concluido',
    },
    {
      titulo: 'Em análise',
      data: '21/05/2026',
      status: 'andamento',
    },
    {
      titulo: 'Conclusão',
      data: 'Aguardando',
      status: 'pendente',
    },
  ],

  validacoes: [
    {
      categoria: 'Dados Pessoais',
      itens: [
        {
          titulo: 'Cargo ou função pública',
          resposta: 'Não',
          status: 'Válido',
        },
        {
          titulo: 'Sociedade empresária ativa',
          resposta: 'Não',
          status: 'Válido',
        },
        {
          titulo: 'Possui inscrição ativa no CadÚnico',
          resposta: 'Sim',
          status: 'Atenção',
        },
        {
          titulo: 'Beneficiário da Reforma Agrária',
          resposta: 'Sim',
          status: 'Pendente',
        },
      ],
    },

    {
      categoria: 'Embargos e Fiscalização',
      itens: [
        {
          titulo: 'Embargos ou infrações no IBAMA',
          resposta: 'Não',
          status: 'Válido',
        },
        {
          titulo: 'Trabalho análogo à escravidão',
          resposta: 'Não',
          status: 'Válido',
        },
      ],
    },

    {
      categoria: 'Titulação',
      itens: [
        {
          titulo: 'Registro de exclusão no SIPRA',
          resposta: 'Não',
          status: 'Válido',
        },
        {
          titulo: 'Conflito agrário',
          resposta: 'Não',
          status: 'Válido',
        },
      ],
    },
  ],

  painelAnalitico: [
    {
      titulo: 'Dados Pessoais',
      percentual: 92,
      descricao: '92% das verificações concluídas com sucesso.',
      status: 'success',
    },

    {
      titulo: 'Fiscalização',
      percentual: 70,
      descricao: 'Integrações externas parcialmente disponíveis.',
      status: 'warning',
    },

    {
      titulo: 'Titulação',
      percentual: 48,
      descricao: 'Necessária vistoria complementar da ocupação.',
      status: 'danger',
    },
  ],
};
