import { Ocupante } from './ocupante.interface';
import { PainelAnaliticoItem } from './painel-analitico.interface';
import { ResumoGeral } from './resumo.interface';
import { TimelineProcesso } from './timeline.interface';
import { ValidacaoGrupo } from './validacao.interface';

export interface RelatorioINCRA {
  codigo: string;
  dataEmissao: string;

  requerimento: string;
  situacao: string;

  uf: string;
  municipio: string;

  projetoAssentamento: string;

  ocupante: Ocupante;

  resumo: ResumoGeral;

  timeline: TimelineProcesso[];

  validacoes: ValidacaoGrupo[];

  painelAnalitico: PainelAnaliticoItem[];
}
