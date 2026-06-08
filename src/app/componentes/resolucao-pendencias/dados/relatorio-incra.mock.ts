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
    {
      titulo: 'Conclusão',
      data: 'Aguardando',
      status: 'pendente',
    },
  ],

  validacoes: [
    {
      categoria: 'Pendências a serem analisadas pelo Incra',
      itens: [
        {
          titulo: 'Necessidade de vistoria complementar da ocupação',
          resposta: 'Pendente de análise',
          status: 'Pendente',
        },
        {
          titulo: 'Validação da documentação apresentada',
          resposta: 'Em análise',
          status: 'Pendente',
        },
        {
          titulo: 'Análise da renda familiar declarada',
          resposta: 'Aguardando parecer',
          status: 'Pendente',
        },
        {
          titulo: 'Verificação de sobreposição de área',
          resposta: 'Em análise técnica',
          status: 'Pendente',
        },
        {
          titulo: 'Manifestação da Superintendência Regional',
          resposta: 'Não realizada',
          status: 'Pendente',
        },
        {
          titulo: 'Conclusão do parecer técnico',
          resposta: 'Aguardando',
          status: 'Pendente',
        },
      ],
    },
    {
      categoria: 'Dados Pessoais',
      itens: [
        {
          titulo: 'Cargo ou função pública',
          resposta: 'Não',
          status: 'Pendente',
        },
        {
          titulo: 'Sociedade empresária ativa',
          resposta: 'Não',
          status: 'Pendente',
        },
        {
          titulo: 'Possui inscrição ativa no CadÚnico',
          resposta: 'Sim',
          status: 'Pendente',
        },
        {
          titulo: 'Beneficiário da Reforma Agrária',
          resposta: 'Sim',
          status: 'Pendente',
        },
        {
          titulo: 'Renda familiar declarada inconsistente',
          resposta: 'Não informado',
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
          status: 'Pendente',
        },
        {
          titulo: 'Trabalho análogo à escravidão',
          resposta: 'Não',
          status: 'Pendente',
        },
        {
          titulo: 'Área sob investigação ambiental',
          resposta: 'Sim',
          status: 'Pendente',
        },
      ],
    },

    {
      categoria: 'Titulação',
      itens: [
        {
          titulo: 'Registro de exclusão no SIPRA',
          resposta: 'Não',
          status: 'Pendente',
        },
        {
          titulo: 'Conflito agrário',
          resposta: 'Não',
          status: 'Pendente',
        },
        {
          titulo: 'Sobreposição de área não regularizada',
          resposta: 'Sim',
          status: 'Pendente',
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
      titulo: 'Dados Pessoais',
      percentual: 90,
      descricao: '90% das verificações concluídas com sucesso.',
      status: 'success',
    },
    {
      titulo: 'Dados Pessoais',
      percentual: 77,
      descricao: '77% das verificações concluídas com sucesso.',
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
    {
      titulo: 'Pendencias a serem analisadas pelo Incra',
      percentual: 40,
      descricao:
        'Pendencias a serem analisadas pelo Incra: Necessária vistoria complementar da ocupação.',
      status: 'danger',
    },

    {
      titulo: 'Pendencias a serem analisadas pelo Incra',
      percentual: 70,
      descricao:
        'Pendencias a serem analisadas pelo Incra: Necessária vistoria complementar da ocupação.',
      status: 'danger',
    },
  ],
};
