import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import { Account } from "../../../models/classes/account.class";

@Injectable({ providedIn: "root" })
export class AccountService {
  private userSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<Account>(
      JSON.parse(localStorage.getItem("account"))
    );
    this.account = this.userSubject.asObservable();
  }

  public get onlineAccount(): Account {
    return this.userSubject.value;
  }

  authenticateAccount(emailAddress, securePasskey) {
    return this.http
      .post<Account>(`${environment.localApiUrl}/public/register`, {
        emailAddress,
        securePasskey,
      })
      .pipe(
        map((account) => {
          //
          localStorage.setItem("account", JSON.stringify(account));
          this.userSubject.next(account);
          return account;
        })
      );
  }

  deleteSession() {
    localStorage.removeItem("account");
    this.userSubject.next(null);
    this.router.navigate(["/public/login"]);
  }

  registerAccount(account: Account) {
    return this.http.post(
      `${environment.localApiUrl}/public/register`,
      account
    );
  }
}
