import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-acessar-caixa',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './acessar-caixa.html',
  styleUrl: './acessar-caixa.css',
})
export class AcessarCaixa {}
