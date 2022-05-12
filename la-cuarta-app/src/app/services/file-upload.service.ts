import {AngularFireStorage} from '@angular/fire/compat/storage';
import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {FileUpload, IFileUpload} from '../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {
  private basePath = '/uploads';
  private uploadsRef: AngularFirestoreCollection<IFileUpload>;

  constructor(private firestore: AngularFirestore,
              private storage: AngularFireStorage) {
    this.uploadsRef = this.firestore.collection(this.basePath);
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
      });
    })).subscribe();

    return uploadTask.percentageChanges();
  }

  getFiles(numFiles: number): Observable<IFileUpload[]> {
    /*
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numFiles)
    );                          */
    return this.uploadsRef.valueChanges({idField: "key"});
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private saveFileData(fileUpload: FileUpload): void {
    //this.db.list(this.basePath).push(fileUpload);
    const uploadKey = this.firestore.createId();

    this.uploadsRef.doc(uploadKey).set({
      "name": fileUpload.name,
      "url": fileUpload.url
    })
  }

  private deleteFileDatabase(key: string): Promise<void> {
    //return this.db.list(this.basePath).remove(key);
    return this.uploadsRef.doc(key).delete();
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
