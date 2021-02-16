import { Injectable } from "@angular/core";
import { Account } from "./../../../models/interfaces/account.interface";
import { PROFILES } from "./sample-profiles";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  profiles: any;
  profileAccounts: Array<Account> = [];

  constructor() {
    this.profiles = PROFILES;
  }

  getProfileAccounts() {
    return this.profiles;
  }
}
