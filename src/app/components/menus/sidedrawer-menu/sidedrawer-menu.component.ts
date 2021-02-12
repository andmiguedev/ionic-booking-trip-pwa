import { Component } from "@angular/core";

import { ScreensService } from "../../../services/data/screens/screens.service";

@Component({
  selector: "sidedrawer-menu",
  templateUrl: "./sidedrawer-menu.component.html",
  styleUrls: ["./sidedrawer-menu.component.scss"],
})
export class SidedrawerMenuComponent {
  // Store Navbar menu pages
  public sideMenuPages: any;

  constructor(private screensService: ScreensService) {
    this.sideMenuPages = this.screensService.getAllMobilePages();
  }
}
