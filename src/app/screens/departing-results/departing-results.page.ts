import { Component } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";

import { ItinerariesService } from "./../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-departing-results",
  templateUrl: "./departing-results.page.html",
  styleUrls: ["./departing-results.page.scss"],
})
export class DepartingResultsPage {
  public departureResults: any;

  constructor(
    private itinerariesService: ItinerariesService,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.departureResults = this.itinerariesService.getAllItineraries();
  }

  seeReturningFlights() {
    this.navController.navigateForward("/returning-results");
  }

  async seeFlightInfo() {
    const loader = await this.loadingController.create({
      duration: 1000,
    });

    loader.present();
    this.navController.navigateForward("/flight-information");
  }
}
