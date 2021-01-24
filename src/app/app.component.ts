import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";

import { ScreensService } from "./services/data/screens/screens.service";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AccountService } from "./services/storage/account/account.service";
import { Account } from "./models/interfaces/account.interface";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  // Store registered account into
  account: Account;
  // Store Navbar menu pages
  public sideMenuPages: any;

  constructor(
    private accountService: AccountService,
    private screensService: ScreensService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.account = this.accountService.accessProfileInfo;
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
