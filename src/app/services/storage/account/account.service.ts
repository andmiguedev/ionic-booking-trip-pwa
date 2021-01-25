import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
// import { map } from "rxjs/operators";

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

  public get accessProfileInfo(): Account {
    return this.userSubject.value;
  }

  registerUser(account: Account) {
    return this.http.post(
      "http://localhost:8100/public/register/authorize",
      account
    );
  }
}
