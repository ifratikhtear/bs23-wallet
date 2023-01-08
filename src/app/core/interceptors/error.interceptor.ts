import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        // this.busyService.idle();
        if ([401, 403].includes(error.status)) {
          // this.authService.logOut();
        }
        switch (error?.status) {
          case 400:
            // this.toastrService.error("Bad Request", error.status);
            break;
          case 404:
            // this.toastrService.error("Item not found", error.status);
            break;
          case 500:
            // this.toastrService.error("Some thing wrong in the server", error.status);
            break;
          default:
            // this.toastrService.error("An unknown error occurred", error.status);
            break;
        }
        return throwError(() => error);
      })
    )
  }
}
