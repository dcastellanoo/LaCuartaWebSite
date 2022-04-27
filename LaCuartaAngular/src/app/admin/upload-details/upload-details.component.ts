import {Component, Input} from "@angular/core";
import {FileUpload} from "../../model/file-upload.model";
import {FileUploadService} from "../../model/file-upload.service";

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
})

export class UploadDetailsComponent {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService) { }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
