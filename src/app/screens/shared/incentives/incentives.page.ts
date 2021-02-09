import { Component } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";

import { IncentiveService } from "./../../../services/data/incentive/incentive.service";

@Component({
  selector: "app-incentives",
  templateUrl: "./incentives.page.html",
  styleUrls: ["./incentives.page.scss"],
})
export class IncentivesPage {
  public passengerDeals: any;

  constructor(
    private incentiveService: IncentiveService,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.passengerDeals = this.incentiveService.getAllIncentives();
  }

  async goToFlightsSearch() {
    const loader = await this.loadingController.create({
      message: "Loading...",
      duration: 1000,
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navController.navigateForward("flights/flights-search");
    });
  }
}
