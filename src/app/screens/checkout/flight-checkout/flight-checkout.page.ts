import { Component } from "@angular/core";
import {
  LoadingController,
  ToastController,
  NavController,
} from "@ionic/angular";

import { ReturnService } from "./../../../services/data/returns/return.service";
import { DepartureService } from "./../../../services/data/departures/departure.service";
import { BookingService } from "./../../../services/data/bookings/booking.service";

@Component({
  selector: "app-flight-checkout",
  templateUrl: "./flight-checkout.page.html",
  styleUrls: ["./flight-checkout.page.scss"],
})
export class FlightCheckoutPage {
  public reservationId: number = Math.floor(Math.random() * Math.floor(9999));
  public departingFlight: any;
  public returningFlight: any;

  passengers: number = 1;

  constructor(
    private departureService: DepartureService,
    private returnService: ReturnService,
    private bookingService: BookingService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController
  ) {
    this.departingFlight = this.departureService.getDepartureFlight();
    // this.departureService.getAvailableDepartures()[0];

    this.returningFlight = this.returnService.getReturnFlight();
    // this.returnService.getAvailableReturns()[1];
  }

  addPassenger() {
    this.passengers++;
  }

  removePassenger() {
    this.passengers--;
  }

  async makeReservation() {
    const loader = await this.loadingController.create({
      duration: 2000,
    });

    loader.present();
    loader.onWillDismiss().then(async (booking) => {
      const toast = await this.toastController.create({
        // showCloseButton: false,
        message: "Booking was scheduled successfully",
        duration: 2000,
        position: "bottom",
      });

      toast.present();

      this.bookingService
        .sendItineraryBooking(
          this.departingFlight,
          this.returningFlight,
          this.reservationId
        )
        .then((response) => {
          setTimeout(() => {
            loader.dismiss();
            toast.present();
            this.navController.navigateForward("/bookings/my-bookings");
          });
        });
    });
  }
}
