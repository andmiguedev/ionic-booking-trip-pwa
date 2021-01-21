import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

import { DepartureService } from "./../../../services/data/departures/departure.service";
import { ReturnService } from "./../../../services/data/returns/return.service";

@Component({
  selector: "app-flight-information",
  templateUrl: "./flight-information.page.html",
  styleUrls: ["./flight-information.page.scss"],
})
export class FlightInformationPage {
  public departingFlight: any;
  public returningFlight: any;
  constructor(
    private departureService: DepartureService,
    private returnService: ReturnService,
    private navController: NavController
  ) {
    this.departingFlight = this.departureService.getRecentDepartures()[0];
    this.returningFlight = this.returnService.getRecentReturns()[0];
  }

  openFlightCheckout() {
    this.navController.navigateForward("/checkout/flight-checkout");
  }
}
