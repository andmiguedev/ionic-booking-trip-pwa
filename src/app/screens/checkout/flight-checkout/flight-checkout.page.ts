import { ReturnService } from "./../../../services/data/returns/return.service";
import { DepartureService } from "./../../../services/data/departures/departure.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-flight-checkout",
  templateUrl: "./flight-checkout.page.html",
  styleUrls: ["./flight-checkout.page.scss"],
})
export class FlightCheckoutPage {
  public departingFlight: any;
  public returningFlight: any;
  passengers: number = 1;

  constructor(
    private departureService: DepartureService,
    private returnService: ReturnService
  ) {
    this.departingFlight = this.departureService.getRecentDepartures()[0];
    this.returningFlight = this.returnService.getRecentReturns()[0];
  }

  addPassenger() {
    this.passengers++;
  }

  removePassenger() {
    this.passengers--;
  }
}
