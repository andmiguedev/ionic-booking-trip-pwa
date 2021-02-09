import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { UpdateInformationPage } from "./update-information/update-information.page";
import { UpdateInformationPageModule } from "./update-information/update-information.module";

@NgModule({
  declarations: [UpdateInformationPage],
  imports: [CommonModule, UpdateInformationPageModule, ProfileRoutingModule],
  providers: [],
})
export class ProfileModule {}
