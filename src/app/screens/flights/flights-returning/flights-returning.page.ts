import { Component } from "@angular/core";
import { LoadingController, NavController } from "@ionic/angular";

import { ReturnService } from "./../../../services/data/returns/return.service";

@Component({
  selector: "app-flights-returning",
  templateUrl: "./flights-returning.page.html",
  styleUrls: ["./flights-returning.page.scss"],
})
export class FlightsReturningPage {
  public returnResults: any;

  constructor(
    private returnService: ReturnService,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.returnResults = this.returnService.getRecentReturns();
  }

  async seeItineraryInfo() {
    const loader = await this.loadingController.create({
      message: "Loading Itinerary...",
      duration: 1000,
    });

    loader.present();
    this.navController.navigateForward("/flights/flight-information");
  }
}
