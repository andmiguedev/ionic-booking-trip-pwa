import { Component } from "@angular/core";

import { BookingService } from "./../../../services/data/bookings/booking.service";

@Component({
  selector: "app-my-bookings",
  templateUrl: "./my-bookings.page.html",
  styleUrls: ["./my-bookings.page.scss"],
})
export class MyBookingsPage {
  itineraryFlights: Array<any> = [];

  constructor(private bookingService: BookingService) {
    this.fetchItineraryFlights();
  }

  fetchItineraryFlights() {
    this.bookingService.getFlightBookings().then((data) => {
      this.itineraryFlights = data;
    });
  }
}
