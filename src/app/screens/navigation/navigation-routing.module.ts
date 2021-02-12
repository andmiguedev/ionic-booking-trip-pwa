import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsNavigationPage } from "./tabs-navigation/tabs-navigation-page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsNavigationPage,
    children: [
      {
        path: "flights",
        children: [
          {
            path: "",
            loadChildren: "../flights/flights.module#FlightsModule",
          },
          {
            path: "flights/flights-search",
            loadChildren:
              "../flights/flights-search/flights-search.module#FlightsSearchPageModule",
          },
        ],
      },
      {
        path: "shared",
        children: [
          {
            path: "",
            loadChildren: "../shared/shared.module#SharedModule",
          },
          {
            path: "shared/incentives",
            loadChildren:
              "../shared/incentives/incentives.module#IncentivesPageModule",
          },
        ],
      },
      {
        path: "cruises",
        children: [
          {
            path: "",
            loadChildren: "../cruises/cruises.module#CruisesModule",
          },
          {
            path: "cruises/cruise-search",
            loadChildren: "../cruises/cruises.module#CruisesModule",
          },
        ],
      },
    ],
  },
  {
    path: "",
    redirectTo: "navigation/tabs/flights/flights-search",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "navigation/tabs/shared/incentives",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "navigation/tabs/cruises/cruises-search",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsNavigationRoutingModule {}
