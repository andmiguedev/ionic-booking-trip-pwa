import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";

import { RegisterPage } from "./register/register.page";
import { LoginPage } from "./login/login.page";

import { RegisterPageModule } from "./register/register.module";
import { LoginPageModule } from "./login/login.module";

@NgModule({
  imports: [
    CommonModule,
    RegisterPageModule,
    LoginPageModule,
    PublicRoutingModule,
  ],
  declarations: [RegisterPage, LoginPage],
  providers: [],
})
export class PublicModule {}
