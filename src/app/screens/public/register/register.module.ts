import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { DisplayErrorComponent } from "./../../../components/display-error/display-error";
import { RegisterPage } from "./register.page";

const routes: Routes = [
  {
    path: "",
    component: RegisterPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DisplayErrorComponent, RegisterPage],
})
export class RegisterPageModule {}
