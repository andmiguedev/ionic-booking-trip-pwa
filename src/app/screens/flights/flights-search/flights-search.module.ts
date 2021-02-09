import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { FlightsSearchPage } from "./flights-search.page";

const routes: Routes = [
  {
    path: "",
    component: FlightsSearchPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FlightsSearchPage],
})
export class FlightsSearchPageModule {}
