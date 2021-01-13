import { Component } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";

import { ItinerariesService } from "./../../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-flights-departing",
  templateUrl: "./flights-departing.page.html",
  styleUrls: ["./flights-departing.page.scss"],
})
export class FlightsDepartingPage {
  public departureResults: any;

  constructor(
    private itinerariesService: ItinerariesService,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.departureResults = this.itinerariesService.getAllItineraries();
  }

  seeReturningFlights() {
    this.navController.navigateForward("/flights/flights-returning");
  }

  async seeFlightInfo() {
    const loader = await this.loadingController.create({
      duration: 1000,
    });

    loader.present();
    this.navController.navigateForward("/flights/flight-information");
  }
}
