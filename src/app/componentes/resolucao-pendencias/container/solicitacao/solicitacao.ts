import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RELATORIO_INCRA_MOCK } from '../../dados/relatorio-incra.mock';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CriarJustificativa } from '../criar-justificativa/criar-justificativa';

@Component({
  selector: 'app-solicitacao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './solicitacao.html',
  styleUrl: './solicitacao.css',
})
export class Solicitacao {
  relatorio = RELATORIO_INCRA_MOCK;

  pendencias = this.relatorio.validacoes.flatMap((categoria) =>
    categoria.itens
      .filter((item) => item.status.toLowerCase() === 'pendente')
      .map((item) => {
        const regra = REGRAS_PENDENCIAS[item.titulo];

        return {
          categoria: categoria.categoria,
          titulo: item.titulo,
          resposta: item.resposta,
          status: item.status,

          descricao:
            regra?.mensagem ??
            'Aguarde a análise e validação das informações pelo Incra.',

          permiteDocumento: regra?.permiteDocumento ?? true,

          permiteJustificativa: regra?.permiteJustificativa ?? true,

          textoBotao: regra?.textoBotao ?? 'Criar Justificativa',

          justificativa: '',
          justificativaCriada: false,
          aberto: false,
        };
      }),
  );

  get categoriasUnicas(): string[] {
    return [...new Set(this.pendencias.map((p) => p.categoria))];
  }

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}
  podeExibirBotaoJustificativa(pendencia: any): boolean {
    return pendencia.textoBotao !== 'Fazer Autossupervisão';
  }
  getPendenciasPorCategoria(categoria: string) {
    return this.pendencias.filter((p) => p.categoria === categoria);
  }

  cancelarPendencia(pendencia: any): void {
    pendencia.especificacao = '';
    pendencia.justificativa = '';
  }

  salvarResolucao(pendencia: any): void {
    console.log('Pendência salva:', pendencia);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'válido':
        return 'success';
      case 'atenção':
        return 'warning';
      case 'pendente':
        return 'danger';
      case 'concluido':
        return 'success';
      case 'andamento':
        return 'warning';
      default:
        return 'danger';
    }
  }

  abrirModalJustificativa(pendencia: any): void {
    const dialogRef = this.dialog.open(CriarJustificativa, {
      width: '700px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'modal-justificativa',
      data: {
        justificativa: pendencia.justificativa || '',
      },
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        pendencia.justificativa = resultado;
        pendencia.justificativaCriada = true;

        this.snackBar.open('Justificativa enviada com sucesso!', 'Fechar', {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['toast-sucesso-azul'],
        });
      }
    });
  }

  enviarJustificativa(pendencia: any): void {
    console.log('Justificativa enviada:', pendencia);
  }

  getQuantidadePorCategoria(categoria: string): number {
    return this.pendencias.filter((p) => p.categoria === categoria).length;
  }

  podeCriarJustificativa(pendencia: any): boolean {
    if (pendencia.categoria === 'Pendências a serem analisadas pelo Incra') {
      return false;
    }

    return pendencia.permiteDocumento;
  }

  isSupervisao(categoria: string): boolean {
    return categoria === 'Supervisão';
  }

  acaoJustificativa(pendencia: any): void {
    if (!pendencia.justificativaCriada) {
      this.abrirModalJustificativa(pendencia);
      return;
    }

    this.enviarJustificativa(pendencia);
  }
}

const REGRAS_PENDENCIAS: Record<
  string,
  {
    mensagem: string;
    permiteDocumento: boolean;
    permiteJustificativa?: boolean;
    textoBotao?: string;
  }
