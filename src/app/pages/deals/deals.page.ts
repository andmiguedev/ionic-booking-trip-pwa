import { Component } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.page.html",
  styleUrls: ["./deals.page.scss"],
})
export class DealsPage {
  constructor(
    private loadingController: LoadingController,
    private navController: NavController
  ) {}

  async loadBookingForm() {
    const loader = await this.loadingController.create({
      duration: 2000,
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navController.navigateForward("search-flights");
    });
  }
}
