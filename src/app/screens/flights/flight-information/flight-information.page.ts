import { Component } from "@angular/core";

import { DepartureService } from "./../../../services/data/departures/departure.service";
import { ArrivalService } from "./../../../services/data/arrivals/arrival.service";
import { ItinerariesService } from "./../../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-flight-information",
  templateUrl: "./flight-information.page.html",
  styleUrls: ["./flight-information.page.scss"],
})
export class FlightInformationPage {
  public outgoingFlight: any;
  public returningFlight: any;
  constructor(
    private departureService: DepartureService,
    private arrivalService: ArrivalService,
    private itineraryService: ItinerariesService
  ) {
    this.outgoingFlight =
      this.departureService.getDeparture() ||
      this.itineraryService.getAllItineraries()[0];
    this.returningFlight =
      this.arrivalService.getArrival() ||
      this.itineraryService.getAllItineraries()[1];
  }
}
