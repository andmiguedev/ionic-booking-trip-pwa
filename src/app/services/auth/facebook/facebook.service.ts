import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, from, EMPTY, of } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { Account } from '../../../models/interfaces/account.interface';

const baseUrl = `${environment.localAddressUrl}`;

@Injectable({
  providedIn: 'root',
})
export class FacebookService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.accountSubject = new BehaviorSubject<Account>(null);
    this.account = this.accountSubject.asObservable();
  }

  public get facebookAccount(): Account {
    return this.accountSubject.value;
  }

  authorizeFromFacebook() {
    // Authorize User to login with Facebook and
    // return an Observable with access token if
    // has been successful
    return from(
      new Promise<fb.StatusResponse>((resolve) => FB.login(resolve))
    ).pipe(
      concatMap(({ authResponse }) => {
        // Session is unable to find valid User
        if (!authResponse) {
          return EMPTY;
        }

        // Retrieve valid JWT Access token
        return of(authResponse.accessToken);
      })
    );
  }

  AuthenticateUser(accessToken: string) {
    // Use Access token to authenticate User with
    // JavaScript SDK API. If successful, it returns
    // the Account object assigned to Facebook User.
    return this.http
      .post<any>(`${baseUrl}/public/login/authenticate`, { accessToken })
      .pipe(
        map((account) => {
          this.accountSubject.next(account);
          return account;
        })
      );
  }

  login() {
    // API checks if the domain name URL is not secure
    // Facebook authorization service requires SSL
    this.authorizeFromFacebook()
      .pipe(concatMap((accessToken) => this.AuthenticateUser(accessToken)))
      .subscribe(() => {
        const returnUrl = this.route.snapshot.queryParams[
          '/public/login/returnUrl' || '/public/login'
        ];
        this.router.navigateByUrl(returnUrl);
      });
  }

  logout() {
    this.accountSubject.next(null);
    this.router.navigate(['/public/login']);
  }
}
