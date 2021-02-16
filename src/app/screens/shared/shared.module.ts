import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IncentivesPageModule } from "./incentives/incentives.module";
import { PickLocationPageModule } from "./pick-location/pick-location.module";
import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
  imports: [
    CommonModule,
    IncentivesPageModule,
    PickLocationPageModule,
    SharedRoutingModule,
  ],
})
export class SharedModule {}
