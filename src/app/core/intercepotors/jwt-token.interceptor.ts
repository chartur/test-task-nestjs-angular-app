import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return of(
      localStorage.getItem("token")
    ).pipe(
      switchMap((token) => {
        if (!token) {
          return next.handle(request);
        }

        const authReq = request.clone({
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        });

        return next.handle(authReq);
      })
    )
  }
}
