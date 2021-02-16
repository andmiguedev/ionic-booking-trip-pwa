import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlightCheckoutPageModule } from "./flight-checkout/flight-checkout.module";
import { CheckoutRoutingModule } from "./checkout-routing.module";

@NgModule({
  imports: [CommonModule, FlightCheckoutPageModule, CheckoutRoutingModule],
})
export class CheckoutModule {}
