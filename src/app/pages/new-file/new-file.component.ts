import { Component } from '@angular/core';
import { UserFile } from "../../core/interfaces/user-file";
import { FileService } from "../../services/file.service";
import { publicPath } from "../../../environments/environment";
import { saveAs } from "file-saver";

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.scss']
})
export class NewFileComponent {
  public file!: File
  public uploadedFile!: UserFile;
  public isValid: boolean = false;

  constructor(
    private fileService: FileService
  ) {
  }

  public get filePlaceholder(): string {
    return this.file ? "File: " + this.file.name : "Please Drop a file here"
  }

  public get downloadLink(): string {
    return publicPath(this.uploadedFile.path);
  }

  public downloadFile(): void {
    saveAs(this.downloadLink, this.uploadedFile.name)
  }

  public onFileDropped(file: File): void {
    this.file = file;
    this.fileValidation();
  }

  public selectFile(event: Event): void {
    this.file = (event.target as any).files[0]
    this.fileValidation();
  }

  public upload(): void {
    const formData = new FormData();
    formData.append("file", this.file);
    this.fileService.upload(formData).subscribe((response) => {
      this.uploadedFile = response;
    });
  }

  private fileValidation() {
    this.isValid = this.file.size < 5e+6;
    if(!this.isValid) {
      alert("file maximum size is 5mb");
    }
  }
}
