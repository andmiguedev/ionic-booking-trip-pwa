import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { FlightCheckoutPage } from "./flight-checkout/flight-checkout.page";
import { FlightCheckoutPageModule } from "./flight-checkout/flight-checkout.module";

@NgModule({
  declarations: [FlightCheckoutPage],
  imports: [CommonModule, FlightCheckoutPageModule, CheckoutRoutingModule],
  providers: [],
})
export class CheckoutModule {}
