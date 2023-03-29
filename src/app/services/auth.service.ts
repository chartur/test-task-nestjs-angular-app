import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable } from "rxjs";
import { User } from "../core/interfaces/user";
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";
import { SignUpDto } from "../core/interfaces/sign-up.dto";
import { SignInDto } from "../core/interfaces/sign-in.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public readonly user$: Observable<User | null> = this._user.asObservable();

  private _token: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public readonly token$: Observable<string | null> = this._token.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  public signUp(body: SignUpDto): Observable<{ token: string, user: User }> {
    return this.httpClient.post<{ token: string, user: User }>(endpoints.auth.signUp, body)
      .pipe(
        map((response) => {
          this._user.next(response.user);
          this._token.next(response.token)
          localStorage.setItem("token", response.token);
          return response;
        }),
        catchError((e) => {
          alert(e?.error?.message || "something is wrong");
          return EMPTY;
        })
      )
  }

  public signIn(body: SignInDto): Observable<{ token: string, user: User }> {
    return this.httpClient.post<{ token: string, user: User }>(endpoints.auth.signIn, body)
      .pipe(
        map((response) => {
          this._user.next(response.user);
          this._token.next(response.token)
          localStorage.setItem("token", response.token);
          return response;
        }),
        catchError((e) => {
          alert(e?.error?.message || "something is wrong");
          return EMPTY;
        })
      )
  }

  public loadUser(): Observable<{ token: string, user: User }> {
    return this.httpClient.get<{ token: string, user: User }>(endpoints.auth.getAuthUser)
      .pipe(
        map((response) => {
          this._user.next(response.user);
          this._token.next(response.token);
          localStorage.setItem("token", response.token);
          return response;
        }),
        catchError((e) => {
          return EMPTY;
        })
      )
  }

  public logout(): void {
    this._user.next(null);
    this._token.next(null);
    localStorage.clear();
  }
}
