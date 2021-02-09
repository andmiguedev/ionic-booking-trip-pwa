import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-update-information",
  templateUrl: "./update-information.page.html",
  styleUrls: ["./update-information.page.scss"],
})
export class UpdateInformationPage {
  public otherPassengers: any;
  public passengers: any;
  public checkoutPaymentMethod: any;

  constructor(private navController: NavController) {}

  checkoutOtherPassengers(person) {
    const passenger = Number(person);
    this.passengers = Array(passenger)
      .fill(0)
      .map((index) => index);
  }

  openCheckoutPage() {
    this.navController.navigateForward("/checkout/flight-checkout");
  }
}
