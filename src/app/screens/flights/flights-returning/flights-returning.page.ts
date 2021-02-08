import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

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
    private navController: NavController
  ) {
    this.returnResults = this.returnService.getAvailableReturns();
  }

  selectReturnFlight(returningFlight) {
    this.returnService.setReturnFlight(returningFlight);
    this.navController.navigateForward("/flights/flight-information");
  }
}
