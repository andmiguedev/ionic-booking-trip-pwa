import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileInformationPage } from "./profile-information/profile-information.page";
import { ProfileInformationPageModule } from "./profile-information/profile-information.module";

import { UpdateInformationPage } from "./update-information/update-information.page";
import { UpdateInformationPageModule } from "./update-information/update-information.module";

import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  declarations: [ProfileInformationPage, UpdateInformationPage],
  imports: [
    CommonModule,
    ProfileInformationPageModule,
    UpdateInformationPageModule,
    ProfileRoutingModule,
  ],
  providers: [],
})
export class ProfileModule {}
