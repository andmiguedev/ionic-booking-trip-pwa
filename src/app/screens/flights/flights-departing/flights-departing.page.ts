import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

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
    private navController: NavController
  ) {
    this.departureResults = this.departureService.getAvailableDepartures();
  }

  selectDepartureFlight(departingFlight) {
    this.departureService.setDepartureFlight(departingFlight);
    this.navController.navigateForward("/flights/flights-returning");
  }
}
