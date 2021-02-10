import { Injectable } from "@angular/core";

import { DepartureService } from "./../departures/departure.service";
import { ReturnService } from "./../returns/return.service";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  numberOfBookings = 0;
  itineraryFlights: Array<any> = [];

  constructor(
    private departureService: DepartureService,
    private returnService: ReturnService
  ) {}

  departing = this.departureService.getDepartureFlight();
  returning = this.returnService.getReturnFlight();

  sendItineraryBooking(departing, returning, bookingId) {
    this.numberOfBookings = this.numberOfBookings + 1;
    this.itineraryFlights.push({
      id: this.numberOfBookings,
      bookingId: bookingId,
      departing: departing,
      returning: returning,
    });

    return Promise.resolve();
  }

  getFlightBookings() {
    return Promise.resolve(this.itineraryFlights);
  }
}
