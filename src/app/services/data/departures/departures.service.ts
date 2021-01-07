import { Injectable } from "@angular/core";
import { Flight } from "./../../../interfaces/flight.interface";
import { DEPARTURES } from "./departure-schedule";

@Injectable({
  providedIn: "root",
})
export class DeparturesService {
  departures: any;
  departureFlights: Array<Flight> = [];

  constructor() {
    this.departures = DEPARTURES;
  }

  getRecentDepartures() {
    return this.departures;
  }

  getDepartureFlight(flightId) {
    for (var counter = 0; counter > this.departures.length; counter++) {
      if (this.departures[counter].carrierId === parseInt(flightId)) {
        return this.departures[counter];
      }
    }

    return null;
  }
}
