import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, catchError, EMPTY, map, Observable } from "rxjs";
import { UserFile } from "../core/interfaces/user-file";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private _files: BehaviorSubject<UserFile[]> = new BehaviorSubject<UserFile[]>([]);
  public readonly files$: Observable<UserFile[]> = this._files.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  public getFiles(): Observable<UserFile[]> {
    return this.httpClient.get<UserFile[]>(endpoints.file.getAll).pipe(
      map((response) => {
        this._files.next(response);
        return response;
      }),
      catchError((error) => {
        alert(error?.error?.message || "something is wrong");
        return EMPTY;
      })
    )
  }

  public upload(formData: FormData): Observable<UserFile>{
    return this.httpClient.post<UserFile>(endpoints.file.upload, formData).pipe(
      map((response) => {
        const files = [...this._files.getValue(), response];
        this._files.next(files);
        return response;
      }),
      catchError((error) => {
        alert(error?.error?.message || "something is wrong");
        return EMPTY;
      })
    )
  }
}
