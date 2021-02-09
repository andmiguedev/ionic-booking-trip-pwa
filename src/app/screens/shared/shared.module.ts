import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";

import { IncentivesPage } from "./incentives/incentives.page";
import { PickLocationPage } from "./pick-location/pick-location.page";

import { IncentivesPageModule } from "./incentives/incentives.module";
import { PickLocationPageModule } from "./pick-location/pick-location.module";

@NgModule({
  declarations: [IncentivesPage, PickLocationPage],
  imports: [
    CommonModule,
    IncentivesPageModule,
    PickLocationPageModule,
    SharedRoutingModule,
  ],
  providers: [],
})
export class SharedModule {}
