import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyBookingsPage } from "./my-bookings/my-bookings.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "my-bookings",
        component: MyBookingsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookingsRoutingModule {}
