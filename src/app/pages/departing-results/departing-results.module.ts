import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { TooltipsModule } from "ionic4-tooltips";

import { DepartingResultsPage } from "./departing-results.page";

const routes: Routes = [
  {
    path: "",
    component: DepartingResultsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TooltipsModule,
  ],
  declarations: [DepartingResultsPage],
})
export class DepartingResultsPageModule {}
