import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { UpdateInformationPage } from "./update-information.page";

const routes: Routes = [
  {
    path: "",
    component: UpdateInformationPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UpdateInformationPage],
})
export class UpdateInformationPageModule {}
