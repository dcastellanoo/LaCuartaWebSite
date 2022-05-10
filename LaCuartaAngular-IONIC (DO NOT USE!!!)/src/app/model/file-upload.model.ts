export interface IFileUpload {
  name?: string
  url?: string
}

export class FileUpload implements IFileUpload{
  key?: string;
  name?: string;
  url?: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
