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

// Initialize User tries
// to register an account
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
        case url.endsWith("/public/login/authenticate") && method === "POST":
          return loginAccount();
        case url.endsWith("/public/register/authorize") && method === "POST":
          return registerAccount();
        default:
          return next.handle(request);
      }
    }

    function loginAccount() {
      const { emailAddress, secretPasskey } = body;
      const passenger = accountsList.find(
        (a) =>
          a.emailAddress === emailAddress && a.secretPasskey === secretPasskey
      );

      if (!passenger) {
        return displayError("Email or password is incorrect");
      }

      return successful({
        ...validAccount(passenger),
      });
    }

    function registerAccount() {
      const newAccount = body;

      if (
        accountsList.find((a) => a.emailAddress === newAccount.emailAddress)
      ) {
        return displayError(
          `This Email ${newAccount.emailAddress} already exists`
        );
      }

      newAccount.memberId = accountsList.length
        ? Math.max(...accountsList.map((a) => a.memberId)) + 1
        : 1;
      accountsList.push(newAccount);
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

    function validAccount(member) {
      const {
        memberId,
        fullName,
        emailAddress,
        secretPasskey,
        contactPhone,
      } = member;
      return { memberId, fullName, emailAddress, secretPasskey, contactPhone };
    }
  }
}

export const handleAuthHttpRequests = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthRequests,
  multi: true,
};
