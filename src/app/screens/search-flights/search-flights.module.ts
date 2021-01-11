import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { SearchFlightsPage } from "./search-flights.page";

const routes: Routes = [
  {
    path: "",
    component: SearchFlightsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SearchFlightsPage],
})
export class SearchFlightsPageModule {}
