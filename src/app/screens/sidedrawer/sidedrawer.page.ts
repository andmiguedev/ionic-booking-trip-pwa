import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";

import { Account } from "../../models/interfaces/account.interface";

import { AccountService } from "../../services/storage/account/account.service";
import { ScreensService } from "../../services/data/screens/screens.service";

@Component({
  selector: "app-sidedrawer",
  templateUrl: "./sidedrawer.page.html",
  styleUrls: ["./sidedrawer.page.scss"],
})
export class SidedrawerPage {
  // Store registered account into
  passenger: Account;
  // Store Navbar menu pages
  public sideMenuPages: any;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private accountService: AccountService,
    private screensService: ScreensService
  ) {
    this.passenger = this.accountService.accessProfileInfo;
    this.sideMenuPages = this.screensService.getAllMobilePages();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    });
  }
}
