import { Injectable } from "@angular/core";

import { DepartureService } from "./../departures/departure.service";
import { ReturnService } from "./../returns/return.service";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  numberOfBookings = 0;
  bookedFlights: Array<any> = [];

  constructor(
    private departureService: DepartureService,
    private returnService: ReturnService
  ) {}

  sendItineraryBooking(departing, returning, bookingId) {
    this.numberOfBookings = this.numberOfBookings + 1;
    this.bookedFlights.push({
      id: this.numberOfBookings,
      bookingId: bookingId,
      departing: this.departureService.setDepartureFlight(departing),
      returning: this.returnService.setReturnFlight(returning),
    });

    return Promise.resolve();
  }

  getFlightBookings() {
    return Promise.resolve(this.bookedFlights);
  }
}
