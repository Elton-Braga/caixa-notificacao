import { Component } from '@angular/core';
import { RELATORIO_INCRA_MOCK } from '../../dados/relatorio-incra.mock';

@Component({
  selector: 'app-dados-basicos',
  standalone: true,
  imports: [],
  templateUrl: './dados-basicos.html',
  styleUrl: './dados-basicos.css',
})
export class DadosBasicos {
  relatorio = RELATORIO_INCRA_MOCK;
}
