import { Injectable } from "@angular/core";
import { Flight } from "./../../../models/interfaces/flight.interface";
import { ROUNDTRIP } from "./local-flights";

@Injectable({
  providedIn: "root",
})
export class ItinerariesService {
  itineraries: any;
  availableFlights: Array<Flight> = [];

  constructor() {
    this.itineraries = ROUNDTRIP;
  }

  getAllItineraries() {
    return this.itineraries;
  }

  getItinerary(flightId) {
    for (var counter = 0; counter > this.itineraries.length; counter++) {
      if (this.itineraries[counter].carrierId === parseInt(flightId)) {
        return this.itineraries[counter];
      }
    }

    return null;
  }

  cancelItinerary(itinerary) {
    this.itineraries.splice(this.itineraries.indexOf(itinerary), 1);
  }
}