> = {
  // =========================
  // DADOS PESSOAIS
  // =========================

  'É ocupante de cargo, emprego ou função pública remunerada e, caso positivo, atua em profissões não previstas no §2º do Art. 20 da Lei 8.629/1993?':
    {
      mensagem:
        'Envie documento que comprove o encerramento do vínculo empregatício (CNIS, Carteira de Trabalho ou declaração do empregador).',
      permiteDocumento: true,
    },

  'É proprietário, cotista ou acionista de sociedade empresária em atividade, exceto MEI?':
    {
      mensagem:
        'Envie comprovante de baixa do CNPJ ou documento que comprove que sua participação se enquadra nas exceções permitidas (associação, sindicato, cooperativa ou instituição sem fins lucrativos).',
      permiteDocumento: true,
    },

  'É menor que 18 anos não emancipado na forma da lei civil?': {
    mensagem:
      'Envie documento que comprove sua emancipação, como certidão de nascimento averbada ou decisão judicial.',
    permiteDocumento: true,
  },

  'A renda familiar é proveniente de atividade não agrária superior a três salários mínimos mensais ou superior a um salário mínimo per capita?':
    {
      mensagem:
        'Envie documento que comprove sua renda ou vínculo de trabalho (CNIS, CTPS, contracheque ou pró-labore).',
      permiteDocumento: true,
    },

  'Quitação ou assunção pelo interessado, até a assinatura do novo CCU, dos débitos relativos ao crédito instalação reembolsável concedido ao beneficiário original?':
    {
      mensagem:
        'Procure o setor de Crédito do Incra para assinar a declaração necessária e, em seguida, envie aqui declaração assinada.',
      permiteDocumento: true,
    },

  'Ocupante e/ou cônjuge possuem benefício previdenciário ativo?': {
    mensagem:
      'Envie o extrato do CNIS. Se você for pessoa com deficiência (PCD), envie também os documentos complementares conforme sua situação familiar (laudo médico, documentos da unidade familiar, CadÚnico e inscrição no Incra, quando aplicável).',
    permiteDocumento: true,
  },

  'Possui inscrição ativa no CadÚnico?': {
    mensagem: 'Aguarde a análise e validação das informações pelo Incra.',
    permiteDocumento: false,
    permiteJustificativa: false,
  },

  'Cônjuge informado na solicitação é o mesmo que consta no CadÚnico?': {
    mensagem: 'Aguarde a análise e validação das informações pelo Incra.',
    permiteDocumento: false,
    permiteJustificativa: false,
  },

  'Ocupante e/ou cônjuge são beneficiários da Reforma Agrária?': {
    mensagem:
      'Se você for beneficiário de outro assentamento, envie documento que comprove o encerramento do vínculo com o assentamento anterior. Caso seja do mesmo assentamento, não é necessária nenhuma ação no momento.',
    permiteDocumento: true,
  },

  // =========================
  // EMBARGOS IBAMA
  // =========================

  'Existem embargos ou infrações no IBAMA em nome dos solicitantes?': {
    mensagem:
      'Envie documento que comprove a regularização do embargo ou da infração identificada pelo IBAMA.',
    permiteDocumento: true,
  },

  // =========================
  // TRABALHO ESCRAVO
  // =========================

  'Existe registro dos solicitantes na lista de empregadores de trabalhadores em regime análogo à escravidão?':
    {
      mensagem:
        'Envie documento que comprove a regularização da ocorrência ou a exclusão do seu nome da lista de empregadores envolvidos em trabalho análogo à escravidão.',
      permiteDocumento: true,
    },

  // =========================
  // TITULAÇÃO
  // =========================

  'É excluído ou afastado do programa de reforma agrária sem consentimento do órgão executor no SIPRA?':
    {
      mensagem:
        'Envie declaração do órgão competente autorizando a situação identificada ou documento que comprove o encerramento formal do vínculo com o assentamento de origem.',
      permiteDocumento: true,
    },

  'É excluído ou afastado do programa de regularização fundiária sem consentimento do órgão executor na PGT, Sisterleg ou SIGEF Titulação?':
    {
      mensagem:
        'Envie documento que comprove a autorização do órgão responsável para seu desligamento ou afastamento do programa de regularização fundiária.',
      permiteDocumento: true,
    },

  'É excluído ou afastado do Programa Nacional do Crédito Fundiário sem consentimento do órgão executor?':
    {
      mensagem:
        'Envie documento que comprove a autorização do órgão responsável para seu desligamento ou afastamento do Programa Nacional de Crédito Fundiário (PNCF).',
      permiteDocumento: true,
    },

  // ALTERADO: Adicionado 'permiteJustificativa: false' para desabilitar o botão
  'Ocupante e/ou cônjuge possuem registros anteriores como cônjuge não atual com outras pessoas no SIPRA?':
    {
      mensagem: 'Aguarde a análise e validação das informações pelo Incra.',
      permiteDocumento: false,
      permiteJustificativa: false,
    },

  // =========================
  // CONFLITOS E TENSÕES
  // =========================

  'Existe registro de conflito agrário para o CPF do solicitante?': {
    mensagem:
      'Procure a Câmara Técnica de Conciliação Agrária do Incra para regularizar o conflito agrário identificado e anexe o comprovante de atendimento ou documento emitido pelo Incra.',
    permiteDocumento: true,
  },

  // =========================
  // DADOS DO IMÓVEL
  // =========================

  'Ocupa e explora a parcela há, no mínimo, 1 ano?': {
    mensagem:
      'Envie documentos que comprovem a ocupação e exploração da área há pelo menos 1 ano, como conta de energia, notas fiscais, comprovante de vacinação de animais, declaração escolar, declaração de unidade de saúde, sindicato, assistência técnica, secretaria de agricultura ou outros documentos aceitos pelo Incra.',
    permiteDocumento: true,
  },

  // ALTERADO: Adicionado 'permiteJustificativa: false' para desabilitar o botão
  'Inexistência de candidatos excedentes interessados na parcela?': {
    mensagem: 'Aguarde a análise e validação das informações pelo Incra.',
    permiteDocumento: false,
    permiteJustificativa: false,
  },

  'É proprietário rural?': {
    mensagem:
      'Envie documento que comprove o encerramento da relação com o imóvel (SNCR ou documento cartorial) ou apresente comprovação de que a propriedade é insuficiente para o sustento da família.',
    permiteDocumento: true,
  },

  // =========================
  // SUPERVISÃO OCUPACIONAL
  // =========================

  // ALTERADO: Adicionado 'permiteJustificativa: false' para desabilitar o botão caso o template mude e passe a usar essa flag
  'Há laudo registrado para os ocupantes nos sistemas de supervisão ocupacional?':
    {
      mensagem:
        'Realize a Autossupervisão Ocupacional para atualização das informações.',
      permiteDocumento: false,
      permiteJustificativa: false,
      textoBotao: 'Fazer Autossupervisão',
    },
};
