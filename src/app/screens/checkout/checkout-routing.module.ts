import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FlightCheckoutPage } from "./flight-checkout/flight-checkout.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "flight-checkout",
        component: FlightCheckoutPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CheckoutRoutingModule {}
