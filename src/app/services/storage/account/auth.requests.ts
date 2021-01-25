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

const storageKey = "account";
const accountsList = JSON.parse(localStorage.getItem(storageKey));

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
        case url.endsWith("/public/login/authenticate") && method === "POST":
          return authenticateUser();
        default:
          return next.handle(request);
      }
    }

    function authorizeUser() {
      const account = body;

      if (accountsList.find((a) => a.email === account.email)) {
        return displayError(
          `Sorry! Your email address: ${account.email} already exist`
        );
      }

      // Set numeric Id for each newly created Account
      account.memberId = accountsList.length
        ? Math.max(...accountsList.map((a) => a.memberId)) + 1
        : 1;
      accountsList.push(account);
      // Store the new Account details in localStorage
      localStorage.setItem(storageKey, JSON.stringify(accountsList));
      return successful();
    }

    function authenticateUser() {
      const { email, password } = body;
      const passenger = accountsList.find(
        (p) => p.email === email && p.password === password
      );

      return successful({
        ...setProfileInfo(passenger),
      });
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

    function setProfileInfo(account) {
      const { memberId, fullName, email } = account;
      return { memberId, fullName, email };
    }
  }
}

export const handleAuthHttpRequests = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthRequests,
  multi: true,
};
