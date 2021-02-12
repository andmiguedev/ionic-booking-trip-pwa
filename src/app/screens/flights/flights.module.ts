import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlightsSearchPageModule } from "./flights-search/flights-search.module";
import { FlightsDepartingPageModule } from "./flights-departing/flights-departing.module";
import { FlightsReturningPageModule } from "./flights-returning/flights-returning.module";
import { FlightInformationPageModule } from "./flight-information/flight-information.module";
import { FlightsRoutingModule } from "./flights-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FlightsSearchPageModule,
    FlightsDepartingPageModule,
    FlightsReturningPageModule,
    FlightInformationPageModule,
    FlightsRoutingModule,
  ],
})
export class FlightsModule {}
