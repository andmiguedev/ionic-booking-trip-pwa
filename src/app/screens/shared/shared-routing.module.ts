import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DealsPage } from "./deals/deals.page";
import { PickLocationPage } from "./pick-location/pick-location.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "deals",
        component: DealsPage,
      },
      {
        path: "pick-location",
        component: PickLocationPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SharedRoutingModule {}
