import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"],
})
export class HeaderMenuComponent implements OnInit {
  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
    this.menuController.enable(true);
  }

  ngOnInit() {}
}
