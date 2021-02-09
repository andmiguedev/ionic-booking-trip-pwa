import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Account } from "../../../models/interfaces/account.interface";

@Injectable({ providedIn: "root" })
export class AccountService {
  private userSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<Account>(
      JSON.parse(localStorage.getItem("account"))
    );
    this.account = this.userSubject.asObservable();
  }

  registerUser(account: Account) {
    return this.http.post(
      "http://localhost:8100/public/register/authorize",
      account
    );
  }

  loginUser(email, password) {
    return this.http
      .post<Account>("http://localhost:8100/public/login/authenticate", {
        email,
        password,
      })
      .pipe(
        map((account) => {
          // Store the logged in session
          localStorage.setItem("passenger", JSON.stringify(account));
          this.userSubject.next(account);
        })
      );
  }

  public get accessProfileInfo(): Account {
    return this.userSubject.value;
  }
}
