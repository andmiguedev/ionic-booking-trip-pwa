import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";
import { DealsPage } from "./deals.page";

const routes: Routes = [
  {
    path: "",
    component: DealsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HeaderMenuComponent, DealsPage],
})
export class DealsPageModule {}
