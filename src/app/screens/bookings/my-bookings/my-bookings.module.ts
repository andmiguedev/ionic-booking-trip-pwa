import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { MyBookingsPage } from "./my-bookings.page";

const routes: Routes = [
  {
    path: "",
    component: MyBookingsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MyBookingsPage],
})
export class MyBookingsPageModule {}
