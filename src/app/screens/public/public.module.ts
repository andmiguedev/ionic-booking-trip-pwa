import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterPageModule } from "./register/register.module";
import { LoginPageModule } from "./login/login.module";
import { PublicRoutingModule } from "./public-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RegisterPageModule,
    LoginPageModule,
    PublicRoutingModule,
  ],
})
export class PublicModule {}
