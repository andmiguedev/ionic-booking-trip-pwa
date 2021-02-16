import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { HeaderMenuComponent } from "../../../components/menus/header-menu/header-menu.component";
import { IncentivesPage } from "./incentives.page";

const routes: Routes = [
  {
    path: "",
    component: IncentivesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HeaderMenuComponent, IncentivesPage],
})
export class IncentivesPageModule {}
