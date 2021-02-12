import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyBookingsPageModule } from "./my-bookings/my-bookings.module";
import { BookingsRoutingModule } from "./bookings-routing.module";

@NgModule({
  imports: [CommonModule, MyBookingsPageModule, BookingsRoutingModule],
})
export class BookingsModule {}
