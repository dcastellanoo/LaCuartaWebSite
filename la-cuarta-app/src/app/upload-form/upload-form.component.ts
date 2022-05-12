import {Component, EventEmitter, Output} from "@angular/core";
import {FileUpload} from '../models/file-upload.model';
import {FileUploadService} from '../services/file-upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
})

export class UploadFormComponent {
  @Output() newUploadEvent = new EventEmitter<string>();

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;


  constructor(private uploadService: FileUploadService) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);

        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );

        // TODO not ideal
        setTimeout(() => {
          this.newUploadEvent.emit(this.currentFileUpload.url);
        }, 2500);
      }
    }
  }
}
