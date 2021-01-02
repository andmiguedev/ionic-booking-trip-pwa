import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Pages } from "./interfaces/pages.interface";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public sideMenuPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenuPages = [
      {
        title: "Home",
        url: "/home",
        current: "root",
        icon: "home",
      },
      {
        title: "Messages",
        url: "/messages",
        current: "forward",
        icon: "mail",
      },
      {
        title: "Booking List",
        url: "/booking-list",
        current: "forward",
        icon: "book",
      },
      {
        title: "Favorites",
        url: "/favorite-list",
        current: "forward",
        icon: "heart",
      },
      {
        title: "Cruise",
        url: "/cruise-search",
        current: "forward",
        icon: "boat",
      },
      {
        title: "Local Weather",
        url: "/local-weather",
        current: "forward",
        icon: "partly-sunny",
      },
      {
        title: "Support",
        url: "/support",
        current: "forward",
        icon: "help-buoy",
      },
      {
        title: "About",
        url: "/about",
        current: "forward",
        icon: "information-circle-outline",
      },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    });
  }

  ngOnInit() {}
}
