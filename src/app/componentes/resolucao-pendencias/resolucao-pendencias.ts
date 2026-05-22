import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-resolucao-pendencias',
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule,
    MatCheckboxModule,
    RouterLink,
  ],
  templateUrl: './resolucao-pendencias.html',
  styleUrl: './resolucao-pendencias.css',
})
export class ResolucaoPendencias {
  irParaCaixa() {}
}
