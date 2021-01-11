import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";

import { ScreensService } from "./services/data/screens/screens.service";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public sideMenuPages: any;

  constructor(
    private screensService: ScreensService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
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
