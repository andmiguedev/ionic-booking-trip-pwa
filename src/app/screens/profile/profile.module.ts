import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileInformationPageModule } from "./profile-information/profile-information.module";
import { UpdateInformationPageModule } from "./update-information/update-information.module";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ProfileInformationPageModule,
    UpdateInformationPageModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule {}
