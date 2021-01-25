import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { materialize, delay, dematerialize } from "rxjs/operators";

let accountsList = [];

@Injectable()
export class AuthRequests implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body } = request;

    return handleHttpRequests();

    function handleHttpRequests() {
      switch (true) {
        case url.endsWith("/public/register/authorize") && method === "POST":
          return authorizeUser();
        default:
          return next.handle(request);
      }
    }

    function authorizeUser() {
      const account = body;

      if (accountsList.find((a) => a.email === account.email)) {
        return displayError(`This Email ${account.email} already exists`);
      }

      // Set numeric Id for each newly created Account
      account.memberId = accountsList.length
        ? Math.max(...accountsList.map((a) => a.memberId)) + 1
        : 1;
      accountsList.push(account);
      // Store the new Account details in localStorage
      localStorage.setItem("account", JSON.stringify(accountsList));
      return successful();
    }

    function successful(body?) {
      return of(
        new HttpResponse({
          status: 200,
          body,
        })
      ).pipe(materialize(), delay(500), dematerialize());
    }

    function displayError(message) {
      return throwError({
        error: { message },
      }).pipe(materialize(), delay(500), dematerialize());
    }
  }
}

export const handleAuthHttpRequests = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthRequests,
  multi: true,
};
