import { Injectable } from "@angular/core";

import { Flight } from "./../../../models/interfaces/flight.interface";
import { DEPARTING } from "./departing-flights";

@Injectable({
  providedIn: "root",
})
export class DepartureService {
  departingFlights: any;
  availableDepartures: Array<Flight> = [];
  departingFlight: any;

  constructor() {
    this.availableDepartures = DEPARTING;
  }

  getAvailableDepartures() {
    return this.availableDepartures;
  }

  setDepartureFlight(departingFlight) {
    this.departingFlight = departingFlight;
  }

  getDepartureFlight() {
    return this.departingFlight;
  }
}
