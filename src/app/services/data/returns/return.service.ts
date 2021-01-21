import { Injectable } from "@angular/core";
import { Flight } from "./../../../models/interfaces/flight.interface";
import { RETURNING } from "./returning-flights";

@Injectable({
  providedIn: "root",
})
export class ReturnService {
  returns: any;
  selectFlight: any;
  availableReturns: Array<Flight> = [];

  constructor() {
    this.returns = RETURNING;
  }

  getRecentReturns() {
    return this.returns;
  }

  setReturnFlight(selectFlight) {
    this.selectFlight = selectFlight;
  }

  getReturnFlight() {
    return this.selectFlight;
  }
}
