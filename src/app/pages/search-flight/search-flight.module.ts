import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { SearchFlightPage } from "./search-flight.page";

const routes: Routes = [
  {
    path: "",
    component: SearchFlightPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SearchFlightPage],
})
export class SearchFlightPageModule {}
