import {Component, OnInit} from "@angular/core";
import {FileUploadService} from "../../services/file-upload.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
})

export class UploadListComponent implements OnInit {
  fileUploads?: any[];

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    /*
    this.uploadService.getFiles(10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    }); */
    this.uploadService.getFiles(10).subscribe((fileUploads) => {
      this.fileUploads = fileUploads;
    });
  }
}
