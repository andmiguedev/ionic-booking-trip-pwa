import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CruisesSearchPage } from "./cruises-search/cruises-search.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "cruises-search",
        component: CruisesSearchPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CruisesRoutingModule {}
