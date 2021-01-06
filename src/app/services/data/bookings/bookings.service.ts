import { Injectable } from "@angular/core";

import { DepartureService } from "./../departure/departure.service";
import { ArrivalService } from "./../arrival/arrival.service";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  numberOfBookings = 0;
  bookingItinerary: Array<any> = [];

  constructor(
    private departure: DepartureService,
    private arrival: ArrivalService
  ) {}
  renderBookingitinerary(departure, arrival, bookingId) {
    this.numberOfBookings = this.numberOfBookings + 1;
    this.bookingItinerary.push({
      Id: this.numberOfBookings,
      bookingId: bookingId,
      departure: this.departure,
      arrival: this.arrival,
      totalBooking: departure.tickePrice + arrival.ticketPrice,
    });

    return Promise.resolve();
  }

  getAvailableBookings() {
    return Promise.resolve(this.bookingItinerary);
  }
}
