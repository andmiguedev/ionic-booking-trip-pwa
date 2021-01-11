import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { ReturningResultsPage } from "./returning-results.page";

const routes: Routes = [
  {
    path: "",
    component: ReturningResultsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ReturningResultsPage],
})
export class ReturningResultsPageModule {}
