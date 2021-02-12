import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { TabsNavigationPage } from "./tabs-navigation-page";

const routes: Routes = [
  {
    path: "",
    component: TabsNavigationPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsNavigationPage],
})
export class FlightsSearchPageModule {}
