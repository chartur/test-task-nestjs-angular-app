import { Component, OnInit } from '@angular/core';
import { FileService } from "../../services/file.service";
import { Observable } from "rxjs";
import { UserFile } from "../../core/interfaces/user-file";
import { saveAs } from "file-saver";
import { publicPath } from "../../../environments/environment";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  public files$: Observable<UserFile[]> = this.fileService.files$;

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getFiles().subscribe();
  }

  public downloadFile(file: UserFile): void {
    saveAs(publicPath(file.path), file.name);
  }
}
