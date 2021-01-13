import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FlightsSearchPage } from "../flights/flights-search/flights-search.page";
import { FlightsDepartingPage } from "../flights/flights-departing/flights-departing.page";
import { FlightsReturningPage } from "../flights/flights-returning/flights-returning.page";
import { FlightInformationPage } from "./flight-information/flight-information.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "flights-search",
        component: FlightsSearchPage,
      },
      {
        path: "flights-departing",
        component: FlightsDepartingPage,
      },
      {
        path: "flights-returning",
        component: FlightsReturningPage,
      },
      {
        path: "flight-information",
        component: FlightInformationPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FlightsRoutingModule {}
