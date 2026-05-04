import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-assinar-docs',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    NgxExtendedPdfViewerModule,
    NgIf,
  ],
  templateUrl: './assinar-docs.html',
  styleUrl: './assinar-docs.css',
})
export class AssinarDocs {
  file: File | null = null;
  pdfSrc: string | null = null;

  removeFile() {
    this.file = null;
    this.pdfSrc = null;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      this.loadPdf(file);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.file = file;
      this.loadPdf(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  private loadPdf(file: File) {
    if (file.type === 'application/pdf') {
      this.pdfSrc = URL.createObjectURL(file);
    } else {
      this.pdfSrc = null;
    }
  }
}
