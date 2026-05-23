export interface PainelAnaliticoItem {
  titulo: string;
  percentual: number;
  descricao: string;
  status: 'success' | 'warning' | 'danger';
}
