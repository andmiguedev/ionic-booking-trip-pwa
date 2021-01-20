import { Component } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";

import { DepartureService } from "./../../../services/data/departures/departure.service";

@Component({
  selector: "app-flights-departing",
  templateUrl: "./flights-departing.page.html",
  styleUrls: ["./flights-departing.page.scss"],
})
export class FlightsDepartingPage {
  public departureResults: any;

  constructor(
    private departureService: DepartureService,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.departureResults = this.departureService.getRecentDepartures();
  }

  // seeReturningFlights() {
  //   this.navController.navigateForward("/flights/flights-returning");
  // }

  async lookReturningFlight() {
    const loader = await this.loadingController.create({
      duration: 1000,
    });

    loader.present();
    this.navController.navigateForward("/flights/flights-returning");
  }
}
