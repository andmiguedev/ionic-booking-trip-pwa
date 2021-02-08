import { Injectable } from "@angular/core";

import { DepartureService } from "./../departures/departure.service";
import { ReturnService } from "./../returns/return.service";

@Injectable({
  providedIn: "root",
})
export class ItineraryService {
  constructor(
    private departureService: DepartureService,
    private returnService: ReturnService
  ) {}

  public fetchItineraryDepartures() {
    this.departureService.getAvailableDepartures();
  }

  public fetchItineraryReturns() {
    this.returnService.getAvailableReturns();
  }
}
