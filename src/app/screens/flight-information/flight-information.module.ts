import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { FlightInformationPage } from "./flight-information.page";

const routes: Routes = [
  {
    path: "",
    component: FlightInformationPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FlightInformationPage],
})
export class FlightInformationPageModule {}
