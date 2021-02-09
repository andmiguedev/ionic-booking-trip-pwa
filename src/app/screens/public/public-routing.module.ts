import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterPage } from "./register/register.page";
import { LoginPage } from "./login/login.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterPage,
      },
      {
        path: "login",
        component: LoginPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PublicRoutingModule {}
