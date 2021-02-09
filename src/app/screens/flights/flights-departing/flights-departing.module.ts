import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { TooltipModule } from "ng2-tooltip-directive";

import { FlightsDepartingPage } from "./flights-departing.page";

const routes: Routes = [
  {
    path: "",
    component: FlightsDepartingPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TooltipModule,
  ],
  declarations: [FlightsDepartingPage],
})
export class FlightsDepartingPageModule {}
