import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { SidedrawerPage } from "./sidedrawer.page";

const routes: Routes = [
  {
    path: "",
    component: SidedrawerPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SidedrawerPage],
})
export class SidedrawerPageModule {}
