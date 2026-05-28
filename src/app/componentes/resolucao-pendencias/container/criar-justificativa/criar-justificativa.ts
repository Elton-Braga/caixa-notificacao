import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-criar-justificativa',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './criar-justificativa.html',
  styleUrl: './criar-justificativa.css',
})
export class CriarJustificativa {
  justificativa = '';

  constructor(
    private dialogRef: MatDialogRef<CriarJustificativa>,

    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) {
    this.justificativa = data?.justificativa || '';
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvar(): void {
    this.dialogRef.close(this.justificativa);
  }
}
