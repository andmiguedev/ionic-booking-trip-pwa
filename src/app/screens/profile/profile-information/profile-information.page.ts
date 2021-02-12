import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

import { Account } from "../../../models/interfaces/account.interface";
import { ProfileService } from "./../../../services/data/profiles/profile.service";
import { AccountService } from "./../../../services/storage/account/account.service";

@Component({
  selector: "app-profile-information",
  templateUrl: "./profile-information.page.html",
  styleUrls: ["./profile-information.page.scss"],
})
export class ProfileInformationPage {
  // public profile: any;
  account: Account;

  profile = {
    coverImg: "assets/images/covers/profile-banner.jpg",
    avatarImg: "assets/images/profiles/profile-1.jpg",
    shortBio: "A person that travels around the country for leisure",
  };

  constructor(
    private accountService: AccountService,
    private menuController: MenuController
  ) {
    this.account = this.accountService.accessProfileInfo;
  }

  ionViewWillEnter() {
    this.menuController.enable(true);
  }

  signOutAccount() {
    this.accountService.logoutUser();
  }
}
