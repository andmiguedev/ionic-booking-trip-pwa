import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Account } from '../../../models/interfaces/account.interface';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  private isPassengerAuthenticated = false;

  public get validPassengerStatus(): boolean {
    return this.isPassengerAuthenticated;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<Account>(
      JSON.parse(localStorage.getItem('account'))
    );
    this.account = this.userSubject.asObservable();
  }

  registerUser(account: Account) {
    return this.http.post(
      `${environment.localAddressUrl}/public/register/authorize`,
      account
    );
  }

  loginUser(email, password) {
    return this.http
      .post<Account>(
        `${environment.localAddressUrl}/public/login/authenticate`,
        {
          email,
          password,
        }
      )
      .pipe(
        map((account) => {
          // Store the logged in session
          localStorage.setItem('passenger', JSON.stringify(account));
          this.userSubject.next(account);
          this.isPassengerAuthenticated = true;
        })
      );
  }

  logoutUser() {
    localStorage.removeItem('passenger');
    this.userSubject.next(null);

    this.isPassengerAuthenticated = false;
    this.router.navigate(['/public/login']);
  }

  public get accessProfileInfo(): Account {
    return this.userSubject.value;
  }
}
