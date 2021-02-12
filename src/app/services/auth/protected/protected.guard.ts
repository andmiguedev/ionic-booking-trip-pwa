import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";

import { AccountService } from "./../../storage/account/account.service";

@Injectable({
  providedIn: "root",
})
export class ProtectedGuard implements CanLoad {
  constructor(private accountService: AccountService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.accountService.validPassengerStatus) {
      this.router.navigate(["/walkthrough"]);
    }

    return this.accountService.validPassengerStatus;
  }
}
