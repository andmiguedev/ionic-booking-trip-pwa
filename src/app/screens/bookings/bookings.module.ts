import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BookingsRoutingModule } from "./bookings-routing.module";
import { MyBookingsPage } from "./my-bookings/my-bookings.page";
import { MyBookingsPageModule } from "./my-bookings/my-bookings.module";

@NgModule({
  declarations: [MyBookingsPage],
  imports: [CommonModule, MyBookingsPageModule, BookingsRoutingModule],
  providers: [],
})
export class BookingsModule {}
