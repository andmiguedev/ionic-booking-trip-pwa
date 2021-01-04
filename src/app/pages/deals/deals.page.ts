import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.page.html",
  styleUrls: ["./deals.page.scss"],
})
export class DealsPage implements OnInit {
  constructor(private menuController: MenuController) {}

  IonViewWillEnter() {
    this.menuController.enable(false);
  }

  ngOnInit() {}
}
