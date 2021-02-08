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
    this.departingFlight = this.departureService.getDepartureFlight();
    // this.departureService.getAvailableDepartures()[0];
    this.returningFlight = this.returnService.getReturnFlight();
    // this.returnService.getAvailableReturns()[1];
  }

  openProfileInfo() {
    this.navController.navigateForward("/profile/update-info");
  }
}
