import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlightsRoutingModule } from "./flights-routing.module";

import { FlightsSearchPage } from "../flights/flights-search/flights-search.page";
import { FlightsDepartingPage } from "./flights-departing/flights-departing.page";
import { FlightsReturningPage } from "./flights-returning/flights-returning.page";
import { FlightInformationPage } from "./flight-information/flight-information.page";

import { FlightsSearchPageModule } from "./flights-search/flights-search.module";
import { FlightsDepartingPageModule } from "./flights-departing/flights-departing.module";
import { FlightsReturningPageModule } from "./flights-returning/flights-returning.module";
import { FlightInformationPageModule } from "./flight-information/flight-information.module";

@NgModule({
  declarations: [
    FlightsSearchPage,
    FlightsDepartingPage,
    FlightsReturningPage,
    FlightInformationPage,
  ],
  imports: [
    CommonModule,
    FlightsSearchPageModule,
    FlightsDepartingPageModule,
    FlightsReturningPageModule,
    FlightInformationPageModule,
    FlightsRoutingModule,
  ],
  providers: [],
})
export class FlightsModule {}
