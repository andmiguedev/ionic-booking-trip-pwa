import { Injectable } from "@angular/core";
import { Flight } from "./../../../models/interfaces/flight.interface";
import { RETURNING } from "./returning-flights";

@Injectable({
  providedIn: "root",
})
export class ReturnService {
  returningFlights: any;
  availableReturns: Array<Flight> = [];
  returningFlight: any;

  constructor() {
    this.availableReturns = RETURNING;
  }

  getAvailableReturns() {
    return this.availableReturns;
  }

  setReturnFlight(returningFlight) {
    this.returningFlight = returningFlight;
  }

  getReturnFlight() {
    return this.returningFlight;
  }
}
