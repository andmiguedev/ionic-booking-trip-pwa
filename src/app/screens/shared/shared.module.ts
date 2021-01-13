import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";

import { DealsPage } from "./deals/deals.page";
import { PickLocationPage } from "./pick-location/pick-location.page";

import { DealsPageModule } from "./deals/deals.module";
import { PickLocationPageModule } from "./pick-location/pick-location.module";

@NgModule({
  declarations: [DealsPage, PickLocationPage],
  imports: [
    CommonModule,
    DealsPageModule,
    PickLocationPageModule,
    SharedRoutingModule,
  ],
  providers: [],
})
export class SharedModule {}
