import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
//import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './tela-principal.html',
  styleUrl: './tela-principal.css',
})
export class TelaPrincipal {}
